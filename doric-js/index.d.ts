// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   reflect-metadata

declare module 'doric' {
    export * from 'doric/lib/src/runtime/global';
    export * from 'doric/lib/src/ui/index.ui';
    export * from "doric/lib/src/widget/index.widget";
    export * from 'doric/lib/src/native/index.native';
    export * from "doric/lib/src/util/index.util";
    export * from "doric/lib/src/pattern/index.pattern";
}

declare module 'doric/lib/src/runtime/global' {
    export * from 'reflect-metadata';
    export type BridgeContext = {
            /**
                * The identify of current context
                */
            id: string;
            /**
                * In this case,It's current panel
                */
            entity: any;
            /**
                * call native plugin
                * @param namespace
                * @param method
                * @param args
                */
            callNative(namespace: string, method: string, args?: any): Promise<any>;
            /**
                * Transform function to functionId as string
                * @param func
                */
            function2Id(func: Function): string;
            /**
                * Remove transformed functions
                * @param funcId
                */
            removeFuncById(funcId: string): void;
    };
    global {
            const context: BridgeContext;
            const Environment: {
                    platform: "Android" | "iOS" | "Qt" | "web";
                    platformVersion: string;
                    appName: string;
                    appVersion: string;
                    libVersion: string;
                    screenWidth: number;
                    screenHeight: number;
                    statusBarHeight: number;
                    [index: string]: number | string | boolean | object | undefined;
            };
            function Entry(constructor: {
                    new (...args: any[]): {};
            }): any;
    }
    export {};
}

declare module 'doric/lib/src/ui/index.ui' {
    export * from 'doric/lib/src/ui/view';
    export * from 'doric/lib/src/ui/panel';
    export * from 'doric/lib/src/ui/animation';
}

declare module 'doric/lib/src/widget/index.widget' {
    export * from 'doric/lib/src/widget/layouts';
    export * from 'doric/lib/src/widget/text';
    export * from 'doric/lib/src/widget/image';
    export * from 'doric/lib/src/widget/list';
    export * from 'doric/lib/src/widget/slider';
    export * from 'doric/lib/src/widget/scroller';
    export * from 'doric/lib/src/widget/refreshable';
    export * from 'doric/lib/src/widget/flowlayout';
    export * from 'doric/lib/src/widget/input';
    export * from 'doric/lib/src/widget/nestedSlider';
    export * from 'doric/lib/src/widget/draggable';
}

declare module 'doric/lib/src/native/index.native' {
    export * from 'doric/lib/src/native/modal';
    export * from 'doric/lib/src/native/navbar';
    export * from 'doric/lib/src/native/navigator';
    export * from 'doric/lib/src/native/network';
    export * from 'doric/lib/src/native/storage';
    export * from 'doric/lib/src/native/popover';
    export * from 'doric/lib/src/native/animate';
    export * from 'doric/lib/src/native/notification';
    export * from 'doric/lib/src/native/statusbar';
}

declare module 'doric/lib/src/util/index.util' {
    export * from 'doric/lib/src/util/color';
    export * from 'doric/lib/src/util/gravity';
    export * from 'doric/lib/src/util/layoutconfig';
    export * from 'doric/lib/src/util/log';
    export * from 'doric/lib/src/util/types';
    export * from 'doric/lib/src/util/uniqueId';
}

declare module 'doric/lib/src/pattern/index.pattern' {
    export * from 'doric/lib/src/pattern/candies';
    export * from 'doric/lib/src/pattern/provider';
    export * from 'doric/lib/src/pattern/mvvm';
}

