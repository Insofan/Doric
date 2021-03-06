/*
 * Copyright [2019] [Doric.Pub]
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package pub.doric.shader.list;

import android.util.SparseArray;
import android.view.View;

import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.github.pengfeizhou.jscore.JSObject;
import com.github.pengfeizhou.jscore.JSValue;

import pub.doric.DoricContext;
import pub.doric.extension.bridge.DoricPlugin;
import pub.doric.shader.SuperNode;
import pub.doric.shader.ViewNode;

/**
 * @Description: com.github.penfeizhou.doric.widget
 * @Author: pengfei.zhou
 * @CreateDate: 2019-11-12
 */
@DoricPlugin(name = "List")
public class ListNode extends SuperNode<RecyclerView> {
    private final ListAdapter listAdapter;
    private String renderItemFuncId;
    String onLoadMoreFuncId;
    int itemCount = 0;
    int batchCount = 15;
    SparseArray<String> itemValues = new SparseArray<>();
    boolean loadMore = false;
    String loadMoreViewId;

    public ListNode(DoricContext doricContext) {
        super(doricContext);
        this.listAdapter = new ListAdapter(this);
    }

    @Override
    protected void blendSubNode(JSObject subProperties) {
        String viewId = subProperties.getProperty("id").asString().value();
        ViewNode node = getSubNodeById(viewId);
        if (node != null) {
            node.blend(subProperties.getProperty("props").asObject());
        } else {
            JSObject oldModel = getSubModel(viewId);
            if (oldModel != null) {
                recursiveMixin(subProperties, oldModel);
            }
            listAdapter.blendSubNode(subProperties);
        }
    }

    @Override
    protected RecyclerView build() {
        RecyclerView recyclerView = new RecyclerView(getContext());
        recyclerView.setLayoutManager(new LinearLayoutManager(getContext()));
        recyclerView.setAdapter(this.listAdapter);
        return recyclerView;
    }

    @Override
    public void blend(JSObject jsObject) {
        super.blend(jsObject);
        if (mView != null) {
            mView.post(new Runnable() {
                @Override
                public void run() {
                    listAdapter.notifyDataSetChanged();
                }
            });
        }
    }

    @Override
    protected void blend(RecyclerView view, String name, JSValue prop) {
        switch (name) {
            case "itemCount":
                this.itemCount = prop.asNumber().toInt();
                break;
            case "renderItem":
                String funcId = prop.asString().value();
                if (!funcId.equals(this.renderItemFuncId)) {
                    this.renderItemFuncId = funcId;
                    // If reset renderItem,should reset native cache.
                    for (int index = 0; index < this.itemValues.size(); index++) {
                        removeSubModel(this.itemValues.valueAt(index));
                    }
                    this.itemValues.clear();
                }
                break;
            case "onLoadMore":
                this.onLoadMoreFuncId = prop.asString().value();
                break;
            case "loadMoreView":
                this.loadMoreViewId = prop.asString().value();
                break;
            case "batchCount":
                this.batchCount = prop.asNumber().toInt();
                break;
            case "loadMore":
                this.loadMore = prop.asBoolean().value();
                break;
            default:
                super.blend(view, name, prop);
                break;
        }
    }

    @Override
    protected void blendSubLayoutConfig(ViewNode viewNode, JSObject jsObject) {
        super.blendSubLayoutConfig(viewNode, jsObject);
    }

    @Override
    public ViewNode getSubNodeById(String id) {
        RecyclerView.LayoutManager manager = mView.getLayoutManager();
        if (manager == null) {
            return null;
        }
        for (int i = 0; i < manager.getChildCount(); i++) {
            View view = manager.getChildAt(i);
            if (view == null) {
                continue;
            }
            ListAdapter.DoricViewHolder viewHolder = (ListAdapter.DoricViewHolder) mView.getChildViewHolder(view);
            if (id.equals(viewHolder.listItemNode.getId())) {
                return viewHolder.listItemNode;
            }
        }
        return null;
    }
}
