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
import { Superview, View, IView, NativeViewModel } from '../ui/view'
import { layoutConfig } from '../util/layoutconfig'

export function scroller(content: View, config?: IScroller) {
    return (new Scroller).also(v => {
        v.layoutConfig = layoutConfig().fit()
        if (config) {
            for (let key in config) {
                Reflect.set(v, key, Reflect.get(config, key, config), v)
            }
        }
        v.content = content
    })
}

export interface IScroller extends IView {
    content?: View
}

export class Scroller extends Superview implements IScroller {
    content!: View

    allSubviews() {
        return [this.content]
    }

    toModel(): NativeViewModel {
        this.dirtyProps.content = this.content.viewId
        return super.toModel()
    }
}