declare module 'doric/lib/src/ui/view' {
    import { Color, GradientColor } from "doric/lib/src/util/color";
    import { Modeling, Model } from "doric/lib/src/util/types";
    import { BridgeContext } from "doric/lib/src/runtime/global";
    import { LayoutConfig } from 'doric/lib/src/util/layoutconfig';
    import { IAnimation } from "doric/lib/src/ui/animation";
    export function Property(target: Object, propKey: string): void;
    export interface IView {
            width?: number;
            height?: number;
            backgroundColor?: Color | GradientColor;
            corners?: number | {
                    leftTop?: number;
                    rightTop?: number;
                    leftBottom?: number;
                    rightBottom?: number;
            };
            border?: {
                    width: number;
                    color: Color;
            };
            shadow?: {
                    color: Color;
                    opacity: number;
                    radius: number;
                    offsetX: number;
                    offsetY: number;
            };
            /**
                * float [0,..1]
                */
            alpha?: number;
            hidden?: boolean;
            padding?: {
                    left?: number;
                    right?: number;
                    top?: number;
                    bottom?: number;
            };
            layoutConfig?: LayoutConfig;
            onClick?: Function;
            identifier?: string;
            /**++++++++++transform++++++++++*/
            translationX?: number;
            translationY?: number;
            scaleX?: number;
            scaleY?: number;
            /**
                * float [0,..1]
                */
            pivotX?: number;
            /**
                * float [0,..1]
                */
            pivotY?: number;
            /**
                * rotation*PI
                */
            rotation?: number;
    }
    export type NativeViewModel = {
            id: string;
            type: string;
            props: {
                    [index: string]: Model;
            };
    };
    export abstract class View implements Modeling, IView {
            width: number;
            height: number;
            x: number;
            y: number;
            backgroundColor?: Color | GradientColor;
            corners?: number | {
                    leftTop?: number;
                    rightTop?: number;
                    leftBottom?: number;
                    rightBottom?: number;
            };
            border?: {
                    width: number;
                    color: Color;
            };
            shadow?: {
                    color: Color;
                    opacity: number;
                    radius: number;
                    offsetX: number;
                    offsetY: number;
            };
            alpha?: number;
            hidden?: boolean;
            viewId: string;
            padding?: {
                    left?: number;
                    right?: number;
                    top?: number;
                    bottom?: number;
            };
            layoutConfig?: LayoutConfig;
            onClick?: Function;
            superview?: Superview;
            callbacks: Map<String, Function>;
            constructor();
            /** Anchor start*/
            get left(): number;
            set left(v: number);
            get right(): number;
            set right(v: number);
            get top(): number;
            set top(v: number);
            get bottom(): number;
            set bottom(v: number);
            get centerX(): number;
            get centerY(): number;
            set centerX(v: number);
            set centerY(v: number);
            get dirtyProps(): {
                    [index: string]: Model;
            };
            nativeViewModel: NativeViewModel;
            onPropertyChanged(propKey: string, oldV: Model, newV: Model): void;
            clean(): void;
            isDirty(): boolean;
            responseCallback(id: string, ...args: any): any;
            toModel(): NativeViewModel;
            let(block: (it: this) => void): void;
            also(block: (it: this) => void): this;
            apply(config: IView): this;
            in(group: Group): this;
            nativeChannel(context: BridgeContext, name: string): (args?: any) => Promise<any>;
            getWidth(context: BridgeContext): Promise<number>;
            getHeight(context: BridgeContext): Promise<number>;
            getLocationOnScreen(context: BridgeContext): Promise<{
                    x: number;
                    y: number;
            }>;
            /**++++++++++transform++++++++++*/
            translationX?: number;
            translationY?: number;
            scaleX?: number;
            scaleY?: number;
            pivotX?: number;
            pivotY?: number;
            rotation?: number;
            /**----------transform----------*/
            doAnimation(context: BridgeContext, animation: IAnimation): Promise<void>;
    }
    export abstract class Superview extends View {
            subviewById(id: string): View | undefined;
            abstract allSubviews(): Iterable<View>;
            isDirty(): boolean;
            clean(): void;
            toModel(): NativeViewModel;
    }
    export abstract class Group extends Superview {
            readonly children: View[];
            allSubviews(): View[];
            addChild(view: View): void;
    }
}

