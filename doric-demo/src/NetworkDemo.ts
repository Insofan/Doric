import { Group, Panel, List, text, gravity, Color, Stack, LayoutSpec, list, NativeCall, listItem, log, vlayout, Gravity, hlayout, Text, scroller, layoutConfig, image, IView, IVLayout, ScaleType, modal, IText, network } from "doric";
import { title, label, colors } from "./utils";

@Entry
class NetworkDemo extends Panel {
    build(rootView: Group): void {
        scroller(vlayout([
            title("Network Demo"),
            label('Click me').apply({
                width: 200,
                height: 50,
                backgroundColor: colors[0],
                textSize: 30,
                textColor: Color.WHITE,
                layoutConfig: layoutConfig().just(),
                onClick: () => {
                    network(context).get('https://m.baidu.com').then(
                        e => {
                            modal(context).alert(JSON.stringify(e))
                        }
                    ).catch(e => {
                        modal(context).toast('Catched:' + JSON.stringify(e))
                    })
                }
            } as IText),
        ]).apply({
            layoutConfig: layoutConfig().most().configHeight(LayoutSpec.FIT),
            gravity: gravity().center(),
            space: 10,
        } as IVLayout)).apply({
            layoutConfig: layoutConfig().most(),
        }).in(rootView)
    }
}