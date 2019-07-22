package com.github.penfeizhou.doric;

import android.content.Context;
import android.view.ViewGroup;
import android.widget.FrameLayout;

import com.github.penfeizhou.doric.async.AsyncResult;
import com.github.penfeizhou.doric.extension.render.DoricShader;
import com.github.penfeizhou.doric.plugin.DoricJavaPlugin;
import com.github.penfeizhou.doric.utils.DoricMetaInfo;
import com.github.penfeizhou.doric.widget.GroupNode;
import com.github.penfeizhou.doric.widget.RootNode;
import com.github.penfeizhou.doric.widget.StackNode;
import com.github.pengfeizhou.jscore.JSDecoder;

import java.util.HashMap;
import java.util.Map;

/**
 * @Description: Doric
 * @Author: pengfei.zhou
 * @CreateDate: 2019-07-18
 */
public class DoricContext {
    private final String mContextId;
    private final Map<String, DoricJavaPlugin> mPluginMap = new HashMap<>();
    private final Context mContext;
    private DoricShader doricShader = new DoricShader(getDriver().getRegistry());
    private RootNode mRootNode = new RootNode(this);

    DoricContext(Context context, String contextId) {
        this.mContext = context;
        this.mContextId = contextId;
    }

    public static DoricContext create(Context context, String script, String alias) {
        return DoricContextManager.getInstance().createContext(context, script, alias);
    }

    public AsyncResult<JSDecoder> callEntity(String methodName, Object... args) {
        return getDriver().invokeContextEntityMethod(mContextId, methodName, args);
    }

    public IDoricDriver getDriver() {
        return DoricDriver.getInstance();
    }

    public RootNode getRootNode() {
        return mRootNode;
    }

    public Context getContext() {
        return mContext;
    }

    public String getContextId() {
        return mContextId;
    }

    public void teardown() {
        DoricContextManager.getInstance().destroyContext(this).setCallback(new AsyncResult.Callback<Boolean>() {
            @Override
            public void onResult(Boolean result) {

            }

            @Override
            public void onError(Throwable t) {

            }

            @Override
            public void onFinish() {
                mPluginMap.clear();
            }
        });
    }

    public DoricJavaPlugin obtainPlugin(DoricMetaInfo<DoricJavaPlugin> doricMetaInfo) {
        DoricJavaPlugin plugin = mPluginMap.get(doricMetaInfo.getName());
        if (plugin == null) {
            plugin = doricMetaInfo.createInstance(this);
            mPluginMap.put(doricMetaInfo.getName(), plugin);
        }
        return plugin;
    }
}