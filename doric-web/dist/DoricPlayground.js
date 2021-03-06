'use strict';

var doric = require('doric');

const colors = [
    "#70a1ff",
    "#7bed9f",
    "#ff6b81",
    "#a4b0be",
    "#f0932b",
    "#eb4d4b",
    "#6ab04c",
    "#e056fd",
    "#686de0",
    "#30336b",
].map(e => doric.Color.parse(e));

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const files = [
    {
        name: "五子棋",
        url: "./dist/Gobang.js",
        alias: "Gobang.js",
        icon: "data:image/png;base64,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",
    },
    {
        name: "贪吃蛇",
        url: "./dist/Snake.js",
        alias: "Snake.js",
        icon: "data:image/png;base64,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",
    },
    {
        name: "列表",
        url: "./dist/ListDemo.js",
        alias: "ListDemo.js",
        icon: "",
    },
    {
        name: "Counter",
        url: "../doric-demo/bundle/src/Counter.js",
        alias: "Counter.js",
        icon: "",
    },
    {
        name: "EffectsDemo",
        url: "../doric-demo/bundle/src/EffectsDemo.js",
        alias: "EffectsDemo.js",
        icon: "",
    },
    {
        name: "ImageDemo",
        url: "../doric-demo/bundle/src/ImageDemo.js",
        alias: "ImageDemo.js",
        icon: "",
    },
    {
        name: "LayoutDemo",
        url: "../doric-demo/bundle/src/LayoutDemo.js",
        alias: "LayoutDemo.js",
        icon: "",
    },
];
let DoricPlayground = class DoricPlayground extends doric.Panel {
    onShow() {
        doric.navbar(context).setTitle("Doric Playground");
    }
    build(rootView) {
        doric.scroller(doric.vlayout([
            doric.hlayout([
                doric.text({
                    text: "Demo列表",
                    textSize: 20,
                }).apply({
                    layoutConfig: doric.layoutConfig().fit().configAlignment(doric.gravity().centerY()).configMargin({
                        left: 15,
                    })
                })
            ]).apply({
                layoutConfig: doric.layoutConfig().just().configWidth(doric.LayoutSpec.MOST).configMargin({
                    top: 0,
                }),
                height: 50,
                backgroundColor: colors[3].alpha(0.2),
            }),
            ...files.map(e => doric.vlayout([
                doric.hlayout([
                    doric.image({
                        imageBase64: e.icon,
                        layoutConfig: doric.layoutConfig().just(),
                        width: 50,
                        height: 50,
                        scaleType: doric.ScaleType.ScaleAspectFit,
                    }),
                    doric.text({
                        text: e.name,
                        textSize: 30,
                        textColor: doric.Color.BLACK,
                    }).apply({
                        layoutConfig: doric.layoutConfig().fit().configAlignment(doric.gravity().centerY()).configMargin({
                            left: 15,
                        })
                    }),
                ]).apply({
                    layoutConfig: doric.layoutConfig().just().configWidth(doric.LayoutSpec.MOST).configMargin({
                        top: 10,
                        bottom: 10
                    }),
                    height: 50,
                }),
                (new doric.Stack).apply({
                    layoutConfig: doric.layoutConfig().just().configWidth(doric.LayoutSpec.MOST),
                    height: 1,
                    backgroundColor: colors[3].alpha(0.2),
                }),
            ]).apply({
                layoutConfig: doric.layoutConfig().fit().configWidth(doric.LayoutSpec.MOST),
                onClick: () => {
                    doric.navigator(context).push(e.url, {
                        alias: e.alias,
                    });
                },
            })),
            doric.hlayout([
                doric.text({
                    text: "待上线",
                    textSize: 20,
                }).apply({
                    layoutConfig: doric.layoutConfig().fit().configAlignment(doric.gravity().centerY()).configMargin({
                        left: 15,
                    })
                })
            ]).apply({
                layoutConfig: doric.layoutConfig().just().configWidth(doric.LayoutSpec.MOST).configMargin({
                    top: 0,
                }),
                height: 50,
                backgroundColor: colors[3].alpha(0.2),
            }),
        ])
            .apply({
                layoutConfig: doric.layoutConfig().fit().configWidth(doric.LayoutSpec.MOST)
            }))
            .apply({
                layoutConfig: doric.layoutConfig().most()
            })
            .in(rootView);
    }
};
DoricPlayground = __decorate([
    Entry
], DoricPlayground);
//# sourceMappingURL=DoricPlayground.js.map