declare module 'doric/lib/src/ui/panel' {
    import { View, Group } from "doric/lib/src/ui/view";
    import { Root } from 'doric/lib/src/widget/layouts';
    import { BridgeContext } from 'doric/lib/src/runtime/global';
    export function NativeCall(target: Panel, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor;
    export abstract class Panel {
        context: BridgeContext;
        onCreate(): void;
        onDestroy(): void;
        onShow(): void;
        onHidden(): void;
        abstract build(rootView: Group): void;
        addHeadView(type: string, v: View): void;
        allHeadViews(): IterableIterator<Map<string, View>>;
        removeHeadView(type: string, v: View | string): void;
        clearHeadViews(type: string): void;
        getRootView(): Root;
        getInitData(): object | undefined;
    }
}

declare module 'doric/lib/src/ui/animation' {
    import { Modeling, Model } from "doric/lib/src/util/types";
    export type AnimatedKey = "translationX" | "translationY" | "scaleX" | "scaleY" | "rotation" | "pivotX" | "pivotY";
    export enum RepeatMode {
            RESTART = 1,
            REVERSE = 2
    }
    export interface IAnimation extends Modeling {
            duration: number;
            delay?: number;
    }
    export interface Changeable {
            fromValue: number;
            toValue: number;
            key: AnimatedKey;
            repeatCount?: number;
            repeatMode?: RepeatMode;
    }
    export enum FillMode {
            /**
                * The receiver is removed from the presentation when the animation is completed.
                */
            Removed = 0,
            /**
                * The receiver remains visible in its final state when the animation is completed.
                */
            Forward = 1,
            /**
                * The receiver clamps values before zero to zero when the animation is completed.
                */
            Backward = 2,
            /**
                * The receiver clamps values at both ends of the object’s time space
                */
            Both = 3
    }
    export enum TimingFunction {
            /**
                * The system default timing function. Use this function to ensure that the timing of your animations matches that of most system animations.
                */
            Default = 0,
            /**
                * Linear pacing, which causes an animation to occur evenly over its duration.
                */
            Linear = 1,
            /**
                * Ease-in pacing, which causes an animation to begin slowly and then speed up as it progresses.
                */
            EaseIn = 2,
            /**
                * Ease-out pacing, which causes an animation to begin quickly and then slow as it progresses.
                */
            EaseOut = 3,
            /**
                * Ease-in-ease-out pacing, which causes an animation to begin slowly, accelerate through the middle of its duration, and then slow again before completing.
                */
            EaseInEaseOut = 4
    }
    abstract class Animation implements IAnimation {
            changeables: Map<AnimatedKey, Changeable>;
            duration: number;
            repeatCount?: number;
            repeatMode?: RepeatMode;
            delay?: number;
            fillMode: FillMode;
            timingFunction?: TimingFunction;
            toModel(): {
                    type: string;
                    delay: number | undefined;
                    duration: number;
                    changeables: {
                            key: AnimatedKey;
                            fromValue: number;
                            toValue: number;
                    }[];
                    repeatCount: number | undefined;
                    repeatMode: RepeatMode | undefined;
                    fillMode: FillMode;
                    timingFunction: TimingFunction | undefined;
            };
    }
    export class ScaleAnimation extends Animation {
            constructor();
            set fromScaleX(v: number);
            get fromScaleX(): number;
            set toScaleX(v: number);
            get toScaleX(): number;
            set fromScaleY(v: number);
            get fromScaleY(): number;
            set toScaleY(v: number);
            get toScaleY(): number;
    }
    export class TranslationAnimation extends Animation {
            constructor();
            set fromTranslationX(v: number);
            get fromTranslationX(): number;
            set toTranslationX(v: number);
            get toTranslationX(): number;
            set fromTranslationY(v: number);
            get fromTranslationY(): number;
            set toTranslationY(v: number);
            get toTranslationY(): number;
    }
    export class RotationAnimation extends Animation {
            constructor();
            set fromRotation(v: number);
            get fromRotation(): number;
            set toRotation(v: number);
            get toRotation(): number;
    }
    export class AnimationSet implements IAnimation {
            _duration: number;
            delay?: number;
            addAnimation(anim: IAnimation): void;
            get duration(): number;
            set duration(v: number);
            toModel(): {
                    animations: Model;
                    delay: number | undefined;
            };
    }
    export {};
}

declare module 'doric/lib/src/widget/layouts' {
    import { Group, IView, View } from "doric/lib/src/ui/view";
    import { Gravity } from "doric/lib/src/util/gravity";
    export interface IStack extends IView {
    }
    export class Stack extends Group implements IStack {
    }
    export class Root extends Stack {
    }
    class LinearLayout extends Group {
        space?: number;
        gravity?: Gravity;
    }
    export interface IVLayout extends IView {
        space?: number;
        gravity?: Gravity;
    }
    export class VLayout extends LinearLayout implements VLayout {
    }
    export interface IHLayout extends IView {
        space?: number;
        gravity?: Gravity;
    }
    export class HLayout extends LinearLayout implements IHLayout {
    }
    export function stack(views: View[], config?: IStack): Stack;
    export function hlayout(views: View[], config?: IHLayout): HLayout;
    export function vlayout(views: View[], config?: IVLayout): VLayout;
    export {};
}

declare module 'doric/lib/src/widget/text' {
    import { IView, View } from "doric/lib/src/ui/view";
    import { Color } from "doric/lib/src/util/color";
    import { Gravity } from "doric/lib/src/util/gravity";
    export interface IText extends IView {
        text?: string;
        textColor?: Color;
        textSize?: number;
        maxLines?: number;
        textAlignment?: Gravity;
        fontStyle?: "normal" | "bold" | "italic" | "bold_italic";
    }
    export class Text extends View implements IText {
        text?: string;
        textColor?: Color;
        textSize?: number;
        maxLines?: number;
        textAlignment?: Gravity;
        fontStyle?: "normal" | "bold" | "italic" | "bold_italic";
    }
    export function text(config: IText): Text;
}

declare module 'doric/lib/src/widget/image' {
    import { IView, View } from "doric/lib/src/ui/view";
    export enum ScaleType {
        ScaleToFill = 0,
        ScaleAspectFit = 1,
        ScaleAspectFill = 2
    }
    export interface IImage extends IView {
        imageUrl?: string;
        imageBase64?: string;
        scaleType?: ScaleType;
        isBlur?: boolean;
        loadCallback?: (image: {
            width: number;
            height: number;
        } | undefined) => void;
    }
    export class Image extends View implements IImage {
        imageUrl?: string;
        imageBase64?: string;
        scaleType?: ScaleType;
        isBlur?: boolean;
        loadCallback?: (image: {
            width: number;
            height: number;
        } | undefined) => void;
    }
    export function image(config: IImage): Image;
}

declare module 'doric/lib/src/widget/list' {
    import { View, Superview, IView, NativeViewModel } from "doric/lib/src/ui/view";
    import { Stack, IStack } from "doric/lib/src/widget/layouts";
    export interface IListItem extends IStack {
        identifier?: string;
    }
    export class ListItem extends Stack implements IListItem {
        /**
          * Set to reuse native view
          */
        identifier?: string;
    }
    export interface IList extends IView {
        renderItem: (index: number) => ListItem;
        itemCount: number;
        batchCount?: number;
        onLoadMore?: () => void;
        loadMore?: boolean;
        loadMoreView?: ListItem;
    }
    export class List extends Superview implements IList {
        allSubviews(): IterableIterator<ListItem> | ListItem[];
        itemCount: number;
        renderItem: (index: number) => ListItem;
        batchCount: number;
        onLoadMore?: () => void;
        loadMore?: boolean;
        loadMoreView?: ListItem;
        reset(): void;
        isDirty(): boolean;
        toModel(): NativeViewModel;
    }
    export function list(config: IList): List;
    export function listItem(item: View | View[], config?: IListItem): ListItem;
}

declare module 'doric/lib/src/widget/slider' {
    import { Superview, View, IView } from "doric/lib/src/ui/view";
    import { Stack, IStack } from "doric/lib/src/widget/layouts";
    import { BridgeContext } from "doric/lib/src/runtime/global";
    export interface ISlideItem extends IStack {
        identifier?: string;
    }
    export class SlideItem extends Stack implements ISlideItem {
        /**
          * Set to reuse native view
          */
        identifier?: string;
    }
    export interface ISlider extends IView {
        renderPage: (index: number) => SlideItem;
        itemCount: number;
        batchCount?: number;
        onPageSlided?: (index: number) => void;
    }
    export class Slider extends Superview implements ISlider {
        allSubviews(): IterableIterator<SlideItem>;
        itemCount: number;
        renderPage: (index: number) => SlideItem;
        batchCount: number;
        onPageSlided?: (index: number) => void;
        isDirty(): boolean;
        slidePage(context: BridgeContext, page: number, smooth?: boolean): Promise<any>;
        getSlidedPage(context: BridgeContext): Promise<number>;
    }
    export function slider(config: ISlider): Slider;
    export function slideItem(item: View | View[], config?: ISlideItem): SlideItem;
}

declare module 'doric/lib/src/widget/scroller' {
    import { Superview, View, IView, NativeViewModel } from 'doric/lib/src/ui/view';
    export function scroller(content: View, config?: IScroller): Scroller;
    export interface IScroller extends IView {
        content?: View;
    }
    export class Scroller extends Superview implements IScroller {
        content: View;
        allSubviews(): View[];
        toModel(): NativeViewModel;
    }
}

declare module 'doric/lib/src/widget/refreshable' {
    import { View, Superview, IView, NativeViewModel } from "doric/lib/src/ui/view";
    import { List } from "doric/lib/src/widget/list";
    import { Scroller } from "doric/lib/src/widget/scroller";
    import { BridgeContext } from "doric/lib/src/runtime/global";
    export interface IRefreshable extends IView {
        content: View;
        header?: View;
        onRefresh?: () => void;
    }
    export class Refreshable extends Superview implements IRefreshable {
        content: List | Scroller;
        header?: View;
        onRefresh?: () => void;
        allSubviews(): View[];
        setRefreshable(context: BridgeContext, refreshable: boolean): Promise<any>;
        setRefreshing(context: BridgeContext, refreshing: boolean): Promise<any>;
        isRefreshable(context: BridgeContext): Promise<boolean>;
        isRefreshing(context: BridgeContext): Promise<boolean>;
        toModel(): NativeViewModel;
    }
    export function refreshable(config: IRefreshable): Refreshable;
    export interface IPullable {
        startAnimation(): void;
        stopAnimation(): void;
        setPullingDistance(distance: number): void;
    }
    export function pullable(v: View, config: IPullable): View;
}

declare module 'doric/lib/src/widget/flowlayout' {
    import { Stack, IStack } from 'doric/lib/src/widget/layouts';
    import { IView, Superview, View, NativeViewModel } from 'doric/lib/src/ui/view';
    export interface IFlowLayoutItem extends IStack {
        identifier?: string;
    }
    export class FlowLayoutItem extends Stack implements IFlowLayoutItem {
        /**
         * Set to reuse native view
         */
        identifier?: string;
    }
    export interface IFlowLayout extends IView {
        renderItem: (index: number) => FlowLayoutItem;
        itemCount: number;
        batchCount?: number;
        columnCount?: number;
        columnSpace?: number;
        rowSpace?: number;
        loadMore?: boolean;
        onLoadMore?: () => void;
        loadMoreView?: FlowLayoutItem;
    }
    export class FlowLayout extends Superview implements IFlowLayout {
        allSubviews(): IterableIterator<FlowLayoutItem> | FlowLayoutItem[];
        columnCount: number;
        columnSpace?: number;
        rowSpace?: number;
        itemCount: number;
        renderItem: (index: number) => FlowLayoutItem;
        batchCount: number;
        onLoadMore?: () => void;
        loadMore?: boolean;
        loadMoreView?: FlowLayoutItem;
        reset(): void;
        isDirty(): boolean;
        toModel(): NativeViewModel;
    }
    export function flowlayout(config: IFlowLayout): FlowLayout;
    export function flowItem(item: View | View[], config?: IFlowLayoutItem): FlowLayoutItem;
}

declare module 'doric/lib/src/widget/input' {
    import { View, IView } from "doric/lib/src/ui/view";
    import { Color } from "doric/lib/src/util/color";
    import { Gravity } from "doric/lib/src/util/gravity";
    import { BridgeContext } from "doric/lib/src/runtime/global";
    export interface IInput extends IView {
        text?: string;
        textColor?: Color;
        textSize?: number;
        hintText?: string;
        hintTextColor?: Color;
        multilines?: boolean;
        textAlignment?: Gravity;
        onTextChange?: (text: string) => void;
        onFocusChange?: (focused: boolean) => void;
    }
    export class Input extends View implements IInput {
        text?: string;
        textColor?: Color;
        textSize?: number;
        hintText?: string;
        hintTextColor?: Color;
        multiline?: boolean;
        textAlignment?: Gravity;
        onTextChange?: (text: string) => void;
        onFocusChange?: (focused: boolean) => void;
        getText(context: BridgeContext): Promise<string>;
        setSelection(context: BridgeContext, start: number, end?: number): Promise<string>;
        requestFocus(context: BridgeContext): Promise<any>;
        releaseFocus(context: BridgeContext): Promise<any>;
    }
    export function input(config: IInput): Input;
}

declare module 'doric/lib/src/widget/nestedSlider' {
    import { Group, View } from 'doric/lib/src/ui/view';
    import { BridgeContext } from 'doric/lib/src/runtime/global';
    export class NestedSlider extends Group {
        onPageSlided?: (index: number) => void;
        addSlideItem(view: View): void;
        slidePage(context: BridgeContext, page: number, smooth?: boolean): Promise<any>;
        getSlidedPage(context: BridgeContext): Promise<number>;
    }
}

declare module 'doric/lib/src/widget/draggable' {
    import { View } from "doric/lib/src/ui/view";
    import { IStack, Stack } from "doric/lib/src/widget/layouts";
    export interface IDraggable extends IStack {
        onDrag?: (x: number, y: number) => void;
    }
    export class Draggable extends Stack implements IDraggable {
        onDrag?: (x: number, y: number) => void;
    }
    export function draggable(views: View | View[], config?: IDraggable): Draggable;
}

declare module 'doric/lib/src/native/modal' {
    import { BridgeContext } from "doric/lib/src/runtime/global";
    import { Gravity } from "doric/lib/src/util/gravity";
    export function modal(context: BridgeContext): {
        toast: (msg: string, gravity?: Gravity) => void;
        alert: (arg: string | {
            title: string;
            msg: string;
            okLabel?: string | undefined;
        }) => Promise<any>;
        confirm: (arg: string | {
            title: string;
            msg: string;
            okLabel?: string | undefined;
            cancelLabel?: string | undefined;
        }) => Promise<any>;
        prompt: (arg: {
            title?: string | undefined;
            msg?: string | undefined;
            okLabel?: string | undefined;
            cancelLabel?: string | undefined;
            text?: string | undefined;
            defaultText?: string | undefined;
        }) => Promise<string>;
    };
}

declare module 'doric/lib/src/native/navbar' {
    import { BridgeContext } from "doric/lib/src/runtime/global";
    import { Color } from "doric/lib/src/util/color";
    import { View } from "doric/lib/src/ui/view";
    export function navbar(context: BridgeContext): {
        isHidden: () => Promise<boolean>;
        setHidden: (hidden: boolean) => Promise<any>;
        setTitle: (title: string) => Promise<any>;
        setBgColor: (color: Color) => Promise<any>;
        setLeft: (view: View) => Promise<any>;
        setRight: (view: View) => Promise<any>;
    };
}

declare module 'doric/lib/src/native/navigator' {
    import { BridgeContext } from "doric/lib/src/runtime/global";
    export function navigator(context: BridgeContext): {
        push: (scheme: string, config?: {
            alias?: string | undefined;
            animated?: boolean | undefined;
            extra?: object | undefined;
        } | undefined) => Promise<any>;
        pop: (animated?: boolean) => Promise<any>;
    };
}

declare module 'doric/lib/src/native/network' {
    import { BridgeContext } from "doric/lib/src/runtime/global";
    export interface IRequest {
        url?: string;
        method?: "get" | "post" | "put" | "delete";
        headers?: {
            [index: string]: string;
        };
        params?: {
            [index: string]: string;
        };
        data?: object | string;
        timeout?: number;
    }
    export interface IResponse {
        data: any;
        status: number;
        headers?: {
            [index: string]: string;
        };
    }
    export function network(context: BridgeContext): {
        request: (config: IRequest) => Promise<IResponse>;
        get: (url: string, config?: IRequest | undefined) => Promise<IResponse>;
        post: (url: string, data?: string | object | undefined, config?: IRequest | undefined) => Promise<IResponse>;
        put: (url: string, data?: string | object | undefined, config?: IRequest | undefined) => Promise<IResponse>;
        delete: (url: string, data?: string | object | undefined, config?: IRequest | undefined) => Promise<IResponse>;
    };
}

declare module 'doric/lib/src/native/storage' {
    import { BridgeContext } from "doric/lib/src/runtime/global";
    export function storage(context: BridgeContext): {
        setItem: (key: string, value: string, zone?: string | undefined) => Promise<any>;
        getItem: (key: string, zone?: string | undefined) => Promise<string>;
        remove: (key: string, zone?: string | undefined) => Promise<any>;
        clear: (zone: string) => Promise<any>;
    };
}

declare module 'doric/lib/src/native/popover' {
    import { BridgeContext } from "doric/lib/src/runtime/global";
    import { View } from "doric/lib/src/ui/view";
    export function popover(context: BridgeContext): {
        show: (view: View) => Promise<any>;
        dismiss: (view?: View | undefined) => Promise<any>;
    };
}

declare module 'doric/lib/src/native/animate' {
    import { BridgeContext } from "doric/lib/src/runtime/global";
    /**
      * Only supports x,y,width,height,corner(just for four corners),rotation,bgColor,
      * @param panel @see Panel
      */
    export function animate(context: BridgeContext): (args: {
        animations: () => void;
        duration: number;
    }) => Promise<unknown>;
}

declare module 'doric/lib/src/native/notification' {
    import { BridgeContext } from "doric/lib/src/runtime/global";
    export function notification(context: BridgeContext): {
        publish: (args: {
            biz?: string | undefined;
            name: string;
            data?: object | undefined;
            androidSystem?: boolean | undefined;
        }) => Promise<any>;
        subscribe: (args: {
            biz?: string | undefined;
            name: string;
            callback: (data?: any) => void;
            androidSystem?: boolean | undefined;
        }) => Promise<string>;
        unsubscribe: (subscribeId: string) => Promise<any>;
    };
}

declare module 'doric/lib/src/native/statusbar' {
    import { BridgeContext } from "doric/lib/src/runtime/global";
    import { Color } from "doric/lib/src/util/color";
    export enum StatusBarMode {
        LIGHT = 0,
        DARK = 1
    }
    export function statusbar(context: BridgeContext): {
        setHidden: (hidden: boolean) => Promise<any>;
        setMode: (mode: StatusBarMode) => Promise<any>;
        setColor: (color: Color) => Promise<any>;
    };
}

declare module 'doric/lib/src/util/color' {
    import { Modeling } from "doric/lib/src/util/types";
    /**
      *  Store color as format AARRGGBB or RRGGBB
      */
    export class Color implements Modeling {
        static BLACK: Color;
        static DKGRAY: Color;
        static GRAY: Color;
        static LTGRAY: Color;
        static WHITE: Color;
        static RED: Color;
        static GREEN: Color;
        static BLUE: Color;
        static YELLOW: Color;
        static CYAN: Color;
        static MAGENTA: Color;
        static TRANSPARENT: Color;
        _value: number;
        constructor(v: number);
        static parse(str: string): Color;
        static safeParse(str: string, defVal?: Color): Color;
        alpha(v: number): Color;
        toModel(): number;
    }
    export enum GradientOrientation {
        /** draw the gradient from the top to the bottom */
        TOP_BOTTOM = 0,
        /** draw the gradient from the top-right to the bottom-left */
        TR_BL = 1,
        /** draw the gradient from the right to the left */
        RIGHT_LEFT = 2,
        /** draw the gradient from the bottom-right to the top-left */
        BR_TL = 3,
        /** draw the gradient from the bottom to the top */
        BOTTOM_TOP = 4,
        /** draw the gradient from the bottom-left to the top-right */
        BL_TR = 5,
        /** draw the gradient from the left to the right */
        LEFT_RIGHT = 6,
        /** draw the gradient from the top-left to the bottom-right */
        TL_BR = 7
    }
    export interface GradientColor {
        start: Color;
        end: Color;
        orientation: GradientOrientation;
    }
}

declare module 'doric/lib/src/util/gravity' {
    import { Modeling } from "doric/lib/src/util/types";
    export const LEFT: number;
    export const RIGHT: number;
    export const TOP: number;
    export const BOTTOM: number;
    export const CENTER_X: number;
    export const CENTER_Y: number;
    export const CENTER: number;
    export class Gravity implements Modeling {
        val: number;
        left(): Gravity;
        right(): Gravity;
        top(): Gravity;
        bottom(): Gravity;
        center(): Gravity;
        centerX(): Gravity;
        centerY(): Gravity;
        toModel(): number;
        static Center: Gravity;
        static CenterX: Gravity;
        static CenterY: Gravity;
        static Left: Gravity;
        static Right: Gravity;
        static Top: Gravity;
        static Bottom: Gravity;
    }
    export function gravity(): Gravity;
}

declare module 'doric/lib/src/util/layoutconfig' {
    import { Gravity } from "doric/lib/src/util/gravity";
    import { Modeling } from "doric/lib/src/util/types";
    export enum LayoutSpec {
            /**
                * Depends on what's been set on width or height.
             */
            JUST = 0,
            /**
                * Depends on it's content.
                */
            FIT = 1,
            /**
                * Extend as much as parent let it take.
                */
            MOST = 2
    }
    export interface LayoutConfig {
            widthSpec?: LayoutSpec;
            heightSpec?: LayoutSpec;
            margin?: {
                    left?: number;
                    right?: number;
                    top?: number;
                    bottom?: number;
            };
            alignment?: Gravity;
            weight?: number;
    }
    export class LayoutConfigImpl implements LayoutConfig, Modeling {
            widthSpec?: LayoutSpec;
            heightSpec?: LayoutSpec;
            margin?: {
                    left?: number;
                    right?: number;
                    top?: number;
                    bottom?: number;
            };
            alignment?: Gravity;
            weight?: number;
            fit(): this;
            most(): this;
            just(): this;
            configWidth(w: LayoutSpec): this;
            configHeight(h: LayoutSpec): this;
            configMargin(m: {
                    left?: number;
                    right?: number;
                    top?: number;
                    bottom?: number;
            }): this;
            configAlignment(a: Gravity): this;
            configWeight(w: number): this;
            toModel(): {
                    widthSpec: LayoutSpec | undefined;
                    heightSpec: LayoutSpec | undefined;
                    margin: {
                            left?: number | undefined;
                            right?: number | undefined;
                            top?: number | undefined;
                            bottom?: number | undefined;
                    } | undefined;
                    alignment: number | undefined;
                    weight: number | undefined;
            };
    }
    export function layoutConfig(): LayoutConfigImpl;
}

declare module 'doric/lib/src/util/log' {
    export function log(...args: any): void;
    export function loge(...message: any): void;
    export function logw(...message: any): void;
}

declare module 'doric/lib/src/util/types' {
    export interface Modeling {
        toModel(): Model;
    }
    export function obj2Model(obj: Model): Model;
    type _M = string | number | boolean | Modeling | {
        [index: string]: Model;
    } | undefined;
    export type Model = _M | Array<_M>;
    export type Binder<T> = (v: T) => void;
    export class Mutable<T> {
        get: () => T;
        set: (v: T) => void;
        bind(binder: Binder<T>): void;
        static of<E>(v: E): Mutable<E>;
    }
    export {};
}

declare module 'doric/lib/src/util/uniqueId' {
    export function uniqueId(prefix: string): string;
}

declare module 'doric/lib/src/pattern/candies' {
    export function take<T>(target: T): (block: (p: T) => void) => void;
    export function takeNonNull<T, R>(target?: T): (block: (p: T) => R) => R | undefined;
    export function takeNull<T, R>(target?: T): (block: () => R) => R | undefined;
    export function takeLet<T, R>(target: T): (block: (p: T) => R | undefined) => R | undefined;
    export function takeAlso<T>(target: T): (block: (p: T) => void) => T;
    export function takeIf<T>(target: T): (predicate: (t: T) => boolean) => T | undefined;
    export function takeUnless<T>(target: T): (predicate: (t: T) => boolean) => T | undefined;
    export function repeat(action: (count: number) => void): (times: number) => void;
}

declare module 'doric/lib/src/pattern/provider' {
    export type Observer<T> = (v: T) => void;
    export type Updater<T> = (v: T) => T;
    export interface IObservable<T> {
        addObserver(observer: Observer<T | undefined>): void;
        removeObserver(observer: Observer<T | undefined>): void;
        update(updater: Updater<T | undefined>): void;
    }
    export class Observable<M> implements IObservable<M> {
        constructor(provider: IProvider, clz: {
            new (...args: any[]): M;
        });
        addObserver(observer: Observer<M | undefined>): void;
        removeObserver(observer: Observer<M | undefined>): void;
        update(updater: Updater<M | undefined>): void;
    }
    export interface IProvider {
        provide(obj: Object): void;
        acquire<T>(clz: {
            new (...args: any[]): T;
        }): T | undefined;
        remove<T>(clz: {
            new (...args: any[]): T;
        }): void;
        clear(): void;
        observe<T>(clz: {
            new (...args: any[]): T;
        }): Observable<T>;
    }
    export class Provider implements IProvider {
        provide(obj: Object): void;
        acquire<T>(clz: {
            new (...args: any[]): T;
        }): T | undefined;
        remove<T>(clz: new (...args: any[]) => T): void;
        clear(): void;
        observe<T>(clz: new (...args: any[]) => T): Observable<T>;
    }
}

declare module 'doric/lib/src/pattern/mvvm' {
    import { Group } from "doric/lib/src/ui/view";
    import { Panel } from "doric/lib/src/ui/panel";
    export abstract class ViewHolder {
        abstract build(root: Group): void;
    }
    export type Setter<M> = (state: M) => void;
    export abstract class ViewModel<M extends Object, V extends ViewHolder> {
        constructor(obj: M, v: V);
        getState(): M;
        updateState(setter: Setter<M>): void;
        attach(view: Group): void;
        abstract onAttached(state: M, vh: V): void;
        abstract onBind(state: M, vh: V): void;
    }
    export type ViewModelClass<M, V extends ViewHolder> = new (m: M, v: V) => ViewModel<M, V>;
    export type ViewHolderClass<V> = new () => V;
    export abstract class VMPanel<M extends Object, V extends ViewHolder> extends Panel {
        abstract getViewModelClass(): ViewModelClass<M, V>;
        abstract getState(): M;
        abstract getViewHolderClass(): ViewHolderClass<V>;
        getViewModel(): ViewModel<M, V> | undefined;
        build(root: Group): void;
    }
}

