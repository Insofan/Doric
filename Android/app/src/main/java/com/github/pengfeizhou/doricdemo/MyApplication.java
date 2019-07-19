package com.github.pengfeizhou.doricdemo;

import android.app.Application;

import com.github.pengfeizhou.doric.Doric;

/**
 * @Description: Doric
 * @Author: pengfei.zhou
 * @CreateDate: 2019-07-18
 */
public class MyApplication extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
        Doric.init(this);
    }
}