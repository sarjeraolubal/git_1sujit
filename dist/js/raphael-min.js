// ┌────────────────────────────────────────────────────────────────────┐ \\਍⼀⼀ Ȁ‥刀愀瀀栀愀氀 ㈀⸀㄀⸀㐀 ⴀ 䨀愀瘀愀匀挀爀椀瀀琀 嘀攀挀琀漀爀 䰀椀戀爀愀爀礀                          Ȁ‥尀尀ഀഀ
// ├────────────────────────────────────────────────────────────────────┤ \\਍⼀⼀ Ȁ‥䌀漀瀀礀爀椀最栀琀 ꤀ ㈀　　㠀ⴀ㈀　㄀㈀ 䐀洀椀琀爀礀 䈀愀爀愀渀漀瘀猀欀椀礀 ⠀栀琀琀瀀㨀⼀⼀爀愀瀀栀愀攀氀樀猀⸀挀漀洀⤀    Ȁ‥尀尀ഀഀ
// │ Copyright © 2008-2012 Sencha Labs (http://sencha.com)              │ \\਍⼀⼀ ᰀ%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%␥‥尀尀ഀഀ
// │ Licensed under the MIT (http://raphaeljs.com/license.html) license.│ \\਍⼀⼀ ᐀%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%ᠥ‥尀尀ഀഀ
// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.਍⼀⼀ ഀഀ
// Licensed under the Apache License, Version 2.0 (the "License");਍⼀⼀ 礀漀甀 洀愀礀 渀漀琀 甀猀攀 琀栀椀猀 昀椀氀攀 攀砀挀攀瀀琀 椀渀 挀漀洀瀀氀椀愀渀挀攀 眀椀琀栀 琀栀攀 䰀椀挀攀渀猀攀⸀ഀഀ
// You may obtain a copy of the License at਍⼀⼀ ഀഀ
// http://www.apache.org/licenses/LICENSE-2.0਍⼀⼀ ഀഀ
// Unless required by applicable law or agreed to in writing, software਍⼀⼀ 搀椀猀琀爀椀戀甀琀攀搀 甀渀搀攀爀 琀栀攀 䰀椀挀攀渀猀攀 椀猀 搀椀猀琀爀椀戀甀琀攀搀 漀渀 愀渀 ∀䄀匀 䤀匀∀ 䈀䄀匀䤀匀Ⰰഀഀ
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.਍⼀⼀ 匀攀攀 琀栀攀 䰀椀挀攀渀猀攀 昀漀爀 琀栀攀 猀瀀攀挀椀昀椀挀 氀愀渀最甀愀最攀 最漀瘀攀爀渀椀渀最 瀀攀爀洀椀猀猀椀漀渀猀 愀渀搀ഀഀ
// limitations under the License.਍⼀⼀ ఀ%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%ဥ‥尀尀ഀഀ
// │ Eve 0.4.2 - JavaScript Events Library                      │ \\਍⼀⼀ ᰀ%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%␥‥尀尀ഀഀ
// │ Author Dmitry Baranovskiy (http://dmitry.baranovskiy.com/) │ \\਍⼀⼀ ᐀%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%ᠥ‥尀尀ഀഀ
਍⠀昀甀渀挀琀椀漀渀 ⠀最氀漀戀⤀ 笀ഀഀ
    var version = "0.4.2",਍        栀愀猀 㴀 ∀栀愀猀伀眀渀倀爀漀瀀攀爀琀礀∀Ⰰഀഀ
        separator = /[\.\/]/,਍        眀椀氀搀挀愀爀搀 㴀 ∀⨀∀Ⰰഀഀ
        fun = function () {},਍        渀甀洀猀漀爀琀 㴀 昀甀渀挀琀椀漀渀 ⠀愀Ⰰ 戀⤀ 笀ഀഀ
            return a - b;਍        紀Ⰰഀഀ
        current_event,਍        猀琀漀瀀Ⰰഀഀ
        events = {n: {}},਍    ⼀⨀尀ഀഀ
     * eve਍     嬀 洀攀琀栀漀搀 崀ഀഀ
਍     ⨀ 䘀椀爀攀猀 攀瘀攀渀琀 眀椀琀栀 最椀瘀攀渀 怀渀愀洀攀怀Ⰰ 最椀瘀攀渀 猀挀漀瀀攀 愀渀搀 漀琀栀攀爀 瀀愀爀愀洀攀琀攀爀猀⸀ഀഀ
਍     㸀 䄀爀最甀洀攀渀琀猀ഀഀ
਍     ⴀ 渀愀洀攀 ⠀猀琀爀椀渀最⤀ 渀愀洀攀 漀昀 琀栀攀 ⨀攀瘀攀渀琀⨀Ⰰ 搀漀琀 ⠀怀⸀怀⤀ 漀爀 猀氀愀猀栀 ⠀怀⼀怀⤀ 猀攀瀀愀爀愀琀攀搀ഀഀ
     - scope (object) context for the event handlers਍     ⴀ 瘀愀爀愀爀最猀 ⠀⸀⸀⸀⤀ 琀栀攀 爀攀猀琀 漀昀 愀爀最甀洀攀渀琀猀 眀椀氀氀 戀攀 猀攀渀琀 琀漀 攀瘀攀渀琀 栀愀渀搀氀攀爀猀ഀഀ
਍     㴀 ⠀漀戀樀攀挀琀⤀ 愀爀爀愀礀 漀昀 爀攀琀甀爀渀攀搀 瘀愀氀甀攀猀 昀爀漀洀 琀栀攀 氀椀猀琀攀渀攀爀猀ഀഀ
    \*/਍        攀瘀攀 㴀 昀甀渀挀琀椀漀渀 ⠀渀愀洀攀Ⰰ 猀挀漀瀀攀⤀ 笀ഀഀ
			name = String(name);਍            瘀愀爀 攀 㴀 攀瘀攀渀琀猀Ⰰഀഀ
                oldstop = stop,਍                愀爀最猀 㴀 䄀爀爀愀礀⸀瀀爀漀琀漀琀礀瀀攀⸀猀氀椀挀攀⸀挀愀氀氀⠀愀爀最甀洀攀渀琀猀Ⰰ ㈀⤀Ⰰഀഀ
                listeners = eve.listeners(name),਍                稀 㴀 　Ⰰഀഀ
                f = false,਍                氀Ⰰഀഀ
                indexed = [],਍                焀甀攀甀攀 㴀 笀紀Ⰰഀഀ
                out = [],਍                挀攀 㴀 挀甀爀爀攀渀琀开攀瘀攀渀琀Ⰰഀഀ
                errors = [];਍            挀甀爀爀攀渀琀开攀瘀攀渀琀 㴀 渀愀洀攀㬀ഀഀ
            stop = 0;਍            昀漀爀 ⠀瘀愀爀 椀 㴀 　Ⰰ 椀椀 㴀 氀椀猀琀攀渀攀爀猀⸀氀攀渀最琀栀㬀 椀 㰀 椀椀㬀 椀⬀⬀⤀ 椀昀 ⠀∀稀䤀渀搀攀砀∀ 椀渀 氀椀猀琀攀渀攀爀猀嬀椀崀⤀ 笀ഀഀ
                indexed.push(listeners[i].zIndex);਍                椀昀 ⠀氀椀猀琀攀渀攀爀猀嬀椀崀⸀稀䤀渀搀攀砀 㰀 　⤀ 笀ഀഀ
                    queue[listeners[i].zIndex] = listeners[i];਍                紀ഀഀ
            }਍            椀渀搀攀砀攀搀⸀猀漀爀琀⠀渀甀洀猀漀爀琀⤀㬀ഀഀ
            while (indexed[z] < 0) {਍                氀 㴀 焀甀攀甀攀嬀椀渀搀攀砀攀搀嬀稀⬀⬀崀崀㬀ഀഀ
                out.push(l.apply(scope, args));਍                椀昀 ⠀猀琀漀瀀⤀ 笀ഀഀ
                    stop = oldstop;਍                    爀攀琀甀爀渀 漀甀琀㬀ഀഀ
                }਍            紀ഀഀ
            for (i = 0; i < ii; i++) {਍                氀 㴀 氀椀猀琀攀渀攀爀猀嬀椀崀㬀ഀഀ
                if ("zIndex" in l) {਍                    椀昀 ⠀氀⸀稀䤀渀搀攀砀 㴀㴀 椀渀搀攀砀攀搀嬀稀崀⤀ 笀ഀഀ
                        out.push(l.apply(scope, args));਍                        椀昀 ⠀猀琀漀瀀⤀ 笀ഀഀ
                            break;਍                        紀ഀഀ
                        do {਍                            稀⬀⬀㬀ഀഀ
                            l = queue[indexed[z]];਍                            氀 ☀☀ 漀甀琀⸀瀀甀猀栀⠀氀⸀愀瀀瀀氀礀⠀猀挀漀瀀攀Ⰰ 愀爀最猀⤀⤀㬀ഀഀ
                            if (stop) {਍                                戀爀攀愀欀㬀ഀഀ
                            }਍                        紀 眀栀椀氀攀 ⠀氀⤀ഀഀ
                    } else {਍                        焀甀攀甀攀嬀氀⸀稀䤀渀搀攀砀崀 㴀 氀㬀ഀഀ
                    }਍                紀 攀氀猀攀 笀ഀഀ
                    out.push(l.apply(scope, args));਍                    椀昀 ⠀猀琀漀瀀⤀ 笀ഀഀ
                        break;਍                    紀ഀഀ
                }਍            紀ഀഀ
            stop = oldstop;਍            挀甀爀爀攀渀琀开攀瘀攀渀琀 㴀 挀攀㬀ഀഀ
            return out.length ? out : null;਍        紀㬀ഀഀ
		// Undocumented. Debug only.਍ऀऀ攀瘀攀⸀开攀瘀攀渀琀猀 㴀 攀瘀攀渀琀猀㬀ഀഀ
    /*\਍     ⨀ 攀瘀攀⸀氀椀猀琀攀渀攀爀猀ഀഀ
     [ method ]਍ഀഀ
     * Internal method which gives you array of all event handlers that will be triggered by the given `name`.਍ഀഀ
     > Arguments਍ഀഀ
     - name (string) name of the event, dot (`.`) or slash (`/`) separated਍ഀഀ
     = (array) array of event handlers਍    尀⨀⼀ഀഀ
    eve.listeners = function (name) {਍        瘀愀爀 渀愀洀攀猀 㴀 渀愀洀攀⸀猀瀀氀椀琀⠀猀攀瀀愀爀愀琀漀爀⤀Ⰰഀഀ
            e = events,਍            椀琀攀洀Ⰰഀഀ
            items,਍            欀Ⰰഀഀ
            i,਍            椀椀Ⰰഀഀ
            j,਍            樀樀Ⰰഀഀ
            nes,਍            攀猀 㴀 嬀攀崀Ⰰഀഀ
            out = [];਍        昀漀爀 ⠀椀 㴀 　Ⰰ 椀椀 㴀 渀愀洀攀猀⸀氀攀渀最琀栀㬀 椀 㰀 椀椀㬀 椀⬀⬀⤀ 笀ഀഀ
            nes = [];਍            昀漀爀 ⠀樀 㴀 　Ⰰ 樀樀 㴀 攀猀⸀氀攀渀最琀栀㬀 樀 㰀 樀樀㬀 樀⬀⬀⤀ 笀ഀഀ
                e = es[j].n;਍                椀琀攀洀猀 㴀 嬀攀嬀渀愀洀攀猀嬀椀崀崀Ⰰ 攀嬀眀椀氀搀挀愀爀搀崀崀㬀ഀഀ
                k = 2;਍                眀栀椀氀攀 ⠀欀ⴀⴀ⤀ 笀ഀഀ
                    item = items[k];਍                    椀昀 ⠀椀琀攀洀⤀ 笀ഀഀ
                        nes.push(item);਍                        漀甀琀 㴀 漀甀琀⸀挀漀渀挀愀琀⠀椀琀攀洀⸀昀 簀簀 嬀崀⤀㬀ഀഀ
                    }਍                紀ഀഀ
            }਍            攀猀 㴀 渀攀猀㬀ഀഀ
        }਍        爀攀琀甀爀渀 漀甀琀㬀ഀഀ
    };਍    ഀഀ
    /*\਍     ⨀ 攀瘀攀⸀漀渀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Binds given event handler with a given name. You can use wildcards “`*`” for the names:਍     簀 攀瘀攀⸀漀渀⠀∀⨀⸀甀渀搀攀爀⸀⨀∀Ⰰ 昀⤀㬀ഀഀ
     | eve("mouse.under.floor"); // triggers f਍     ⨀ 唀猀攀 䀀攀瘀攀 琀漀 琀爀椀最最攀爀 琀栀攀 氀椀猀琀攀渀攀爀⸀ഀഀ
     **਍     㸀 䄀爀最甀洀攀渀琀猀ഀഀ
     **਍     ⴀ 渀愀洀攀 ⠀猀琀爀椀渀最⤀ 渀愀洀攀 漀昀 琀栀攀 攀瘀攀渀琀Ⰰ 搀漀琀 ⠀怀⸀怀⤀ 漀爀 猀氀愀猀栀 ⠀怀⼀怀⤀ 猀攀瀀愀爀愀琀攀搀Ⰰ 眀椀琀栀 漀瀀琀椀漀渀愀氀 眀椀氀搀挀愀爀搀猀ഀഀ
     - f (function) event handler function਍     ⨀⨀ഀഀ
     = (function) returned function accepts a single numeric parameter that represents z-index of the handler. It is an optional feature and only used when you need to ensure that some subset of handlers will be invoked in a given order, despite of the order of assignment. ਍     㸀 䔀砀愀洀瀀氀攀㨀ഀഀ
     | eve.on("mouse", eatIt)(2);਍     簀 攀瘀攀⸀漀渀⠀∀洀漀甀猀攀∀Ⰰ 猀挀爀攀愀洀⤀㬀ഀഀ
     | eve.on("mouse", catchIt)(1);਍     ⨀ 吀栀椀猀 眀椀氀氀 攀渀猀甀爀攀 琀栀愀琀 怀挀愀琀挀栀䤀琀⠀⤀怀 昀甀渀挀琀椀漀渀 眀椀氀氀 戀攀 挀愀氀氀攀搀 戀攀昀漀爀攀 怀攀愀琀䤀琀⠀⤀怀⸀ഀഀ
	 *਍     ⨀ 䤀昀 礀漀甀 眀愀渀琀 琀漀 瀀甀琀 礀漀甀爀 栀愀渀搀氀攀爀 戀攀昀漀爀攀 渀漀渀ⴀ椀渀搀攀砀攀搀 栀愀渀搀氀攀爀猀Ⰰ 猀瀀攀挀椀昀礀 愀 渀攀最愀琀椀瘀攀 瘀愀氀甀攀⸀ഀഀ
     * Note: I assume most of the time you don’t need to worry about z-index, but it’s nice to have this feature “just in case”.਍    尀⨀⼀ഀഀ
    eve.on = function (name, f) {਍ऀऀ渀愀洀攀 㴀 匀琀爀椀渀最⠀渀愀洀攀⤀㬀ഀഀ
		if (typeof f != "function") {਍ऀऀऀ爀攀琀甀爀渀 昀甀渀挀琀椀漀渀 ⠀⤀ 笀紀㬀ഀഀ
		}਍        瘀愀爀 渀愀洀攀猀 㴀 渀愀洀攀⸀猀瀀氀椀琀⠀猀攀瀀愀爀愀琀漀爀⤀Ⰰഀഀ
            e = events;਍        昀漀爀 ⠀瘀愀爀 椀 㴀 　Ⰰ 椀椀 㴀 渀愀洀攀猀⸀氀攀渀最琀栀㬀 椀 㰀 椀椀㬀 椀⬀⬀⤀ 笀ഀഀ
            e = e.n;਍            攀 㴀 攀⸀栀愀猀伀眀渀倀爀漀瀀攀爀琀礀⠀渀愀洀攀猀嬀椀崀⤀ ☀☀ 攀嬀渀愀洀攀猀嬀椀崀崀 簀簀 ⠀攀嬀渀愀洀攀猀嬀椀崀崀 㴀 笀渀㨀 笀紀紀⤀㬀ഀഀ
        }਍        攀⸀昀 㴀 攀⸀昀 簀簀 嬀崀㬀ഀഀ
        for (i = 0, ii = e.f.length; i < ii; i++) if (e.f[i] == f) {਍            爀攀琀甀爀渀 昀甀渀㬀ഀഀ
        }਍        攀⸀昀⸀瀀甀猀栀⠀昀⤀㬀ഀഀ
        return function (zIndex) {਍            椀昀 ⠀⬀稀䤀渀搀攀砀 㴀㴀 ⬀稀䤀渀搀攀砀⤀ 笀ഀഀ
                f.zIndex = +zIndex;਍            紀ഀഀ
        };਍    紀㬀ഀഀ
    /*\਍     ⨀ 攀瘀攀⸀昀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Returns function that will fire given event with optional arguments.਍ऀ ⨀ 䄀爀最甀洀攀渀琀猀 琀栀愀琀 眀椀氀氀 戀攀 瀀愀猀猀攀搀 琀漀 琀栀攀 爀攀猀甀氀琀 昀甀渀挀琀椀漀渀 眀椀氀氀 戀攀 愀氀猀漀ഀഀ
	 * concated to the list of final arguments.਍ ऀ 簀 攀氀⸀漀渀挀氀椀挀欀 㴀 攀瘀攀⸀昀⠀∀挀氀椀挀欀∀Ⰰ ㄀Ⰰ ㈀⤀㬀ഀഀ
 	 | eve.on("click", function (a, b, c) {਍ ऀ 簀     挀漀渀猀漀氀攀⸀氀漀最⠀愀Ⰰ 戀Ⰰ 挀⤀㬀 ⼀⼀ ㄀Ⰰ ㈀Ⰰ 嬀攀瘀攀渀琀 漀戀樀攀挀琀崀ഀഀ
 	 | });਍     㸀 䄀爀最甀洀攀渀琀猀ഀഀ
	 - event (string) event name਍ऀ ⴀ 瘀愀爀愀爀最猀 ⠀☀⤠ 愀渀搀 愀渀礀 漀琀栀攀爀 愀爀最甀洀攀渀琀猀ഀഀ
	 = (function) possible event handler function਍    尀⨀⼀ഀഀ
	eve.f = function (event) {਍ऀऀ瘀愀爀 愀琀琀爀猀 㴀 嬀崀⸀猀氀椀挀攀⸀挀愀氀氀⠀愀爀最甀洀攀渀琀猀Ⰰ ㄀⤀㬀ഀഀ
		return function () {਍ऀऀऀ攀瘀攀⸀愀瀀瀀氀礀⠀渀甀氀氀Ⰰ 嬀攀瘀攀渀琀Ⰰ 渀甀氀氀崀⸀挀漀渀挀愀琀⠀愀琀琀爀猀⤀⸀挀漀渀挀愀琀⠀嬀崀⸀猀氀椀挀攀⸀挀愀氀氀⠀愀爀最甀洀攀渀琀猀Ⰰ 　⤀⤀⤀㬀ഀഀ
		};਍ऀ紀㬀ഀഀ
    /*\਍     ⨀ 攀瘀攀⸀猀琀漀瀀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Is used inside an event handler to stop the event, preventing any subsequent listeners from firing.਍    尀⨀⼀ഀഀ
    eve.stop = function () {਍        猀琀漀瀀 㴀 ㄀㬀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * eve.nt਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 䌀漀甀氀搀 戀攀 甀猀攀搀 椀渀猀椀搀攀 攀瘀攀渀琀 栀愀渀搀氀攀爀 琀漀 昀椀最甀爀攀 漀甀琀 愀挀琀甀愀氀 渀愀洀攀 漀昀 琀栀攀 攀瘀攀渀琀⸀ഀഀ
     **਍     㸀 䄀爀最甀洀攀渀琀猀ഀഀ
     **਍     ⴀ 猀甀戀渀愀洀攀 ⠀猀琀爀椀渀最⤀ ⌀漀瀀琀椀漀渀愀氀 猀甀戀渀愀洀攀 漀昀 琀栀攀 攀瘀攀渀琀ഀഀ
     **਍     㴀 ⠀猀琀爀椀渀最⤀ 渀愀洀攀 漀昀 琀栀攀 攀瘀攀渀琀Ⰰ 椀昀 怀猀甀戀渀愀洀攀怀 椀猀 渀漀琀 猀瀀攀挀椀昀椀攀搀ഀഀ
     * or਍     㴀 ⠀戀漀漀氀攀愀渀⤀ 怀琀爀甀攀怀Ⰰ 椀昀 挀甀爀爀攀渀琀 攀瘀攀渀琀ᤀ猠 渀愀洀攀 挀漀渀琀愀椀渀猀 怀猀甀戀渀愀洀攀怀ഀഀ
    \*/਍    攀瘀攀⸀渀琀 㴀 昀甀渀挀琀椀漀渀 ⠀猀甀戀渀愀洀攀⤀ 笀ഀഀ
        if (subname) {਍            爀攀琀甀爀渀 渀攀眀 刀攀最䔀砀瀀⠀∀⠀㼀㨀尀尀⸀簀尀尀⼀簀帀⤀∀ ⬀ 猀甀戀渀愀洀攀 ⬀ ∀⠀㼀㨀尀尀⸀簀尀尀⼀簀␀⤀∀⤀⸀琀攀猀琀⠀挀甀爀爀攀渀琀开攀瘀攀渀琀⤀㬀ഀഀ
        }਍        爀攀琀甀爀渀 挀甀爀爀攀渀琀开攀瘀攀渀琀㬀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * eve.nts਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 䌀漀甀氀搀 戀攀 甀猀攀搀 椀渀猀椀搀攀 攀瘀攀渀琀 栀愀渀搀氀攀爀 琀漀 昀椀最甀爀攀 漀甀琀 愀挀琀甀愀氀 渀愀洀攀 漀昀 琀栀攀 攀瘀攀渀琀⸀ഀഀ
     **਍     ⨀⨀ഀഀ
     = (array) names of the event਍    尀⨀⼀ഀഀ
    eve.nts = function () {਍        爀攀琀甀爀渀 挀甀爀爀攀渀琀开攀瘀攀渀琀⸀猀瀀氀椀琀⠀猀攀瀀愀爀愀琀漀爀⤀㬀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * eve.off਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 刀攀洀漀瘀攀猀 最椀瘀攀渀 昀甀渀挀琀椀漀渀 昀爀漀洀 琀栀攀 氀椀猀琀 漀昀 攀瘀攀渀琀 氀椀猀琀攀渀攀爀猀 愀猀猀椀最渀攀搀 琀漀 最椀瘀攀渀 渀愀洀攀⸀ഀഀ
	 * If no arguments specified all the events will be cleared.਍     ⨀⨀ഀഀ
     > Arguments਍     ⨀⨀ഀഀ
     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards਍     ⴀ 昀 ⠀昀甀渀挀琀椀漀渀⤀ 攀瘀攀渀琀 栀愀渀搀氀攀爀 昀甀渀挀琀椀漀渀ഀഀ
    \*/਍    ⼀⨀尀ഀഀ
     * eve.unbind਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 匀攀攀 䀀攀瘀攀⸀漀昀昀ഀഀ
    \*/਍    攀瘀攀⸀漀昀昀 㴀 攀瘀攀⸀甀渀戀椀渀搀 㴀 昀甀渀挀琀椀漀渀 ⠀渀愀洀攀Ⰰ 昀⤀ 笀ഀഀ
		if (!name) {਍ऀऀ    攀瘀攀⸀开攀瘀攀渀琀猀 㴀 攀瘀攀渀琀猀 㴀 笀渀㨀 笀紀紀㬀ഀഀ
			return;਍ऀऀ紀ഀഀ
        var names = name.split(separator),਍            攀Ⰰഀഀ
            key,਍            猀瀀氀椀挀攀Ⰰഀഀ
            i, ii, j, jj,਍            挀甀爀 㴀 嬀攀瘀攀渀琀猀崀㬀ഀഀ
        for (i = 0, ii = names.length; i < ii; i++) {਍            昀漀爀 ⠀樀 㴀 　㬀 樀 㰀 挀甀爀⸀氀攀渀最琀栀㬀 樀 ⬀㴀 猀瀀氀椀挀攀⸀氀攀渀最琀栀 ⴀ ㈀⤀ 笀ഀഀ
                splice = [j, 1];਍                攀 㴀 挀甀爀嬀樀崀⸀渀㬀ഀഀ
                if (names[i] != wildcard) {਍                    椀昀 ⠀攀嬀渀愀洀攀猀嬀椀崀崀⤀ 笀ഀഀ
                        splice.push(e[names[i]]);਍                    紀ഀഀ
                } else {਍                    昀漀爀 ⠀欀攀礀 椀渀 攀⤀ 椀昀 ⠀攀嬀栀愀猀崀⠀欀攀礀⤀⤀ 笀ഀഀ
                        splice.push(e[key]);਍                    紀ഀഀ
                }਍                挀甀爀⸀猀瀀氀椀挀攀⸀愀瀀瀀氀礀⠀挀甀爀Ⰰ 猀瀀氀椀挀攀⤀㬀ഀഀ
            }਍        紀ഀഀ
        for (i = 0, ii = cur.length; i < ii; i++) {਍            攀 㴀 挀甀爀嬀椀崀㬀ഀഀ
            while (e.n) {਍                椀昀 ⠀昀⤀ 笀ഀഀ
                    if (e.f) {਍                        昀漀爀 ⠀樀 㴀 　Ⰰ 樀樀 㴀 攀⸀昀⸀氀攀渀最琀栀㬀 樀 㰀 樀樀㬀 樀⬀⬀⤀ 椀昀 ⠀攀⸀昀嬀樀崀 㴀㴀 昀⤀ 笀ഀഀ
                            e.f.splice(j, 1);਍                            戀爀攀愀欀㬀ഀഀ
                        }਍                        ℀攀⸀昀⸀氀攀渀最琀栀 ☀☀ 搀攀氀攀琀攀 攀⸀昀㬀ഀഀ
                    }਍                    昀漀爀 ⠀欀攀礀 椀渀 攀⸀渀⤀ 椀昀 ⠀攀⸀渀嬀栀愀猀崀⠀欀攀礀⤀ ☀☀ 攀⸀渀嬀欀攀礀崀⸀昀⤀ 笀ഀഀ
                        var funcs = e.n[key].f;਍                        昀漀爀 ⠀樀 㴀 　Ⰰ 樀樀 㴀 昀甀渀挀猀⸀氀攀渀最琀栀㬀 樀 㰀 樀樀㬀 樀⬀⬀⤀ 椀昀 ⠀昀甀渀挀猀嬀樀崀 㴀㴀 昀⤀ 笀ഀഀ
                            funcs.splice(j, 1);਍                            戀爀攀愀欀㬀ഀഀ
                        }਍                        ℀昀甀渀挀猀⸀氀攀渀最琀栀 ☀☀ 搀攀氀攀琀攀 攀⸀渀嬀欀攀礀崀⸀昀㬀ഀഀ
                    }਍                紀 攀氀猀攀 笀ഀഀ
                    delete e.f;਍                    昀漀爀 ⠀欀攀礀 椀渀 攀⸀渀⤀ 椀昀 ⠀攀⸀渀嬀栀愀猀崀⠀欀攀礀⤀ ☀☀ 攀⸀渀嬀欀攀礀崀⸀昀⤀ 笀ഀഀ
                        delete e.n[key].f;਍                    紀ഀഀ
                }਍                攀 㴀 攀⸀渀㬀ഀഀ
            }਍        紀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * eve.once਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 䈀椀渀搀猀 最椀瘀攀渀 攀瘀攀渀琀 栀愀渀搀氀攀爀 眀椀琀栀 愀 最椀瘀攀渀 渀愀洀攀 琀漀 漀渀氀礀 爀甀渀 漀渀挀攀 琀栀攀渀 甀渀戀椀渀搀 椀琀猀攀氀昀⸀ഀഀ
     | eve.once("login", f);਍     簀 攀瘀攀⠀∀氀漀最椀渀∀⤀㬀 ⼀⼀ 琀爀椀最最攀爀猀 昀ഀഀ
     | eve("login"); // no listeners਍     ⨀ 唀猀攀 䀀攀瘀攀 琀漀 琀爀椀最最攀爀 琀栀攀 氀椀猀琀攀渀攀爀⸀ഀഀ
     **਍     㸀 䄀爀最甀洀攀渀琀猀ഀഀ
     **਍     ⴀ 渀愀洀攀 ⠀猀琀爀椀渀最⤀ 渀愀洀攀 漀昀 琀栀攀 攀瘀攀渀琀Ⰰ 搀漀琀 ⠀怀⸀怀⤀ 漀爀 猀氀愀猀栀 ⠀怀⼀怀⤀ 猀攀瀀愀爀愀琀攀搀Ⰰ 眀椀琀栀 漀瀀琀椀漀渀愀氀 眀椀氀搀挀愀爀搀猀ഀഀ
     - f (function) event handler function਍     ⨀⨀ഀഀ
     = (function) same return function as @eve.on਍    尀⨀⼀ഀഀ
    eve.once = function (name, f) {਍        瘀愀爀 昀㈀ 㴀 昀甀渀挀琀椀漀渀 ⠀⤀ 笀ഀഀ
            eve.unbind(name, f2);਍            爀攀琀甀爀渀 昀⸀愀瀀瀀氀礀⠀琀栀椀猀Ⰰ 愀爀最甀洀攀渀琀猀⤀㬀ഀഀ
        };਍        爀攀琀甀爀渀 攀瘀攀⸀漀渀⠀渀愀洀攀Ⰰ 昀㈀⤀㬀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * eve.version਍     嬀 瀀爀漀瀀攀爀琀礀 ⠀猀琀爀椀渀最⤀ 崀ഀഀ
     **਍     ⨀ 䌀甀爀爀攀渀琀 瘀攀爀猀椀漀渀 漀昀 琀栀攀 氀椀戀爀愀爀礀⸀ഀഀ
    \*/਍    攀瘀攀⸀瘀攀爀猀椀漀渀 㴀 瘀攀爀猀椀漀渀㬀ഀഀ
    eve.toString = function () {਍        爀攀琀甀爀渀 ∀夀漀甀 愀爀攀 爀甀渀渀椀渀最 䔀瘀攀 ∀ ⬀ 瘀攀爀猀椀漀渀㬀ഀഀ
    };਍    ⠀琀礀瀀攀漀昀 洀漀搀甀氀攀 ℀㴀 ∀甀渀搀攀昀椀渀攀搀∀ ☀☀ 洀漀搀甀氀攀⸀攀砀瀀漀爀琀猀⤀ 㼀 ⠀洀漀搀甀氀攀⸀攀砀瀀漀爀琀猀 㴀 攀瘀攀⤀ 㨀 ⠀琀礀瀀攀漀昀 搀攀昀椀渀攀 ℀㴀 ∀甀渀搀攀昀椀渀攀搀∀ 㼀 ⠀搀攀昀椀渀攀⠀∀攀瘀攀∀Ⰰ 嬀崀Ⰰ 昀甀渀挀琀椀漀渀⠀⤀ 笀 爀攀琀甀爀渀 攀瘀攀㬀 紀⤀⤀ 㨀 ⠀最氀漀戀⸀攀瘀攀 㴀 攀瘀攀⤀⤀㬀ഀഀ
})(this);਍⼀⼀ ఀ%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%ဥ‥尀尀ഀഀ
// │ "Raphaël 2.1.2" - JavaScript Vector Library                         │ \\਍⼀⼀ ᰀ%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%␥‥尀尀ഀഀ
// │ Copyright (c) 2008-2011 Dmitry Baranovskiy (http://raphaeljs.com)   │ \\਍⼀⼀ Ȁ‥䌀漀瀀礀爀椀最栀琀 ⠀挀⤀ ㈀　　㠀ⴀ㈀　㄀㄀ 匀攀渀挀栀愀 䰀愀戀猀 ⠀栀琀琀瀀㨀⼀⼀猀攀渀挀栀愀⸀挀漀洀⤀             Ȁ‥尀尀ഀഀ
// │ Licensed under the MIT (http://raphaeljs.com/license.html) license. │ \\਍⼀⼀ ᐀%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%ᠥ‥尀尀ഀഀ
਍⠀昀甀渀挀琀椀漀渀 ⠀最氀漀戀Ⰰ 昀愀挀琀漀爀礀⤀ 笀ഀഀ
    // AMD support਍    椀昀 ⠀琀礀瀀攀漀昀 搀攀昀椀渀攀 㴀㴀㴀 ∀昀甀渀挀琀椀漀渀∀ ☀☀ 搀攀昀椀渀攀⸀愀洀搀⤀ 笀ഀഀ
        // Define as an anonymous module਍        搀攀昀椀渀攀⠀嬀∀攀瘀攀∀崀Ⰰ 昀甀渀挀琀椀漀渀⠀ 攀瘀攀 ⤀ 笀ഀഀ
            return factory(glob, eve);਍        紀⤀㬀ഀഀ
    } else {਍        ⼀⼀ 䈀爀漀眀猀攀爀 最氀漀戀愀氀猀 ⠀最氀漀戀 椀猀 眀椀渀搀漀眀⤀ഀഀ
        // Raphael adds itself to window਍        昀愀挀琀漀爀礀⠀最氀漀戀Ⰰ 最氀漀戀⸀攀瘀攀 簀簀 ⠀琀礀瀀攀漀昀 爀攀焀甀椀爀攀 㴀㴀 ∀昀甀渀挀琀椀漀渀∀ ☀☀ 爀攀焀甀椀爀攀⠀✀攀瘀攀✀⤀⤀ ⤀㬀ഀഀ
    }਍紀⠀琀栀椀猀Ⰰ 昀甀渀挀琀椀漀渀 ⠀眀椀渀搀漀眀Ⰰ 攀瘀攀⤀ 笀ഀഀ
    /*\਍     ⨀ 刀愀瀀栀愀攀氀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Creates a canvas object on which to draw.਍     ⨀ 夀漀甀 洀甀猀琀 搀漀 琀栀椀猀 昀椀爀猀琀Ⰰ 愀猀 愀氀氀 昀甀琀甀爀攀 挀愀氀氀猀 琀漀 搀爀愀眀椀渀最 洀攀琀栀漀搀猀ഀഀ
     * from this instance will be bound to this canvas.਍     㸀 倀愀爀愀洀攀琀攀爀猀ഀഀ
     **਍     ⴀ 挀漀渀琀愀椀渀攀爀 ⠀䠀吀䴀䰀䔀氀攀洀攀渀琀簀猀琀爀椀渀最⤀ 䐀伀䴀 攀氀攀洀攀渀琀 漀爀 椀琀猀 䤀䐀 眀栀椀挀栀 椀猀 最漀椀渀最 琀漀 戀攀 愀 瀀愀爀攀渀琀 昀漀爀 搀爀愀眀椀渀最 猀甀爀昀愀挀攀ഀഀ
     - width (number)਍     ⴀ 栀攀椀最栀琀 ⠀渀甀洀戀攀爀⤀ഀഀ
     - callback (function) #optional callback function which is going to be executed in the context of newly created paper਍     ⨀ 漀爀ഀഀ
     - x (number)਍     ⴀ 礀 ⠀渀甀洀戀攀爀⤀ഀഀ
     - width (number)਍     ⴀ 栀攀椀最栀琀 ⠀渀甀洀戀攀爀⤀ഀഀ
     - callback (function) #optional callback function which is going to be executed in the context of newly created paper਍     ⨀ 漀爀ഀഀ
     - all (array) (first 3 or 4 elements in the array are equal to [containerID, width, height] or [x, y, width, height]. The rest are element descriptions in format {type: type, <attributes>}). See @Paper.add.਍     ⴀ 挀愀氀氀戀愀挀欀 ⠀昀甀渀挀琀椀漀渀⤀ ⌀漀瀀琀椀漀渀愀氀 挀愀氀氀戀愀挀欀 昀甀渀挀琀椀漀渀 眀栀椀挀栀 椀猀 最漀椀渀最 琀漀 戀攀 攀砀攀挀甀琀攀搀 椀渀 琀栀攀 挀漀渀琀攀砀琀 漀昀 渀攀眀氀礀 挀爀攀愀琀攀搀 瀀愀瀀攀爀ഀഀ
     * or਍     ⴀ 漀渀刀攀愀搀礀䌀愀氀氀戀愀挀欀 ⠀昀甀渀挀琀椀漀渀⤀ 昀甀渀挀琀椀漀渀 琀栀愀琀 椀猀 最漀椀渀最 琀漀 戀攀 挀愀氀氀攀搀 漀渀 䐀伀䴀 爀攀愀搀礀 攀瘀攀渀琀⸀ 夀漀甀 挀愀渀 愀氀猀漀 猀甀戀猀挀爀椀戀攀 琀漀 琀栀椀猀 攀瘀攀渀琀 瘀椀愀 䔀瘀攀ᤀ猠 ᰀ䐠伀䴀䰀漀愀搀ᴀ†攀瘀攀渀琀⸀ 䤀渀 琀栀椀猀 挀愀猀攀 洀攀琀栀漀搀 爀攀琀甀爀渀猀 怀甀渀搀攀昀椀渀攀搀怀⸀ഀഀ
     = (object) @Paper਍     㸀 唀猀愀最攀ഀഀ
     | // Each of the following examples create a canvas਍     簀 ⼀⼀ 琀栀愀琀 椀猀 ㌀㈀　瀀砀 眀椀搀攀 戀礀 ㈀　　瀀砀 栀椀最栀⸀ഀഀ
     | // Canvas is created at the viewport’s 10,50 coordinate.਍     簀 瘀愀爀 瀀愀瀀攀爀 㴀 刀愀瀀栀愀攀氀⠀㄀　Ⰰ 㔀　Ⰰ ㌀㈀　Ⰰ ㈀　　⤀㬀ഀഀ
     | // Canvas is created at the top left corner of the #notepad element਍     簀 ⼀⼀ ⠀漀爀 椀琀猀 琀漀瀀 爀椀最栀琀 挀漀爀渀攀爀 椀渀 搀椀爀㴀∀爀琀氀∀ 攀氀攀洀攀渀琀猀⤀ഀഀ
     | var paper = Raphael(document.getElementById("notepad"), 320, 200);਍     簀 ⼀⼀ 匀愀洀攀 愀猀 愀戀漀瘀攀ഀഀ
     | var paper = Raphael("notepad", 320, 200);਍     簀 ⼀⼀ 䤀洀愀最攀 搀甀洀瀀ഀഀ
     | var set = Raphael(["notepad", 320, 200, {਍     簀     琀礀瀀攀㨀 ∀爀攀挀琀∀Ⰰഀഀ
     |     x: 10,਍     簀     礀㨀 ㄀　Ⰰഀഀ
     |     width: 25,਍     簀     栀攀椀最栀琀㨀 ㈀㔀Ⰰഀഀ
     |     stroke: "#f00"਍     簀 紀Ⰰ 笀ഀഀ
     |     type: "text",਍     簀     砀㨀 ㌀　Ⰰഀഀ
     |     y: 40,਍     簀     琀攀砀琀㨀 ∀䐀甀洀瀀∀ഀഀ
     | }]);਍    尀⨀⼀ഀഀ
    function R(first) {਍        椀昀 ⠀刀⸀椀猀⠀昀椀爀猀琀Ⰰ ∀昀甀渀挀琀椀漀渀∀⤀⤀ 笀ഀഀ
            return loaded ? first() : eve.on("raphael.DOMload", first);਍        紀 攀氀猀攀 椀昀 ⠀刀⸀椀猀⠀昀椀爀猀琀Ⰰ 愀爀爀愀礀⤀⤀ 笀ഀഀ
            return R._engine.create[apply](R, first.splice(0, 3 + R.is(first[0], nu))).add(first);਍        紀 攀氀猀攀 笀ഀഀ
            var args = Array.prototype.slice.call(arguments, 0);਍            椀昀 ⠀刀⸀椀猀⠀愀爀最猀嬀愀爀最猀⸀氀攀渀最琀栀 ⴀ ㄀崀Ⰰ ∀昀甀渀挀琀椀漀渀∀⤀⤀ 笀ഀഀ
                var f = args.pop();਍                爀攀琀甀爀渀 氀漀愀搀攀搀 㼀 昀⸀挀愀氀氀⠀刀⸀开攀渀最椀渀攀⸀挀爀攀愀琀攀嬀愀瀀瀀氀礀崀⠀刀Ⰰ 愀爀最猀⤀⤀ 㨀 攀瘀攀⸀漀渀⠀∀爀愀瀀栀愀攀氀⸀䐀伀䴀氀漀愀搀∀Ⰰ 昀甀渀挀琀椀漀渀 ⠀⤀ 笀ഀഀ
                    f.call(R._engine.create[apply](R, args));਍                紀⤀㬀ഀഀ
            } else {਍                爀攀琀甀爀渀 刀⸀开攀渀最椀渀攀⸀挀爀攀愀琀攀嬀愀瀀瀀氀礀崀⠀刀Ⰰ 愀爀最甀洀攀渀琀猀⤀㬀ഀഀ
            }਍        紀ഀഀ
    }਍    刀⸀瘀攀爀猀椀漀渀 㴀 ∀㈀⸀㄀⸀㈀∀㬀ഀഀ
    R.eve = eve;਍    瘀愀爀 氀漀愀搀攀搀Ⰰഀഀ
        separator = /[, ]+/,਍        攀氀攀洀攀渀琀猀 㴀 笀挀椀爀挀氀攀㨀 ㄀Ⰰ 爀攀挀琀㨀 ㄀Ⰰ 瀀愀琀栀㨀 ㄀Ⰰ 攀氀氀椀瀀猀攀㨀 ㄀Ⰰ 琀攀砀琀㨀 ㄀Ⰰ 椀洀愀最攀㨀 ㄀紀Ⰰഀഀ
        formatrg = /\{(\d+)\}/g,਍        瀀爀漀琀漀 㴀 ∀瀀爀漀琀漀琀礀瀀攀∀Ⰰഀഀ
        has = "hasOwnProperty",਍        最 㴀 笀ഀഀ
            doc: document,਍            眀椀渀㨀 眀椀渀搀漀眀ഀഀ
        },਍        漀氀搀刀愀瀀栀愀攀氀 㴀 笀ഀഀ
            was: Object.prototype[has].call(g.win, "Raphael"),਍            椀猀㨀 最⸀眀椀渀⸀刀愀瀀栀愀攀氀ഀഀ
        },਍        倀愀瀀攀爀 㴀 昀甀渀挀琀椀漀渀 ⠀⤀ 笀ഀഀ
            /*\਍             ⨀ 倀愀瀀攀爀⸀挀愀ഀഀ
             [ property (object) ]਍             ⨀⨀ഀഀ
             * Shortcut for @Paper.customAttributes਍            尀⨀⼀ഀഀ
            /*\਍             ⨀ 倀愀瀀攀爀⸀挀甀猀琀漀洀䄀琀琀爀椀戀甀琀攀猀ഀഀ
             [ property (object) ]਍             ⨀⨀ഀഀ
             * If you have a set of attributes that you would like to represent਍             ⨀ 愀猀 愀 昀甀渀挀琀椀漀渀 漀昀 猀漀洀攀 渀甀洀戀攀爀 礀漀甀 挀愀渀 搀漀 椀琀 攀愀猀椀氀礀 眀椀琀栀 挀甀猀琀漀洀 愀琀琀爀椀戀甀琀攀猀㨀ഀഀ
             > Usage਍             簀 瀀愀瀀攀爀⸀挀甀猀琀漀洀䄀琀琀爀椀戀甀琀攀猀⸀栀甀攀 㴀 昀甀渀挀琀椀漀渀 ⠀渀甀洀⤀ 笀ഀഀ
             |     num = num % 1;਍             簀     爀攀琀甀爀渀 笀昀椀氀氀㨀 ∀栀猀戀⠀∀ ⬀ 渀甀洀 ⬀ ∀Ⰰ 　⸀㜀㔀Ⰰ ㄀⤀∀紀㬀ഀഀ
             | };਍             簀 ⼀⼀ 䌀甀猀琀漀洀 愀琀琀爀椀戀甀琀攀 ᰀ栠甀攀ᴀ†眀椀氀氀 挀栀愀渀最攀 昀椀氀氀ഀഀ
             | // to be given hue with fixed saturation and brightness.਍             簀 ⼀⼀ 一漀眀 礀漀甀 挀愀渀 甀猀攀 椀琀 氀椀欀攀 琀栀椀猀㨀ഀഀ
             | var c = paper.circle(10, 10, 10).attr({hue: .45});਍             簀 ⼀⼀ 漀爀 攀瘀攀渀 氀椀欀攀 琀栀椀猀㨀ഀഀ
             | c.animate({hue: 1}, 1e3);਍             簀ഀഀ
             | // You could also create custom attribute਍             簀 ⼀⼀ 眀椀琀栀 洀甀氀琀椀瀀氀攀 瀀愀爀愀洀攀琀攀爀猀㨀ഀഀ
             | paper.customAttributes.hsb = function (h, s, b) {਍             簀     爀攀琀甀爀渀 笀昀椀氀氀㨀 ∀栀猀戀⠀∀ ⬀ 嬀栀Ⰰ 猀Ⰰ 戀崀⸀樀漀椀渀⠀∀Ⰰ∀⤀ ⬀ ∀⤀∀紀㬀ഀഀ
             | };਍             簀 挀⸀愀琀琀爀⠀笀栀猀戀㨀 ∀　⸀㔀 ⸀㠀 ㄀∀紀⤀㬀ഀഀ
             | c.animate({hsb: [1, 0, 0.5]}, 1e3);਍            尀⨀⼀ഀഀ
            this.ca = this.customAttributes = {};਍        紀Ⰰഀഀ
        paperproto,਍        愀瀀瀀攀渀搀䌀栀椀氀搀 㴀 ∀愀瀀瀀攀渀搀䌀栀椀氀搀∀Ⰰഀഀ
        apply = "apply",਍        挀漀渀挀愀琀 㴀 ∀挀漀渀挀愀琀∀Ⰰഀഀ
        supportsTouch = ('ontouchstart' in g.win) || g.win.DocumentTouch && g.doc instanceof DocumentTouch, //taken from Modernizr touch test਍        䔀 㴀 ∀∀Ⰰഀഀ
        S = " ",਍        匀琀爀 㴀 匀琀爀椀渀最Ⰰഀഀ
        split = "split",਍        攀瘀攀渀琀猀 㴀 ∀挀氀椀挀欀 搀戀氀挀氀椀挀欀 洀漀甀猀攀搀漀眀渀 洀漀甀猀攀洀漀瘀攀 洀漀甀猀攀漀甀琀 洀漀甀猀攀漀瘀攀爀 洀漀甀猀攀甀瀀 琀漀甀挀栀猀琀愀爀琀 琀漀甀挀栀洀漀瘀攀 琀漀甀挀栀攀渀搀 琀漀甀挀栀挀愀渀挀攀氀∀嬀猀瀀氀椀琀崀⠀匀⤀Ⰰഀഀ
        touchMap = {਍            洀漀甀猀攀搀漀眀渀㨀 ∀琀漀甀挀栀猀琀愀爀琀∀Ⰰഀഀ
            mousemove: "touchmove",਍            洀漀甀猀攀甀瀀㨀 ∀琀漀甀挀栀攀渀搀∀ഀഀ
        },਍        氀漀眀攀爀䌀愀猀攀 㴀 匀琀爀⸀瀀爀漀琀漀琀礀瀀攀⸀琀漀䰀漀眀攀爀䌀愀猀攀Ⰰഀഀ
        math = Math,਍        洀洀愀砀 㴀 洀愀琀栀⸀洀愀砀Ⰰഀഀ
        mmin = math.min,਍        愀戀猀 㴀 洀愀琀栀⸀愀戀猀Ⰰഀഀ
        pow = math.pow,਍        倀䤀 㴀 洀愀琀栀⸀倀䤀Ⰰഀഀ
        nu = "number",਍        猀琀爀椀渀最 㴀 ∀猀琀爀椀渀最∀Ⰰഀഀ
        array = "array",਍        琀漀匀琀爀椀渀最 㴀 ∀琀漀匀琀爀椀渀最∀Ⰰഀഀ
        fillString = "fill",਍        漀戀樀攀挀琀吀漀匀琀爀椀渀最 㴀 伀戀樀攀挀琀⸀瀀爀漀琀漀琀礀瀀攀⸀琀漀匀琀爀椀渀最Ⰰഀഀ
        paper = {},਍        瀀甀猀栀 㴀 ∀瀀甀猀栀∀Ⰰഀഀ
        ISURL = R._ISURL = /^url\(['"]?(.+?)['"]?\)$/i,਍        挀漀氀漀甀爀刀攀最䔀砀瀀 㴀 ⼀帀尀猀⨀⠀⠀⌀嬀愀ⴀ昀尀搀崀笀㘀紀⤀簀⠀⌀嬀愀ⴀ昀尀搀崀笀㌀紀⤀簀爀最戀愀㼀尀⠀尀猀⨀⠀嬀尀搀尀⸀崀⬀─㼀尀猀⨀Ⰰ尀猀⨀嬀尀搀尀⸀崀⬀─㼀尀猀⨀Ⰰ尀猀⨀嬀尀搀尀⸀崀⬀─㼀⠀㼀㨀尀猀⨀Ⰰ尀猀⨀嬀尀搀尀⸀崀⬀─㼀⤀㼀⤀尀猀⨀尀⤀簀栀猀戀愀㼀尀⠀尀猀⨀⠀嬀尀搀尀⸀崀⬀⠀㼀㨀搀攀最簀尀砀戀　簀─⤀㼀尀猀⨀Ⰰ尀猀⨀嬀尀搀尀⸀崀⬀─㼀尀猀⨀Ⰰ尀猀⨀嬀尀搀尀⸀崀⬀⠀㼀㨀─㼀尀猀⨀Ⰰ尀猀⨀嬀尀搀尀⸀崀⬀⤀㼀⤀─㼀尀猀⨀尀⤀簀栀猀氀愀㼀尀⠀尀猀⨀⠀嬀尀搀尀⸀崀⬀⠀㼀㨀搀攀最簀尀砀戀　簀─⤀㼀尀猀⨀Ⰰ尀猀⨀嬀尀搀尀⸀崀⬀─㼀尀猀⨀Ⰰ尀猀⨀嬀尀搀尀⸀崀⬀⠀㼀㨀─㼀尀猀⨀Ⰰ尀猀⨀嬀尀搀尀⸀崀⬀⤀㼀⤀─㼀尀猀⨀尀⤀⤀尀猀⨀␀⼀椀Ⰰഀഀ
        isnan = {"NaN": 1, "Infinity": 1, "-Infinity": 1},਍        戀攀稀椀攀爀爀最 㴀 ⼀帀⠀㼀㨀挀甀戀椀挀ⴀ⤀㼀戀攀稀椀攀爀尀⠀⠀嬀帀Ⰰ崀⬀⤀Ⰰ⠀嬀帀Ⰰ崀⬀⤀Ⰰ⠀嬀帀Ⰰ崀⬀⤀Ⰰ⠀嬀帀尀⤀崀⬀⤀尀⤀⼀Ⰰഀഀ
        round = math.round,਍        猀攀琀䄀琀琀爀椀戀甀琀攀 㴀 ∀猀攀琀䄀琀琀爀椀戀甀琀攀∀Ⰰഀഀ
        toFloat = parseFloat,਍        琀漀䤀渀琀 㴀 瀀愀爀猀攀䤀渀琀Ⰰഀഀ
        upperCase = Str.prototype.toUpperCase,਍        愀瘀愀椀氀愀戀氀攀䄀琀琀爀猀 㴀 刀⸀开愀瘀愀椀氀愀戀氀攀䄀琀琀爀猀 㴀 笀ഀഀ
            "arrow-end": "none",਍            ∀愀爀爀漀眀ⴀ猀琀愀爀琀∀㨀 ∀渀漀渀攀∀Ⰰഀഀ
            blur: 0,਍            ∀挀氀椀瀀ⴀ爀攀挀琀∀㨀 ∀　 　 ㄀攀㤀 ㄀攀㤀∀Ⰰഀഀ
            cursor: "default",਍            挀砀㨀 　Ⰰഀഀ
            cy: 0,਍            昀椀氀氀㨀 ∀⌀昀昀昀∀Ⰰഀഀ
            "fill-opacity": 1,਍            昀漀渀琀㨀 ✀㄀　瀀砀 ∀䄀爀椀愀氀∀✀Ⰰഀഀ
            "font-family": '"Arial"',਍            ∀昀漀渀琀ⴀ猀椀稀攀∀㨀 ∀㄀　∀Ⰰഀഀ
            "font-style": "normal",਍            ∀昀漀渀琀ⴀ眀攀椀最栀琀∀㨀 㐀　　Ⰰഀഀ
            gradient: 0,਍            栀攀椀最栀琀㨀 　Ⰰഀഀ
            href: "http://raphaeljs.com/",਍            ∀氀攀琀琀攀爀ⴀ猀瀀愀挀椀渀最∀㨀 　Ⰰഀഀ
            opacity: 1,਍            瀀愀琀栀㨀 ∀䴀　Ⰰ　∀Ⰰഀഀ
            r: 0,਍            爀砀㨀 　Ⰰഀഀ
            ry: 0,਍            猀爀挀㨀 ∀∀Ⰰഀഀ
            stroke: "#000",਍            ∀猀琀爀漀欀攀ⴀ搀愀猀栀愀爀爀愀礀∀㨀 ∀∀Ⰰഀഀ
            "stroke-linecap": "butt",਍            ∀猀琀爀漀欀攀ⴀ氀椀渀攀樀漀椀渀∀㨀 ∀戀甀琀琀∀Ⰰഀഀ
            "stroke-miterlimit": 0,਍            ∀猀琀爀漀欀攀ⴀ漀瀀愀挀椀琀礀∀㨀 ㄀Ⰰഀഀ
            "stroke-width": 1,਍            琀愀爀最攀琀㨀 ∀开戀氀愀渀欀∀Ⰰഀഀ
            "text-anchor": "middle",਍            琀椀琀氀攀㨀 ∀刀愀瀀栀愀攀氀∀Ⰰഀഀ
            transform: "",਍            眀椀搀琀栀㨀 　Ⰰഀഀ
            x: 0,਍            礀㨀 　ഀഀ
        },਍        愀瘀愀椀氀愀戀氀攀䄀渀椀洀䄀琀琀爀猀 㴀 刀⸀开愀瘀愀椀氀愀戀氀攀䄀渀椀洀䄀琀琀爀猀 㴀 笀ഀഀ
            blur: nu,਍            ∀挀氀椀瀀ⴀ爀攀挀琀∀㨀 ∀挀猀瘀∀Ⰰഀഀ
            cx: nu,਍            挀礀㨀 渀甀Ⰰഀഀ
            fill: "colour",਍            ∀昀椀氀氀ⴀ漀瀀愀挀椀琀礀∀㨀 渀甀Ⰰഀഀ
            "font-size": nu,਍            栀攀椀最栀琀㨀 渀甀Ⰰഀഀ
            opacity: nu,਍            瀀愀琀栀㨀 ∀瀀愀琀栀∀Ⰰഀഀ
            r: nu,਍            爀砀㨀 渀甀Ⰰഀഀ
            ry: nu,਍            猀琀爀漀欀攀㨀 ∀挀漀氀漀甀爀∀Ⰰഀഀ
            "stroke-opacity": nu,਍            ∀猀琀爀漀欀攀ⴀ眀椀搀琀栀∀㨀 渀甀Ⰰഀഀ
            transform: "transform",਍            眀椀搀琀栀㨀 渀甀Ⰰഀഀ
            x: nu,਍            礀㨀 渀甀ഀഀ
        },਍        眀栀椀琀攀猀瀀愀挀攀 㴀 ⼀嬀尀砀　㤀尀砀　愀尀砀　戀尀砀　挀尀砀　搀尀砀㈀　尀砀愀　尀甀㄀㘀㠀　尀甀㄀㠀　攀尀甀㈀　　　尀甀㈀　　㄀尀甀㈀　　㈀尀甀㈀　　㌀尀甀㈀　　㐀尀甀㈀　　㔀尀甀㈀　　㘀尀甀㈀　　㜀尀甀㈀　　㠀尀甀㈀　　㤀尀甀㈀　　愀尀甀㈀　㈀昀尀甀㈀　㔀昀尀甀㌀　　　尀甀㈀　㈀㠀尀甀㈀　㈀㤀崀⼀最Ⰰഀഀ
        commaSpaces = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,਍        栀猀爀最 㴀 笀栀猀㨀 ㄀Ⰰ 爀最㨀 ㄀紀Ⰰഀഀ
        p2s = /,?([achlmqrstvxz]),?/gi,਍        瀀愀琀栀䌀漀洀洀愀渀搀 㴀 ⼀⠀嬀愀挀栀氀洀爀焀猀琀瘀稀崀⤀嬀尀砀　㤀尀砀　愀尀砀　戀尀砀　挀尀砀　搀尀砀㈀　尀砀愀　尀甀㄀㘀㠀　尀甀㄀㠀　攀尀甀㈀　　　尀甀㈀　　㄀尀甀㈀　　㈀尀甀㈀　　㌀尀甀㈀　　㐀尀甀㈀　　㔀尀甀㈀　　㘀尀甀㈀　　㜀尀甀㈀　　㠀尀甀㈀　　㤀尀甀㈀　　愀尀甀㈀　㈀昀尀甀㈀　㔀昀尀甀㌀　　　尀甀㈀　㈀㠀尀甀㈀　㈀㤀Ⰰ崀⨀⠀⠀ⴀ㼀尀搀⨀尀⸀㼀尀搀⨀⠀㼀㨀攀嬀尀ⴀ⬀崀㼀尀搀⬀⤀㼀嬀尀砀　㤀尀砀　愀尀砀　戀尀砀　挀尀砀　搀尀砀㈀　尀砀愀　尀甀㄀㘀㠀　尀甀㄀㠀　攀尀甀㈀　　　尀甀㈀　　㄀尀甀㈀　　㈀尀甀㈀　　㌀尀甀㈀　　㐀尀甀㈀　　㔀尀甀㈀　　㘀尀甀㈀　　㜀尀甀㈀　　㠀尀甀㈀　　㤀尀甀㈀　　愀尀甀㈀　㈀昀尀甀㈀　㔀昀尀甀㌀　　　尀甀㈀　㈀㠀尀甀㈀　㈀㤀崀⨀Ⰰ㼀嬀尀砀　㤀尀砀　愀尀砀　戀尀砀　挀尀砀　搀尀砀㈀　尀砀愀　尀甀㄀㘀㠀　尀甀㄀㠀　攀尀甀㈀　　　尀甀㈀　　㄀尀甀㈀　　㈀尀甀㈀　　㌀尀甀㈀　　㐀尀甀㈀　　㔀尀甀㈀　　㘀尀甀㈀　　㜀尀甀㈀　　㠀尀甀㈀　　㤀尀甀㈀　　愀尀甀㈀　㈀昀尀甀㈀　㔀昀尀甀㌀　　　尀甀㈀　㈀㠀尀甀㈀　㈀㤀崀⨀⤀⬀⤀⼀椀最Ⰰഀഀ
        tCommand = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,਍        瀀愀琀栀嘀愀氀甀攀猀 㴀 ⼀⠀ⴀ㼀尀搀⨀尀⸀㼀尀搀⨀⠀㼀㨀攀嬀尀ⴀ⬀崀㼀尀搀⬀⤀㼀⤀嬀尀砀　㤀尀砀　愀尀砀　戀尀砀　挀尀砀　搀尀砀㈀　尀砀愀　尀甀㄀㘀㠀　尀甀㄀㠀　攀尀甀㈀　　　尀甀㈀　　㄀尀甀㈀　　㈀尀甀㈀　　㌀尀甀㈀　　㐀尀甀㈀　　㔀尀甀㈀　　㘀尀甀㈀　　㜀尀甀㈀　　㠀尀甀㈀　　㤀尀甀㈀　　愀尀甀㈀　㈀昀尀甀㈀　㔀昀尀甀㌀　　　尀甀㈀　㈀㠀尀甀㈀　㈀㤀崀⨀Ⰰ㼀嬀尀砀　㤀尀砀　愀尀砀　戀尀砀　挀尀砀　搀尀砀㈀　尀砀愀　尀甀㄀㘀㠀　尀甀㄀㠀　攀尀甀㈀　　　尀甀㈀　　㄀尀甀㈀　　㈀尀甀㈀　　㌀尀甀㈀　　㐀尀甀㈀　　㔀尀甀㈀　　㘀尀甀㈀　　㜀尀甀㈀　　㠀尀甀㈀　　㤀尀甀㈀　　愀尀甀㈀　㈀昀尀甀㈀　㔀昀尀甀㌀　　　尀甀㈀　㈀㠀尀甀㈀　㈀㤀崀⨀⼀椀最Ⰰഀഀ
        radial_gradient = R._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,਍        攀氀搀愀琀愀 㴀 笀紀Ⰰഀഀ
        sortByKey = function (a, b) {਍            爀攀琀甀爀渀 愀⸀欀攀礀 ⴀ 戀⸀欀攀礀㬀ഀഀ
        },਍        猀漀爀琀䈀礀一甀洀戀攀爀 㴀 昀甀渀挀琀椀漀渀 ⠀愀Ⰰ 戀⤀ 笀ഀഀ
            return toFloat(a) - toFloat(b);਍        紀Ⰰഀഀ
        fun = function () {},਍        瀀椀瀀攀 㴀 昀甀渀挀琀椀漀渀 ⠀砀⤀ 笀ഀഀ
            return x;਍        紀Ⰰഀഀ
        rectPath = R._rectPath = function (x, y, w, h, r) {਍            椀昀 ⠀爀⤀ 笀ഀഀ
                return [["M", x + r, y], ["l", w - r * 2, 0], ["a", r, r, 0, 0, 1, r, r], ["l", 0, h - r * 2], ["a", r, r, 0, 0, 1, -r, r], ["l", r * 2 - w, 0], ["a", r, r, 0, 0, 1, -r, -r], ["l", 0, r * 2 - h], ["a", r, r, 0, 0, 1, r, -r], ["z"]];਍            紀ഀഀ
            return [["M", x, y], ["l", w, 0], ["l", 0, h], ["l", -w, 0], ["z"]];਍        紀Ⰰഀഀ
        ellipsePath = function (x, y, rx, ry) {਍            椀昀 ⠀爀礀 㴀㴀 渀甀氀氀⤀ 笀ഀഀ
                ry = rx;਍            紀ഀഀ
            return [["M", x, y], ["m", 0, -ry], ["a", rx, ry, 0, 1, 1, 0, 2 * ry], ["a", rx, ry, 0, 1, 1, 0, -2 * ry], ["z"]];਍        紀Ⰰഀഀ
        getPath = R._getPath = {਍            瀀愀琀栀㨀 昀甀渀挀琀椀漀渀 ⠀攀氀⤀ 笀ഀഀ
                return el.attr("path");਍            紀Ⰰഀഀ
            circle: function (el) {਍                瘀愀爀 愀 㴀 攀氀⸀愀琀琀爀猀㬀ഀഀ
                return ellipsePath(a.cx, a.cy, a.r);਍            紀Ⰰഀഀ
            ellipse: function (el) {਍                瘀愀爀 愀 㴀 攀氀⸀愀琀琀爀猀㬀ഀഀ
                return ellipsePath(a.cx, a.cy, a.rx, a.ry);਍            紀Ⰰഀഀ
            rect: function (el) {਍                瘀愀爀 愀 㴀 攀氀⸀愀琀琀爀猀㬀ഀഀ
                return rectPath(a.x, a.y, a.width, a.height, a.r);਍            紀Ⰰഀഀ
            image: function (el) {਍                瘀愀爀 愀 㴀 攀氀⸀愀琀琀爀猀㬀ഀഀ
                return rectPath(a.x, a.y, a.width, a.height);਍            紀Ⰰഀഀ
            text: function (el) {਍                瘀愀爀 戀戀漀砀 㴀 攀氀⸀开最攀琀䈀䈀漀砀⠀⤀㬀ഀഀ
                return rectPath(bbox.x, bbox.y, bbox.width, bbox.height);਍            紀Ⰰഀഀ
            set : function(el) {਍                瘀愀爀 戀戀漀砀 㴀 攀氀⸀开最攀琀䈀䈀漀砀⠀⤀㬀ഀഀ
                return rectPath(bbox.x, bbox.y, bbox.width, bbox.height);਍            紀ഀഀ
        },਍        ⼀⨀尀ഀഀ
         * Raphael.mapPath਍         嬀 洀攀琀栀漀搀 崀ഀഀ
         **਍         ⨀ 吀爀愀渀猀昀漀爀洀 琀栀攀 瀀愀琀栀 猀琀爀椀渀最 眀椀琀栀 最椀瘀攀渀 洀愀琀爀椀砀⸀ഀഀ
         > Parameters਍         ⴀ 瀀愀琀栀 ⠀猀琀爀椀渀最⤀ 瀀愀琀栀 猀琀爀椀渀最ഀഀ
         - matrix (object) see @Matrix਍         㴀 ⠀猀琀爀椀渀最⤀ 琀爀愀渀猀昀漀爀洀攀搀 瀀愀琀栀 猀琀爀椀渀最ഀഀ
        \*/਍        洀愀瀀倀愀琀栀 㴀 刀⸀洀愀瀀倀愀琀栀 㴀 昀甀渀挀琀椀漀渀 ⠀瀀愀琀栀Ⰰ 洀愀琀爀椀砀⤀ 笀ഀഀ
            if (!matrix) {਍                爀攀琀甀爀渀 瀀愀琀栀㬀ഀഀ
            }਍            瘀愀爀 砀Ⰰ 礀Ⰰ 椀Ⰰ 樀Ⰰ 椀椀Ⰰ 樀樀Ⰰ 瀀愀琀栀椀㬀ഀഀ
            path = path2curve(path);਍            昀漀爀 ⠀椀 㴀 　Ⰰ 椀椀 㴀 瀀愀琀栀⸀氀攀渀最琀栀㬀 椀 㰀 椀椀㬀 椀⬀⬀⤀ 笀ഀഀ
                pathi = path[i];਍                昀漀爀 ⠀樀 㴀 ㄀Ⰰ 樀樀 㴀 瀀愀琀栀椀⸀氀攀渀最琀栀㬀 樀 㰀 樀樀㬀 樀 ⬀㴀 ㈀⤀ 笀ഀഀ
                    x = matrix.x(pathi[j], pathi[j + 1]);਍                    礀 㴀 洀愀琀爀椀砀⸀礀⠀瀀愀琀栀椀嬀樀崀Ⰰ 瀀愀琀栀椀嬀樀 ⬀ ㄀崀⤀㬀ഀഀ
                    pathi[j] = x;਍                    瀀愀琀栀椀嬀樀 ⬀ ㄀崀 㴀 礀㬀ഀഀ
                }਍            紀ഀഀ
            return path;਍        紀㬀ഀഀ
਍    刀⸀开最 㴀 最㬀ഀഀ
    /*\਍     ⨀ 刀愀瀀栀愀攀氀⸀琀礀瀀攀ഀഀ
     [ property (string) ]਍     ⨀⨀ഀഀ
     * Can be “SVG”, “VML” or empty, depending on browser support.਍    尀⨀⼀ഀഀ
    R.type = (g.win.SVGAngle || g.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML");਍    椀昀 ⠀刀⸀琀礀瀀攀 㴀㴀 ∀嘀䴀䰀∀⤀ 笀ഀഀ
        var d = g.doc.createElement("div"),਍            戀㬀ഀഀ
        d.innerHTML = '<v:shape adj="1"/>';਍        戀 㴀 搀⸀昀椀爀猀琀䌀栀椀氀搀㬀ഀഀ
        b.style.behavior = "url(#default#VML)";਍        椀昀 ⠀℀⠀戀 ☀☀ 琀礀瀀攀漀昀 戀⸀愀搀樀 㴀㴀 ∀漀戀樀攀挀琀∀⤀⤀ 笀ഀഀ
            return (R.type = E);਍        紀ഀഀ
        d = null;਍    紀ഀഀ
    /*\਍     ⨀ 刀愀瀀栀愀攀氀⸀猀瘀最ഀഀ
     [ property (boolean) ]਍     ⨀⨀ഀഀ
     * `true` if browser supports SVG.਍    尀⨀⼀ഀഀ
    /*\਍     ⨀ 刀愀瀀栀愀攀氀⸀瘀洀氀ഀഀ
     [ property (boolean) ]਍     ⨀⨀ഀഀ
     * `true` if browser supports VML.਍    尀⨀⼀ഀഀ
    R.svg = !(R.vml = R.type == "VML");਍    刀⸀开倀愀瀀攀爀 㴀 倀愀瀀攀爀㬀ഀഀ
    /*\਍     ⨀ 刀愀瀀栀愀攀氀⸀昀渀ഀഀ
     [ property (object) ]਍     ⨀⨀ഀഀ
     * You can add your own method to the canvas. For example if you want to draw a pie chart,਍     ⨀ 礀漀甀 挀愀渀 挀爀攀愀琀攀 礀漀甀爀 漀眀渀 瀀椀攀 挀栀愀爀琀 昀甀渀挀琀椀漀渀 愀渀搀 猀栀椀瀀 椀琀 愀猀 愀 刀愀瀀栀愀氀 瀀氀甀最椀渀⸀ 吀漀 搀漀 琀栀椀猀ഀഀ
     * you need to extend the `Raphael.fn` object. You should modify the `fn` object before a਍     ⨀ 刀愀瀀栀愀氀 椀渀猀琀愀渀挀攀 椀猀 挀爀攀愀琀攀搀Ⰰ 漀琀栀攀爀眀椀猀攀 椀琀 眀椀氀氀 琀愀欀攀 渀漀 攀昀昀攀挀琀⸀ 倀氀攀愀猀攀 渀漀琀攀 琀栀愀琀 琀栀攀ഀഀ
     * ability for namespaced plugins was removed in Raphael 2.0. It is up to the plugin to਍     ⨀ 攀渀猀甀爀攀 愀渀礀 渀愀洀攀猀瀀愀挀椀渀最 攀渀猀甀爀攀猀 瀀爀漀瀀攀爀 挀漀渀琀攀砀琀⸀ഀഀ
     > Usage਍     簀 刀愀瀀栀愀攀氀⸀昀渀⸀愀爀爀漀眀 㴀 昀甀渀挀琀椀漀渀 ⠀砀㄀Ⰰ 礀㄀Ⰰ 砀㈀Ⰰ 礀㈀Ⰰ 猀椀稀攀⤀ 笀ഀഀ
     |     return this.path( ... );਍     簀 紀㬀ഀഀ
     | // or create namespace਍     簀 刀愀瀀栀愀攀氀⸀昀渀⸀洀礀猀琀甀昀昀 㴀 笀ഀഀ
     |     arrow: function () {…},਍     簀     猀琀愀爀㨀 昀甀渀挀琀椀漀渀 ⠀⤀ 笀☀素Ⰰഀഀ
     |     // etc…਍     簀 紀㬀ഀഀ
     | var paper = Raphael(10, 10, 630, 480);਍     簀 ⼀⼀ 琀栀攀渀 甀猀攀 椀琀ഀഀ
     | paper.arrow(10, 10, 30, 30, 5).attr({fill: "#f00"});਍     簀 瀀愀瀀攀爀⸀洀礀猀琀甀昀昀⸀愀爀爀漀眀⠀⤀㬀ഀഀ
     | paper.mystuff.star();਍    尀⨀⼀ഀഀ
    R.fn = paperproto = Paper.prototype = R.prototype;਍    刀⸀开椀搀 㴀 　㬀ഀഀ
    R._oid = 0;਍    ⼀⨀尀ഀഀ
     * Raphael.is਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 䠀愀渀搀昀甀氀 漀昀 爀攀瀀氀愀挀攀洀攀渀琀猀 昀漀爀 怀琀礀瀀攀漀昀怀 漀瀀攀爀愀琀漀爀⸀ഀഀ
     > Parameters਍     ⴀ 漀 ⠀☀⤠ 愀渀礀 漀戀樀攀挀琀 漀爀 瀀爀椀洀椀琀椀瘀攀ഀഀ
     - type (string) name of the type, i.e. “string”, “function”, “number”, etc.਍     㴀 ⠀戀漀漀氀攀愀渀⤀ 椀猀 最椀瘀攀渀 瘀愀氀甀攀 椀猀 漀昀 最椀瘀攀渀 琀礀瀀攀ഀഀ
    \*/਍    刀⸀椀猀 㴀 昀甀渀挀琀椀漀渀 ⠀漀Ⰰ 琀礀瀀攀⤀ 笀ഀഀ
        type = lowerCase.call(type);਍        椀昀 ⠀琀礀瀀攀 㴀㴀 ∀昀椀渀椀琀攀∀⤀ 笀ഀഀ
            return !isnan[has](+o);਍        紀ഀഀ
        if (type == "array") {਍            爀攀琀甀爀渀 漀 椀渀猀琀愀渀挀攀漀昀 䄀爀爀愀礀㬀ഀഀ
        }਍        爀攀琀甀爀渀  ⠀琀礀瀀攀 㴀㴀 ∀渀甀氀氀∀ ☀☀ 漀 㴀㴀㴀 渀甀氀氀⤀ 簀簀ഀഀ
                (type == typeof o && o !== null) ||਍                ⠀琀礀瀀攀 㴀㴀 ∀漀戀樀攀挀琀∀ ☀☀ 漀 㴀㴀㴀 伀戀樀攀挀琀⠀漀⤀⤀ 簀簀ഀഀ
                (type == "array" && Array.isArray && Array.isArray(o)) ||਍                漀戀樀攀挀琀吀漀匀琀爀椀渀最⸀挀愀氀氀⠀漀⤀⸀猀氀椀挀攀⠀㠀Ⰰ ⴀ㄀⤀⸀琀漀䰀漀眀攀爀䌀愀猀攀⠀⤀ 㴀㴀 琀礀瀀攀㬀ഀഀ
    };਍ഀഀ
    function clone(obj) {਍        椀昀 ⠀琀礀瀀攀漀昀 漀戀樀 㴀㴀 ∀昀甀渀挀琀椀漀渀∀ 簀簀 伀戀樀攀挀琀⠀漀戀樀⤀ ℀㴀㴀 漀戀樀⤀ 笀ഀഀ
            return obj;਍        紀ഀഀ
        var res = new obj.constructor;਍        昀漀爀 ⠀瘀愀爀 欀攀礀 椀渀 漀戀樀⤀ 椀昀 ⠀漀戀樀嬀栀愀猀崀⠀欀攀礀⤀⤀ 笀ഀഀ
            res[key] = clone(obj[key]);਍        紀ഀഀ
        return res;਍    紀ഀഀ
਍    ⼀⨀尀ഀഀ
     * Raphael.angle਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 刀攀琀甀爀渀猀 愀渀最氀攀 戀攀琀眀攀攀渀 琀眀漀 漀爀 琀栀爀攀攀 瀀漀椀渀琀猀ഀഀ
     > Parameters਍     ⴀ 砀㄀ ⠀渀甀洀戀攀爀⤀ 砀 挀漀漀爀搀 漀昀 昀椀爀猀琀 瀀漀椀渀琀ഀഀ
     - y1 (number) y coord of first point਍     ⴀ 砀㈀ ⠀渀甀洀戀攀爀⤀ 砀 挀漀漀爀搀 漀昀 猀攀挀漀渀搀 瀀漀椀渀琀ഀഀ
     - y2 (number) y coord of second point਍     ⴀ 砀㌀ ⠀渀甀洀戀攀爀⤀ ⌀漀瀀琀椀漀渀愀氀 砀 挀漀漀爀搀 漀昀 琀栀椀爀搀 瀀漀椀渀琀ഀഀ
     - y3 (number) #optional y coord of third point਍     㴀 ⠀渀甀洀戀攀爀⤀ 愀渀最氀攀 椀渀 搀攀最爀攀攀猀⸀ഀഀ
    \*/਍    刀⸀愀渀最氀攀 㴀 昀甀渀挀琀椀漀渀 ⠀砀㄀Ⰰ 礀㄀Ⰰ 砀㈀Ⰰ 礀㈀Ⰰ 砀㌀Ⰰ 礀㌀⤀ 笀ഀഀ
        if (x3 == null) {਍            瘀愀爀 砀 㴀 砀㄀ ⴀ 砀㈀Ⰰഀഀ
                y = y1 - y2;਍            椀昀 ⠀℀砀 ☀☀ ℀礀⤀ 笀ഀഀ
                return 0;਍            紀ഀഀ
            return (180 + math.atan2(-y, -x) * 180 / PI + 360) % 360;਍        紀 攀氀猀攀 笀ഀഀ
            return R.angle(x1, y1, x3, y3) - R.angle(x2, y2, x3, y3);਍        紀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * Raphael.rad਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 吀爀愀渀猀昀漀爀洀 愀渀最氀攀 琀漀 爀愀搀椀愀渀猀ഀഀ
     > Parameters਍     ⴀ 搀攀最 ⠀渀甀洀戀攀爀⤀ 愀渀最氀攀 椀渀 搀攀最爀攀攀猀ഀഀ
     = (number) angle in radians.਍    尀⨀⼀ഀഀ
    R.rad = function (deg) {਍        爀攀琀甀爀渀 搀攀最 ─ ㌀㘀　 ⨀ 倀䤀 ⼀ ㄀㠀　㬀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * Raphael.deg਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 吀爀愀渀猀昀漀爀洀 愀渀最氀攀 琀漀 搀攀最爀攀攀猀ഀഀ
     > Parameters਍     ⴀ 爀愀搀 ⠀渀甀洀戀攀爀⤀ 愀渀最氀攀 椀渀 爀愀搀椀愀渀猀ഀഀ
     = (number) angle in degrees.਍    尀⨀⼀ഀഀ
    R.deg = function (rad) {਍        爀攀琀甀爀渀 䴀愀琀栀⸀爀漀甀渀搀 ⠀⠀爀愀搀 ⨀ ㄀㠀　 ⼀ 倀䤀─ ㌀㘀　⤀⨀ ㄀　　　⤀ ⼀ ㄀　　　㬀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * Raphael.snapTo਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 匀渀愀瀀猀 最椀瘀攀渀 瘀愀氀甀攀 琀漀 最椀瘀攀渀 最爀椀搀⸀ഀഀ
     > Parameters਍     ⴀ 瘀愀氀甀攀猀 ⠀愀爀爀愀礀簀渀甀洀戀攀爀⤀ 最椀瘀攀渀 愀爀爀愀礀 漀昀 瘀愀氀甀攀猀 漀爀 猀琀攀瀀 漀昀 琀栀攀 最爀椀搀ഀഀ
     - value (number) value to adjust਍     ⴀ 琀漀氀攀爀愀渀挀攀 ⠀渀甀洀戀攀爀⤀ ⌀漀瀀琀椀漀渀愀氀 琀漀氀攀爀愀渀挀攀 昀漀爀 猀渀愀瀀瀀椀渀最⸀ 䐀攀昀愀甀氀琀 椀猀 怀㄀　怀⸀ഀഀ
     = (number) adjusted value.਍    尀⨀⼀ഀഀ
    R.snapTo = function (values, value, tolerance) {਍        琀漀氀攀爀愀渀挀攀 㴀 刀⸀椀猀⠀琀漀氀攀爀愀渀挀攀Ⰰ ∀昀椀渀椀琀攀∀⤀ 㼀 琀漀氀攀爀愀渀挀攀 㨀 ㄀　㬀ഀഀ
        if (R.is(values, array)) {਍            瘀愀爀 椀 㴀 瘀愀氀甀攀猀⸀氀攀渀最琀栀㬀ഀഀ
            while (i--) if (abs(values[i] - value) <= tolerance) {਍                爀攀琀甀爀渀 瘀愀氀甀攀猀嬀椀崀㬀ഀഀ
            }਍        紀 攀氀猀攀 笀ഀഀ
            values = +values;਍            瘀愀爀 爀攀洀 㴀 瘀愀氀甀攀 ─ 瘀愀氀甀攀猀㬀ഀഀ
            if (rem < tolerance) {਍                爀攀琀甀爀渀 瘀愀氀甀攀 ⴀ 爀攀洀㬀ഀഀ
            }਍            椀昀 ⠀爀攀洀 㸀 瘀愀氀甀攀猀 ⴀ 琀漀氀攀爀愀渀挀攀⤀ 笀ഀഀ
                return value - rem + values;਍            紀ഀഀ
        }਍        爀攀琀甀爀渀 瘀愀氀甀攀㬀ഀഀ
    };਍ഀഀ
    /*\਍     ⨀ 刀愀瀀栀愀攀氀⸀挀爀攀愀琀攀唀唀䤀䐀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Returns RFC4122, version 4 ID਍    尀⨀⼀ഀഀ
    var createUUID = R.createUUID = (function (uuidRegEx, uuidReplacer) {਍        爀攀琀甀爀渀 昀甀渀挀琀椀漀渀 ⠀⤀ 笀ഀഀ
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(uuidRegEx, uuidReplacer).toUpperCase();਍        紀㬀ഀഀ
    })(/[xy]/g, function (c) {਍        瘀愀爀 爀 㴀 洀愀琀栀⸀爀愀渀搀漀洀⠀⤀ ⨀ ㄀㘀 簀 　Ⰰഀഀ
            v = c == "x" ? r : (r & 3 | 8);਍        爀攀琀甀爀渀 瘀⸀琀漀匀琀爀椀渀最⠀㄀㘀⤀㬀ഀഀ
    });਍ഀഀ
    /*\਍     ⨀ 刀愀瀀栀愀攀氀⸀猀攀琀圀椀渀搀漀眀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Used when you need to draw in `&lt;iframe>`. Switched window to the iframe one.਍     㸀 倀愀爀愀洀攀琀攀爀猀ഀഀ
     - newwin (window) new window object਍    尀⨀⼀ഀഀ
    R.setWindow = function (newwin) {਍        攀瘀攀⠀∀爀愀瀀栀愀攀氀⸀猀攀琀圀椀渀搀漀眀∀Ⰰ 刀Ⰰ 最⸀眀椀渀Ⰰ 渀攀眀眀椀渀⤀㬀ഀഀ
        g.win = newwin;਍        最⸀搀漀挀 㴀 最⸀眀椀渀⸀搀漀挀甀洀攀渀琀㬀ഀഀ
        if (R._engine.initWin) {਍            刀⸀开攀渀最椀渀攀⸀椀渀椀琀圀椀渀⠀最⸀眀椀渀⤀㬀ഀഀ
        }਍    紀㬀ഀഀ
    var toHex = function (color) {਍        椀昀 ⠀刀⸀瘀洀氀⤀ 笀ഀഀ
            // http://dean.edwards.name/weblog/2009/10/convert-any-colour-value-to-hex-in-msie/਍            瘀愀爀 琀爀椀洀 㴀 ⼀帀尀猀⬀簀尀猀⬀␀⼀最㬀ഀഀ
            var bod;਍            琀爀礀 笀ഀഀ
                var docum = new ActiveXObject("htmlfile");਍                搀漀挀甀洀⸀眀爀椀琀攀⠀∀㰀戀漀搀礀㸀∀⤀㬀ഀഀ
                docum.close();਍                戀漀搀 㴀 搀漀挀甀洀⸀戀漀搀礀㬀ഀഀ
            } catch(e) {਍                戀漀搀 㴀 挀爀攀愀琀攀倀漀瀀甀瀀⠀⤀⸀搀漀挀甀洀攀渀琀⸀戀漀搀礀㬀ഀഀ
            }਍            瘀愀爀 爀愀渀最攀 㴀 戀漀搀⸀挀爀攀愀琀攀吀攀砀琀刀愀渀最攀⠀⤀㬀ഀഀ
            toHex = cacher(function (color) {਍                琀爀礀 笀ഀഀ
                    bod.style.color = Str(color).replace(trim, E);਍                    瘀愀爀 瘀愀氀甀攀 㴀 爀愀渀最攀⸀焀甀攀爀礀䌀漀洀洀愀渀搀嘀愀氀甀攀⠀∀䘀漀爀攀䌀漀氀漀爀∀⤀㬀ഀഀ
                    value = ((value & 255) << 16) | (value & 65280) | ((value & 16711680) >>> 16);਍                    爀攀琀甀爀渀 ∀⌀∀ ⬀ ⠀∀　　　　　　∀ ⬀ 瘀愀氀甀攀⸀琀漀匀琀爀椀渀最⠀㄀㘀⤀⤀⸀猀氀椀挀攀⠀ⴀ㘀⤀㬀ഀഀ
                } catch(e) {਍                    爀攀琀甀爀渀 ∀渀漀渀攀∀㬀ഀഀ
                }਍            紀⤀㬀ഀഀ
        } else {਍            瘀愀爀 椀 㴀 最⸀搀漀挀⸀挀爀攀愀琀攀䔀氀攀洀攀渀琀⠀∀椀∀⤀㬀ഀഀ
            i.title = "Rapha\xebl Colour Picker";਍            椀⸀猀琀礀氀攀⸀搀椀猀瀀氀愀礀 㴀 ∀渀漀渀攀∀㬀ഀഀ
            g.doc.body.appendChild(i);਍            琀漀䠀攀砀 㴀 挀愀挀栀攀爀⠀昀甀渀挀琀椀漀渀 ⠀挀漀氀漀爀⤀ 笀ഀഀ
                i.style.color = color;਍                爀攀琀甀爀渀 最⸀搀漀挀⸀搀攀昀愀甀氀琀嘀椀攀眀⸀最攀琀䌀漀洀瀀甀琀攀搀匀琀礀氀攀⠀椀Ⰰ 䔀⤀⸀最攀琀倀爀漀瀀攀爀琀礀嘀愀氀甀攀⠀∀挀漀氀漀爀∀⤀㬀ഀഀ
            });਍        紀ഀഀ
        return toHex(color);਍    紀Ⰰഀഀ
    hsbtoString = function () {਍        爀攀琀甀爀渀 ∀栀猀戀⠀∀ ⬀ 嬀琀栀椀猀⸀栀Ⰰ 琀栀椀猀⸀猀Ⰰ 琀栀椀猀⸀戀崀 ⬀ ∀⤀∀㬀ഀഀ
    },਍    栀猀氀琀漀匀琀爀椀渀最 㴀 昀甀渀挀琀椀漀渀 ⠀⤀ 笀ഀഀ
        return "hsl(" + [this.h, this.s, this.l] + ")";਍    紀Ⰰഀഀ
    rgbtoString = function () {਍        爀攀琀甀爀渀 琀栀椀猀⸀栀攀砀㬀ഀഀ
    },਍    瀀爀攀瀀愀爀攀刀䜀䈀 㴀 昀甀渀挀琀椀漀渀 ⠀爀Ⰰ 最Ⰰ 戀⤀ 笀ഀഀ
        if (g == null && R.is(r, "object") && "r" in r && "g" in r && "b" in r) {਍            戀 㴀 爀⸀戀㬀ഀഀ
            g = r.g;਍            爀 㴀 爀⸀爀㬀ഀഀ
        }਍        椀昀 ⠀最 㴀㴀 渀甀氀氀 ☀☀ 刀⸀椀猀⠀爀Ⰰ 猀琀爀椀渀最⤀⤀ 笀ഀഀ
            var clr = R.getRGB(r);਍            爀 㴀 挀氀爀⸀爀㬀ഀഀ
            g = clr.g;਍            戀 㴀 挀氀爀⸀戀㬀ഀഀ
        }਍        椀昀 ⠀爀 㸀 ㄀ 簀簀 最 㸀 ㄀ 簀簀 戀 㸀 ㄀⤀ 笀ഀഀ
            r /= 255;਍            最 ⼀㴀 ㈀㔀㔀㬀ഀഀ
            b /= 255;਍        紀ഀഀ
਍        爀攀琀甀爀渀 嬀爀Ⰰ 最Ⰰ 戀崀㬀ഀഀ
    },਍    瀀愀挀欀愀最攀刀䜀䈀 㴀 昀甀渀挀琀椀漀渀 ⠀爀Ⰰ 最Ⰰ 戀Ⰰ 漀⤀ 笀ഀഀ
        r *= 255;਍        最 ⨀㴀 ㈀㔀㔀㬀ഀഀ
        b *= 255;਍        瘀愀爀 爀最戀 㴀 笀ഀഀ
            r: r,਍            最㨀 最Ⰰഀഀ
            b: b,਍            栀攀砀㨀 刀⸀爀最戀⠀爀Ⰰ 最Ⰰ 戀⤀Ⰰഀഀ
            toString: rgbtoString਍        紀㬀ഀഀ
        R.is(o, "finite") && (rgb.opacity = o);਍        爀攀琀甀爀渀 爀最戀㬀ഀഀ
    };਍ഀഀ
    /*\਍     ⨀ 刀愀瀀栀愀攀氀⸀挀漀氀漀爀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Parses the color string and returns object with all values for the given color.਍     㸀 倀愀爀愀洀攀琀攀爀猀ഀഀ
     - clr (string) color string in one of the supported formats (see @Raphael.getRGB)਍     㴀 ⠀漀戀樀攀挀琀⤀ 䌀漀洀戀椀渀攀搀 刀䜀䈀 ☀ 䠀匀䈀 漀戀樀攀挀琀 椀渀 昀漀爀洀愀琀㨀ഀഀ
     o {਍     漀     爀 ⠀渀甀洀戀攀爀⤀ 爀攀搀Ⰰഀഀ
     o     g (number) green,਍     漀     戀 ⠀渀甀洀戀攀爀⤀ 戀氀甀攀Ⰰഀഀ
     o     hex (string) color in HTML/CSS format: #••••••,਍     漀     攀爀爀漀爀 ⠀戀漀漀氀攀愀渀⤀ 怀琀爀甀攀怀 椀昀 猀琀爀椀渀最 挀愀渀ᤀ琠 戀攀 瀀愀爀猀攀搀Ⰰഀഀ
     o     h (number) hue,਍     漀     猀 ⠀渀甀洀戀攀爀⤀ 猀愀琀甀爀愀琀椀漀渀Ⰰഀഀ
     o     v (number) value (brightness),਍     漀     氀 ⠀渀甀洀戀攀爀⤀ 氀椀最栀琀渀攀猀猀ഀഀ
     o }਍    尀⨀⼀ഀഀ
    R.color = function (clr) {਍        瘀愀爀 爀最戀㬀ഀഀ
        if (R.is(clr, "object") && "h" in clr && "s" in clr && "b" in clr) {਍            爀最戀 㴀 刀⸀栀猀戀㈀爀最戀⠀挀氀爀⤀㬀ഀഀ
            clr.r = rgb.r;਍            挀氀爀⸀最 㴀 爀最戀⸀最㬀ഀഀ
            clr.b = rgb.b;਍            挀氀爀⸀栀攀砀 㴀 爀最戀⸀栀攀砀㬀ഀഀ
        } else if (R.is(clr, "object") && "h" in clr && "s" in clr && "l" in clr) {਍            爀最戀 㴀 刀⸀栀猀氀㈀爀最戀⠀挀氀爀⤀㬀ഀഀ
            clr.r = rgb.r;਍            挀氀爀⸀最 㴀 爀最戀⸀最㬀ഀഀ
            clr.b = rgb.b;਍            挀氀爀⸀栀攀砀 㴀 爀最戀⸀栀攀砀㬀ഀഀ
        } else {਍            椀昀 ⠀刀⸀椀猀⠀挀氀爀Ⰰ ∀猀琀爀椀渀最∀⤀⤀ 笀ഀഀ
                clr = R.getRGB(clr);਍            紀ഀഀ
            if (R.is(clr, "object") && "r" in clr && "g" in clr && "b" in clr) {਍                爀最戀 㴀 刀⸀爀最戀㈀栀猀氀⠀挀氀爀⤀㬀ഀഀ
                clr.h = rgb.h;਍                挀氀爀⸀猀 㴀 爀最戀⸀猀㬀ഀഀ
                clr.l = rgb.l;਍                爀最戀 㴀 刀⸀爀最戀㈀栀猀戀⠀挀氀爀⤀㬀ഀഀ
                clr.v = rgb.b;਍            紀 攀氀猀攀 笀ഀഀ
                clr = {hex: "none"};਍                挀氀爀⸀爀 㴀 挀氀爀⸀最 㴀 挀氀爀⸀戀 㴀 挀氀爀⸀栀 㴀 挀氀爀⸀猀 㴀 挀氀爀⸀瘀 㴀 挀氀爀⸀氀 㴀 ⴀ㄀㬀ഀഀ
            }਍        紀ഀഀ
        clr.toString = rgbtoString;਍        爀攀琀甀爀渀 挀氀爀㬀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * Raphael.hsb2rgb਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 䌀漀渀瘀攀爀琀猀 䠀匀䈀 瘀愀氀甀攀猀 琀漀 刀䜀䈀 漀戀樀攀挀琀⸀ഀഀ
     > Parameters਍     ⴀ 栀 ⠀渀甀洀戀攀爀⤀ 栀甀攀ഀഀ
     - s (number) saturation਍     ⴀ 瘀 ⠀渀甀洀戀攀爀⤀ 瘀愀氀甀攀 漀爀 戀爀椀最栀琀渀攀猀猀ഀഀ
     = (object) RGB object in format:਍     漀 笀ഀഀ
     o     r (number) red,਍     漀     最 ⠀渀甀洀戀攀爀⤀ 最爀攀攀渀Ⰰഀഀ
     o     b (number) blue,਍     漀     栀攀砀 ⠀猀琀爀椀渀最⤀ 挀漀氀漀爀 椀渀 䠀吀䴀䰀⼀䌀匀匀 昀漀爀洀愀琀㨀 ⌀∀∠∠∠∠∠ഠഀ
     o }਍    尀⨀⼀ഀഀ
    R.hsb2rgb = function (h, s, v, o) {਍        椀昀 ⠀琀栀椀猀⸀椀猀⠀栀Ⰰ ∀漀戀樀攀挀琀∀⤀ ☀☀ ∀栀∀ 椀渀 栀 ☀☀ ∀猀∀ 椀渀 栀 ☀☀ ∀戀∀ 椀渀 栀⤀ 笀ഀഀ
            v = h.b;਍            猀 㴀 栀⸀猀㬀ഀഀ
            o = h.o;਍            栀 㴀 栀⸀栀㬀ഀഀ
        }਍        栀 ⨀㴀 ㌀㘀　㬀ഀഀ
        var R, G, B, X, C;਍        栀 㴀 ⠀栀 ─ ㌀㘀　⤀ ⼀ 㘀　㬀ഀഀ
        C = v * s;਍        堀 㴀 䌀 ⨀ ⠀㄀ ⴀ 愀戀猀⠀栀 ─ ㈀ ⴀ ㄀⤀⤀㬀ഀഀ
        R = G = B = v - C;਍ഀഀ
        h = ~~h;਍        刀 ⬀㴀 嬀䌀Ⰰ 堀Ⰰ 　Ⰰ 　Ⰰ 堀Ⰰ 䌀崀嬀栀崀㬀ഀഀ
        G += [X, C, C, X, 0, 0][h];਍        䈀 ⬀㴀 嬀　Ⰰ 　Ⰰ 堀Ⰰ 䌀Ⰰ 䌀Ⰰ 堀崀嬀栀崀㬀ഀഀ
        return packageRGB(R, G, B, o);਍    紀㬀ഀഀ
    /*\਍     ⨀ 刀愀瀀栀愀攀氀⸀栀猀氀㈀爀最戀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Converts HSL values to RGB object.਍     㸀 倀愀爀愀洀攀琀攀爀猀ഀഀ
     - h (number) hue਍     ⴀ 猀 ⠀渀甀洀戀攀爀⤀ 猀愀琀甀爀愀琀椀漀渀ഀഀ
     - l (number) luminosity਍     㴀 ⠀漀戀樀攀挀琀⤀ 刀䜀䈀 漀戀樀攀挀琀 椀渀 昀漀爀洀愀琀㨀ഀഀ
     o {਍     漀     爀 ⠀渀甀洀戀攀爀⤀ 爀攀搀Ⰰഀഀ
     o     g (number) green,਍     漀     戀 ⠀渀甀洀戀攀爀⤀ 戀氀甀攀Ⰰഀഀ
     o     hex (string) color in HTML/CSS format: #••••••਍     漀 紀ഀഀ
    \*/਍    刀⸀栀猀氀㈀爀最戀 㴀 昀甀渀挀琀椀漀渀 ⠀栀Ⰰ 猀Ⰰ 氀Ⰰ 漀⤀ 笀ഀഀ
        if (this.is(h, "object") && "h" in h && "s" in h && "l" in h) {਍            氀 㴀 栀⸀氀㬀ഀഀ
            s = h.s;਍            栀 㴀 栀⸀栀㬀ഀഀ
        }਍        椀昀 ⠀栀 㸀 ㄀ 簀簀 猀 㸀 ㄀ 簀簀 氀 㸀 ㄀⤀ 笀ഀഀ
            h /= 360;਍            猀 ⼀㴀 ㄀　　㬀ഀഀ
            l /= 100;਍        紀ഀഀ
        h *= 360;਍        瘀愀爀 刀Ⰰ 䜀Ⰰ 䈀Ⰰ 堀Ⰰ 䌀㬀ഀഀ
        h = (h % 360) / 60;਍        䌀 㴀 ㈀ ⨀ 猀 ⨀ ⠀氀 㰀 ⸀㔀 㼀 氀 㨀 ㄀ ⴀ 氀⤀㬀ഀഀ
        X = C * (1 - abs(h % 2 - 1));਍        刀 㴀 䜀 㴀 䈀 㴀 氀 ⴀ 䌀 ⼀ ㈀㬀ഀഀ
਍        栀 㴀 縀縀栀㬀ഀഀ
        R += [C, X, 0, 0, X, C][h];਍        䜀 ⬀㴀 嬀堀Ⰰ 䌀Ⰰ 䌀Ⰰ 堀Ⰰ 　Ⰰ 　崀嬀栀崀㬀ഀഀ
        B += [0, 0, X, C, C, X][h];਍        爀攀琀甀爀渀 瀀愀挀欀愀最攀刀䜀䈀⠀刀Ⰰ 䜀Ⰰ 䈀Ⰰ 漀⤀㬀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * Raphael.rgb2hsb਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 䌀漀渀瘀攀爀琀猀 刀䜀䈀 瘀愀氀甀攀猀 琀漀 䠀匀䈀 漀戀樀攀挀琀⸀ഀഀ
     > Parameters਍     ⴀ 爀 ⠀渀甀洀戀攀爀⤀ 爀攀搀ഀഀ
     - g (number) green਍     ⴀ 戀 ⠀渀甀洀戀攀爀⤀ 戀氀甀攀ഀഀ
     = (object) HSB object in format:਍     漀 笀ഀഀ
     o     h (number) hue਍     漀     猀 ⠀渀甀洀戀攀爀⤀ 猀愀琀甀爀愀琀椀漀渀ഀഀ
     o     b (number) brightness਍     漀 紀ഀഀ
    \*/਍    刀⸀爀最戀㈀栀猀戀 㴀 昀甀渀挀琀椀漀渀 ⠀爀Ⰰ 最Ⰰ 戀⤀ 笀ഀഀ
        b = prepareRGB(r, g, b);਍        爀 㴀 戀嬀　崀㬀ഀഀ
        g = b[1];਍        戀 㴀 戀嬀㈀崀㬀ഀഀ
਍        瘀愀爀 䠀Ⰰ 匀Ⰰ 嘀Ⰰ 䌀㬀ഀഀ
        V = mmax(r, g, b);਍        䌀 㴀 嘀 ⴀ 洀洀椀渀⠀爀Ⰰ 最Ⰰ 戀⤀㬀ഀഀ
        H = (C == 0 ? null :਍             嘀 㴀㴀 爀 㼀 ⠀最 ⴀ 戀⤀ ⼀ 䌀 㨀ഀഀ
             V == g ? (b - r) / C + 2 :਍                      ⠀爀 ⴀ 最⤀ ⼀ 䌀 ⬀ 㐀ഀഀ
            );਍        䠀 㴀 ⠀⠀䠀 ⬀ ㌀㘀　⤀ ─ 㘀⤀ ⨀ 㘀　 ⼀ ㌀㘀　㬀ഀഀ
        S = C == 0 ? 0 : C / V;਍        爀攀琀甀爀渀 笀栀㨀 䠀Ⰰ 猀㨀 匀Ⰰ 戀㨀 嘀Ⰰ 琀漀匀琀爀椀渀最㨀 栀猀戀琀漀匀琀爀椀渀最紀㬀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * Raphael.rgb2hsl਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 䌀漀渀瘀攀爀琀猀 刀䜀䈀 瘀愀氀甀攀猀 琀漀 䠀匀䰀 漀戀樀攀挀琀⸀ഀഀ
     > Parameters਍     ⴀ 爀 ⠀渀甀洀戀攀爀⤀ 爀攀搀ഀഀ
     - g (number) green਍     ⴀ 戀 ⠀渀甀洀戀攀爀⤀ 戀氀甀攀ഀഀ
     = (object) HSL object in format:਍     漀 笀ഀഀ
     o     h (number) hue਍     漀     猀 ⠀渀甀洀戀攀爀⤀ 猀愀琀甀爀愀琀椀漀渀ഀഀ
     o     l (number) luminosity਍     漀 紀ഀഀ
    \*/਍    刀⸀爀最戀㈀栀猀氀 㴀 昀甀渀挀琀椀漀渀 ⠀爀Ⰰ 最Ⰰ 戀⤀ 笀ഀഀ
        b = prepareRGB(r, g, b);਍        爀 㴀 戀嬀　崀㬀ഀഀ
        g = b[1];਍        戀 㴀 戀嬀㈀崀㬀ഀഀ
਍        瘀愀爀 䠀Ⰰ 匀Ⰰ 䰀Ⰰ 䴀Ⰰ 洀Ⰰ 䌀㬀ഀഀ
        M = mmax(r, g, b);਍        洀 㴀 洀洀椀渀⠀爀Ⰰ 最Ⰰ 戀⤀㬀ഀഀ
        C = M - m;਍        䠀 㴀 ⠀䌀 㴀㴀 　 㼀 渀甀氀氀 㨀ഀഀ
             M == r ? (g - b) / C :਍             䴀 㴀㴀 最 㼀 ⠀戀 ⴀ 爀⤀ ⼀ 䌀 ⬀ ㈀ 㨀ഀഀ
                      (r - g) / C + 4);਍        䠀 㴀 ⠀⠀䠀 ⬀ ㌀㘀　⤀ ─ 㘀⤀ ⨀ 㘀　 ⼀ ㌀㘀　㬀ഀഀ
        L = (M + m) / 2;਍        匀 㴀 ⠀䌀 㴀㴀 　 㼀 　 㨀ഀഀ
             L < .5 ? C / (2 * L) :਍                      䌀 ⼀ ⠀㈀ ⴀ ㈀ ⨀ 䰀⤀⤀㬀ഀഀ
        return {h: H, s: S, l: L, toString: hsltoString};਍    紀㬀ഀഀ
    R._path2string = function () {਍        爀攀琀甀爀渀 琀栀椀猀⸀樀漀椀渀⠀∀Ⰰ∀⤀⸀爀攀瀀氀愀挀攀⠀瀀㈀猀Ⰰ ∀␀㄀∀⤀㬀ഀഀ
    };਍    昀甀渀挀琀椀漀渀 爀攀瀀甀猀栀⠀愀爀爀愀礀Ⰰ 椀琀攀洀⤀ 笀ഀഀ
        for (var i = 0, ii = array.length; i < ii; i++) if (array[i] === item) {਍            爀攀琀甀爀渀 愀爀爀愀礀⸀瀀甀猀栀⠀愀爀爀愀礀⸀猀瀀氀椀挀攀⠀椀Ⰰ ㄀⤀嬀　崀⤀㬀ഀഀ
        }਍    紀ഀഀ
    function cacher(f, scope, postprocessor) {਍        昀甀渀挀琀椀漀渀 渀攀眀昀⠀⤀ 笀ഀഀ
            var arg = Array.prototype.slice.call(arguments, 0),਍                愀爀最猀 㴀 愀爀最⸀樀漀椀渀⠀∀尀甀㈀㐀　　∀⤀Ⰰഀഀ
                cache = newf.cache = newf.cache || {},਍                挀漀甀渀琀 㴀 渀攀眀昀⸀挀漀甀渀琀 㴀 渀攀眀昀⸀挀漀甀渀琀 簀簀 嬀崀㬀ഀഀ
            if (cache[has](args)) {਍                爀攀瀀甀猀栀⠀挀漀甀渀琀Ⰰ 愀爀最猀⤀㬀ഀഀ
                return postprocessor ? postprocessor(cache[args]) : cache[args];਍            紀ഀഀ
            count.length >= 1e3 && delete cache[count.shift()];਍            挀漀甀渀琀⸀瀀甀猀栀⠀愀爀最猀⤀㬀ഀഀ
            cache[args] = f[apply](scope, arg);਍            爀攀琀甀爀渀 瀀漀猀琀瀀爀漀挀攀猀猀漀爀 㼀 瀀漀猀琀瀀爀漀挀攀猀猀漀爀⠀挀愀挀栀攀嬀愀爀最猀崀⤀ 㨀 挀愀挀栀攀嬀愀爀最猀崀㬀ഀഀ
        }਍        爀攀琀甀爀渀 渀攀眀昀㬀ഀഀ
    }਍ഀഀ
    var preload = R._preload = function (src, f) {਍        瘀愀爀 椀洀最 㴀 最⸀搀漀挀⸀挀爀攀愀琀攀䔀氀攀洀攀渀琀⠀∀椀洀最∀⤀㬀ഀഀ
        img.style.cssText = "position:absolute;left:-9999em;top:-9999em";਍        椀洀最⸀漀渀氀漀愀搀 㴀 昀甀渀挀琀椀漀渀 ⠀⤀ 笀ഀഀ
            f.call(this);਍            琀栀椀猀⸀漀渀氀漀愀搀 㴀 渀甀氀氀㬀ഀഀ
            g.doc.body.removeChild(this);਍        紀㬀ഀഀ
        img.onerror = function () {਍            最⸀搀漀挀⸀戀漀搀礀⸀爀攀洀漀瘀攀䌀栀椀氀搀⠀琀栀椀猀⤀㬀ഀഀ
        };਍        最⸀搀漀挀⸀戀漀搀礀⸀愀瀀瀀攀渀搀䌀栀椀氀搀⠀椀洀最⤀㬀ഀഀ
        img.src = src;਍    紀㬀ഀഀ
਍    昀甀渀挀琀椀漀渀 挀氀爀吀漀匀琀爀椀渀最⠀⤀ 笀ഀഀ
        return this.hex;਍    紀ഀഀ
਍    ⼀⨀尀ഀഀ
     * Raphael.getRGB਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 倀愀爀猀攀猀 挀漀氀漀甀爀 猀琀爀椀渀最 愀猀 刀䜀䈀 漀戀樀攀挀琀ഀഀ
     > Parameters਍     ⴀ 挀漀氀漀甀爀 ⠀猀琀爀椀渀最⤀ 挀漀氀漀甀爀 猀琀爀椀渀最 椀渀 漀渀攀 漀昀 昀漀爀洀愀琀猀㨀ഀഀ
     # <ul>਍     ⌀     㰀氀椀㸀䌀漀氀漀甀爀 渀愀洀攀 ⠀ᰀ㰠挀漀搀攀㸀爀攀搀㰀⼀挀漀搀攀㸀ᴀⰠ ᰀ㰠挀漀搀攀㸀最爀攀攀渀㰀⼀挀漀搀攀㸀ᴀⰠ ᰀ㰠挀漀搀攀㸀挀漀爀渀昀氀漀眀攀爀戀氀甀攀㰀⼀挀漀搀攀㸀ᴀⰠ 攀琀挀⤀㰀⼀氀椀㸀ഀഀ
     #     <li>#••• — shortened HTML colour: (“<code>#000</code>”, “<code>#fc0</code>”, etc)</li>਍     ⌀     㰀氀椀㸀⌀∀∠∠∠∠∠†᐀†昀甀氀氀 氀攀渀最琀栀 䠀吀䴀䰀 挀漀氀漀甀爀㨀 ⠀ᰀ㰠挀漀搀攀㸀⌀　　　　　　㰀⼀挀漀搀攀㸀ᴀⰠ ᰀ㰠挀漀搀攀㸀⌀戀搀㈀㌀　　㰀⼀挀漀搀攀㸀ᴀ⤠㰀⼀氀椀㸀ഀഀ
     #     <li>rgb(•••, •••, •••) — red, green and blue channels’ values: (“<code>rgb(200,&nbsp;100,&nbsp;0)</code>”)</li>਍     ⌀     㰀氀椀㸀爀最戀⠀∀∠∠┠Ⰰ ∀∠∠┠Ⰰ ∀∠∠┠⤀ ᐀†猀愀洀攀 愀猀 愀戀漀瘀攀Ⰰ 戀甀琀 椀渀 ─㨀 ⠀ᰀ㰠挀漀搀攀㸀爀最戀⠀㄀　　─Ⰰ☀渀戀猀瀀㬀㄀㜀㔀─Ⰰ☀渀戀猀瀀㬀　─⤀㰀⼀挀漀搀攀㸀ᴀ⤠㰀⼀氀椀㸀ഀഀ
     #     <li>hsb(•••, •••, •••) — hue, saturation and brightness values: (“<code>hsb(0.5,&nbsp;0.25,&nbsp;1)</code>”)</li>਍     ⌀     㰀氀椀㸀栀猀戀⠀∀∠∠┠Ⰰ ∀∠∠┠Ⰰ ∀∠∠┠⤀ ᐀†猀愀洀攀 愀猀 愀戀漀瘀攀Ⰰ 戀甀琀 椀渀 ─㰀⼀氀椀㸀ഀഀ
     #     <li>hsl(•••, •••, •••) — same as hsb</li>਍     ⌀     㰀氀椀㸀栀猀氀⠀∀∠∠┠Ⰰ ∀∠∠┠Ⰰ ∀∠∠┠⤀ ᐀†猀愀洀攀 愀猀 栀猀戀㰀⼀氀椀㸀ഀഀ
     # </ul>਍     㴀 ⠀漀戀樀攀挀琀⤀ 刀䜀䈀 漀戀樀攀挀琀 椀渀 昀漀爀洀愀琀㨀ഀഀ
     o {਍     漀     爀 ⠀渀甀洀戀攀爀⤀ 爀攀搀Ⰰഀഀ
     o     g (number) green,਍     漀     戀 ⠀渀甀洀戀攀爀⤀ 戀氀甀攀ഀഀ
     o     hex (string) color in HTML/CSS format: #••••••,਍     漀     攀爀爀漀爀 ⠀戀漀漀氀攀愀渀⤀ 琀爀甀攀 椀昀 猀琀爀椀渀最 挀愀渀ᤀ琠 戀攀 瀀愀爀猀攀搀ഀഀ
     o }਍    尀⨀⼀ഀഀ
    R.getRGB = cacher(function (colour) {਍        椀昀 ⠀℀挀漀氀漀甀爀 簀簀 ℀℀⠀⠀挀漀氀漀甀爀 㴀 匀琀爀⠀挀漀氀漀甀爀⤀⤀⸀椀渀搀攀砀伀昀⠀∀ⴀ∀⤀ ⬀ ㄀⤀⤀ 笀ഀഀ
            return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: clrToString};਍        紀ഀഀ
        if (colour == "none") {਍            爀攀琀甀爀渀 笀爀㨀 ⴀ㄀Ⰰ 最㨀 ⴀ㄀Ⰰ 戀㨀 ⴀ㄀Ⰰ 栀攀砀㨀 ∀渀漀渀攀∀Ⰰ 琀漀匀琀爀椀渀最㨀 挀氀爀吀漀匀琀爀椀渀最紀㬀ഀഀ
        }਍        ℀⠀栀猀爀最嬀栀愀猀崀⠀挀漀氀漀甀爀⸀琀漀䰀漀眀攀爀䌀愀猀攀⠀⤀⸀猀甀戀猀琀爀椀渀最⠀　Ⰰ ㈀⤀⤀ 簀簀 挀漀氀漀甀爀⸀挀栀愀爀䄀琀⠀⤀ 㴀㴀 ∀⌀∀⤀ ☀☀ ⠀挀漀氀漀甀爀 㴀 琀漀䠀攀砀⠀挀漀氀漀甀爀⤀⤀㬀ഀഀ
        var res,਍            爀攀搀Ⰰഀഀ
            green,਍            戀氀甀攀Ⰰഀഀ
            opacity,਍            琀Ⰰഀഀ
            values,਍            爀最戀 㴀 挀漀氀漀甀爀⸀洀愀琀挀栀⠀挀漀氀漀甀爀刀攀最䔀砀瀀⤀㬀ഀഀ
        if (rgb) {਍            椀昀 ⠀爀最戀嬀㈀崀⤀ 笀ഀഀ
                blue = toInt(rgb[2].substring(5), 16);਍                最爀攀攀渀 㴀 琀漀䤀渀琀⠀爀最戀嬀㈀崀⸀猀甀戀猀琀爀椀渀最⠀㌀Ⰰ 㔀⤀Ⰰ ㄀㘀⤀㬀ഀഀ
                red = toInt(rgb[2].substring(1, 3), 16);਍            紀ഀഀ
            if (rgb[3]) {਍                戀氀甀攀 㴀 琀漀䤀渀琀⠀⠀琀 㴀 爀最戀嬀㌀崀⸀挀栀愀爀䄀琀⠀㌀⤀⤀ ⬀ 琀Ⰰ ㄀㘀⤀㬀ഀഀ
                green = toInt((t = rgb[3].charAt(2)) + t, 16);਍                爀攀搀 㴀 琀漀䤀渀琀⠀⠀琀 㴀 爀最戀嬀㌀崀⸀挀栀愀爀䄀琀⠀㄀⤀⤀ ⬀ 琀Ⰰ ㄀㘀⤀㬀ഀഀ
            }਍            椀昀 ⠀爀最戀嬀㐀崀⤀ 笀ഀഀ
                values = rgb[4][split](commaSpaces);਍                爀攀搀 㴀 琀漀䘀氀漀愀琀⠀瘀愀氀甀攀猀嬀　崀⤀㬀ഀഀ
                values[0].slice(-1) == "%" && (red *= 2.55);਍                最爀攀攀渀 㴀 琀漀䘀氀漀愀琀⠀瘀愀氀甀攀猀嬀㄀崀⤀㬀ഀഀ
                values[1].slice(-1) == "%" && (green *= 2.55);਍                戀氀甀攀 㴀 琀漀䘀氀漀愀琀⠀瘀愀氀甀攀猀嬀㈀崀⤀㬀ഀഀ
                values[2].slice(-1) == "%" && (blue *= 2.55);਍                爀最戀嬀㄀崀⸀琀漀䰀漀眀攀爀䌀愀猀攀⠀⤀⸀猀氀椀挀攀⠀　Ⰰ 㐀⤀ 㴀㴀 ∀爀最戀愀∀ ☀☀ ⠀漀瀀愀挀椀琀礀 㴀 琀漀䘀氀漀愀琀⠀瘀愀氀甀攀猀嬀㌀崀⤀⤀㬀ഀഀ
                values[3] && values[3].slice(-1) == "%" && (opacity /= 100);਍            紀ഀഀ
            if (rgb[5]) {਍                瘀愀氀甀攀猀 㴀 爀最戀嬀㔀崀嬀猀瀀氀椀琀崀⠀挀漀洀洀愀匀瀀愀挀攀猀⤀㬀ഀഀ
                red = toFloat(values[0]);਍                瘀愀氀甀攀猀嬀　崀⸀猀氀椀挀攀⠀ⴀ㄀⤀ 㴀㴀 ∀─∀ ☀☀ ⠀爀攀搀 ⨀㴀 ㈀⸀㔀㔀⤀㬀ഀഀ
                green = toFloat(values[1]);਍                瘀愀氀甀攀猀嬀㄀崀⸀猀氀椀挀攀⠀ⴀ㄀⤀ 㴀㴀 ∀─∀ ☀☀ ⠀最爀攀攀渀 ⨀㴀 ㈀⸀㔀㔀⤀㬀ഀഀ
                blue = toFloat(values[2]);਍                瘀愀氀甀攀猀嬀㈀崀⸀猀氀椀挀攀⠀ⴀ㄀⤀ 㴀㴀 ∀─∀ ☀☀ ⠀戀氀甀攀 ⨀㴀 ㈀⸀㔀㔀⤀㬀ഀഀ
                (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);਍                爀最戀嬀㄀崀⸀琀漀䰀漀眀攀爀䌀愀猀攀⠀⤀⸀猀氀椀挀攀⠀　Ⰰ 㐀⤀ 㴀㴀 ∀栀猀戀愀∀ ☀☀ ⠀漀瀀愀挀椀琀礀 㴀 琀漀䘀氀漀愀琀⠀瘀愀氀甀攀猀嬀㌀崀⤀⤀㬀ഀഀ
                values[3] && values[3].slice(-1) == "%" && (opacity /= 100);਍                爀攀琀甀爀渀 刀⸀栀猀戀㈀爀最戀⠀爀攀搀Ⰰ 最爀攀攀渀Ⰰ 戀氀甀攀Ⰰ 漀瀀愀挀椀琀礀⤀㬀ഀഀ
            }਍            椀昀 ⠀爀最戀嬀㘀崀⤀ 笀ഀഀ
                values = rgb[6][split](commaSpaces);਍                爀攀搀 㴀 琀漀䘀氀漀愀琀⠀瘀愀氀甀攀猀嬀　崀⤀㬀ഀഀ
                values[0].slice(-1) == "%" && (red *= 2.55);਍                最爀攀攀渀 㴀 琀漀䘀氀漀愀琀⠀瘀愀氀甀攀猀嬀㄀崀⤀㬀ഀഀ
                values[1].slice(-1) == "%" && (green *= 2.55);਍                戀氀甀攀 㴀 琀漀䘀氀漀愀琀⠀瘀愀氀甀攀猀嬀㈀崀⤀㬀ഀഀ
                values[2].slice(-1) == "%" && (blue *= 2.55);਍                ⠀瘀愀氀甀攀猀嬀　崀⸀猀氀椀挀攀⠀ⴀ㌀⤀ 㴀㴀 ∀搀攀最∀ 簀簀 瘀愀氀甀攀猀嬀　崀⸀猀氀椀挀攀⠀ⴀ㄀⤀ 㴀㴀 ∀尀砀戀　∀⤀ ☀☀ ⠀爀攀搀 ⼀㴀 ㌀㘀　⤀㬀ഀഀ
                rgb[1].toLowerCase().slice(0, 4) == "hsla" && (opacity = toFloat(values[3]));਍                瘀愀氀甀攀猀嬀㌀崀 ☀☀ 瘀愀氀甀攀猀嬀㌀崀⸀猀氀椀挀攀⠀ⴀ㄀⤀ 㴀㴀 ∀─∀ ☀☀ ⠀漀瀀愀挀椀琀礀 ⼀㴀 ㄀　　⤀㬀ഀഀ
                return R.hsl2rgb(red, green, blue, opacity);਍            紀ഀഀ
            rgb = {r: red, g: green, b: blue, toString: clrToString};਍            爀最戀⸀栀攀砀 㴀 ∀⌀∀ ⬀ ⠀㄀㘀㜀㜀㜀㈀㄀㘀 簀 戀氀甀攀 簀 ⠀最爀攀攀渀 㰀㰀 㠀⤀ 簀 ⠀爀攀搀 㰀㰀 ㄀㘀⤀⤀⸀琀漀匀琀爀椀渀最⠀㄀㘀⤀⸀猀氀椀挀攀⠀㄀⤀㬀ഀഀ
            R.is(opacity, "finite") && (rgb.opacity = opacity);਍            爀攀琀甀爀渀 爀最戀㬀ഀഀ
        }਍        爀攀琀甀爀渀 笀爀㨀 ⴀ㄀Ⰰ 最㨀 ⴀ㄀Ⰰ 戀㨀 ⴀ㄀Ⰰ 栀攀砀㨀 ∀渀漀渀攀∀Ⰰ 攀爀爀漀爀㨀 ㄀Ⰰ 琀漀匀琀爀椀渀最㨀 挀氀爀吀漀匀琀爀椀渀最紀㬀ഀഀ
    }, R);਍    ⼀⨀尀ഀഀ
     * Raphael.hsb਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 䌀漀渀瘀攀爀琀猀 䠀匀䈀 瘀愀氀甀攀猀 琀漀 栀攀砀 爀攀瀀爀攀猀攀渀琀愀琀椀漀渀 漀昀 琀栀攀 挀漀氀漀甀爀⸀ഀഀ
     > Parameters਍     ⴀ 栀 ⠀渀甀洀戀攀爀⤀ 栀甀攀ഀഀ
     - s (number) saturation਍     ⴀ 戀 ⠀渀甀洀戀攀爀⤀ 瘀愀氀甀攀 漀爀 戀爀椀最栀琀渀攀猀猀ഀഀ
     = (string) hex representation of the colour.਍    尀⨀⼀ഀഀ
    R.hsb = cacher(function (h, s, b) {਍        爀攀琀甀爀渀 刀⸀栀猀戀㈀爀最戀⠀栀Ⰰ 猀Ⰰ 戀⤀⸀栀攀砀㬀ഀഀ
    });਍    ⼀⨀尀ഀഀ
     * Raphael.hsl਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 䌀漀渀瘀攀爀琀猀 䠀匀䰀 瘀愀氀甀攀猀 琀漀 栀攀砀 爀攀瀀爀攀猀攀渀琀愀琀椀漀渀 漀昀 琀栀攀 挀漀氀漀甀爀⸀ഀഀ
     > Parameters਍     ⴀ 栀 ⠀渀甀洀戀攀爀⤀ 栀甀攀ഀഀ
     - s (number) saturation਍     ⴀ 氀 ⠀渀甀洀戀攀爀⤀ 氀甀洀椀渀漀猀椀琀礀ഀഀ
     = (string) hex representation of the colour.਍    尀⨀⼀ഀഀ
    R.hsl = cacher(function (h, s, l) {਍        爀攀琀甀爀渀 刀⸀栀猀氀㈀爀最戀⠀栀Ⰰ 猀Ⰰ 氀⤀⸀栀攀砀㬀ഀഀ
    });਍    ⼀⨀尀ഀഀ
     * Raphael.rgb਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 䌀漀渀瘀攀爀琀猀 刀䜀䈀 瘀愀氀甀攀猀 琀漀 栀攀砀 爀攀瀀爀攀猀攀渀琀愀琀椀漀渀 漀昀 琀栀攀 挀漀氀漀甀爀⸀ഀഀ
     > Parameters਍     ⴀ 爀 ⠀渀甀洀戀攀爀⤀ 爀攀搀ഀഀ
     - g (number) green਍     ⴀ 戀 ⠀渀甀洀戀攀爀⤀ 戀氀甀攀ഀഀ
     = (string) hex representation of the colour.਍    尀⨀⼀ഀഀ
    R.rgb = cacher(function (r, g, b) {਍        爀攀琀甀爀渀 ∀⌀∀ ⬀ ⠀㄀㘀㜀㜀㜀㈀㄀㘀 簀 戀 簀 ⠀最 㰀㰀 㠀⤀ 簀 ⠀爀 㰀㰀 ㄀㘀⤀⤀⸀琀漀匀琀爀椀渀最⠀㄀㘀⤀⸀猀氀椀挀攀⠀㄀⤀㬀ഀഀ
    });਍    ⼀⨀尀ഀഀ
     * Raphael.getColor਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 伀渀 攀愀挀栀 挀愀氀氀 爀攀琀甀爀渀猀 渀攀砀琀 挀漀氀漀甀爀 椀渀 琀栀攀 猀瀀攀挀琀爀甀洀⸀ 吀漀 爀攀猀攀琀 椀琀 戀愀挀欀 琀漀 爀攀搀 挀愀氀氀 䀀刀愀瀀栀愀攀氀⸀最攀琀䌀漀氀漀爀⸀爀攀猀攀琀ഀഀ
     > Parameters਍     ⴀ 瘀愀氀甀攀 ⠀渀甀洀戀攀爀⤀ ⌀漀瀀琀椀漀渀愀氀 戀爀椀最栀琀渀攀猀猀Ⰰ 搀攀昀愀甀氀琀 椀猀 怀　⸀㜀㔀怀ഀഀ
     = (string) hex representation of the colour.਍    尀⨀⼀ഀഀ
    R.getColor = function (value) {਍        瘀愀爀 猀琀愀爀琀 㴀 琀栀椀猀⸀最攀琀䌀漀氀漀爀⸀猀琀愀爀琀 㴀 琀栀椀猀⸀最攀琀䌀漀氀漀爀⸀猀琀愀爀琀 簀簀 笀栀㨀 　Ⰰ 猀㨀 ㄀Ⰰ 戀㨀 瘀愀氀甀攀 簀簀 ⸀㜀㔀紀Ⰰഀഀ
            rgb = this.hsb2rgb(start.h, start.s, start.b);਍        猀琀愀爀琀⸀栀 ⬀㴀 ⸀　㜀㔀㬀ഀഀ
        if (start.h > 1) {਍            猀琀愀爀琀⸀栀 㴀 　㬀ഀഀ
            start.s -= .2;਍            猀琀愀爀琀⸀猀 㰀㴀 　 ☀☀ ⠀琀栀椀猀⸀最攀琀䌀漀氀漀爀⸀猀琀愀爀琀 㴀 笀栀㨀 　Ⰰ 猀㨀 ㄀Ⰰ 戀㨀 猀琀愀爀琀⸀戀紀⤀㬀ഀഀ
        }਍        爀攀琀甀爀渀 爀最戀⸀栀攀砀㬀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * Raphael.getColor.reset਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 刀攀猀攀琀猀 猀瀀攀挀琀爀甀洀 瀀漀猀椀琀椀漀渀 昀漀爀 䀀刀愀瀀栀愀攀氀⸀最攀琀䌀漀氀漀爀 戀愀挀欀 琀漀 爀攀搀⸀ഀഀ
    \*/਍    刀⸀最攀琀䌀漀氀漀爀⸀爀攀猀攀琀 㴀 昀甀渀挀琀椀漀渀 ⠀⤀ 笀ഀഀ
        delete this.start;਍    紀㬀ഀഀ
਍    ⼀⼀ 栀琀琀瀀㨀⼀⼀猀挀栀攀瀀攀爀猀⸀挀挀⼀最攀琀琀椀渀最ⴀ琀漀ⴀ琀栀攀ⴀ瀀漀椀渀琀ഀഀ
    function catmullRom2bezier(crp, z) {਍        瘀愀爀 搀 㴀 嬀崀㬀ഀഀ
        for (var i = 0, iLen = crp.length; iLen - 2 * !z > i; i += 2) {਍            瘀愀爀 瀀 㴀 嬀ഀഀ
                        {x: +crp[i - 2], y: +crp[i - 1]},਍                        笀砀㨀 ⬀挀爀瀀嬀椀崀Ⰰ     礀㨀 ⬀挀爀瀀嬀椀 ⬀ ㄀崀紀Ⰰഀഀ
                        {x: +crp[i + 2], y: +crp[i + 3]},਍                        笀砀㨀 ⬀挀爀瀀嬀椀 ⬀ 㐀崀Ⰰ 礀㨀 ⬀挀爀瀀嬀椀 ⬀ 㔀崀紀ഀഀ
                    ];਍            椀昀 ⠀稀⤀ 笀ഀഀ
                if (!i) {਍                    瀀嬀　崀 㴀 笀砀㨀 ⬀挀爀瀀嬀椀䰀攀渀 ⴀ ㈀崀Ⰰ 礀㨀 ⬀挀爀瀀嬀椀䰀攀渀 ⴀ ㄀崀紀㬀ഀഀ
                } else if (iLen - 4 == i) {਍                    瀀嬀㌀崀 㴀 笀砀㨀 ⬀挀爀瀀嬀　崀Ⰰ 礀㨀 ⬀挀爀瀀嬀㄀崀紀㬀ഀഀ
                } else if (iLen - 2 == i) {਍                    瀀嬀㈀崀 㴀 笀砀㨀 ⬀挀爀瀀嬀　崀Ⰰ 礀㨀 ⬀挀爀瀀嬀㄀崀紀㬀ഀഀ
                    p[3] = {x: +crp[2], y: +crp[3]};਍                紀ഀഀ
            } else {਍                椀昀 ⠀椀䰀攀渀 ⴀ 㐀 㴀㴀 椀⤀ 笀ഀഀ
                    p[3] = p[2];਍                紀 攀氀猀攀 椀昀 ⠀℀椀⤀ 笀ഀഀ
                    p[0] = {x: +crp[i], y: +crp[i + 1]};਍                紀ഀഀ
            }਍            搀⸀瀀甀猀栀⠀嬀∀䌀∀Ⰰഀഀ
                  (-p[0].x + 6 * p[1].x + p[2].x) / 6,਍                  ⠀ⴀ瀀嬀　崀⸀礀 ⬀ 㘀 ⨀ 瀀嬀㄀崀⸀礀 ⬀ 瀀嬀㈀崀⸀礀⤀ ⼀ 㘀Ⰰഀഀ
                  (p[1].x + 6 * p[2].x - p[3].x) / 6,਍                  ⠀瀀嬀㄀崀⸀礀 ⬀ 㘀⨀瀀嬀㈀崀⸀礀 ⴀ 瀀嬀㌀崀⸀礀⤀ ⼀ 㘀Ⰰഀഀ
                  p[2].x,਍                  瀀嬀㈀崀⸀礀ഀഀ
            ]);਍        紀ഀഀ
਍        爀攀琀甀爀渀 搀㬀ഀഀ
    }਍    ⼀⨀尀ഀഀ
     * Raphael.parsePathString਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 唀琀椀氀椀琀礀 洀攀琀栀漀搀ഀഀ
     **਍     ⨀ 倀愀爀猀攀猀 最椀瘀攀渀 瀀愀琀栀 猀琀爀椀渀最 椀渀琀漀 愀渀 愀爀爀愀礀 漀昀 愀爀爀愀礀猀 漀昀 瀀愀琀栀 猀攀最洀攀渀琀猀⸀ഀഀ
     > Parameters਍     ⴀ 瀀愀琀栀匀琀爀椀渀最 ⠀猀琀爀椀渀最簀愀爀爀愀礀⤀ 瀀愀琀栀 猀琀爀椀渀最 漀爀 愀爀爀愀礀 漀昀 猀攀最洀攀渀琀猀 ⠀椀渀 琀栀攀 氀愀猀琀 挀愀猀攀 椀琀 眀椀氀氀 戀攀 爀攀琀甀爀渀攀搀 猀琀爀愀椀最栀琀 愀眀愀礀⤀ഀഀ
     = (array) array of segments.਍    尀⨀⼀ഀഀ
    R.parsePathString = function (pathString) {਍        椀昀 ⠀℀瀀愀琀栀匀琀爀椀渀最⤀ 笀ഀഀ
            return null;਍        紀ഀഀ
        var pth = paths(pathString);਍        椀昀 ⠀瀀琀栀⸀愀爀爀⤀ 笀ഀഀ
            return pathClone(pth.arr);਍        紀ഀഀ
਍        瘀愀爀 瀀愀爀愀洀䌀漀甀渀琀猀 㴀 笀愀㨀 㜀Ⰰ 挀㨀 㘀Ⰰ 栀㨀 ㄀Ⰰ 氀㨀 ㈀Ⰰ 洀㨀 ㈀Ⰰ 爀㨀 㐀Ⰰ 焀㨀 㐀Ⰰ 猀㨀 㐀Ⰰ 琀㨀 ㈀Ⰰ 瘀㨀 ㄀Ⰰ 稀㨀 　紀Ⰰഀഀ
            data = [];਍        椀昀 ⠀刀⸀椀猀⠀瀀愀琀栀匀琀爀椀渀最Ⰰ 愀爀爀愀礀⤀ ☀☀ 刀⸀椀猀⠀瀀愀琀栀匀琀爀椀渀最嬀　崀Ⰰ 愀爀爀愀礀⤀⤀ 笀 ⼀⼀ 爀漀甀最栀 愀猀猀甀洀瀀琀椀漀渀ഀഀ
            data = pathClone(pathString);਍        紀ഀഀ
        if (!data.length) {਍            匀琀爀⠀瀀愀琀栀匀琀爀椀渀最⤀⸀爀攀瀀氀愀挀攀⠀瀀愀琀栀䌀漀洀洀愀渀搀Ⰰ 昀甀渀挀琀椀漀渀 ⠀愀Ⰰ 戀Ⰰ 挀⤀ 笀ഀഀ
                var params = [],਍                    渀愀洀攀 㴀 戀⸀琀漀䰀漀眀攀爀䌀愀猀攀⠀⤀㬀ഀഀ
                c.replace(pathValues, function (a, b) {਍                    戀 ☀☀ 瀀愀爀愀洀猀⸀瀀甀猀栀⠀⬀戀⤀㬀ഀഀ
                });਍                椀昀 ⠀渀愀洀攀 㴀㴀 ∀洀∀ ☀☀ 瀀愀爀愀洀猀⸀氀攀渀最琀栀 㸀 ㈀⤀ 笀ഀഀ
                    data.push([b][concat](params.splice(0, 2)));਍                    渀愀洀攀 㴀 ∀氀∀㬀ഀഀ
                    b = b == "m" ? "l" : "L";਍                紀ഀഀ
                if (name == "r") {਍                    搀愀琀愀⸀瀀甀猀栀⠀嬀戀崀嬀挀漀渀挀愀琀崀⠀瀀愀爀愀洀猀⤀⤀㬀ഀഀ
                } else while (params.length >= paramCounts[name]) {਍                    搀愀琀愀⸀瀀甀猀栀⠀嬀戀崀嬀挀漀渀挀愀琀崀⠀瀀愀爀愀洀猀⸀猀瀀氀椀挀攀⠀　Ⰰ 瀀愀爀愀洀䌀漀甀渀琀猀嬀渀愀洀攀崀⤀⤀⤀㬀ഀഀ
                    if (!paramCounts[name]) {਍                        戀爀攀愀欀㬀ഀഀ
                    }਍                紀ഀഀ
            });਍        紀ഀഀ
        data.toString = R._path2string;਍        瀀琀栀⸀愀爀爀 㴀 瀀愀琀栀䌀氀漀渀攀⠀搀愀琀愀⤀㬀ഀഀ
        return data;਍    紀㬀ഀഀ
    /*\਍     ⨀ 刀愀瀀栀愀攀氀⸀瀀愀爀猀攀吀爀愀渀猀昀漀爀洀匀琀爀椀渀最ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Utility method਍     ⨀⨀ഀഀ
     * Parses given path string into an array of transformations.਍     㸀 倀愀爀愀洀攀琀攀爀猀ഀഀ
     - TString (string|array) transform string or array of transformations (in the last case it will be returned straight away)਍     㴀 ⠀愀爀爀愀礀⤀ 愀爀爀愀礀 漀昀 琀爀愀渀猀昀漀爀洀愀琀椀漀渀猀⸀ഀഀ
    \*/਍    刀⸀瀀愀爀猀攀吀爀愀渀猀昀漀爀洀匀琀爀椀渀最 㴀 挀愀挀栀攀爀⠀昀甀渀挀琀椀漀渀 ⠀吀匀琀爀椀渀最⤀ 笀ഀഀ
        if (!TString) {਍            爀攀琀甀爀渀 渀甀氀氀㬀ഀഀ
        }਍        瘀愀爀 瀀愀爀愀洀䌀漀甀渀琀猀 㴀 笀爀㨀 ㌀Ⰰ 猀㨀 㐀Ⰰ 琀㨀 ㈀Ⰰ 洀㨀 㘀紀Ⰰഀഀ
            data = [];਍        椀昀 ⠀刀⸀椀猀⠀吀匀琀爀椀渀最Ⰰ 愀爀爀愀礀⤀ ☀☀ 刀⸀椀猀⠀吀匀琀爀椀渀最嬀　崀Ⰰ 愀爀爀愀礀⤀⤀ 笀 ⼀⼀ 爀漀甀最栀 愀猀猀甀洀瀀琀椀漀渀ഀഀ
            data = pathClone(TString);਍        紀ഀഀ
        if (!data.length) {਍            匀琀爀⠀吀匀琀爀椀渀最⤀⸀爀攀瀀氀愀挀攀⠀琀䌀漀洀洀愀渀搀Ⰰ 昀甀渀挀琀椀漀渀 ⠀愀Ⰰ 戀Ⰰ 挀⤀ 笀ഀഀ
                var params = [],਍                    渀愀洀攀 㴀 氀漀眀攀爀䌀愀猀攀⸀挀愀氀氀⠀戀⤀㬀ഀഀ
                c.replace(pathValues, function (a, b) {਍                    戀 ☀☀ 瀀愀爀愀洀猀⸀瀀甀猀栀⠀⬀戀⤀㬀ഀഀ
                });਍                搀愀琀愀⸀瀀甀猀栀⠀嬀戀崀嬀挀漀渀挀愀琀崀⠀瀀愀爀愀洀猀⤀⤀㬀ഀഀ
            });਍        紀ഀഀ
        data.toString = R._path2string;਍        爀攀琀甀爀渀 搀愀琀愀㬀ഀഀ
    });਍    ⼀⼀ 倀䄀吀䠀匀ഀഀ
    var paths = function (ps) {਍        瘀愀爀 瀀 㴀 瀀愀琀栀猀⸀瀀猀 㴀 瀀愀琀栀猀⸀瀀猀 簀簀 笀紀㬀ഀഀ
        if (p[ps]) {਍            瀀嬀瀀猀崀⸀猀氀攀攀瀀 㴀 ㄀　　㬀ഀഀ
        } else {਍            瀀嬀瀀猀崀 㴀 笀ഀഀ
                sleep: 100਍            紀㬀ഀഀ
        }਍        猀攀琀吀椀洀攀漀甀琀⠀昀甀渀挀琀椀漀渀 ⠀⤀ 笀ഀഀ
            for (var key in p) if (p[has](key) && key != ps) {਍                瀀嬀欀攀礀崀⸀猀氀攀攀瀀ⴀⴀ㬀ഀഀ
                !p[key].sleep && delete p[key];਍            紀ഀഀ
        });਍        爀攀琀甀爀渀 瀀嬀瀀猀崀㬀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * Raphael.findDotsAtSegment਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 唀琀椀氀椀琀礀 洀攀琀栀漀搀ഀഀ
     **਍     ⨀ 䘀椀渀搀 搀漀琀 挀漀漀爀搀椀渀愀琀攀猀 漀渀 琀栀攀 最椀瘀攀渀 挀甀戀椀挀 戀攀稀椀攀爀 挀甀爀瘀攀 愀琀 琀栀攀 最椀瘀攀渀 琀⸀ഀഀ
     > Parameters਍     ⴀ 瀀㄀砀 ⠀渀甀洀戀攀爀⤀ 砀 漀昀 琀栀攀 昀椀爀猀琀 瀀漀椀渀琀 漀昀 琀栀攀 挀甀爀瘀攀ഀഀ
     - p1y (number) y of the first point of the curve਍     ⴀ 挀㄀砀 ⠀渀甀洀戀攀爀⤀ 砀 漀昀 琀栀攀 昀椀爀猀琀 愀渀挀栀漀爀 漀昀 琀栀攀 挀甀爀瘀攀ഀഀ
     - c1y (number) y of the first anchor of the curve਍     ⴀ 挀㈀砀 ⠀渀甀洀戀攀爀⤀ 砀 漀昀 琀栀攀 猀攀挀漀渀搀 愀渀挀栀漀爀 漀昀 琀栀攀 挀甀爀瘀攀ഀഀ
     - c2y (number) y of the second anchor of the curve਍     ⴀ 瀀㈀砀 ⠀渀甀洀戀攀爀⤀ 砀 漀昀 琀栀攀 猀攀挀漀渀搀 瀀漀椀渀琀 漀昀 琀栀攀 挀甀爀瘀攀ഀഀ
     - p2y (number) y of the second point of the curve਍     ⴀ 琀 ⠀渀甀洀戀攀爀⤀ 瀀漀猀椀琀椀漀渀 漀渀 琀栀攀 挀甀爀瘀攀 ⠀　⸀⸀㄀⤀ഀഀ
     = (object) point information in format:਍     漀 笀ഀഀ
     o     x: (number) x coordinate of the point਍     漀     礀㨀 ⠀渀甀洀戀攀爀⤀ 礀 挀漀漀爀搀椀渀愀琀攀 漀昀 琀栀攀 瀀漀椀渀琀ഀഀ
     o     m: {਍     漀         砀㨀 ⠀渀甀洀戀攀爀⤀ 砀 挀漀漀爀搀椀渀愀琀攀 漀昀 琀栀攀 氀攀昀琀 愀渀挀栀漀爀ഀഀ
     o         y: (number) y coordinate of the left anchor਍     漀     紀ഀഀ
     o     n: {਍     漀         砀㨀 ⠀渀甀洀戀攀爀⤀ 砀 挀漀漀爀搀椀渀愀琀攀 漀昀 琀栀攀 爀椀最栀琀 愀渀挀栀漀爀ഀഀ
     o         y: (number) y coordinate of the right anchor਍     漀     紀ഀഀ
     o     start: {਍     漀         砀㨀 ⠀渀甀洀戀攀爀⤀ 砀 挀漀漀爀搀椀渀愀琀攀 漀昀 琀栀攀 猀琀愀爀琀 漀昀 琀栀攀 挀甀爀瘀攀ഀഀ
     o         y: (number) y coordinate of the start of the curve਍     漀     紀ഀഀ
     o     end: {਍     漀         砀㨀 ⠀渀甀洀戀攀爀⤀ 砀 挀漀漀爀搀椀渀愀琀攀 漀昀 琀栀攀 攀渀搀 漀昀 琀栀攀 挀甀爀瘀攀ഀഀ
     o         y: (number) y coordinate of the end of the curve਍     漀     紀ഀഀ
     o     alpha: (number) angle of the curve derivative at the point਍     漀 紀ഀഀ
    \*/਍    刀⸀昀椀渀搀䐀漀琀猀䄀琀匀攀最洀攀渀琀 㴀 昀甀渀挀琀椀漀渀 ⠀瀀㄀砀Ⰰ 瀀㄀礀Ⰰ 挀㄀砀Ⰰ 挀㄀礀Ⰰ 挀㈀砀Ⰰ 挀㈀礀Ⰰ 瀀㈀砀Ⰰ 瀀㈀礀Ⰰ 琀⤀ 笀ഀഀ
        var t1 = 1 - t,਍            琀㄀㌀ 㴀 瀀漀眀⠀琀㄀Ⰰ ㌀⤀Ⰰഀഀ
            t12 = pow(t1, 2),਍            琀㈀ 㴀 琀 ⨀ 琀Ⰰഀഀ
            t3 = t2 * t,਍            砀 㴀 琀㄀㌀ ⨀ 瀀㄀砀 ⬀ 琀㄀㈀ ⨀ ㌀ ⨀ 琀 ⨀ 挀㄀砀 ⬀ 琀㄀ ⨀ ㌀ ⨀ 琀 ⨀ 琀 ⨀ 挀㈀砀 ⬀ 琀㌀ ⨀ 瀀㈀砀Ⰰഀഀ
            y = t13 * p1y + t12 * 3 * t * c1y + t1 * 3 * t * t * c2y + t3 * p2y,਍            洀砀 㴀 瀀㄀砀 ⬀ ㈀ ⨀ 琀 ⨀ ⠀挀㄀砀 ⴀ 瀀㄀砀⤀ ⬀ 琀㈀ ⨀ ⠀挀㈀砀 ⴀ ㈀ ⨀ 挀㄀砀 ⬀ 瀀㄀砀⤀Ⰰഀഀ
            my = p1y + 2 * t * (c1y - p1y) + t2 * (c2y - 2 * c1y + p1y),਍            渀砀 㴀 挀㄀砀 ⬀ ㈀ ⨀ 琀 ⨀ ⠀挀㈀砀 ⴀ 挀㄀砀⤀ ⬀ 琀㈀ ⨀ ⠀瀀㈀砀 ⴀ ㈀ ⨀ 挀㈀砀 ⬀ 挀㄀砀⤀Ⰰഀഀ
            ny = c1y + 2 * t * (c2y - c1y) + t2 * (p2y - 2 * c2y + c1y),਍            愀砀 㴀 琀㄀ ⨀ 瀀㄀砀 ⬀ 琀 ⨀ 挀㄀砀Ⰰഀഀ
            ay = t1 * p1y + t * c1y,਍            挀砀 㴀 琀㄀ ⨀ 挀㈀砀 ⬀ 琀 ⨀ 瀀㈀砀Ⰰഀഀ
            cy = t1 * c2y + t * p2y,਍            愀氀瀀栀愀 㴀 ⠀㤀　 ⴀ 洀愀琀栀⸀愀琀愀渀㈀⠀洀砀 ⴀ 渀砀Ⰰ 洀礀 ⴀ 渀礀⤀ ⨀ ㄀㠀　 ⼀ 倀䤀⤀㬀ഀഀ
        (mx > nx || my < ny) && (alpha += 180);਍        爀攀琀甀爀渀 笀ഀഀ
            x: x,਍            礀㨀 礀Ⰰഀഀ
            m: {x: mx, y: my},਍            渀㨀 笀砀㨀 渀砀Ⰰ 礀㨀 渀礀紀Ⰰഀഀ
            start: {x: ax, y: ay},਍            攀渀搀㨀 笀砀㨀 挀砀Ⰰ 礀㨀 挀礀紀Ⰰഀഀ
            alpha: alpha਍        紀㬀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * Raphael.bezierBBox਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 唀琀椀氀椀琀礀 洀攀琀栀漀搀ഀഀ
     **਍     ⨀ 刀攀琀甀爀渀 戀漀甀渀搀椀渀最 戀漀砀 漀昀 愀 最椀瘀攀渀 挀甀戀椀挀 戀攀稀椀攀爀 挀甀爀瘀攀ഀഀ
     > Parameters਍     ⴀ 瀀㄀砀 ⠀渀甀洀戀攀爀⤀ 砀 漀昀 琀栀攀 昀椀爀猀琀 瀀漀椀渀琀 漀昀 琀栀攀 挀甀爀瘀攀ഀഀ
     - p1y (number) y of the first point of the curve਍     ⴀ 挀㄀砀 ⠀渀甀洀戀攀爀⤀ 砀 漀昀 琀栀攀 昀椀爀猀琀 愀渀挀栀漀爀 漀昀 琀栀攀 挀甀爀瘀攀ഀഀ
     - c1y (number) y of the first anchor of the curve਍     ⴀ 挀㈀砀 ⠀渀甀洀戀攀爀⤀ 砀 漀昀 琀栀攀 猀攀挀漀渀搀 愀渀挀栀漀爀 漀昀 琀栀攀 挀甀爀瘀攀ഀഀ
     - c2y (number) y of the second anchor of the curve਍     ⴀ 瀀㈀砀 ⠀渀甀洀戀攀爀⤀ 砀 漀昀 琀栀攀 猀攀挀漀渀搀 瀀漀椀渀琀 漀昀 琀栀攀 挀甀爀瘀攀ഀഀ
     - p2y (number) y of the second point of the curve਍     ⨀ 漀爀ഀഀ
     - bez (array) array of six points for bezier curve਍     㴀 ⠀漀戀樀攀挀琀⤀ 瀀漀椀渀琀 椀渀昀漀爀洀愀琀椀漀渀 椀渀 昀漀爀洀愀琀㨀ഀഀ
     o {਍     漀     洀椀渀㨀 笀ഀഀ
     o         x: (number) x coordinate of the left point਍     漀         礀㨀 ⠀渀甀洀戀攀爀⤀ 礀 挀漀漀爀搀椀渀愀琀攀 漀昀 琀栀攀 琀漀瀀 瀀漀椀渀琀ഀഀ
     o     }਍     漀     洀愀砀㨀 笀ഀഀ
     o         x: (number) x coordinate of the right point਍     漀         礀㨀 ⠀渀甀洀戀攀爀⤀ 礀 挀漀漀爀搀椀渀愀琀攀 漀昀 琀栀攀 戀漀琀琀漀洀 瀀漀椀渀琀ഀഀ
     o     }਍     漀 紀ഀഀ
    \*/਍    刀⸀戀攀稀椀攀爀䈀䈀漀砀 㴀 昀甀渀挀琀椀漀渀 ⠀瀀㄀砀Ⰰ 瀀㄀礀Ⰰ 挀㄀砀Ⰰ 挀㄀礀Ⰰ 挀㈀砀Ⰰ 挀㈀礀Ⰰ 瀀㈀砀Ⰰ 瀀㈀礀⤀ 笀ഀഀ
        if (!R.is(p1x, "array")) {਍            瀀㄀砀 㴀 嬀瀀㄀砀Ⰰ 瀀㄀礀Ⰰ 挀㄀砀Ⰰ 挀㄀礀Ⰰ 挀㈀砀Ⰰ 挀㈀礀Ⰰ 瀀㈀砀Ⰰ 瀀㈀礀崀㬀ഀഀ
        }਍        瘀愀爀 戀戀漀砀 㴀 挀甀爀瘀攀䐀椀洀⸀愀瀀瀀氀礀⠀渀甀氀氀Ⰰ 瀀㄀砀⤀㬀ഀഀ
        return {਍            砀㨀 戀戀漀砀⸀洀椀渀⸀砀Ⰰഀഀ
            y: bbox.min.y,਍            砀㈀㨀 戀戀漀砀⸀洀愀砀⸀砀Ⰰഀഀ
            y2: bbox.max.y,਍            眀椀搀琀栀㨀 戀戀漀砀⸀洀愀砀⸀砀 ⴀ 戀戀漀砀⸀洀椀渀⸀砀Ⰰഀഀ
            height: bbox.max.y - bbox.min.y਍        紀㬀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * Raphael.isPointInsideBBox਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 唀琀椀氀椀琀礀 洀攀琀栀漀搀ഀഀ
     **਍     ⨀ 刀攀琀甀爀渀猀 怀琀爀甀攀怀 椀昀 最椀瘀攀渀 瀀漀椀渀琀 椀猀 椀渀猀椀搀攀 戀漀甀渀搀椀渀最 戀漀砀攀猀⸀ഀഀ
     > Parameters਍     ⴀ 戀戀漀砀 ⠀猀琀爀椀渀最⤀ 戀漀甀渀搀椀渀最 戀漀砀ഀഀ
     - x (string) x coordinate of the point਍     ⴀ 礀 ⠀猀琀爀椀渀最⤀ 礀 挀漀漀爀搀椀渀愀琀攀 漀昀 琀栀攀 瀀漀椀渀琀ഀഀ
     = (boolean) `true` if point inside਍    尀⨀⼀ഀഀ
    R.isPointInsideBBox = function (bbox, x, y) {਍        爀攀琀甀爀渀 砀 㸀㴀 戀戀漀砀⸀砀 ☀☀ 砀 㰀㴀 戀戀漀砀⸀砀㈀ ☀☀ 礀 㸀㴀 戀戀漀砀⸀礀 ☀☀ 礀 㰀㴀 戀戀漀砀⸀礀㈀㬀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * Raphael.isBBoxIntersect਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 唀琀椀氀椀琀礀 洀攀琀栀漀搀ഀഀ
     **਍     ⨀ 刀攀琀甀爀渀猀 怀琀爀甀攀怀 椀昀 琀眀漀 戀漀甀渀搀椀渀最 戀漀砀攀猀 椀渀琀攀爀猀攀挀琀ഀഀ
     > Parameters਍     ⴀ 戀戀漀砀㄀ ⠀猀琀爀椀渀最⤀ 昀椀爀猀琀 戀漀甀渀搀椀渀最 戀漀砀ഀഀ
     - bbox2 (string) second bounding box਍     㴀 ⠀戀漀漀氀攀愀渀⤀ 怀琀爀甀攀怀 椀昀 琀栀攀礀 椀渀琀攀爀猀攀挀琀ഀഀ
    \*/਍    刀⸀椀猀䈀䈀漀砀䤀渀琀攀爀猀攀挀琀 㴀 昀甀渀挀琀椀漀渀 ⠀戀戀漀砀㄀Ⰰ 戀戀漀砀㈀⤀ 笀ഀഀ
        var i = R.isPointInsideBBox;਍        爀攀琀甀爀渀 椀⠀戀戀漀砀㈀Ⰰ 戀戀漀砀㄀⸀砀Ⰰ 戀戀漀砀㄀⸀礀⤀ഀഀ
            || i(bbox2, bbox1.x2, bbox1.y)਍            簀簀 椀⠀戀戀漀砀㈀Ⰰ 戀戀漀砀㄀⸀砀Ⰰ 戀戀漀砀㄀⸀礀㈀⤀ഀഀ
            || i(bbox2, bbox1.x2, bbox1.y2)਍            簀簀 椀⠀戀戀漀砀㄀Ⰰ 戀戀漀砀㈀⸀砀Ⰰ 戀戀漀砀㈀⸀礀⤀ഀഀ
            || i(bbox1, bbox2.x2, bbox2.y)਍            簀簀 椀⠀戀戀漀砀㄀Ⰰ 戀戀漀砀㈀⸀砀Ⰰ 戀戀漀砀㈀⸀礀㈀⤀ഀഀ
            || i(bbox1, bbox2.x2, bbox2.y2)਍            簀簀 ⠀戀戀漀砀㄀⸀砀 㰀 戀戀漀砀㈀⸀砀㈀ ☀☀ 戀戀漀砀㄀⸀砀 㸀 戀戀漀砀㈀⸀砀 簀簀 戀戀漀砀㈀⸀砀 㰀 戀戀漀砀㄀⸀砀㈀ ☀☀ 戀戀漀砀㈀⸀砀 㸀 戀戀漀砀㄀⸀砀⤀ഀഀ
            && (bbox1.y < bbox2.y2 && bbox1.y > bbox2.y || bbox2.y < bbox1.y2 && bbox2.y > bbox1.y);਍    紀㬀ഀഀ
    function base3(t, p1, p2, p3, p4) {਍        瘀愀爀 琀㄀ 㴀 ⴀ㌀ ⨀ 瀀㄀ ⬀ 㤀 ⨀ 瀀㈀ ⴀ 㤀 ⨀ 瀀㌀ ⬀ ㌀ ⨀ 瀀㐀Ⰰഀഀ
            t2 = t * t1 + 6 * p1 - 12 * p2 + 6 * p3;਍        爀攀琀甀爀渀 琀 ⨀ 琀㈀ ⴀ ㌀ ⨀ 瀀㄀ ⬀ ㌀ ⨀ 瀀㈀㬀ഀഀ
    }਍    昀甀渀挀琀椀漀渀 戀攀稀氀攀渀⠀砀㄀Ⰰ 礀㄀Ⰰ 砀㈀Ⰰ 礀㈀Ⰰ 砀㌀Ⰰ 礀㌀Ⰰ 砀㐀Ⰰ 礀㐀Ⰰ 稀⤀ 笀ഀഀ
        if (z == null) {਍            稀 㴀 ㄀㬀ഀഀ
        }਍        稀 㴀 稀 㸀 ㄀ 㼀 ㄀ 㨀 稀 㰀 　 㼀 　 㨀 稀㬀ഀഀ
        var z2 = z / 2,਍            渀 㴀 ㄀㈀Ⰰഀഀ
            Tvalues = [-0.1252,0.1252,-0.3678,0.3678,-0.5873,0.5873,-0.7699,0.7699,-0.9041,0.9041,-0.9816,0.9816],਍            䌀瘀愀氀甀攀猀 㴀 嬀　⸀㈀㐀㤀㄀Ⰰ　⸀㈀㐀㤀㄀Ⰰ　⸀㈀㌀㌀㔀Ⰰ　⸀㈀㌀㌀㔀Ⰰ　⸀㈀　㌀㈀Ⰰ　⸀㈀　㌀㈀Ⰰ　⸀㄀㘀　㄀Ⰰ　⸀㄀㘀　㄀Ⰰ　⸀㄀　㘀㤀Ⰰ　⸀㄀　㘀㤀Ⰰ　⸀　㐀㜀㈀Ⰰ　⸀　㐀㜀㈀崀Ⰰഀഀ
            sum = 0;਍        昀漀爀 ⠀瘀愀爀 椀 㴀 　㬀 椀 㰀 渀㬀 椀⬀⬀⤀ 笀ഀഀ
            var ct = z2 * Tvalues[i] + z2,਍                砀戀愀猀攀 㴀 戀愀猀攀㌀⠀挀琀Ⰰ 砀㄀Ⰰ 砀㈀Ⰰ 砀㌀Ⰰ 砀㐀⤀Ⰰഀഀ
                ybase = base3(ct, y1, y2, y3, y4),਍                挀漀洀戀 㴀 砀戀愀猀攀 ⨀ 砀戀愀猀攀 ⬀ 礀戀愀猀攀 ⨀ 礀戀愀猀攀㬀ഀഀ
            sum += Cvalues[i] * math.sqrt(comb);਍        紀ഀഀ
        return z2 * sum;਍    紀ഀഀ
    function getTatLen(x1, y1, x2, y2, x3, y3, x4, y4, ll) {਍        椀昀 ⠀氀氀 㰀 　 簀簀 戀攀稀氀攀渀⠀砀㄀Ⰰ 礀㄀Ⰰ 砀㈀Ⰰ 礀㈀Ⰰ 砀㌀Ⰰ 礀㌀Ⰰ 砀㐀Ⰰ 礀㐀⤀ 㰀 氀氀⤀ 笀ഀഀ
            return;਍        紀ഀഀ
        var t = 1,਍            猀琀攀瀀 㴀 琀 ⼀ ㈀Ⰰഀഀ
            t2 = t - step,਍            氀Ⰰഀഀ
            e = .01;਍        氀 㴀 戀攀稀氀攀渀⠀砀㄀Ⰰ 礀㄀Ⰰ 砀㈀Ⰰ 礀㈀Ⰰ 砀㌀Ⰰ 礀㌀Ⰰ 砀㐀Ⰰ 礀㐀Ⰰ 琀㈀⤀㬀ഀഀ
        while (abs(l - ll) > e) {਍            猀琀攀瀀 ⼀㴀 ㈀㬀ഀഀ
            t2 += (l < ll ? 1 : -1) * step;਍            氀 㴀 戀攀稀氀攀渀⠀砀㄀Ⰰ 礀㄀Ⰰ 砀㈀Ⰰ 礀㈀Ⰰ 砀㌀Ⰰ 礀㌀Ⰰ 砀㐀Ⰰ 礀㐀Ⰰ 琀㈀⤀㬀ഀഀ
        }਍        爀攀琀甀爀渀 琀㈀㬀ഀഀ
    }਍    昀甀渀挀琀椀漀渀 椀渀琀攀爀猀攀挀琀⠀砀㄀Ⰰ 礀㄀Ⰰ 砀㈀Ⰰ 礀㈀Ⰰ 砀㌀Ⰰ 礀㌀Ⰰ 砀㐀Ⰰ 礀㐀⤀ 笀ഀഀ
        if (਍            洀洀愀砀⠀砀㄀Ⰰ 砀㈀⤀ 㰀 洀洀椀渀⠀砀㌀Ⰰ 砀㐀⤀ 簀簀ഀഀ
            mmin(x1, x2) > mmax(x3, x4) ||਍            洀洀愀砀⠀礀㄀Ⰰ 礀㈀⤀ 㰀 洀洀椀渀⠀礀㌀Ⰰ 礀㐀⤀ 簀簀ഀഀ
            mmin(y1, y2) > mmax(y3, y4)਍        ⤀ 笀ഀഀ
            return;਍        紀ഀഀ
        var nx = (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4),਍            渀礀 㴀 ⠀砀㄀ ⨀ 礀㈀ ⴀ 礀㄀ ⨀ 砀㈀⤀ ⨀ ⠀礀㌀ ⴀ 礀㐀⤀ ⴀ ⠀礀㄀ ⴀ 礀㈀⤀ ⨀ ⠀砀㌀ ⨀ 礀㐀 ⴀ 礀㌀ ⨀ 砀㐀⤀Ⰰഀഀ
            denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);਍ഀഀ
        if (!denominator) {਍            爀攀琀甀爀渀㬀ഀഀ
        }਍        瘀愀爀 瀀砀 㴀 渀砀 ⼀ 搀攀渀漀洀椀渀愀琀漀爀Ⰰഀഀ
            py = ny / denominator,਍            瀀砀㈀ 㴀 ⬀瀀砀⸀琀漀䘀椀砀攀搀⠀㈀⤀Ⰰഀഀ
            py2 = +py.toFixed(2);਍        椀昀 ⠀ഀഀ
            px2 < +mmin(x1, x2).toFixed(2) ||਍            瀀砀㈀ 㸀 ⬀洀洀愀砀⠀砀㄀Ⰰ 砀㈀⤀⸀琀漀䘀椀砀攀搀⠀㈀⤀ 簀簀ഀഀ
            px2 < +mmin(x3, x4).toFixed(2) ||਍            瀀砀㈀ 㸀 ⬀洀洀愀砀⠀砀㌀Ⰰ 砀㐀⤀⸀琀漀䘀椀砀攀搀⠀㈀⤀ 簀簀ഀഀ
            py2 < +mmin(y1, y2).toFixed(2) ||਍            瀀礀㈀ 㸀 ⬀洀洀愀砀⠀礀㄀Ⰰ 礀㈀⤀⸀琀漀䘀椀砀攀搀⠀㈀⤀ 簀簀ഀഀ
            py2 < +mmin(y3, y4).toFixed(2) ||਍            瀀礀㈀ 㸀 ⬀洀洀愀砀⠀礀㌀Ⰰ 礀㐀⤀⸀琀漀䘀椀砀攀搀⠀㈀⤀ഀഀ
        ) {਍            爀攀琀甀爀渀㬀ഀഀ
        }਍        爀攀琀甀爀渀 笀砀㨀 瀀砀Ⰰ 礀㨀 瀀礀紀㬀ഀഀ
    }਍    昀甀渀挀琀椀漀渀 椀渀琀攀爀⠀戀攀稀㄀Ⰰ 戀攀稀㈀⤀ 笀ഀഀ
        return interHelper(bez1, bez2);਍    紀ഀഀ
    function interCount(bez1, bez2) {਍        爀攀琀甀爀渀 椀渀琀攀爀䠀攀氀瀀攀爀⠀戀攀稀㄀Ⰰ 戀攀稀㈀Ⰰ ㄀⤀㬀ഀഀ
    }਍    昀甀渀挀琀椀漀渀 椀渀琀攀爀䠀攀氀瀀攀爀⠀戀攀稀㄀Ⰰ 戀攀稀㈀Ⰰ 樀甀猀琀䌀漀甀渀琀⤀ 笀ഀഀ
        var bbox1 = R.bezierBBox(bez1),਍            戀戀漀砀㈀ 㴀 刀⸀戀攀稀椀攀爀䈀䈀漀砀⠀戀攀稀㈀⤀㬀ഀഀ
        if (!R.isBBoxIntersect(bbox1, bbox2)) {਍            爀攀琀甀爀渀 樀甀猀琀䌀漀甀渀琀 㼀 　 㨀 嬀崀㬀ഀഀ
        }਍        瘀愀爀 氀㄀ 㴀 戀攀稀氀攀渀⸀愀瀀瀀氀礀⠀　Ⰰ 戀攀稀㄀⤀Ⰰഀഀ
            l2 = bezlen.apply(0, bez2),਍            渀㄀ 㴀 洀洀愀砀⠀縀縀⠀氀㄀ ⼀ 㔀⤀Ⰰ ㄀⤀Ⰰഀഀ
            n2 = mmax(~~(l2 / 5), 1),਍            搀漀琀猀㄀ 㴀 嬀崀Ⰰഀഀ
            dots2 = [],਍            砀礀 㴀 笀紀Ⰰഀഀ
            res = justCount ? 0 : [];਍        昀漀爀 ⠀瘀愀爀 椀 㴀 　㬀 椀 㰀 渀㄀ ⬀ ㄀㬀 椀⬀⬀⤀ 笀ഀഀ
            var p = R.findDotsAtSegment.apply(R, bez1.concat(i / n1));਍            搀漀琀猀㄀⸀瀀甀猀栀⠀笀砀㨀 瀀⸀砀Ⰰ 礀㨀 瀀⸀礀Ⰰ 琀㨀 椀 ⼀ 渀㄀紀⤀㬀ഀഀ
        }਍        昀漀爀 ⠀椀 㴀 　㬀 椀 㰀 渀㈀ ⬀ ㄀㬀 椀⬀⬀⤀ 笀ഀഀ
            p = R.findDotsAtSegment.apply(R, bez2.concat(i / n2));਍            搀漀琀猀㈀⸀瀀甀猀栀⠀笀砀㨀 瀀⸀砀Ⰰ 礀㨀 瀀⸀礀Ⰰ 琀㨀 椀 ⼀ 渀㈀紀⤀㬀ഀഀ
        }਍        昀漀爀 ⠀椀 㴀 　㬀 椀 㰀 渀㄀㬀 椀⬀⬀⤀ 笀ഀഀ
            for (var j = 0; j < n2; j++) {਍                瘀愀爀 搀椀 㴀 搀漀琀猀㄀嬀椀崀Ⰰഀഀ
                    di1 = dots1[i + 1],਍                    搀樀 㴀 搀漀琀猀㈀嬀樀崀Ⰰഀഀ
                    dj1 = dots2[j + 1],਍                    挀椀 㴀 愀戀猀⠀搀椀㄀⸀砀 ⴀ 搀椀⸀砀⤀ 㰀 ⸀　　㄀ 㼀 ∀礀∀ 㨀 ∀砀∀Ⰰഀഀ
                    cj = abs(dj1.x - dj.x) < .001 ? "y" : "x",਍                    椀猀 㴀 椀渀琀攀爀猀攀挀琀⠀搀椀⸀砀Ⰰ 搀椀⸀礀Ⰰ 搀椀㄀⸀砀Ⰰ 搀椀㄀⸀礀Ⰰ 搀樀⸀砀Ⰰ 搀樀⸀礀Ⰰ 搀樀㄀⸀砀Ⰰ 搀樀㄀⸀礀⤀㬀ഀഀ
                if (is) {਍                    椀昀 ⠀砀礀嬀椀猀⸀砀⸀琀漀䘀椀砀攀搀⠀㐀⤀崀 㴀㴀 椀猀⸀礀⸀琀漀䘀椀砀攀搀⠀㐀⤀⤀ 笀ഀഀ
                        continue;਍                    紀ഀഀ
                    xy[is.x.toFixed(4)] = is.y.toFixed(4);਍                    瘀愀爀 琀㄀ 㴀 搀椀⸀琀 ⬀ 愀戀猀⠀⠀椀猀嬀挀椀崀 ⴀ 搀椀嬀挀椀崀⤀ ⼀ ⠀搀椀㄀嬀挀椀崀 ⴀ 搀椀嬀挀椀崀⤀⤀ ⨀ ⠀搀椀㄀⸀琀 ⴀ 搀椀⸀琀⤀Ⰰഀഀ
                        t2 = dj.t + abs((is[cj] - dj[cj]) / (dj1[cj] - dj[cj])) * (dj1.t - dj.t);਍                    椀昀 ⠀琀㄀ 㸀㴀 　 ☀☀ 琀㄀ 㰀㴀 ㄀⸀　　㄀ ☀☀ 琀㈀ 㸀㴀 　 ☀☀ 琀㈀ 㰀㴀 ㄀⸀　　㄀⤀ 笀ഀഀ
                        if (justCount) {਍                            爀攀猀⬀⬀㬀ഀഀ
                        } else {਍                            爀攀猀⸀瀀甀猀栀⠀笀ഀഀ
                                x: is.x,਍                                礀㨀 椀猀⸀礀Ⰰഀഀ
                                t1: mmin(t1, 1),਍                                琀㈀㨀 洀洀椀渀⠀琀㈀Ⰰ ㄀⤀ഀഀ
                            });਍                        紀ഀഀ
                    }਍                紀ഀഀ
            }਍        紀ഀഀ
        return res;਍    紀ഀഀ
    /*\਍     ⨀ 刀愀瀀栀愀攀氀⸀瀀愀琀栀䤀渀琀攀爀猀攀挀琀椀漀渀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Utility method਍     ⨀⨀ഀഀ
     * Finds intersections of two paths਍     㸀 倀愀爀愀洀攀琀攀爀猀ഀഀ
     - path1 (string) path string਍     ⴀ 瀀愀琀栀㈀ ⠀猀琀爀椀渀最⤀ 瀀愀琀栀 猀琀爀椀渀最ഀഀ
     = (array) dots of intersection਍     漀 嬀ഀഀ
     o     {਍     漀         砀㨀 ⠀渀甀洀戀攀爀⤀ 砀 挀漀漀爀搀椀渀愀琀攀 漀昀 琀栀攀 瀀漀椀渀琀ഀഀ
     o         y: (number) y coordinate of the point਍     漀         琀㄀㨀 ⠀渀甀洀戀攀爀⤀ 琀 瘀愀氀甀攀 昀漀爀 猀攀最洀攀渀琀 漀昀 瀀愀琀栀㄀ഀഀ
     o         t2: (number) t value for segment of path2਍     漀         猀攀最洀攀渀琀㄀㨀 ⠀渀甀洀戀攀爀⤀ 漀爀搀攀爀 渀甀洀戀攀爀 昀漀爀 猀攀最洀攀渀琀 漀昀 瀀愀琀栀㄀ഀഀ
     o         segment2: (number) order number for segment of path2਍     漀         戀攀稀㄀㨀 ⠀愀爀爀愀礀⤀ 攀椀最栀琀 挀漀漀爀搀椀渀愀琀攀猀 爀攀瀀爀攀猀攀渀琀椀渀最 戀攀稀椀爀 挀甀爀瘀攀 昀漀爀 琀栀攀 猀攀最洀攀渀琀 漀昀 瀀愀琀栀㄀ഀഀ
     o         bez2: (array) eight coordinates representing beziér curve for the segment of path2਍     漀     紀ഀഀ
     o ]਍    尀⨀⼀ഀഀ
    R.pathIntersection = function (path1, path2) {਍        爀攀琀甀爀渀 椀渀琀攀爀倀愀琀栀䠀攀氀瀀攀爀⠀瀀愀琀栀㄀Ⰰ 瀀愀琀栀㈀⤀㬀ഀഀ
    };਍    刀⸀瀀愀琀栀䤀渀琀攀爀猀攀挀琀椀漀渀一甀洀戀攀爀 㴀 昀甀渀挀琀椀漀渀 ⠀瀀愀琀栀㄀Ⰰ 瀀愀琀栀㈀⤀ 笀ഀഀ
        return interPathHelper(path1, path2, 1);਍    紀㬀ഀഀ
    function interPathHelper(path1, path2, justCount) {਍        瀀愀琀栀㄀ 㴀 刀⸀开瀀愀琀栀㈀挀甀爀瘀攀⠀瀀愀琀栀㄀⤀㬀ഀഀ
        path2 = R._path2curve(path2);਍        瘀愀爀 砀㄀Ⰰ 礀㄀Ⰰ 砀㈀Ⰰ 礀㈀Ⰰ 砀㄀洀Ⰰ 礀㄀洀Ⰰ 砀㈀洀Ⰰ 礀㈀洀Ⰰ 戀攀稀㄀Ⰰ 戀攀稀㈀Ⰰഀഀ
            res = justCount ? 0 : [];਍        昀漀爀 ⠀瘀愀爀 椀 㴀 　Ⰰ 椀椀 㴀 瀀愀琀栀㄀⸀氀攀渀最琀栀㬀 椀 㰀 椀椀㬀 椀⬀⬀⤀ 笀ഀഀ
            var pi = path1[i];਍            椀昀 ⠀瀀椀嬀　崀 㴀㴀 ∀䴀∀⤀ 笀ഀഀ
                x1 = x1m = pi[1];਍                礀㄀ 㴀 礀㄀洀 㴀 瀀椀嬀㈀崀㬀ഀഀ
            } else {਍                椀昀 ⠀瀀椀嬀　崀 㴀㴀 ∀䌀∀⤀ 笀ഀഀ
                    bez1 = [x1, y1].concat(pi.slice(1));਍                    砀㄀ 㴀 戀攀稀㄀嬀㘀崀㬀ഀഀ
                    y1 = bez1[7];਍                紀 攀氀猀攀 笀ഀഀ
                    bez1 = [x1, y1, x1, y1, x1m, y1m, x1m, y1m];਍                    砀㄀ 㴀 砀㄀洀㬀ഀഀ
                    y1 = y1m;਍                紀ഀഀ
                for (var j = 0, jj = path2.length; j < jj; j++) {਍                    瘀愀爀 瀀樀 㴀 瀀愀琀栀㈀嬀樀崀㬀ഀഀ
                    if (pj[0] == "M") {਍                        砀㈀ 㴀 砀㈀洀 㴀 瀀樀嬀㄀崀㬀ഀഀ
                        y2 = y2m = pj[2];਍                    紀 攀氀猀攀 笀ഀഀ
                        if (pj[0] == "C") {਍                            戀攀稀㈀ 㴀 嬀砀㈀Ⰰ 礀㈀崀⸀挀漀渀挀愀琀⠀瀀樀⸀猀氀椀挀攀⠀㄀⤀⤀㬀ഀഀ
                            x2 = bez2[6];਍                            礀㈀ 㴀 戀攀稀㈀嬀㜀崀㬀ഀഀ
                        } else {਍                            戀攀稀㈀ 㴀 嬀砀㈀Ⰰ 礀㈀Ⰰ 砀㈀Ⰰ 礀㈀Ⰰ 砀㈀洀Ⰰ 礀㈀洀Ⰰ 砀㈀洀Ⰰ 礀㈀洀崀㬀ഀഀ
                            x2 = x2m;਍                            礀㈀ 㴀 礀㈀洀㬀ഀഀ
                        }਍                        瘀愀爀 椀渀琀爀 㴀 椀渀琀攀爀䠀攀氀瀀攀爀⠀戀攀稀㄀Ⰰ 戀攀稀㈀Ⰰ 樀甀猀琀䌀漀甀渀琀⤀㬀ഀഀ
                        if (justCount) {਍                            爀攀猀 ⬀㴀 椀渀琀爀㬀ഀഀ
                        } else {਍                            昀漀爀 ⠀瘀愀爀 欀 㴀 　Ⰰ 欀欀 㴀 椀渀琀爀⸀氀攀渀最琀栀㬀 欀 㰀 欀欀㬀 欀⬀⬀⤀ 笀ഀഀ
                                intr[k].segment1 = i;਍                                椀渀琀爀嬀欀崀⸀猀攀最洀攀渀琀㈀ 㴀 樀㬀ഀഀ
                                intr[k].bez1 = bez1;਍                                椀渀琀爀嬀欀崀⸀戀攀稀㈀ 㴀 戀攀稀㈀㬀ഀഀ
                            }਍                            爀攀猀 㴀 爀攀猀⸀挀漀渀挀愀琀⠀椀渀琀爀⤀㬀ഀഀ
                        }਍                    紀ഀഀ
                }਍            紀ഀഀ
        }਍        爀攀琀甀爀渀 爀攀猀㬀ഀഀ
    }਍    ⼀⨀尀ഀഀ
     * Raphael.isPointInsidePath਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 唀琀椀氀椀琀礀 洀攀琀栀漀搀ഀഀ
     **਍     ⨀ 刀攀琀甀爀渀猀 怀琀爀甀攀怀 椀昀 最椀瘀攀渀 瀀漀椀渀琀 椀猀 椀渀猀椀搀攀 愀 最椀瘀攀渀 挀氀漀猀攀搀 瀀愀琀栀⸀ഀഀ
     > Parameters਍     ⴀ 瀀愀琀栀 ⠀猀琀爀椀渀最⤀ 瀀愀琀栀 猀琀爀椀渀最ഀഀ
     - x (number) x of the point਍     ⴀ 礀 ⠀渀甀洀戀攀爀⤀ 礀 漀昀 琀栀攀 瀀漀椀渀琀ഀഀ
     = (boolean) true, if point is inside the path਍    尀⨀⼀ഀഀ
    R.isPointInsidePath = function (path, x, y) {਍        瘀愀爀 戀戀漀砀 㴀 刀⸀瀀愀琀栀䈀䈀漀砀⠀瀀愀琀栀⤀㬀ഀഀ
        return R.isPointInsideBBox(bbox, x, y) &&਍               椀渀琀攀爀倀愀琀栀䠀攀氀瀀攀爀⠀瀀愀琀栀Ⰰ 嬀嬀∀䴀∀Ⰰ 砀Ⰰ 礀崀Ⰰ 嬀∀䠀∀Ⰰ 戀戀漀砀⸀砀㈀ ⬀ ㄀　崀崀Ⰰ ㄀⤀ ─ ㈀ 㴀㴀 ㄀㬀ഀഀ
    };਍    刀⸀开爀攀洀漀瘀攀搀䘀愀挀琀漀爀礀 㴀 昀甀渀挀琀椀漀渀 ⠀洀攀琀栀漀搀渀愀洀攀⤀ 笀ഀഀ
        return function () {਍            攀瘀攀⠀∀爀愀瀀栀愀攀氀⸀氀漀最∀Ⰰ 渀甀氀氀Ⰰ ∀刀愀瀀栀愀尀砀攀戀氀㨀 礀漀甀 愀爀攀 挀愀氀氀椀渀最 琀漀 洀攀琀栀漀搀 尀甀㈀　㄀挀∀ ⬀ 洀攀琀栀漀搀渀愀洀攀 ⬀ ∀尀甀㈀　㄀搀 漀昀 爀攀洀漀瘀攀搀 漀戀樀攀挀琀∀Ⰰ 洀攀琀栀漀搀渀愀洀攀⤀㬀ഀഀ
        };਍    紀㬀ഀഀ
    /*\਍     ⨀ 刀愀瀀栀愀攀氀⸀瀀愀琀栀䈀䈀漀砀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Utility method਍     ⨀⨀ഀഀ
     * Return bounding box of a given path਍     㸀 倀愀爀愀洀攀琀攀爀猀ഀഀ
     - path (string) path string਍     㴀 ⠀漀戀樀攀挀琀⤀ 戀漀甀渀搀椀渀最 戀漀砀ഀഀ
     o {਍     漀     砀㨀 ⠀渀甀洀戀攀爀⤀ 砀 挀漀漀爀搀椀渀愀琀攀 漀昀 琀栀攀 氀攀昀琀 琀漀瀀 瀀漀椀渀琀 漀昀 琀栀攀 戀漀砀ഀഀ
     o     y: (number) y coordinate of the left top point of the box਍     漀     砀㈀㨀 ⠀渀甀洀戀攀爀⤀ 砀 挀漀漀爀搀椀渀愀琀攀 漀昀 琀栀攀 爀椀最栀琀 戀漀琀琀漀洀 瀀漀椀渀琀 漀昀 琀栀攀 戀漀砀ഀഀ
     o     y2: (number) y coordinate of the right bottom point of the box਍     漀     眀椀搀琀栀㨀 ⠀渀甀洀戀攀爀⤀ 眀椀搀琀栀 漀昀 琀栀攀 戀漀砀ഀഀ
     o     height: (number) height of the box਍     漀     挀砀㨀 ⠀渀甀洀戀攀爀⤀ 砀 挀漀漀爀搀椀渀愀琀攀 漀昀 琀栀攀 挀攀渀琀攀爀 漀昀 琀栀攀 戀漀砀ഀഀ
     o     cy: (number) y coordinate of the center of the box਍     漀 紀ഀഀ
    \*/਍    瘀愀爀 瀀愀琀栀䐀椀洀攀渀猀椀漀渀猀 㴀 刀⸀瀀愀琀栀䈀䈀漀砀 㴀 昀甀渀挀琀椀漀渀 ⠀瀀愀琀栀⤀ 笀ഀഀ
        var pth = paths(path);਍        椀昀 ⠀瀀琀栀⸀戀戀漀砀⤀ 笀ഀഀ
            return clone(pth.bbox);਍        紀ഀഀ
        if (!path) {਍            爀攀琀甀爀渀 笀砀㨀 　Ⰰ 礀㨀 　Ⰰ 眀椀搀琀栀㨀 　Ⰰ 栀攀椀最栀琀㨀 　Ⰰ 砀㈀㨀 　Ⰰ 礀㈀㨀 　紀㬀ഀഀ
        }਍        瀀愀琀栀 㴀 瀀愀琀栀㈀挀甀爀瘀攀⠀瀀愀琀栀⤀㬀ഀഀ
        var x = 0,਍            礀 㴀 　Ⰰഀഀ
            X = [],਍            夀 㴀 嬀崀Ⰰഀഀ
            p;਍        昀漀爀 ⠀瘀愀爀 椀 㴀 　Ⰰ 椀椀 㴀 瀀愀琀栀⸀氀攀渀最琀栀㬀 椀 㰀 椀椀㬀 椀⬀⬀⤀ 笀ഀഀ
            p = path[i];਍            椀昀 ⠀瀀嬀　崀 㴀㴀 ∀䴀∀⤀ 笀ഀഀ
                x = p[1];਍                礀 㴀 瀀嬀㈀崀㬀ഀഀ
                X.push(x);਍                夀⸀瀀甀猀栀⠀礀⤀㬀ഀഀ
            } else {਍                瘀愀爀 搀椀洀 㴀 挀甀爀瘀攀䐀椀洀⠀砀Ⰰ 礀Ⰰ 瀀嬀㄀崀Ⰰ 瀀嬀㈀崀Ⰰ 瀀嬀㌀崀Ⰰ 瀀嬀㐀崀Ⰰ 瀀嬀㔀崀Ⰰ 瀀嬀㘀崀⤀㬀ഀഀ
                X = X[concat](dim.min.x, dim.max.x);਍                夀 㴀 夀嬀挀漀渀挀愀琀崀⠀搀椀洀⸀洀椀渀⸀礀Ⰰ 搀椀洀⸀洀愀砀⸀礀⤀㬀ഀഀ
                x = p[5];਍                礀 㴀 瀀嬀㘀崀㬀ഀഀ
            }਍        紀ഀഀ
        var xmin = mmin[apply](0, X),਍            礀洀椀渀 㴀 洀洀椀渀嬀愀瀀瀀氀礀崀⠀　Ⰰ 夀⤀Ⰰഀഀ
            xmax = mmax[apply](0, X),਍            礀洀愀砀 㴀 洀洀愀砀嬀愀瀀瀀氀礀崀⠀　Ⰰ 夀⤀Ⰰഀഀ
            width = xmax - xmin,਍            栀攀椀最栀琀 㴀 礀洀愀砀 ⴀ 礀洀椀渀Ⰰഀഀ
                bb = {਍                砀㨀 砀洀椀渀Ⰰഀഀ
                y: ymin,਍                砀㈀㨀 砀洀愀砀Ⰰഀഀ
                y2: ymax,਍                眀椀搀琀栀㨀 眀椀搀琀栀Ⰰഀഀ
                height: height,਍                挀砀㨀 砀洀椀渀 ⬀ 眀椀搀琀栀 ⼀ ㈀Ⰰഀഀ
                cy: ymin + height / 2਍            紀㬀ഀഀ
        pth.bbox = clone(bb);਍        爀攀琀甀爀渀 戀戀㬀ഀഀ
    },਍        瀀愀琀栀䌀氀漀渀攀 㴀 昀甀渀挀琀椀漀渀 ⠀瀀愀琀栀䄀爀爀愀礀⤀ 笀ഀഀ
            var res = clone(pathArray);਍            爀攀猀⸀琀漀匀琀爀椀渀最 㴀 刀⸀开瀀愀琀栀㈀猀琀爀椀渀最㬀ഀഀ
            return res;਍        紀Ⰰഀഀ
        pathToRelative = R._pathToRelative = function (pathArray) {਍            瘀愀爀 瀀琀栀 㴀 瀀愀琀栀猀⠀瀀愀琀栀䄀爀爀愀礀⤀㬀ഀഀ
            if (pth.rel) {਍                爀攀琀甀爀渀 瀀愀琀栀䌀氀漀渀攀⠀瀀琀栀⸀爀攀氀⤀㬀ഀഀ
            }਍            椀昀 ⠀℀刀⸀椀猀⠀瀀愀琀栀䄀爀爀愀礀Ⰰ 愀爀爀愀礀⤀ 簀簀 ℀刀⸀椀猀⠀瀀愀琀栀䄀爀爀愀礀 ☀☀ 瀀愀琀栀䄀爀爀愀礀嬀　崀Ⰰ 愀爀爀愀礀⤀⤀ 笀 ⼀⼀ 爀漀甀最栀 愀猀猀甀洀瀀琀椀漀渀ഀഀ
                pathArray = R.parsePathString(pathArray);਍            紀ഀഀ
            var res = [],਍                砀 㴀 　Ⰰഀഀ
                y = 0,਍                洀砀 㴀 　Ⰰഀഀ
                my = 0,਍                猀琀愀爀琀 㴀 　㬀ഀഀ
            if (pathArray[0][0] == "M") {਍                砀 㴀 瀀愀琀栀䄀爀爀愀礀嬀　崀嬀㄀崀㬀ഀഀ
                y = pathArray[0][2];਍                洀砀 㴀 砀㬀ഀഀ
                my = y;਍                猀琀愀爀琀⬀⬀㬀ഀഀ
                res.push(["M", x, y]);਍            紀ഀഀ
            for (var i = start, ii = pathArray.length; i < ii; i++) {਍                瘀愀爀 爀 㴀 爀攀猀嬀椀崀 㴀 嬀崀Ⰰഀഀ
                    pa = pathArray[i];਍                椀昀 ⠀瀀愀嬀　崀 ℀㴀 氀漀眀攀爀䌀愀猀攀⸀挀愀氀氀⠀瀀愀嬀　崀⤀⤀ 笀ഀഀ
                    r[0] = lowerCase.call(pa[0]);਍                    猀眀椀琀挀栀 ⠀爀嬀　崀⤀ 笀ഀഀ
                        case "a":਍                            爀嬀㄀崀 㴀 瀀愀嬀㄀崀㬀ഀഀ
                            r[2] = pa[2];਍                            爀嬀㌀崀 㴀 瀀愀嬀㌀崀㬀ഀഀ
                            r[4] = pa[4];਍                            爀嬀㔀崀 㴀 瀀愀嬀㔀崀㬀ഀഀ
                            r[6] = +(pa[6] - x).toFixed(3);਍                            爀嬀㜀崀 㴀 ⬀⠀瀀愀嬀㜀崀 ⴀ 礀⤀⸀琀漀䘀椀砀攀搀⠀㌀⤀㬀ഀഀ
                            break;਍                        挀愀猀攀 ∀瘀∀㨀ഀഀ
                            r[1] = +(pa[1] - y).toFixed(3);਍                            戀爀攀愀欀㬀ഀഀ
                        case "m":਍                            洀砀 㴀 瀀愀嬀㄀崀㬀ഀഀ
                            my = pa[2];਍                        搀攀昀愀甀氀琀㨀ഀഀ
                            for (var j = 1, jj = pa.length; j < jj; j++) {਍                                爀嬀樀崀 㴀 ⬀⠀瀀愀嬀樀崀 ⴀ ⠀⠀樀 ─ ㈀⤀ 㼀 砀 㨀 礀⤀⤀⸀琀漀䘀椀砀攀搀⠀㌀⤀㬀ഀഀ
                            }਍                    紀ഀഀ
                } else {਍                    爀 㴀 爀攀猀嬀椀崀 㴀 嬀崀㬀ഀഀ
                    if (pa[0] == "m") {਍                        洀砀 㴀 瀀愀嬀㄀崀 ⬀ 砀㬀ഀഀ
                        my = pa[2] + y;਍                    紀ഀഀ
                    for (var k = 0, kk = pa.length; k < kk; k++) {਍                        爀攀猀嬀椀崀嬀欀崀 㴀 瀀愀嬀欀崀㬀ഀഀ
                    }਍                紀ഀഀ
                var len = res[i].length;਍                猀眀椀琀挀栀 ⠀爀攀猀嬀椀崀嬀　崀⤀ 笀ഀഀ
                    case "z":਍                        砀 㴀 洀砀㬀ഀഀ
                        y = my;਍                        戀爀攀愀欀㬀ഀഀ
                    case "h":਍                        砀 ⬀㴀 ⬀爀攀猀嬀椀崀嬀氀攀渀 ⴀ ㄀崀㬀ഀഀ
                        break;਍                    挀愀猀攀 ∀瘀∀㨀ഀഀ
                        y += +res[i][len - 1];਍                        戀爀攀愀欀㬀ഀഀ
                    default:਍                        砀 ⬀㴀 ⬀爀攀猀嬀椀崀嬀氀攀渀 ⴀ ㈀崀㬀ഀഀ
                        y += +res[i][len - 1];਍                紀ഀഀ
            }਍            爀攀猀⸀琀漀匀琀爀椀渀最 㴀 刀⸀开瀀愀琀栀㈀猀琀爀椀渀最㬀ഀഀ
            pth.rel = pathClone(res);਍            爀攀琀甀爀渀 爀攀猀㬀ഀഀ
        },਍        瀀愀琀栀吀漀䄀戀猀漀氀甀琀攀 㴀 刀⸀开瀀愀琀栀吀漀䄀戀猀漀氀甀琀攀 㴀 昀甀渀挀琀椀漀渀 ⠀瀀愀琀栀䄀爀爀愀礀⤀ 笀ഀഀ
            var pth = paths(pathArray);਍            椀昀 ⠀瀀琀栀⸀愀戀猀⤀ 笀ഀഀ
                return pathClone(pth.abs);਍            紀ഀഀ
            if (!R.is(pathArray, array) || !R.is(pathArray && pathArray[0], array)) { // rough assumption਍                瀀愀琀栀䄀爀爀愀礀 㴀 刀⸀瀀愀爀猀攀倀愀琀栀匀琀爀椀渀最⠀瀀愀琀栀䄀爀爀愀礀⤀㬀ഀഀ
            }਍            椀昀 ⠀℀瀀愀琀栀䄀爀爀愀礀 簀簀 ℀瀀愀琀栀䄀爀爀愀礀⸀氀攀渀最琀栀⤀ 笀ഀഀ
                return [["M", 0, 0]];਍            紀ഀഀ
            var res = [],਍                砀 㴀 　Ⰰഀഀ
                y = 0,਍                洀砀 㴀 　Ⰰഀഀ
                my = 0,਍                猀琀愀爀琀 㴀 　㬀ഀഀ
            if (pathArray[0][0] == "M") {਍                砀 㴀 ⬀瀀愀琀栀䄀爀爀愀礀嬀　崀嬀㄀崀㬀ഀഀ
                y = +pathArray[0][2];਍                洀砀 㴀 砀㬀ഀഀ
                my = y;਍                猀琀愀爀琀⬀⬀㬀ഀഀ
                res[0] = ["M", x, y];਍            紀ഀഀ
            var crz = pathArray.length == 3 && pathArray[0][0] == "M" && pathArray[1][0].toUpperCase() == "R" && pathArray[2][0].toUpperCase() == "Z";਍            昀漀爀 ⠀瘀愀爀 爀Ⰰ 瀀愀Ⰰ 椀 㴀 猀琀愀爀琀Ⰰ 椀椀 㴀 瀀愀琀栀䄀爀爀愀礀⸀氀攀渀最琀栀㬀 椀 㰀 椀椀㬀 椀⬀⬀⤀ 笀ഀഀ
                res.push(r = []);਍                瀀愀 㴀 瀀愀琀栀䄀爀爀愀礀嬀椀崀㬀ഀഀ
                if (pa[0] != upperCase.call(pa[0])) {਍                    爀嬀　崀 㴀 甀瀀瀀攀爀䌀愀猀攀⸀挀愀氀氀⠀瀀愀嬀　崀⤀㬀ഀഀ
                    switch (r[0]) {਍                        挀愀猀攀 ∀䄀∀㨀ഀഀ
                            r[1] = pa[1];਍                            爀嬀㈀崀 㴀 瀀愀嬀㈀崀㬀ഀഀ
                            r[3] = pa[3];਍                            爀嬀㐀崀 㴀 瀀愀嬀㐀崀㬀ഀഀ
                            r[5] = pa[5];਍                            爀嬀㘀崀 㴀 ⬀⠀瀀愀嬀㘀崀 ⬀ 砀⤀㬀ഀഀ
                            r[7] = +(pa[7] + y);਍                            戀爀攀愀欀㬀ഀഀ
                        case "V":਍                            爀嬀㄀崀 㴀 ⬀瀀愀嬀㄀崀 ⬀ 礀㬀ഀഀ
                            break;਍                        挀愀猀攀 ∀䠀∀㨀ഀഀ
                            r[1] = +pa[1] + x;਍                            戀爀攀愀欀㬀ഀഀ
                        case "R":਍                            瘀愀爀 搀漀琀猀 㴀 嬀砀Ⰰ 礀崀嬀挀漀渀挀愀琀崀⠀瀀愀⸀猀氀椀挀攀⠀㄀⤀⤀㬀ഀഀ
                            for (var j = 2, jj = dots.length; j < jj; j++) {਍                                搀漀琀猀嬀樀崀 㴀 ⬀搀漀琀猀嬀樀崀 ⬀ 砀㬀ഀഀ
                                dots[++j] = +dots[j] + y;਍                            紀ഀഀ
                            res.pop();਍                            爀攀猀 㴀 爀攀猀嬀挀漀渀挀愀琀崀⠀挀愀琀洀甀氀氀刀漀洀㈀戀攀稀椀攀爀⠀搀漀琀猀Ⰰ 挀爀稀⤀⤀㬀ഀഀ
                            break;਍                        挀愀猀攀 ∀䴀∀㨀ഀഀ
                            mx = +pa[1] + x;਍                            洀礀 㴀 ⬀瀀愀嬀㈀崀 ⬀ 礀㬀ഀഀ
                        default:਍                            昀漀爀 ⠀樀 㴀 ㄀Ⰰ 樀樀 㴀 瀀愀⸀氀攀渀最琀栀㬀 樀 㰀 樀樀㬀 樀⬀⬀⤀ 笀ഀഀ
                                r[j] = +pa[j] + ((j % 2) ? x : y);਍                            紀ഀഀ
                    }਍                紀 攀氀猀攀 椀昀 ⠀瀀愀嬀　崀 㴀㴀 ∀刀∀⤀ 笀ഀഀ
                    dots = [x, y][concat](pa.slice(1));਍                    爀攀猀⸀瀀漀瀀⠀⤀㬀ഀഀ
                    res = res[concat](catmullRom2bezier(dots, crz));਍                    爀 㴀 嬀∀刀∀崀嬀挀漀渀挀愀琀崀⠀瀀愀⸀猀氀椀挀攀⠀ⴀ㈀⤀⤀㬀ഀഀ
                } else {਍                    昀漀爀 ⠀瘀愀爀 欀 㴀 　Ⰰ 欀欀 㴀 瀀愀⸀氀攀渀最琀栀㬀 欀 㰀 欀欀㬀 欀⬀⬀⤀ 笀ഀഀ
                        r[k] = pa[k];਍                    紀ഀഀ
                }਍                猀眀椀琀挀栀 ⠀爀嬀　崀⤀ 笀ഀഀ
                    case "Z":਍                        砀 㴀 洀砀㬀ഀഀ
                        y = my;਍                        戀爀攀愀欀㬀ഀഀ
                    case "H":਍                        砀 㴀 爀嬀㄀崀㬀ഀഀ
                        break;਍                    挀愀猀攀 ∀嘀∀㨀ഀഀ
                        y = r[1];਍                        戀爀攀愀欀㬀ഀഀ
                    case "M":਍                        洀砀 㴀 爀嬀爀⸀氀攀渀最琀栀 ⴀ ㈀崀㬀ഀഀ
                        my = r[r.length - 1];਍                    搀攀昀愀甀氀琀㨀ഀഀ
                        x = r[r.length - 2];਍                        礀 㴀 爀嬀爀⸀氀攀渀最琀栀 ⴀ ㄀崀㬀ഀഀ
                }਍            紀ഀഀ
            res.toString = R._path2string;਍            瀀琀栀⸀愀戀猀 㴀 瀀愀琀栀䌀氀漀渀攀⠀爀攀猀⤀㬀ഀഀ
            return res;਍        紀Ⰰഀഀ
        l2c = function (x1, y1, x2, y2) {਍            爀攀琀甀爀渀 嬀砀㄀Ⰰ 礀㄀Ⰰ 砀㈀Ⰰ 礀㈀Ⰰ 砀㈀Ⰰ 礀㈀崀㬀ഀഀ
        },਍        焀㈀挀 㴀 昀甀渀挀琀椀漀渀 ⠀砀㄀Ⰰ 礀㄀Ⰰ 愀砀Ⰰ 愀礀Ⰰ 砀㈀Ⰰ 礀㈀⤀ 笀ഀഀ
            var _13 = 1 / 3,਍                开㈀㌀ 㴀 ㈀ ⼀ ㌀㬀ഀഀ
            return [਍                    开㄀㌀ ⨀ 砀㄀ ⬀ 开㈀㌀ ⨀ 愀砀Ⰰഀഀ
                    _13 * y1 + _23 * ay,਍                    开㄀㌀ ⨀ 砀㈀ ⬀ 开㈀㌀ ⨀ 愀砀Ⰰഀഀ
                    _13 * y2 + _23 * ay,਍                    砀㈀Ⰰഀഀ
                    y2਍                崀㬀ഀഀ
        },਍        愀㈀挀 㴀 昀甀渀挀琀椀漀渀 ⠀砀㄀Ⰰ 礀㄀Ⰰ 爀砀Ⰰ 爀礀Ⰰ 愀渀最氀攀Ⰰ 氀愀爀最攀开愀爀挀开昀氀愀最Ⰰ 猀眀攀攀瀀开昀氀愀最Ⰰ 砀㈀Ⰰ 礀㈀Ⰰ 爀攀挀甀爀猀椀瘀攀⤀ 笀ഀഀ
            // for more information of where this math came from visit:਍            ⼀⼀ 栀琀琀瀀㨀⼀⼀眀眀眀⸀眀㌀⸀漀爀最⼀吀刀⼀匀嘀䜀㄀㄀⼀椀洀瀀氀渀漀琀攀⸀栀琀洀氀⌀䄀爀挀䤀洀瀀氀攀洀攀渀琀愀琀椀漀渀一漀琀攀猀ഀഀ
            var _120 = PI * 120 / 180,਍                爀愀搀 㴀 倀䤀 ⼀ ㄀㠀　 ⨀ ⠀⬀愀渀最氀攀 簀簀 　⤀Ⰰഀഀ
                res = [],਍                砀礀Ⰰഀഀ
                rotate = cacher(function (x, y, rad) {਍                    瘀愀爀 堀 㴀 砀 ⨀ 洀愀琀栀⸀挀漀猀⠀爀愀搀⤀ ⴀ 礀 ⨀ 洀愀琀栀⸀猀椀渀⠀爀愀搀⤀Ⰰഀഀ
                        Y = x * math.sin(rad) + y * math.cos(rad);਍                    爀攀琀甀爀渀 笀砀㨀 堀Ⰰ 礀㨀 夀紀㬀ഀഀ
                });਍            椀昀 ⠀℀爀攀挀甀爀猀椀瘀攀⤀ 笀ഀഀ
                xy = rotate(x1, y1, -rad);਍                砀㄀ 㴀 砀礀⸀砀㬀ഀഀ
                y1 = xy.y;਍                砀礀 㴀 爀漀琀愀琀攀⠀砀㈀Ⰰ 礀㈀Ⰰ ⴀ爀愀搀⤀㬀ഀഀ
                x2 = xy.x;਍                礀㈀ 㴀 砀礀⸀礀㬀ഀഀ
                var cos = math.cos(PI / 180 * angle),਍                    猀椀渀 㴀 洀愀琀栀⸀猀椀渀⠀倀䤀 ⼀ ㄀㠀　 ⨀ 愀渀最氀攀⤀Ⰰഀഀ
                    x = (x1 - x2) / 2,਍                    礀 㴀 ⠀礀㄀ ⴀ 礀㈀⤀ ⼀ ㈀㬀ഀഀ
                var h = (x * x) / (rx * rx) + (y * y) / (ry * ry);਍                椀昀 ⠀栀 㸀 ㄀⤀ 笀ഀഀ
                    h = math.sqrt(h);਍                    爀砀 㴀 栀 ⨀ 爀砀㬀ഀഀ
                    ry = h * ry;਍                紀ഀഀ
                var rx2 = rx * rx,਍                    爀礀㈀ 㴀 爀礀 ⨀ 爀礀Ⰰഀഀ
                    k = (large_arc_flag == sweep_flag ? -1 : 1) *਍                        洀愀琀栀⸀猀焀爀琀⠀愀戀猀⠀⠀爀砀㈀ ⨀ 爀礀㈀ ⴀ 爀砀㈀ ⨀ 礀 ⨀ 礀 ⴀ 爀礀㈀ ⨀ 砀 ⨀ 砀⤀ ⼀ ⠀爀砀㈀ ⨀ 礀 ⨀ 礀 ⬀ 爀礀㈀ ⨀ 砀 ⨀ 砀⤀⤀⤀Ⰰഀഀ
                    cx = k * rx * y / ry + (x1 + x2) / 2,਍                    挀礀 㴀 欀 ⨀ ⴀ爀礀 ⨀ 砀 ⼀ 爀砀 ⬀ ⠀礀㄀ ⬀ 礀㈀⤀ ⼀ ㈀Ⰰഀഀ
                    f1 = math.asin(((y1 - cy) / ry).toFixed(9)),਍                    昀㈀ 㴀 洀愀琀栀⸀愀猀椀渀⠀⠀⠀礀㈀ ⴀ 挀礀⤀ ⼀ 爀礀⤀⸀琀漀䘀椀砀攀搀⠀㤀⤀⤀㬀ഀഀ
਍                昀㄀ 㴀 砀㄀ 㰀 挀砀 㼀 倀䤀 ⴀ 昀㄀ 㨀 昀㄀㬀ഀഀ
                f2 = x2 < cx ? PI - f2 : f2;਍                昀㄀ 㰀 　 ☀☀ ⠀昀㄀ 㴀 倀䤀 ⨀ ㈀ ⬀ 昀㄀⤀㬀ഀഀ
                f2 < 0 && (f2 = PI * 2 + f2);਍                椀昀 ⠀猀眀攀攀瀀开昀氀愀最 ☀☀ 昀㄀ 㸀 昀㈀⤀ 笀ഀഀ
                    f1 = f1 - PI * 2;਍                紀ഀഀ
                if (!sweep_flag && f2 > f1) {਍                    昀㈀ 㴀 昀㈀ ⴀ 倀䤀 ⨀ ㈀㬀ഀഀ
                }਍            紀 攀氀猀攀 笀ഀഀ
                f1 = recursive[0];਍                昀㈀ 㴀 爀攀挀甀爀猀椀瘀攀嬀㄀崀㬀ഀഀ
                cx = recursive[2];਍                挀礀 㴀 爀攀挀甀爀猀椀瘀攀嬀㌀崀㬀ഀഀ
            }਍            瘀愀爀 搀昀 㴀 昀㈀ ⴀ 昀㄀㬀ഀഀ
            if (abs(df) > _120) {਍                瘀愀爀 昀㈀漀氀搀 㴀 昀㈀Ⰰഀഀ
                    x2old = x2,਍                    礀㈀漀氀搀 㴀 礀㈀㬀ഀഀ
                f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1);਍                砀㈀ 㴀 挀砀 ⬀ 爀砀 ⨀ 洀愀琀栀⸀挀漀猀⠀昀㈀⤀㬀ഀഀ
                y2 = cy + ry * math.sin(f2);਍                爀攀猀 㴀 愀㈀挀⠀砀㈀Ⰰ 礀㈀Ⰰ 爀砀Ⰰ 爀礀Ⰰ 愀渀最氀攀Ⰰ 　Ⰰ 猀眀攀攀瀀开昀氀愀最Ⰰ 砀㈀漀氀搀Ⰰ 礀㈀漀氀搀Ⰰ 嬀昀㈀Ⰰ 昀㈀漀氀搀Ⰰ 挀砀Ⰰ 挀礀崀⤀㬀ഀഀ
            }਍            搀昀 㴀 昀㈀ ⴀ 昀㄀㬀ഀഀ
            var c1 = math.cos(f1),਍                猀㄀ 㴀 洀愀琀栀⸀猀椀渀⠀昀㄀⤀Ⰰഀഀ
                c2 = math.cos(f2),਍                猀㈀ 㴀 洀愀琀栀⸀猀椀渀⠀昀㈀⤀Ⰰഀഀ
                t = math.tan(df / 4),਍                栀砀 㴀 㐀 ⼀ ㌀ ⨀ 爀砀 ⨀ 琀Ⰰഀഀ
                hy = 4 / 3 * ry * t,਍                洀㄀ 㴀 嬀砀㄀Ⰰ 礀㄀崀Ⰰഀഀ
                m2 = [x1 + hx * s1, y1 - hy * c1],਍                洀㌀ 㴀 嬀砀㈀ ⬀ 栀砀 ⨀ 猀㈀Ⰰ 礀㈀ ⴀ 栀礀 ⨀ 挀㈀崀Ⰰഀഀ
                m4 = [x2, y2];਍            洀㈀嬀　崀 㴀 ㈀ ⨀ 洀㄀嬀　崀 ⴀ 洀㈀嬀　崀㬀ഀഀ
            m2[1] = 2 * m1[1] - m2[1];਍            椀昀 ⠀爀攀挀甀爀猀椀瘀攀⤀ 笀ഀഀ
                return [m2, m3, m4][concat](res);਍            紀 攀氀猀攀 笀ഀഀ
                res = [m2, m3, m4][concat](res).join()[split](",");਍                瘀愀爀 渀攀眀爀攀猀 㴀 嬀崀㬀ഀഀ
                for (var i = 0, ii = res.length; i < ii; i++) {਍                    渀攀眀爀攀猀嬀椀崀 㴀 椀 ─ ㈀ 㼀 爀漀琀愀琀攀⠀爀攀猀嬀椀 ⴀ ㄀崀Ⰰ 爀攀猀嬀椀崀Ⰰ 爀愀搀⤀⸀礀 㨀 爀漀琀愀琀攀⠀爀攀猀嬀椀崀Ⰰ 爀攀猀嬀椀 ⬀ ㄀崀Ⰰ 爀愀搀⤀⸀砀㬀ഀഀ
                }਍                爀攀琀甀爀渀 渀攀眀爀攀猀㬀ഀഀ
            }਍        紀Ⰰഀഀ
        findDotAtSegment = function (p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {਍            瘀愀爀 琀㄀ 㴀 ㄀ ⴀ 琀㬀ഀഀ
            return {਍                砀㨀 瀀漀眀⠀琀㄀Ⰰ ㌀⤀ ⨀ 瀀㄀砀 ⬀ 瀀漀眀⠀琀㄀Ⰰ ㈀⤀ ⨀ ㌀ ⨀ 琀 ⨀ 挀㄀砀 ⬀ 琀㄀ ⨀ ㌀ ⨀ 琀 ⨀ 琀 ⨀ 挀㈀砀 ⬀ 瀀漀眀⠀琀Ⰰ ㌀⤀ ⨀ 瀀㈀砀Ⰰഀഀ
                y: pow(t1, 3) * p1y + pow(t1, 2) * 3 * t * c1y + t1 * 3 * t * t * c2y + pow(t, 3) * p2y਍            紀㬀ഀഀ
        },਍        挀甀爀瘀攀䐀椀洀 㴀 挀愀挀栀攀爀⠀昀甀渀挀琀椀漀渀 ⠀瀀㄀砀Ⰰ 瀀㄀礀Ⰰ 挀㄀砀Ⰰ 挀㄀礀Ⰰ 挀㈀砀Ⰰ 挀㈀礀Ⰰ 瀀㈀砀Ⰰ 瀀㈀礀⤀ 笀ഀഀ
            var a = (c2x - 2 * c1x + p1x) - (p2x - 2 * c2x + c1x),਍                戀 㴀 ㈀ ⨀ ⠀挀㄀砀 ⴀ 瀀㄀砀⤀ ⴀ ㈀ ⨀ ⠀挀㈀砀 ⴀ 挀㄀砀⤀Ⰰഀഀ
                c = p1x - c1x,਍                琀㄀ 㴀 ⠀ⴀ戀 ⬀ 洀愀琀栀⸀猀焀爀琀⠀戀 ⨀ 戀 ⴀ 㐀 ⨀ 愀 ⨀ 挀⤀⤀ ⼀ ㈀ ⼀ 愀Ⰰഀഀ
                t2 = (-b - math.sqrt(b * b - 4 * a * c)) / 2 / a,਍                礀 㴀 嬀瀀㄀礀Ⰰ 瀀㈀礀崀Ⰰഀഀ
                x = [p1x, p2x],਍                搀漀琀㬀ഀഀ
            abs(t1) > "1e12" && (t1 = .5);਍            愀戀猀⠀琀㈀⤀ 㸀 ∀㄀攀㄀㈀∀ ☀☀ ⠀琀㈀ 㴀 ⸀㔀⤀㬀ഀഀ
            if (t1 > 0 && t1 < 1) {਍                搀漀琀 㴀 昀椀渀搀䐀漀琀䄀琀匀攀最洀攀渀琀⠀瀀㄀砀Ⰰ 瀀㄀礀Ⰰ 挀㄀砀Ⰰ 挀㄀礀Ⰰ 挀㈀砀Ⰰ 挀㈀礀Ⰰ 瀀㈀砀Ⰰ 瀀㈀礀Ⰰ 琀㄀⤀㬀ഀഀ
                x.push(dot.x);਍                礀⸀瀀甀猀栀⠀搀漀琀⸀礀⤀㬀ഀഀ
            }਍            椀昀 ⠀琀㈀ 㸀 　 ☀☀ 琀㈀ 㰀 ㄀⤀ 笀ഀഀ
                dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t2);਍                砀⸀瀀甀猀栀⠀搀漀琀⸀砀⤀㬀ഀഀ
                y.push(dot.y);਍            紀ഀഀ
            a = (c2y - 2 * c1y + p1y) - (p2y - 2 * c2y + c1y);਍            戀 㴀 ㈀ ⨀ ⠀挀㄀礀 ⴀ 瀀㄀礀⤀ ⴀ ㈀ ⨀ ⠀挀㈀礀 ⴀ 挀㄀礀⤀㬀ഀഀ
            c = p1y - c1y;਍            琀㄀ 㴀 ⠀ⴀ戀 ⬀ 洀愀琀栀⸀猀焀爀琀⠀戀 ⨀ 戀 ⴀ 㐀 ⨀ 愀 ⨀ 挀⤀⤀ ⼀ ㈀ ⼀ 愀㬀ഀഀ
            t2 = (-b - math.sqrt(b * b - 4 * a * c)) / 2 / a;਍            愀戀猀⠀琀㄀⤀ 㸀 ∀㄀攀㄀㈀∀ ☀☀ ⠀琀㄀ 㴀 ⸀㔀⤀㬀ഀഀ
            abs(t2) > "1e12" && (t2 = .5);਍            椀昀 ⠀琀㄀ 㸀 　 ☀☀ 琀㄀ 㰀 ㄀⤀ 笀ഀഀ
                dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t1);਍                砀⸀瀀甀猀栀⠀搀漀琀⸀砀⤀㬀ഀഀ
                y.push(dot.y);਍            紀ഀഀ
            if (t2 > 0 && t2 < 1) {਍                搀漀琀 㴀 昀椀渀搀䐀漀琀䄀琀匀攀最洀攀渀琀⠀瀀㄀砀Ⰰ 瀀㄀礀Ⰰ 挀㄀砀Ⰰ 挀㄀礀Ⰰ 挀㈀砀Ⰰ 挀㈀礀Ⰰ 瀀㈀砀Ⰰ 瀀㈀礀Ⰰ 琀㈀⤀㬀ഀഀ
                x.push(dot.x);਍                礀⸀瀀甀猀栀⠀搀漀琀⸀礀⤀㬀ഀഀ
            }਍            爀攀琀甀爀渀 笀ഀഀ
                min: {x: mmin[apply](0, x), y: mmin[apply](0, y)},਍                洀愀砀㨀 笀砀㨀 洀洀愀砀嬀愀瀀瀀氀礀崀⠀　Ⰰ 砀⤀Ⰰ 礀㨀 洀洀愀砀嬀愀瀀瀀氀礀崀⠀　Ⰰ 礀⤀紀ഀഀ
            };਍        紀⤀Ⰰഀഀ
        path2curve = R._path2curve = cacher(function (path, path2) {਍            瘀愀爀 瀀琀栀 㴀 ℀瀀愀琀栀㈀ ☀☀ 瀀愀琀栀猀⠀瀀愀琀栀⤀㬀ഀഀ
            if (!path2 && pth.curve) {਍                爀攀琀甀爀渀 瀀愀琀栀䌀氀漀渀攀⠀瀀琀栀⸀挀甀爀瘀攀⤀㬀ഀഀ
            }਍            瘀愀爀 瀀 㴀 瀀愀琀栀吀漀䄀戀猀漀氀甀琀攀⠀瀀愀琀栀⤀Ⰰഀഀ
                p2 = path2 && pathToAbsolute(path2),਍                愀琀琀爀猀 㴀 笀砀㨀 　Ⰰ 礀㨀 　Ⰰ 戀砀㨀 　Ⰰ 戀礀㨀 　Ⰰ 堀㨀 　Ⰰ 夀㨀 　Ⰰ 焀砀㨀 渀甀氀氀Ⰰ 焀礀㨀 渀甀氀氀紀Ⰰഀഀ
                attrs2 = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null},਍                瀀爀漀挀攀猀猀倀愀琀栀 㴀 昀甀渀挀琀椀漀渀 ⠀瀀愀琀栀Ⰰ 搀Ⰰ 瀀挀漀洀⤀ 笀ഀഀ
                    var nx, ny, tq = {T:1, Q:1};਍                    椀昀 ⠀℀瀀愀琀栀⤀ 笀ഀഀ
                        return ["C", d.x, d.y, d.x, d.y, d.x, d.y];਍                    紀ഀഀ
                    !(path[0] in tq) && (d.qx = d.qy = null);਍                    猀眀椀琀挀栀 ⠀瀀愀琀栀嬀　崀⤀ 笀ഀഀ
                        case "M":਍                            搀⸀堀 㴀 瀀愀琀栀嬀㄀崀㬀ഀഀ
                            d.Y = path[2];਍                            戀爀攀愀欀㬀ഀഀ
                        case "A":਍                            瀀愀琀栀 㴀 嬀∀䌀∀崀嬀挀漀渀挀愀琀崀⠀愀㈀挀嬀愀瀀瀀氀礀崀⠀　Ⰰ 嬀搀⸀砀Ⰰ 搀⸀礀崀嬀挀漀渀挀愀琀崀⠀瀀愀琀栀⸀猀氀椀挀攀⠀㄀⤀⤀⤀⤀㬀ഀഀ
                            break;਍                        挀愀猀攀 ∀匀∀㨀ഀഀ
                            if (pcom == "C" || pcom == "S") { // In "S" case we have to take into account, if the previous command is C/S.਍                                渀砀 㴀 搀⸀砀 ⨀ ㈀ ⴀ 搀⸀戀砀㬀          ⼀⼀ 䄀渀搀 爀攀昀氀攀挀琀 琀栀攀 瀀爀攀瘀椀漀甀猀ഀഀ
                                ny = d.y * 2 - d.by;          // command's control point relative to the current point.਍                            紀ഀഀ
                            else {                            // or some else or nothing਍                                渀砀 㴀 搀⸀砀㬀ഀഀ
                                ny = d.y;਍                            紀ഀഀ
                            path = ["C", nx, ny][concat](path.slice(1));਍                            戀爀攀愀欀㬀ഀഀ
                        case "T":਍                            椀昀 ⠀瀀挀漀洀 㴀㴀 ∀儀∀ 簀簀 瀀挀漀洀 㴀㴀 ∀吀∀⤀ 笀 ⼀⼀ 䤀渀 ∀吀∀ 挀愀猀攀 眀攀 栀愀瘀攀 琀漀 琀愀欀攀 椀渀琀漀 愀挀挀漀甀渀琀Ⰰ 椀昀 琀栀攀 瀀爀攀瘀椀漀甀猀 挀漀洀洀愀渀搀 椀猀 儀⼀吀⸀ഀഀ
                                d.qx = d.x * 2 - d.qx;        // And make a reflection similar਍                                搀⸀焀礀 㴀 搀⸀礀 ⨀ ㈀ ⴀ 搀⸀焀礀㬀        ⼀⼀ 琀漀 挀愀猀攀 ∀匀∀⸀ഀഀ
                            }਍                            攀氀猀攀 笀                            ⼀⼀ 漀爀 猀漀洀攀琀栀椀渀最 攀氀猀攀 漀爀 渀漀琀栀椀渀最ഀഀ
                                d.qx = d.x;਍                                搀⸀焀礀 㴀 搀⸀礀㬀ഀഀ
                            }਍                            瀀愀琀栀 㴀 嬀∀䌀∀崀嬀挀漀渀挀愀琀崀⠀焀㈀挀⠀搀⸀砀Ⰰ 搀⸀礀Ⰰ 搀⸀焀砀Ⰰ 搀⸀焀礀Ⰰ 瀀愀琀栀嬀㄀崀Ⰰ 瀀愀琀栀嬀㈀崀⤀⤀㬀ഀഀ
                            break;਍                        挀愀猀攀 ∀儀∀㨀ഀഀ
                            d.qx = path[1];਍                            搀⸀焀礀 㴀 瀀愀琀栀嬀㈀崀㬀ഀഀ
                            path = ["C"][concat](q2c(d.x, d.y, path[1], path[2], path[3], path[4]));਍                            戀爀攀愀欀㬀ഀഀ
                        case "L":਍                            瀀愀琀栀 㴀 嬀∀䌀∀崀嬀挀漀渀挀愀琀崀⠀氀㈀挀⠀搀⸀砀Ⰰ 搀⸀礀Ⰰ 瀀愀琀栀嬀㄀崀Ⰰ 瀀愀琀栀嬀㈀崀⤀⤀㬀ഀഀ
                            break;਍                        挀愀猀攀 ∀䠀∀㨀ഀഀ
                            path = ["C"][concat](l2c(d.x, d.y, path[1], d.y));਍                            戀爀攀愀欀㬀ഀഀ
                        case "V":਍                            瀀愀琀栀 㴀 嬀∀䌀∀崀嬀挀漀渀挀愀琀崀⠀氀㈀挀⠀搀⸀砀Ⰰ 搀⸀礀Ⰰ 搀⸀砀Ⰰ 瀀愀琀栀嬀㄀崀⤀⤀㬀ഀഀ
                            break;਍                        挀愀猀攀 ∀娀∀㨀ഀഀ
                            path = ["C"][concat](l2c(d.x, d.y, d.X, d.Y));਍                            戀爀攀愀欀㬀ഀഀ
                    }਍                    爀攀琀甀爀渀 瀀愀琀栀㬀ഀഀ
                },਍                昀椀砀䄀爀挀 㴀 昀甀渀挀琀椀漀渀 ⠀瀀瀀Ⰰ 椀⤀ 笀ഀഀ
                    if (pp[i].length > 7) {਍                        瀀瀀嬀椀崀⸀猀栀椀昀琀⠀⤀㬀ഀഀ
                        var pi = pp[i];਍                        眀栀椀氀攀 ⠀瀀椀⸀氀攀渀最琀栀⤀ 笀ഀഀ
                            pcoms1[i]="A"; // if created multiple C:s, their original seg is saved਍                            瀀㈀ ☀☀ ⠀瀀挀漀洀猀㈀嬀椀崀㴀∀䄀∀⤀㬀 ⼀⼀ 琀栀攀 猀愀洀攀 愀猀 愀戀漀瘀攀ഀഀ
                            pp.splice(i++, 0, ["C"][concat](pi.splice(0, 6)));਍                        紀ഀഀ
                        pp.splice(i, 1);਍                        椀椀 㴀 洀洀愀砀⠀瀀⸀氀攀渀最琀栀Ⰰ 瀀㈀ ☀☀ 瀀㈀⸀氀攀渀最琀栀 簀簀 　⤀㬀ഀഀ
                    }਍                紀Ⰰഀഀ
                fixM = function (path1, path2, a1, a2, i) {਍                    椀昀 ⠀瀀愀琀栀㄀ ☀☀ 瀀愀琀栀㈀ ☀☀ 瀀愀琀栀㄀嬀椀崀嬀　崀 㴀㴀 ∀䴀∀ ☀☀ 瀀愀琀栀㈀嬀椀崀嬀　崀 ℀㴀 ∀䴀∀⤀ 笀ഀഀ
                        path2.splice(i, 0, ["M", a2.x, a2.y]);਍                        愀㄀⸀戀砀 㴀 　㬀ഀഀ
                        a1.by = 0;਍                        愀㄀⸀砀 㴀 瀀愀琀栀㄀嬀椀崀嬀㄀崀㬀ഀഀ
                        a1.y = path1[i][2];਍                        椀椀 㴀 洀洀愀砀⠀瀀⸀氀攀渀最琀栀Ⰰ 瀀㈀ ☀☀ 瀀㈀⸀氀攀渀最琀栀 簀簀 　⤀㬀ഀഀ
                    }਍                紀Ⰰഀഀ
                pcoms1 = [], // path commands of original path p਍                瀀挀漀洀猀㈀ 㴀 嬀崀Ⰰ ⼀⼀ 瀀愀琀栀 挀漀洀洀愀渀搀猀 漀昀 漀爀椀最椀渀愀氀 瀀愀琀栀 瀀㈀ഀഀ
                pfirst = "", // temporary holder for original path command਍                瀀挀漀洀 㴀 ∀∀㬀 ⼀⼀ 栀漀氀搀攀爀 昀漀爀 瀀爀攀瘀椀漀甀猀 瀀愀琀栀 挀漀洀洀愀渀搀 漀昀 漀爀椀最椀渀愀氀 瀀愀琀栀ഀഀ
            for (var i = 0, ii = mmax(p.length, p2 && p2.length || 0); i < ii; i++) {਍                瀀嬀椀崀 ☀☀ ⠀瀀昀椀爀猀琀 㴀 瀀嬀椀崀嬀　崀⤀㬀 ⼀⼀ 猀愀瘀攀 挀甀爀爀攀渀琀 瀀愀琀栀 挀漀洀洀愀渀搀ഀഀ
਍                椀昀 ⠀瀀昀椀爀猀琀 ℀㴀 ∀䌀∀⤀ ⼀⼀ 䌀 椀猀 渀漀琀 猀愀瘀攀搀 礀攀琀Ⰰ 戀攀挀愀甀猀攀 椀琀 洀愀礀 戀攀 爀攀猀甀氀琀 漀昀 挀漀渀瘀攀爀猀椀漀渀ഀഀ
                {਍                    瀀挀漀洀猀㄀嬀椀崀 㴀 瀀昀椀爀猀琀㬀 ⼀⼀ 匀愀瘀攀 挀甀爀爀攀渀琀 瀀愀琀栀 挀漀洀洀愀渀搀ഀഀ
                    i && ( pcom = pcoms1[i-1]); // Get previous path command pcom਍                紀ഀഀ
                p[i] = processPath(p[i], attrs, pcom); // Previous path command is inputted to processPath਍ഀഀ
                if (pcoms1[i] != "A" && pfirst == "C") pcoms1[i] = "C"; // A is the only command਍                ⼀⼀ 眀栀椀挀栀 洀愀礀 瀀爀漀搀甀挀攀 洀甀氀琀椀瀀氀攀 䌀㨀猀ഀഀ
                // so we have to make sure that C is also C in original path਍ഀഀ
                fixArc(p, i); // fixArc adds also the right amount of A:s to pcoms1਍ഀഀ
                if (p2) { // the same procedures is done to p2਍                    瀀㈀嬀椀崀 ☀☀ ⠀瀀昀椀爀猀琀 㴀 瀀㈀嬀椀崀嬀　崀⤀㬀ഀഀ
                    if (pfirst != "C")਍                    笀ഀഀ
                        pcoms2[i] = pfirst;਍                        椀 ☀☀ ⠀瀀挀漀洀 㴀 瀀挀漀洀猀㈀嬀椀ⴀ㄀崀⤀㬀ഀഀ
                    }਍                    瀀㈀嬀椀崀 㴀 瀀爀漀挀攀猀猀倀愀琀栀⠀瀀㈀嬀椀崀Ⰰ 愀琀琀爀猀㈀Ⰰ 瀀挀漀洀⤀㬀ഀഀ
਍                    椀昀 ⠀瀀挀漀洀猀㈀嬀椀崀℀㴀∀䄀∀ ☀☀ 瀀昀椀爀猀琀㴀㴀∀䌀∀⤀ 瀀挀漀洀猀㈀嬀椀崀㴀∀䌀∀㬀ഀഀ
਍                    昀椀砀䄀爀挀⠀瀀㈀Ⰰ 椀⤀㬀ഀഀ
                }਍                昀椀砀䴀⠀瀀Ⰰ 瀀㈀Ⰰ 愀琀琀爀猀Ⰰ 愀琀琀爀猀㈀Ⰰ 椀⤀㬀ഀഀ
                fixM(p2, p, attrs2, attrs, i);਍                瘀愀爀 猀攀最 㴀 瀀嬀椀崀Ⰰഀഀ
                    seg2 = p2 && p2[i],਍                    猀攀最氀攀渀 㴀 猀攀最⸀氀攀渀最琀栀Ⰰഀഀ
                    seg2len = p2 && seg2.length;਍                愀琀琀爀猀⸀砀 㴀 猀攀最嬀猀攀最氀攀渀 ⴀ ㈀崀㬀ഀഀ
                attrs.y = seg[seglen - 1];਍                愀琀琀爀猀⸀戀砀 㴀 琀漀䘀氀漀愀琀⠀猀攀最嬀猀攀最氀攀渀 ⴀ 㐀崀⤀ 簀簀 愀琀琀爀猀⸀砀㬀ഀഀ
                attrs.by = toFloat(seg[seglen - 3]) || attrs.y;਍                愀琀琀爀猀㈀⸀戀砀 㴀 瀀㈀ ☀☀ ⠀琀漀䘀氀漀愀琀⠀猀攀最㈀嬀猀攀最㈀氀攀渀 ⴀ 㐀崀⤀ 簀簀 愀琀琀爀猀㈀⸀砀⤀㬀ഀഀ
                attrs2.by = p2 && (toFloat(seg2[seg2len - 3]) || attrs2.y);਍                愀琀琀爀猀㈀⸀砀 㴀 瀀㈀ ☀☀ 猀攀最㈀嬀猀攀最㈀氀攀渀 ⴀ ㈀崀㬀ഀഀ
                attrs2.y = p2 && seg2[seg2len - 1];਍            紀ഀഀ
            if (!p2) {਍                瀀琀栀⸀挀甀爀瘀攀 㴀 瀀愀琀栀䌀氀漀渀攀⠀瀀⤀㬀ഀഀ
            }਍            爀攀琀甀爀渀 瀀㈀ 㼀 嬀瀀Ⰰ 瀀㈀崀 㨀 瀀㬀ഀഀ
        }, null, pathClone),਍        瀀愀爀猀攀䐀漀琀猀 㴀 刀⸀开瀀愀爀猀攀䐀漀琀猀 㴀 挀愀挀栀攀爀⠀昀甀渀挀琀椀漀渀 ⠀最爀愀搀椀攀渀琀⤀ 笀ഀഀ
            var dots = [];਍            昀漀爀 ⠀瘀愀爀 椀 㴀 　Ⰰ 椀椀 㴀 最爀愀搀椀攀渀琀⸀氀攀渀最琀栀㬀 椀 㰀 椀椀㬀 椀⬀⬀⤀ 笀ഀഀ
                var dot = {},਍                    瀀愀爀 㴀 最爀愀搀椀攀渀琀嬀椀崀⸀洀愀琀挀栀⠀⼀帀⠀嬀帀㨀崀⨀⤀㨀㼀⠀嬀尀搀尀⸀崀⨀⤀⼀⤀㬀ഀഀ
                dot.color = R.getRGB(par[1]);਍                椀昀 ⠀搀漀琀⸀挀漀氀漀爀⸀攀爀爀漀爀⤀ 笀ഀഀ
                    return null;਍                紀ഀഀ
                dot.color = dot.color.hex;਍                瀀愀爀嬀㈀崀 ☀☀ ⠀搀漀琀⸀漀昀昀猀攀琀 㴀 瀀愀爀嬀㈀崀 ⬀ ∀─∀⤀㬀ഀഀ
                dots.push(dot);਍            紀ഀഀ
            for (i = 1, ii = dots.length - 1; i < ii; i++) {਍                椀昀 ⠀℀搀漀琀猀嬀椀崀⸀漀昀昀猀攀琀⤀ 笀ഀഀ
                    var start = toFloat(dots[i - 1].offset || 0),਍                        攀渀搀 㴀 　㬀ഀഀ
                    for (var j = i + 1; j < ii; j++) {਍                        椀昀 ⠀搀漀琀猀嬀樀崀⸀漀昀昀猀攀琀⤀ 笀ഀഀ
                            end = dots[j].offset;਍                            戀爀攀愀欀㬀ഀഀ
                        }਍                    紀ഀഀ
                    if (!end) {਍                        攀渀搀 㴀 ㄀　　㬀ഀഀ
                        j = ii;਍                    紀ഀഀ
                    end = toFloat(end);਍                    瘀愀爀 搀 㴀 ⠀攀渀搀 ⴀ 猀琀愀爀琀⤀ ⼀ ⠀樀 ⴀ 椀 ⬀ ㄀⤀㬀ഀഀ
                    for (; i < j; i++) {਍                        猀琀愀爀琀 ⬀㴀 搀㬀ഀഀ
                        dots[i].offset = start + "%";਍                    紀ഀഀ
                }਍            紀ഀഀ
            return dots;਍        紀⤀Ⰰഀഀ
        tear = R._tear = function (el, paper) {਍            攀氀 㴀㴀 瀀愀瀀攀爀⸀琀漀瀀 ☀☀ ⠀瀀愀瀀攀爀⸀琀漀瀀 㴀 攀氀⸀瀀爀攀瘀⤀㬀ഀഀ
            el == paper.bottom && (paper.bottom = el.next);਍            攀氀⸀渀攀砀琀 ☀☀ ⠀攀氀⸀渀攀砀琀⸀瀀爀攀瘀 㴀 攀氀⸀瀀爀攀瘀⤀㬀ഀഀ
            el.prev && (el.prev.next = el.next);਍        紀Ⰰഀഀ
        tofront = R._tofront = function (el, paper) {਍            椀昀 ⠀瀀愀瀀攀爀⸀琀漀瀀 㴀㴀㴀 攀氀⤀ 笀ഀഀ
                return;਍            紀ഀഀ
            tear(el, paper);਍            攀氀⸀渀攀砀琀 㴀 渀甀氀氀㬀ഀഀ
            el.prev = paper.top;਍            瀀愀瀀攀爀⸀琀漀瀀⸀渀攀砀琀 㴀 攀氀㬀ഀഀ
            paper.top = el;਍        紀Ⰰഀഀ
        toback = R._toback = function (el, paper) {਍            椀昀 ⠀瀀愀瀀攀爀⸀戀漀琀琀漀洀 㴀㴀㴀 攀氀⤀ 笀ഀഀ
                return;਍            紀ഀഀ
            tear(el, paper);਍            攀氀⸀渀攀砀琀 㴀 瀀愀瀀攀爀⸀戀漀琀琀漀洀㬀ഀഀ
            el.prev = null;਍            瀀愀瀀攀爀⸀戀漀琀琀漀洀⸀瀀爀攀瘀 㴀 攀氀㬀ഀഀ
            paper.bottom = el;਍        紀Ⰰഀഀ
        insertafter = R._insertafter = function (el, el2, paper) {਍            琀攀愀爀⠀攀氀Ⰰ 瀀愀瀀攀爀⤀㬀ഀഀ
            el2 == paper.top && (paper.top = el);਍            攀氀㈀⸀渀攀砀琀 ☀☀ ⠀攀氀㈀⸀渀攀砀琀⸀瀀爀攀瘀 㴀 攀氀⤀㬀ഀഀ
            el.next = el2.next;਍            攀氀⸀瀀爀攀瘀 㴀 攀氀㈀㬀ഀഀ
            el2.next = el;਍        紀Ⰰഀഀ
        insertbefore = R._insertbefore = function (el, el2, paper) {਍            琀攀愀爀⠀攀氀Ⰰ 瀀愀瀀攀爀⤀㬀ഀഀ
            el2 == paper.bottom && (paper.bottom = el);਍            攀氀㈀⸀瀀爀攀瘀 ☀☀ ⠀攀氀㈀⸀瀀爀攀瘀⸀渀攀砀琀 㴀 攀氀⤀㬀ഀഀ
            el.prev = el2.prev;਍            攀氀㈀⸀瀀爀攀瘀 㴀 攀氀㬀ഀഀ
            el.next = el2;਍        紀Ⰰഀഀ
        /*\਍         ⨀ 刀愀瀀栀愀攀氀⸀琀漀䴀愀琀爀椀砀ഀഀ
         [ method ]਍         ⨀⨀ഀഀ
         * Utility method਍         ⨀⨀ഀഀ
         * Returns matrix of transformations applied to a given path਍         㸀 倀愀爀愀洀攀琀攀爀猀ഀഀ
         - path (string) path string਍         ⴀ 琀爀愀渀猀昀漀爀洀 ⠀猀琀爀椀渀最簀愀爀爀愀礀⤀ 琀爀愀渀猀昀漀爀洀愀琀椀漀渀 猀琀爀椀渀最ഀഀ
         = (object) @Matrix਍        尀⨀⼀ഀഀ
        toMatrix = R.toMatrix = function (path, transform) {਍            瘀愀爀 戀戀 㴀 瀀愀琀栀䐀椀洀攀渀猀椀漀渀猀⠀瀀愀琀栀⤀Ⰰഀഀ
                el = {਍                    开㨀 笀ഀഀ
                        transform: E਍                    紀Ⰰഀഀ
                    getBBox: function () {਍                        爀攀琀甀爀渀 戀戀㬀ഀഀ
                    }਍                紀㬀ഀഀ
            extractTransform(el, transform);਍            爀攀琀甀爀渀 攀氀⸀洀愀琀爀椀砀㬀ഀഀ
        },਍        ⼀⨀尀ഀഀ
         * Raphael.transformPath਍         嬀 洀攀琀栀漀搀 崀ഀഀ
         **਍         ⨀ 唀琀椀氀椀琀礀 洀攀琀栀漀搀ഀഀ
         **਍         ⨀ 刀攀琀甀爀渀猀 瀀愀琀栀 琀爀愀渀猀昀漀爀洀攀搀 戀礀 愀 最椀瘀攀渀 琀爀愀渀猀昀漀爀洀愀琀椀漀渀ഀഀ
         > Parameters਍         ⴀ 瀀愀琀栀 ⠀猀琀爀椀渀最⤀ 瀀愀琀栀 猀琀爀椀渀最ഀഀ
         - transform (string|array) transformation string਍         㴀 ⠀猀琀爀椀渀最⤀ 瀀愀琀栀ഀഀ
        \*/਍        琀爀愀渀猀昀漀爀洀倀愀琀栀 㴀 刀⸀琀爀愀渀猀昀漀爀洀倀愀琀栀 㴀 昀甀渀挀琀椀漀渀 ⠀瀀愀琀栀Ⰰ 琀爀愀渀猀昀漀爀洀⤀ 笀ഀഀ
            return mapPath(path, toMatrix(path, transform));਍        紀Ⰰഀഀ
        extractTransform = R._extractTransform = function (el, tstr) {਍            椀昀 ⠀琀猀琀爀 㴀㴀 渀甀氀氀⤀ 笀ഀഀ
                return el._.transform;਍            紀ഀഀ
            tstr = Str(tstr).replace(/\.{3}|\u2026/g, el._.transform || E);਍            瘀愀爀 琀搀愀琀愀 㴀 刀⸀瀀愀爀猀攀吀爀愀渀猀昀漀爀洀匀琀爀椀渀最⠀琀猀琀爀⤀Ⰰഀഀ
                deg = 0,਍                搀砀 㴀 　Ⰰഀഀ
                dy = 0,਍                猀砀 㴀 ㄀Ⰰഀഀ
                sy = 1,਍                开 㴀 攀氀⸀开Ⰰഀഀ
                m = new Matrix;਍            开⸀琀爀愀渀猀昀漀爀洀 㴀 琀搀愀琀愀 簀簀 嬀崀㬀ഀഀ
            if (tdata) {਍                昀漀爀 ⠀瘀愀爀 椀 㴀 　Ⰰ 椀椀 㴀 琀搀愀琀愀⸀氀攀渀最琀栀㬀 椀 㰀 椀椀㬀 椀⬀⬀⤀ 笀ഀഀ
                    var t = tdata[i],਍                        琀氀攀渀 㴀 琀⸀氀攀渀最琀栀Ⰰഀഀ
                        command = Str(t[0]).toLowerCase(),਍                        愀戀猀漀氀甀琀攀 㴀 琀嬀　崀 ℀㴀 挀漀洀洀愀渀搀Ⰰഀഀ
                        inver = absolute ? m.invert() : 0,਍                        砀㄀Ⰰഀഀ
                        y1,਍                        砀㈀Ⰰഀഀ
                        y2,਍                        戀戀㬀ഀഀ
                    if (command == "t" && tlen == 3) {਍                        椀昀 ⠀愀戀猀漀氀甀琀攀⤀ 笀ഀഀ
                            x1 = inver.x(0, 0);਍                            礀㄀ 㴀 椀渀瘀攀爀⸀礀⠀　Ⰰ 　⤀㬀ഀഀ
                            x2 = inver.x(t[1], t[2]);਍                            礀㈀ 㴀 椀渀瘀攀爀⸀礀⠀琀嬀㄀崀Ⰰ 琀嬀㈀崀⤀㬀ഀഀ
                            m.translate(x2 - x1, y2 - y1);਍                        紀 攀氀猀攀 笀ഀഀ
                            m.translate(t[1], t[2]);਍                        紀ഀഀ
                    } else if (command == "r") {਍                        椀昀 ⠀琀氀攀渀 㴀㴀 ㈀⤀ 笀ഀഀ
                            bb = bb || el.getBBox(1);਍                            洀⸀爀漀琀愀琀攀⠀琀嬀㄀崀Ⰰ 戀戀⸀砀 ⬀ 戀戀⸀眀椀搀琀栀 ⼀ ㈀Ⰰ 戀戀⸀礀 ⬀ 戀戀⸀栀攀椀最栀琀 ⼀ ㈀⤀㬀ഀഀ
                            deg += t[1];਍                        紀 攀氀猀攀 椀昀 ⠀琀氀攀渀 㴀㴀 㐀⤀ 笀ഀഀ
                            if (absolute) {਍                                砀㈀ 㴀 椀渀瘀攀爀⸀砀⠀琀嬀㈀崀Ⰰ 琀嬀㌀崀⤀㬀ഀഀ
                                y2 = inver.y(t[2], t[3]);਍                                洀⸀爀漀琀愀琀攀⠀琀嬀㄀崀Ⰰ 砀㈀Ⰰ 礀㈀⤀㬀ഀഀ
                            } else {਍                                洀⸀爀漀琀愀琀攀⠀琀嬀㄀崀Ⰰ 琀嬀㈀崀Ⰰ 琀嬀㌀崀⤀㬀ഀഀ
                            }਍                            搀攀最 ⬀㴀 琀嬀㄀崀㬀ഀഀ
                        }਍                    紀 攀氀猀攀 椀昀 ⠀挀漀洀洀愀渀搀 㴀㴀 ∀猀∀⤀ 笀ഀഀ
                        if (tlen == 2 || tlen == 3) {਍                            戀戀 㴀 戀戀 簀簀 攀氀⸀最攀琀䈀䈀漀砀⠀㄀⤀㬀ഀഀ
                            m.scale(t[1], t[tlen - 1], bb.x + bb.width / 2, bb.y + bb.height / 2);਍                            猀砀 ⨀㴀 琀嬀㄀崀㬀ഀഀ
                            sy *= t[tlen - 1];਍                        紀 攀氀猀攀 椀昀 ⠀琀氀攀渀 㴀㴀 㔀⤀ 笀ഀഀ
                            if (absolute) {਍                                砀㈀ 㴀 椀渀瘀攀爀⸀砀⠀琀嬀㌀崀Ⰰ 琀嬀㐀崀⤀㬀ഀഀ
                                y2 = inver.y(t[3], t[4]);਍                                洀⸀猀挀愀氀攀⠀琀嬀㄀崀Ⰰ 琀嬀㈀崀Ⰰ 砀㈀Ⰰ 礀㈀⤀㬀ഀഀ
                            } else {਍                                洀⸀猀挀愀氀攀⠀琀嬀㄀崀Ⰰ 琀嬀㈀崀Ⰰ 琀嬀㌀崀Ⰰ 琀嬀㐀崀⤀㬀ഀഀ
                            }਍                            猀砀 ⨀㴀 琀嬀㄀崀㬀ഀഀ
                            sy *= t[2];਍                        紀ഀഀ
                    } else if (command == "m" && tlen == 7) {਍                        洀⸀愀搀搀⠀琀嬀㄀崀Ⰰ 琀嬀㈀崀Ⰰ 琀嬀㌀崀Ⰰ 琀嬀㐀崀Ⰰ 琀嬀㔀崀Ⰰ 琀嬀㘀崀⤀㬀ഀഀ
                    }਍                    开⸀搀椀爀琀礀吀 㴀 ㄀㬀ഀഀ
                    el.matrix = m;਍                紀ഀഀ
            }਍ഀഀ
            /*\਍             ⨀ 䔀氀攀洀攀渀琀⸀洀愀琀爀椀砀ഀഀ
             [ property (object) ]਍             ⨀⨀ഀഀ
             * Keeps @Matrix object, which represents element transformation਍            尀⨀⼀ഀഀ
            el.matrix = m;਍ഀഀ
            _.sx = sx;਍            开⸀猀礀 㴀 猀礀㬀ഀഀ
            _.deg = deg;਍            开⸀搀砀 㴀 搀砀 㴀 洀⸀攀㬀ഀഀ
            _.dy = dy = m.f;਍ഀഀ
            if (sx == 1 && sy == 1 && !deg && _.bbox) {਍                开⸀戀戀漀砀⸀砀 ⬀㴀 ⬀搀砀㬀ഀഀ
                _.bbox.y += +dy;਍            紀 攀氀猀攀 笀ഀഀ
                _.dirtyT = 1;਍            紀ഀഀ
        },਍        最攀琀䔀洀瀀琀礀 㴀 昀甀渀挀琀椀漀渀 ⠀椀琀攀洀⤀ 笀ഀഀ
            var l = item[0];਍            猀眀椀琀挀栀 ⠀氀⸀琀漀䰀漀眀攀爀䌀愀猀攀⠀⤀⤀ 笀ഀഀ
                case "t": return [l, 0, 0];਍                挀愀猀攀 ∀洀∀㨀 爀攀琀甀爀渀 嬀氀Ⰰ ㄀Ⰰ 　Ⰰ 　Ⰰ ㄀Ⰰ 　Ⰰ 　崀㬀ഀഀ
                case "r": if (item.length == 4) {਍                    爀攀琀甀爀渀 嬀氀Ⰰ 　Ⰰ 椀琀攀洀嬀㈀崀Ⰰ 椀琀攀洀嬀㌀崀崀㬀ഀഀ
                } else {਍                    爀攀琀甀爀渀 嬀氀Ⰰ 　崀㬀ഀഀ
                }਍                挀愀猀攀 ∀猀∀㨀 椀昀 ⠀椀琀攀洀⸀氀攀渀最琀栀 㴀㴀 㔀⤀ 笀ഀഀ
                    return [l, 1, 1, item[3], item[4]];਍                紀 攀氀猀攀 椀昀 ⠀椀琀攀洀⸀氀攀渀最琀栀 㴀㴀 ㌀⤀ 笀ഀഀ
                    return [l, 1, 1];਍                紀 攀氀猀攀 笀ഀഀ
                    return [l, 1];਍                紀ഀഀ
            }਍        紀Ⰰഀഀ
        equaliseTransform = R._equaliseTransform = function (t1, t2) {਍            琀㈀ 㴀 匀琀爀⠀琀㈀⤀⸀爀攀瀀氀愀挀攀⠀⼀尀⸀笀㌀紀簀尀甀㈀　㈀㘀⼀最Ⰰ 琀㄀⤀㬀ഀഀ
            t1 = R.parseTransformString(t1) || [];਍            琀㈀ 㴀 刀⸀瀀愀爀猀攀吀爀愀渀猀昀漀爀洀匀琀爀椀渀最⠀琀㈀⤀ 簀簀 嬀崀㬀ഀഀ
            var maxlength = mmax(t1.length, t2.length),਍                昀爀漀洀 㴀 嬀崀Ⰰഀഀ
                to = [],਍                椀 㴀 　Ⰰ 樀Ⰰ 樀樀Ⰰഀഀ
                tt1, tt2;਍            昀漀爀 ⠀㬀 椀 㰀 洀愀砀氀攀渀最琀栀㬀 椀⬀⬀⤀ 笀ഀഀ
                tt1 = t1[i] || getEmpty(t2[i]);਍                琀琀㈀ 㴀 琀㈀嬀椀崀 簀簀 最攀琀䔀洀瀀琀礀⠀琀琀㄀⤀㬀ഀഀ
                if ((tt1[0] != tt2[0]) ||਍                    ⠀琀琀㄀嬀　崀⸀琀漀䰀漀眀攀爀䌀愀猀攀⠀⤀ 㴀㴀 ∀爀∀ ☀☀ ⠀琀琀㄀嬀㈀崀 ℀㴀 琀琀㈀嬀㈀崀 簀簀 琀琀㄀嬀㌀崀 ℀㴀 琀琀㈀嬀㌀崀⤀⤀ 簀簀ഀഀ
                    (tt1[0].toLowerCase() == "s" && (tt1[3] != tt2[3] || tt1[4] != tt2[4]))਍                    ⤀ 笀ഀഀ
                    return;਍                紀ഀഀ
                from[i] = [];਍                琀漀嬀椀崀 㴀 嬀崀㬀ഀഀ
                for (j = 0, jj = mmax(tt1.length, tt2.length); j < jj; j++) {਍                    樀 椀渀 琀琀㄀ ☀☀ ⠀昀爀漀洀嬀椀崀嬀樀崀 㴀 琀琀㄀嬀樀崀⤀㬀ഀഀ
                    j in tt2 && (to[i][j] = tt2[j]);਍                紀ഀഀ
            }਍            爀攀琀甀爀渀 笀ഀഀ
                from: from,਍                琀漀㨀 琀漀ഀഀ
            };਍        紀㬀ഀഀ
    R._getContainer = function (x, y, w, h) {਍        瘀愀爀 挀漀渀琀愀椀渀攀爀㬀ഀഀ
        container = h == null && !R.is(x, "object") ? g.doc.getElementById(x) : x;਍        椀昀 ⠀挀漀渀琀愀椀渀攀爀 㴀㴀 渀甀氀氀⤀ 笀ഀഀ
            return;਍        紀ഀഀ
        if (container.tagName) {਍            椀昀 ⠀礀 㴀㴀 渀甀氀氀⤀ 笀ഀഀ
                return {਍                    挀漀渀琀愀椀渀攀爀㨀 挀漀渀琀愀椀渀攀爀Ⰰഀഀ
                    width: container.style.pixelWidth || container.offsetWidth,਍                    栀攀椀最栀琀㨀 挀漀渀琀愀椀渀攀爀⸀猀琀礀氀攀⸀瀀椀砀攀氀䠀攀椀最栀琀 簀簀 挀漀渀琀愀椀渀攀爀⸀漀昀昀猀攀琀䠀攀椀最栀琀ഀഀ
                };਍            紀 攀氀猀攀 笀ഀഀ
                return {਍                    挀漀渀琀愀椀渀攀爀㨀 挀漀渀琀愀椀渀攀爀Ⰰഀഀ
                    width: y,਍                    栀攀椀最栀琀㨀 眀ഀഀ
                };਍            紀ഀഀ
        }਍        爀攀琀甀爀渀 笀ഀഀ
            container: 1,਍            砀㨀 砀Ⰰഀഀ
            y: y,਍            眀椀搀琀栀㨀 眀Ⰰഀഀ
            height: h਍        紀㬀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * Raphael.pathToRelative਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 唀琀椀氀椀琀礀 洀攀琀栀漀搀ഀഀ
     **਍     ⨀ 䌀漀渀瘀攀爀琀猀 瀀愀琀栀 琀漀 爀攀氀愀琀椀瘀攀 昀漀爀洀ഀഀ
     > Parameters਍     ⴀ 瀀愀琀栀匀琀爀椀渀最 ⠀猀琀爀椀渀最簀愀爀爀愀礀⤀ 瀀愀琀栀 猀琀爀椀渀最 漀爀 愀爀爀愀礀 漀昀 猀攀最洀攀渀琀猀ഀഀ
     = (array) array of segments.਍    尀⨀⼀ഀഀ
    R.pathToRelative = pathToRelative;਍    刀⸀开攀渀最椀渀攀 㴀 笀紀㬀ഀഀ
    /*\਍     ⨀ 刀愀瀀栀愀攀氀⸀瀀愀琀栀㈀挀甀爀瘀攀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Utility method਍     ⨀⨀ഀഀ
     * Converts path to a new path where all segments are cubic bezier curves.਍     㸀 倀愀爀愀洀攀琀攀爀猀ഀഀ
     - pathString (string|array) path string or array of segments਍     㴀 ⠀愀爀爀愀礀⤀ 愀爀爀愀礀 漀昀 猀攀最洀攀渀琀猀⸀ഀഀ
    \*/਍    刀⸀瀀愀琀栀㈀挀甀爀瘀攀 㴀 瀀愀琀栀㈀挀甀爀瘀攀㬀ഀഀ
    /*\਍     ⨀ 刀愀瀀栀愀攀氀⸀洀愀琀爀椀砀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Utility method਍     ⨀⨀ഀഀ
     * Returns matrix based on given parameters.਍     㸀 倀愀爀愀洀攀琀攀爀猀ഀഀ
     - a (number)਍     ⴀ 戀 ⠀渀甀洀戀攀爀⤀ഀഀ
     - c (number)਍     ⴀ 搀 ⠀渀甀洀戀攀爀⤀ഀഀ
     - e (number)਍     ⴀ 昀 ⠀渀甀洀戀攀爀⤀ഀഀ
     = (object) @Matrix਍    尀⨀⼀ഀഀ
    R.matrix = function (a, b, c, d, e, f) {਍        爀攀琀甀爀渀 渀攀眀 䴀愀琀爀椀砀⠀愀Ⰰ 戀Ⰰ 挀Ⰰ 搀Ⰰ 攀Ⰰ 昀⤀㬀ഀഀ
    };਍    昀甀渀挀琀椀漀渀 䴀愀琀爀椀砀⠀愀Ⰰ 戀Ⰰ 挀Ⰰ 搀Ⰰ 攀Ⰰ 昀⤀ 笀ഀഀ
        if (a != null) {਍            琀栀椀猀⸀愀 㴀 ⬀愀㬀ഀഀ
            this.b = +b;਍            琀栀椀猀⸀挀 㴀 ⬀挀㬀ഀഀ
            this.d = +d;਍            琀栀椀猀⸀攀 㴀 ⬀攀㬀ഀഀ
            this.f = +f;਍        紀 攀氀猀攀 笀ഀഀ
            this.a = 1;਍            琀栀椀猀⸀戀 㴀 　㬀ഀഀ
            this.c = 0;਍            琀栀椀猀⸀搀 㴀 ㄀㬀ഀഀ
            this.e = 0;਍            琀栀椀猀⸀昀 㴀 　㬀ഀഀ
        }਍    紀ഀഀ
    (function (matrixproto) {਍        ⼀⨀尀ഀഀ
         * Matrix.add਍         嬀 洀攀琀栀漀搀 崀ഀഀ
         **਍         ⨀ 䄀搀搀猀 最椀瘀攀渀 洀愀琀爀椀砀 琀漀 攀砀椀猀琀椀渀最 漀渀攀⸀ഀഀ
         > Parameters਍         ⴀ 愀 ⠀渀甀洀戀攀爀⤀ഀഀ
         - b (number)਍         ⴀ 挀 ⠀渀甀洀戀攀爀⤀ഀഀ
         - d (number)਍         ⴀ 攀 ⠀渀甀洀戀攀爀⤀ഀഀ
         - f (number)਍         漀爀ഀഀ
         - matrix (object) @Matrix਍        尀⨀⼀ഀഀ
        matrixproto.add = function (a, b, c, d, e, f) {਍            瘀愀爀 漀甀琀 㴀 嬀嬀崀Ⰰ 嬀崀Ⰰ 嬀崀崀Ⰰഀഀ
                m = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]],਍                洀愀琀爀椀砀 㴀 嬀嬀愀Ⰰ 挀Ⰰ 攀崀Ⰰ 嬀戀Ⰰ 搀Ⰰ 昀崀Ⰰ 嬀　Ⰰ 　Ⰰ ㄀崀崀Ⰰഀഀ
                x, y, z, res;਍ഀഀ
            if (a && a instanceof Matrix) {਍                洀愀琀爀椀砀 㴀 嬀嬀愀⸀愀Ⰰ 愀⸀挀Ⰰ 愀⸀攀崀Ⰰ 嬀愀⸀戀Ⰰ 愀⸀搀Ⰰ 愀⸀昀崀Ⰰ 嬀　Ⰰ 　Ⰰ ㄀崀崀㬀ഀഀ
            }਍ഀഀ
            for (x = 0; x < 3; x++) {਍                昀漀爀 ⠀礀 㴀 　㬀 礀 㰀 ㌀㬀 礀⬀⬀⤀ 笀ഀഀ
                    res = 0;਍                    昀漀爀 ⠀稀 㴀 　㬀 稀 㰀 ㌀㬀 稀⬀⬀⤀ 笀ഀഀ
                        res += m[x][z] * matrix[z][y];਍                    紀ഀഀ
                    out[x][y] = res;਍                紀ഀഀ
            }਍            琀栀椀猀⸀愀 㴀 漀甀琀嬀　崀嬀　崀㬀ഀഀ
            this.b = out[1][0];਍            琀栀椀猀⸀挀 㴀 漀甀琀嬀　崀嬀㄀崀㬀ഀഀ
            this.d = out[1][1];਍            琀栀椀猀⸀攀 㴀 漀甀琀嬀　崀嬀㈀崀㬀ഀഀ
            this.f = out[1][2];਍        紀㬀ഀഀ
        /*\਍         ⨀ 䴀愀琀爀椀砀⸀椀渀瘀攀爀琀ഀഀ
         [ method ]਍         ⨀⨀ഀഀ
         * Returns inverted version of the matrix਍         㴀 ⠀漀戀樀攀挀琀⤀ 䀀䴀愀琀爀椀砀ഀഀ
        \*/਍        洀愀琀爀椀砀瀀爀漀琀漀⸀椀渀瘀攀爀琀 㴀 昀甀渀挀琀椀漀渀 ⠀⤀ 笀ഀഀ
            var me = this,਍                砀 㴀 洀攀⸀愀 ⨀ 洀攀⸀搀 ⴀ 洀攀⸀戀 ⨀ 洀攀⸀挀㬀ഀഀ
            return new Matrix(me.d / x, -me.b / x, -me.c / x, me.a / x, (me.c * me.f - me.d * me.e) / x, (me.b * me.e - me.a * me.f) / x);਍        紀㬀ഀഀ
        /*\਍         ⨀ 䴀愀琀爀椀砀⸀挀氀漀渀攀ഀഀ
         [ method ]਍         ⨀⨀ഀഀ
         * Returns copy of the matrix਍         㴀 ⠀漀戀樀攀挀琀⤀ 䀀䴀愀琀爀椀砀ഀഀ
        \*/਍        洀愀琀爀椀砀瀀爀漀琀漀⸀挀氀漀渀攀 㴀 昀甀渀挀琀椀漀渀 ⠀⤀ 笀ഀഀ
            return new Matrix(this.a, this.b, this.c, this.d, this.e, this.f);਍        紀㬀ഀഀ
        /*\਍         ⨀ 䴀愀琀爀椀砀⸀琀爀愀渀猀氀愀琀攀ഀഀ
         [ method ]਍         ⨀⨀ഀഀ
         * Translate the matrix਍         㸀 倀愀爀愀洀攀琀攀爀猀ഀഀ
         - x (number)਍         ⴀ 礀 ⠀渀甀洀戀攀爀⤀ഀഀ
        \*/਍        洀愀琀爀椀砀瀀爀漀琀漀⸀琀爀愀渀猀氀愀琀攀 㴀 昀甀渀挀琀椀漀渀 ⠀砀Ⰰ 礀⤀ 笀ഀഀ
            this.add(1, 0, 0, 1, x, y);਍        紀㬀ഀഀ
        /*\਍         ⨀ 䴀愀琀爀椀砀⸀猀挀愀氀攀ഀഀ
         [ method ]਍         ⨀⨀ഀഀ
         * Scales the matrix਍         㸀 倀愀爀愀洀攀琀攀爀猀ഀഀ
         - x (number)਍         ⴀ 礀 ⠀渀甀洀戀攀爀⤀ ⌀漀瀀琀椀漀渀愀氀ഀഀ
         - cx (number) #optional਍         ⴀ 挀礀 ⠀渀甀洀戀攀爀⤀ ⌀漀瀀琀椀漀渀愀氀ഀഀ
        \*/਍        洀愀琀爀椀砀瀀爀漀琀漀⸀猀挀愀氀攀 㴀 昀甀渀挀琀椀漀渀 ⠀砀Ⰰ 礀Ⰰ 挀砀Ⰰ 挀礀⤀ 笀ഀഀ
            y == null && (y = x);਍            ⠀挀砀 簀簀 挀礀⤀ ☀☀ 琀栀椀猀⸀愀搀搀⠀㄀Ⰰ 　Ⰰ 　Ⰰ ㄀Ⰰ 挀砀Ⰰ 挀礀⤀㬀ഀഀ
            this.add(x, 0, 0, y, 0, 0);਍            ⠀挀砀 簀簀 挀礀⤀ ☀☀ 琀栀椀猀⸀愀搀搀⠀㄀Ⰰ 　Ⰰ 　Ⰰ ㄀Ⰰ ⴀ挀砀Ⰰ ⴀ挀礀⤀㬀ഀഀ
        };਍        ⼀⨀尀ഀഀ
         * Matrix.rotate਍         嬀 洀攀琀栀漀搀 崀ഀഀ
         **਍         ⨀ 刀漀琀愀琀攀猀 琀栀攀 洀愀琀爀椀砀ഀഀ
         > Parameters਍         ⴀ 愀 ⠀渀甀洀戀攀爀⤀ഀഀ
         - x (number)਍         ⴀ 礀 ⠀渀甀洀戀攀爀⤀ഀഀ
        \*/਍        洀愀琀爀椀砀瀀爀漀琀漀⸀爀漀琀愀琀攀 㴀 昀甀渀挀琀椀漀渀 ⠀愀Ⰰ 砀Ⰰ 礀⤀ 笀ഀഀ
            a = R.rad(a);਍            砀 㴀 砀 簀簀 　㬀ഀഀ
            y = y || 0;਍            瘀愀爀 挀漀猀 㴀 ⬀洀愀琀栀⸀挀漀猀⠀愀⤀⸀琀漀䘀椀砀攀搀⠀㤀⤀Ⰰഀഀ
                sin = +math.sin(a).toFixed(9);਍            琀栀椀猀⸀愀搀搀⠀挀漀猀Ⰰ 猀椀渀Ⰰ ⴀ猀椀渀Ⰰ 挀漀猀Ⰰ 砀Ⰰ 礀⤀㬀ഀഀ
            this.add(1, 0, 0, 1, -x, -y);਍        紀㬀ഀഀ
        /*\਍         ⨀ 䴀愀琀爀椀砀⸀砀ഀഀ
         [ method ]਍         ⨀⨀ഀഀ
         * Return x coordinate for given point after transformation described by the matrix. See also @Matrix.y਍         㸀 倀愀爀愀洀攀琀攀爀猀ഀഀ
         - x (number)਍         ⴀ 礀 ⠀渀甀洀戀攀爀⤀ഀഀ
         = (number) x਍        尀⨀⼀ഀഀ
        matrixproto.x = function (x, y) {਍            爀攀琀甀爀渀 砀 ⨀ 琀栀椀猀⸀愀 ⬀ 礀 ⨀ 琀栀椀猀⸀挀 ⬀ 琀栀椀猀⸀攀㬀ഀഀ
        };਍        ⼀⨀尀ഀഀ
         * Matrix.y਍         嬀 洀攀琀栀漀搀 崀ഀഀ
         **਍         ⨀ 刀攀琀甀爀渀 礀 挀漀漀爀搀椀渀愀琀攀 昀漀爀 最椀瘀攀渀 瀀漀椀渀琀 愀昀琀攀爀 琀爀愀渀猀昀漀爀洀愀琀椀漀渀 搀攀猀挀爀椀戀攀搀 戀礀 琀栀攀 洀愀琀爀椀砀⸀ 匀攀攀 愀氀猀漀 䀀䴀愀琀爀椀砀⸀砀ഀഀ
         > Parameters਍         ⴀ 砀 ⠀渀甀洀戀攀爀⤀ഀഀ
         - y (number)਍         㴀 ⠀渀甀洀戀攀爀⤀ 礀ഀഀ
        \*/਍        洀愀琀爀椀砀瀀爀漀琀漀⸀礀 㴀 昀甀渀挀琀椀漀渀 ⠀砀Ⰰ 礀⤀ 笀ഀഀ
            return x * this.b + y * this.d + this.f;਍        紀㬀ഀഀ
        matrixproto.get = function (i) {਍            爀攀琀甀爀渀 ⬀琀栀椀猀嬀匀琀爀⸀昀爀漀洀䌀栀愀爀䌀漀搀攀⠀㤀㜀 ⬀ 椀⤀崀⸀琀漀䘀椀砀攀搀⠀㐀⤀㬀ഀഀ
        };਍        洀愀琀爀椀砀瀀爀漀琀漀⸀琀漀匀琀爀椀渀最 㴀 昀甀渀挀琀椀漀渀 ⠀⤀ 笀ഀഀ
            return R.svg ?਍                ∀洀愀琀爀椀砀⠀∀ ⬀ 嬀琀栀椀猀⸀最攀琀⠀　⤀Ⰰ 琀栀椀猀⸀最攀琀⠀㄀⤀Ⰰ 琀栀椀猀⸀最攀琀⠀㈀⤀Ⰰ 琀栀椀猀⸀最攀琀⠀㌀⤀Ⰰ 琀栀椀猀⸀最攀琀⠀㐀⤀Ⰰ 琀栀椀猀⸀最攀琀⠀㔀⤀崀⸀樀漀椀渀⠀⤀ ⬀ ∀⤀∀ 㨀ഀഀ
                [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join();਍        紀㬀ഀഀ
        matrixproto.toFilter = function () {਍            爀攀琀甀爀渀 ∀瀀爀漀最椀搀㨀䐀堀䤀洀愀最攀吀爀愀渀猀昀漀爀洀⸀䴀椀挀爀漀猀漀昀琀⸀䴀愀琀爀椀砀⠀䴀㄀㄀㴀∀ ⬀ 琀栀椀猀⸀最攀琀⠀　⤀ ⬀ഀഀ
                ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) +਍                ∀Ⰰ 䐀砀㴀∀ ⬀ 琀栀椀猀⸀最攀琀⠀㐀⤀ ⬀ ∀Ⰰ 䐀礀㴀∀ ⬀ 琀栀椀猀⸀最攀琀⠀㔀⤀ ⬀ ∀Ⰰ 猀椀稀椀渀最洀攀琀栀漀搀㴀✀愀甀琀漀 攀砀瀀愀渀搀✀⤀∀㬀ഀഀ
        };਍        洀愀琀爀椀砀瀀爀漀琀漀⸀漀昀昀猀攀琀 㴀 昀甀渀挀琀椀漀渀 ⠀⤀ 笀ഀഀ
            return [this.e.toFixed(4), this.f.toFixed(4)];਍        紀㬀ഀഀ
        function norm(a) {਍            爀攀琀甀爀渀 愀嬀　崀 ⨀ 愀嬀　崀 ⬀ 愀嬀㄀崀 ⨀ 愀嬀㄀崀㬀ഀഀ
        }਍        昀甀渀挀琀椀漀渀 渀漀爀洀愀氀椀稀攀⠀愀⤀ 笀ഀഀ
            var mag = math.sqrt(norm(a));਍            愀嬀　崀 ☀☀ ⠀愀嬀　崀 ⼀㴀 洀愀最⤀㬀ഀഀ
            a[1] && (a[1] /= mag);਍        紀ഀഀ
        /*\਍         ⨀ 䴀愀琀爀椀砀⸀猀瀀氀椀琀ഀഀ
         [ method ]਍         ⨀⨀ഀഀ
         * Splits matrix into primitive transformations਍         㴀 ⠀漀戀樀攀挀琀⤀ 椀渀 昀漀爀洀愀琀㨀ഀഀ
         o dx (number) translation by x਍         漀 搀礀 ⠀渀甀洀戀攀爀⤀ 琀爀愀渀猀氀愀琀椀漀渀 戀礀 礀ഀഀ
         o scalex (number) scale by x਍         漀 猀挀愀氀攀礀 ⠀渀甀洀戀攀爀⤀ 猀挀愀氀攀 戀礀 礀ഀഀ
         o shear (number) shear਍         漀 爀漀琀愀琀攀 ⠀渀甀洀戀攀爀⤀ 爀漀琀愀琀椀漀渀 椀渀 搀攀最ഀഀ
         o isSimple (boolean) could it be represented via simple transformations਍        尀⨀⼀ഀഀ
        matrixproto.split = function () {਍            瘀愀爀 漀甀琀 㴀 笀紀㬀ഀഀ
            // translation਍            漀甀琀⸀搀砀 㴀 琀栀椀猀⸀攀㬀ഀഀ
            out.dy = this.f;਍ഀഀ
            // scale and shear਍            瘀愀爀 爀漀眀 㴀 嬀嬀琀栀椀猀⸀愀Ⰰ 琀栀椀猀⸀挀崀Ⰰ 嬀琀栀椀猀⸀戀Ⰰ 琀栀椀猀⸀搀崀崀㬀ഀഀ
            out.scalex = math.sqrt(norm(row[0]));਍            渀漀爀洀愀氀椀稀攀⠀爀漀眀嬀　崀⤀㬀ഀഀ
਍            漀甀琀⸀猀栀攀愀爀 㴀 爀漀眀嬀　崀嬀　崀 ⨀ 爀漀眀嬀㄀崀嬀　崀 ⬀ 爀漀眀嬀　崀嬀㄀崀 ⨀ 爀漀眀嬀㄀崀嬀㄀崀㬀ഀഀ
            row[1] = [row[1][0] - row[0][0] * out.shear, row[1][1] - row[0][1] * out.shear];਍ഀഀ
            out.scaley = math.sqrt(norm(row[1]));਍            渀漀爀洀愀氀椀稀攀⠀爀漀眀嬀㄀崀⤀㬀ഀഀ
            out.shear /= out.scaley;਍ഀഀ
            // rotation਍            瘀愀爀 猀椀渀 㴀 ⴀ爀漀眀嬀　崀嬀㄀崀Ⰰഀഀ
                cos = row[1][1];਍            椀昀 ⠀挀漀猀 㰀 　⤀ 笀ഀഀ
                out.rotate = R.deg(math.acos(cos));਍                椀昀 ⠀猀椀渀 㰀 　⤀ 笀ഀഀ
                    out.rotate = 360 - out.rotate;਍                紀ഀഀ
            } else {਍                漀甀琀⸀爀漀琀愀琀攀 㴀 刀⸀搀攀最⠀洀愀琀栀⸀愀猀椀渀⠀猀椀渀⤀⤀㬀ഀഀ
            }਍ഀഀ
            out.isSimple = !+out.shear.toFixed(9) && (out.scalex.toFixed(9) == out.scaley.toFixed(9) || !out.rotate);਍            漀甀琀⸀椀猀匀甀瀀攀爀匀椀洀瀀氀攀 㴀 ℀⬀漀甀琀⸀猀栀攀愀爀⸀琀漀䘀椀砀攀搀⠀㤀⤀ ☀☀ 漀甀琀⸀猀挀愀氀攀砀⸀琀漀䘀椀砀攀搀⠀㤀⤀ 㴀㴀 漀甀琀⸀猀挀愀氀攀礀⸀琀漀䘀椀砀攀搀⠀㤀⤀ ☀☀ ℀漀甀琀⸀爀漀琀愀琀攀㬀ഀഀ
            out.noRotation = !+out.shear.toFixed(9) && !out.rotate;਍            爀攀琀甀爀渀 漀甀琀㬀ഀഀ
        };਍        ⼀⨀尀ഀഀ
         * Matrix.toTransformString਍         嬀 洀攀琀栀漀搀 崀ഀഀ
         **਍         ⨀ 刀攀琀甀爀渀 琀爀愀渀猀昀漀爀洀 猀琀爀椀渀最 琀栀愀琀 爀攀瀀爀攀猀攀渀琀猀 最椀瘀攀渀 洀愀琀爀椀砀ഀഀ
         = (string) transform string਍        尀⨀⼀ഀഀ
        matrixproto.toTransformString = function (shorter) {਍            瘀愀爀 猀 㴀 猀栀漀爀琀攀爀 簀簀 琀栀椀猀嬀猀瀀氀椀琀崀⠀⤀㬀ഀഀ
            if (s.isSimple) {਍                猀⸀猀挀愀氀攀砀 㴀 ⬀猀⸀猀挀愀氀攀砀⸀琀漀䘀椀砀攀搀⠀㐀⤀㬀ഀഀ
                s.scaley = +s.scaley.toFixed(4);਍                猀⸀爀漀琀愀琀攀 㴀 ⬀猀⸀爀漀琀愀琀攀⸀琀漀䘀椀砀攀搀⠀㐀⤀㬀ഀഀ
                return  (s.dx || s.dy ? "t" + [s.dx, s.dy] : E) +਍                        ⠀猀⸀猀挀愀氀攀砀 ℀㴀 ㄀ 簀簀 猀⸀猀挀愀氀攀礀 ℀㴀 ㄀ 㼀 ∀猀∀ ⬀ 嬀猀⸀猀挀愀氀攀砀Ⰰ 猀⸀猀挀愀氀攀礀Ⰰ 　Ⰰ 　崀 㨀 䔀⤀ ⬀ഀഀ
                        (s.rotate ? "r" + [s.rotate, 0, 0] : E);਍            紀 攀氀猀攀 笀ഀഀ
                return "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)];਍            紀ഀഀ
        };਍    紀⤀⠀䴀愀琀爀椀砀⸀瀀爀漀琀漀琀礀瀀攀⤀㬀ഀഀ
਍    瘀愀爀 瀀爀攀瘀攀渀琀䐀攀昀愀甀氀琀 㴀 昀甀渀挀琀椀漀渀 ⠀⤀ 笀ഀഀ
        this.returnValue = false;਍    紀Ⰰഀഀ
    preventTouch = function () {਍        爀攀琀甀爀渀 琀栀椀猀⸀漀爀椀最椀渀愀氀䔀瘀攀渀琀⸀瀀爀攀瘀攀渀琀䐀攀昀愀甀氀琀⠀⤀㬀ഀഀ
    },਍    猀琀漀瀀倀爀漀瀀愀最愀琀椀漀渀 㴀 昀甀渀挀琀椀漀渀 ⠀⤀ 笀ഀഀ
        this.cancelBubble = true;਍    紀Ⰰഀഀ
    stopTouch = function () {਍        爀攀琀甀爀渀 琀栀椀猀⸀漀爀椀最椀渀愀氀䔀瘀攀渀琀⸀猀琀漀瀀倀爀漀瀀愀最愀琀椀漀渀⠀⤀㬀ഀഀ
    },਍    最攀琀䔀瘀攀渀琀倀漀猀椀琀椀漀渀 㴀 昀甀渀挀琀椀漀渀 ⠀攀⤀ 笀ഀഀ
        var scrollY = g.doc.documentElement.scrollTop || g.doc.body.scrollTop,਍            猀挀爀漀氀氀堀 㴀 最⸀搀漀挀⸀搀漀挀甀洀攀渀琀䔀氀攀洀攀渀琀⸀猀挀爀漀氀氀䰀攀昀琀 簀簀 最⸀搀漀挀⸀戀漀搀礀⸀猀挀爀漀氀氀䰀攀昀琀㬀ഀഀ
਍        爀攀琀甀爀渀 笀ഀഀ
            x: e.clientX + scrollX,਍            礀㨀 攀⸀挀氀椀攀渀琀夀 ⬀ 猀挀爀漀氀氀夀ഀഀ
        };਍    紀Ⰰഀഀ
    addEvent = (function () {਍        椀昀 ⠀最⸀搀漀挀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⤀ 笀ഀഀ
            return function (obj, type, fn, element) {਍                瘀愀爀 昀 㴀 昀甀渀挀琀椀漀渀 ⠀攀⤀ 笀ഀഀ
                    var pos = getEventPosition(e);਍                    爀攀琀甀爀渀 昀渀⸀挀愀氀氀⠀攀氀攀洀攀渀琀Ⰰ 攀Ⰰ 瀀漀猀⸀砀Ⰰ 瀀漀猀⸀礀⤀㬀ഀഀ
                };਍                漀戀樀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀琀礀瀀攀Ⰰ 昀Ⰰ 昀愀氀猀攀⤀㬀ഀഀ
਍                椀昀 ⠀猀甀瀀瀀漀爀琀猀吀漀甀挀栀 ☀☀ 琀漀甀挀栀䴀愀瀀嬀琀礀瀀攀崀⤀ 笀ഀഀ
                    var _f = function (e) {਍                        瘀愀爀 瀀漀猀 㴀 最攀琀䔀瘀攀渀琀倀漀猀椀琀椀漀渀⠀攀⤀Ⰰഀഀ
                            olde = e;਍ഀഀ
                        for (var i = 0, ii = e.targetTouches && e.targetTouches.length; i < ii; i++) {਍                            椀昀 ⠀攀⸀琀愀爀最攀琀吀漀甀挀栀攀猀嬀椀崀⸀琀愀爀最攀琀 㴀㴀 漀戀樀⤀ 笀ഀഀ
                                e = e.targetTouches[i];਍                                攀⸀漀爀椀最椀渀愀氀䔀瘀攀渀琀 㴀 漀氀搀攀㬀ഀഀ
                                e.preventDefault = preventTouch;਍                                攀⸀猀琀漀瀀倀爀漀瀀愀最愀琀椀漀渀 㴀 猀琀漀瀀吀漀甀挀栀㬀ഀഀ
                                break;਍                            紀ഀഀ
                        }਍ഀഀ
                        return fn.call(element, e, pos.x, pos.y);਍                    紀㬀ഀഀ
                    obj.addEventListener(touchMap[type], _f, false);਍                紀ഀഀ
਍                爀攀琀甀爀渀 昀甀渀挀琀椀漀渀 ⠀⤀ 笀ഀഀ
                    obj.removeEventListener(type, f, false);਍ഀഀ
                    if (supportsTouch && touchMap[type])਍                        漀戀樀⸀爀攀洀漀瘀攀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀琀漀甀挀栀䴀愀瀀嬀琀礀瀀攀崀Ⰰ 开昀Ⰰ 昀愀氀猀攀⤀㬀ഀഀ
਍                    爀攀琀甀爀渀 琀爀甀攀㬀ഀഀ
                };਍            紀㬀ഀഀ
        } else if (g.doc.attachEvent) {਍            爀攀琀甀爀渀 昀甀渀挀琀椀漀渀 ⠀漀戀樀Ⰰ 琀礀瀀攀Ⰰ 昀渀Ⰰ 攀氀攀洀攀渀琀⤀ 笀ഀഀ
                var f = function (e) {਍                    攀 㴀 攀 簀簀 最⸀眀椀渀⸀攀瘀攀渀琀㬀ഀഀ
                    var scrollY = g.doc.documentElement.scrollTop || g.doc.body.scrollTop,਍                        猀挀爀漀氀氀堀 㴀 最⸀搀漀挀⸀搀漀挀甀洀攀渀琀䔀氀攀洀攀渀琀⸀猀挀爀漀氀氀䰀攀昀琀 簀簀 最⸀搀漀挀⸀戀漀搀礀⸀猀挀爀漀氀氀䰀攀昀琀Ⰰഀഀ
                        x = e.clientX + scrollX,਍                        礀 㴀 攀⸀挀氀椀攀渀琀夀 ⬀ 猀挀爀漀氀氀夀㬀ഀഀ
                    e.preventDefault = e.preventDefault || preventDefault;਍                    攀⸀猀琀漀瀀倀爀漀瀀愀最愀琀椀漀渀 㴀 攀⸀猀琀漀瀀倀爀漀瀀愀最愀琀椀漀渀 簀簀 猀琀漀瀀倀爀漀瀀愀最愀琀椀漀渀㬀ഀഀ
                    return fn.call(element, e, x, y);਍                紀㬀ഀഀ
                obj.attachEvent("on" + type, f);਍                瘀愀爀 搀攀琀愀挀栀攀爀 㴀 昀甀渀挀琀椀漀渀 ⠀⤀ 笀ഀഀ
                    obj.detachEvent("on" + type, f);਍                    爀攀琀甀爀渀 琀爀甀攀㬀ഀഀ
                };਍                爀攀琀甀爀渀 搀攀琀愀挀栀攀爀㬀ഀഀ
            };਍        紀ഀഀ
    })(),਍    搀爀愀最 㴀 嬀崀Ⰰഀഀ
    dragMove = function (e) {਍        瘀愀爀 砀 㴀 攀⸀挀氀椀攀渀琀堀Ⰰഀഀ
            y = e.clientY,਍            猀挀爀漀氀氀夀 㴀 最⸀搀漀挀⸀搀漀挀甀洀攀渀琀䔀氀攀洀攀渀琀⸀猀挀爀漀氀氀吀漀瀀 簀簀 最⸀搀漀挀⸀戀漀搀礀⸀猀挀爀漀氀氀吀漀瀀Ⰰഀഀ
            scrollX = g.doc.documentElement.scrollLeft || g.doc.body.scrollLeft,਍            搀爀愀最椀Ⰰഀഀ
            j = drag.length;਍        眀栀椀氀攀 ⠀樀ⴀⴀ⤀ 笀ഀഀ
            dragi = drag[j];਍            椀昀 ⠀猀甀瀀瀀漀爀琀猀吀漀甀挀栀 ☀☀ 攀⸀琀漀甀挀栀攀猀⤀ 笀ഀഀ
                var i = e.touches.length,਍                    琀漀甀挀栀㬀ഀഀ
                while (i--) {਍                    琀漀甀挀栀 㴀 攀⸀琀漀甀挀栀攀猀嬀椀崀㬀ഀഀ
                    if (touch.identifier == dragi.el._drag.id) {਍                        砀 㴀 琀漀甀挀栀⸀挀氀椀攀渀琀堀㬀ഀഀ
                        y = touch.clientY;਍                        ⠀攀⸀漀爀椀最椀渀愀氀䔀瘀攀渀琀 㼀 攀⸀漀爀椀最椀渀愀氀䔀瘀攀渀琀 㨀 攀⤀⸀瀀爀攀瘀攀渀琀䐀攀昀愀甀氀琀⠀⤀㬀ഀഀ
                        break;਍                    紀ഀഀ
                }਍            紀 攀氀猀攀 笀ഀഀ
                e.preventDefault();਍            紀ഀഀ
            var node = dragi.el.node,਍                漀Ⰰഀഀ
                next = node.nextSibling,਍                瀀愀爀攀渀琀 㴀 渀漀搀攀⸀瀀愀爀攀渀琀一漀搀攀Ⰰഀഀ
                display = node.style.display;਍            最⸀眀椀渀⸀漀瀀攀爀愀 ☀☀ 瀀愀爀攀渀琀⸀爀攀洀漀瘀攀䌀栀椀氀搀⠀渀漀搀攀⤀㬀ഀഀ
            node.style.display = "none";਍            漀 㴀 搀爀愀最椀⸀攀氀⸀瀀愀瀀攀爀⸀最攀琀䔀氀攀洀攀渀琀䈀礀倀漀椀渀琀⠀砀Ⰰ 礀⤀㬀ഀഀ
            node.style.display = display;਍            最⸀眀椀渀⸀漀瀀攀爀愀 ☀☀ ⠀渀攀砀琀 㼀 瀀愀爀攀渀琀⸀椀渀猀攀爀琀䈀攀昀漀爀攀⠀渀漀搀攀Ⰰ 渀攀砀琀⤀ 㨀 瀀愀爀攀渀琀⸀愀瀀瀀攀渀搀䌀栀椀氀搀⠀渀漀搀攀⤀⤀㬀ഀഀ
            o && eve("raphael.drag.over." + dragi.el.id, dragi.el, o);਍            砀 ⬀㴀 猀挀爀漀氀氀堀㬀ഀഀ
            y += scrollY;਍            攀瘀攀⠀∀爀愀瀀栀愀攀氀⸀搀爀愀最⸀洀漀瘀攀⸀∀ ⬀ 搀爀愀最椀⸀攀氀⸀椀搀Ⰰ 搀爀愀最椀⸀洀漀瘀攀开猀挀漀瀀攀 簀簀 搀爀愀最椀⸀攀氀Ⰰ 砀 ⴀ 搀爀愀最椀⸀攀氀⸀开搀爀愀最⸀砀Ⰰ 礀 ⴀ 搀爀愀最椀⸀攀氀⸀开搀爀愀最⸀礀Ⰰ 砀Ⰰ 礀Ⰰ 攀⤀㬀ഀഀ
        }਍    紀Ⰰഀഀ
    dragUp = function (e) {਍        刀⸀甀渀洀漀甀猀攀洀漀瘀攀⠀搀爀愀最䴀漀瘀攀⤀⸀甀渀洀漀甀猀攀甀瀀⠀搀爀愀最唀瀀⤀㬀ഀഀ
        var i = drag.length,਍            搀爀愀最椀㬀ഀഀ
        while (i--) {਍            搀爀愀最椀 㴀 搀爀愀最嬀椀崀㬀ഀഀ
            dragi.el._drag = {};਍            攀瘀攀⠀∀爀愀瀀栀愀攀氀⸀搀爀愀最⸀攀渀搀⸀∀ ⬀ 搀爀愀最椀⸀攀氀⸀椀搀Ⰰ 搀爀愀最椀⸀攀渀搀开猀挀漀瀀攀 簀簀 搀爀愀最椀⸀猀琀愀爀琀开猀挀漀瀀攀 簀簀 搀爀愀最椀⸀洀漀瘀攀开猀挀漀瀀攀 簀簀 搀爀愀最椀⸀攀氀Ⰰ 攀⤀㬀ഀഀ
        }਍        搀爀愀最 㴀 嬀崀㬀ഀഀ
    },਍    ⼀⨀尀ഀഀ
     * Raphael.el਍     嬀 瀀爀漀瀀攀爀琀礀 ⠀漀戀樀攀挀琀⤀ 崀ഀഀ
     **਍     ⨀ 夀漀甀 挀愀渀 愀搀搀 礀漀甀爀 漀眀渀 洀攀琀栀漀搀 琀漀 攀氀攀洀攀渀琀猀⸀ 吀栀椀猀 椀猀 甀猀攀昀甀氀氀 眀栀攀渀 礀漀甀 眀愀渀琀 琀漀 栀愀挀欀 搀攀昀愀甀氀琀 昀甀渀挀琀椀漀渀愀氀椀琀礀 漀爀ഀഀ
     * want to wrap some common transformation or attributes in one method. In difference to canvas methods,਍     ⨀ 礀漀甀 挀愀渀 爀攀搀攀昀椀渀攀 攀氀攀洀攀渀琀 洀攀琀栀漀搀 愀琀 愀渀礀 琀椀洀攀⸀ 䔀砀瀀攀渀搀椀渀最 攀氀攀洀攀渀琀 洀攀琀栀漀搀猀 眀漀甀氀搀渀ᤀ琠 愀昀昀攀挀琀 猀攀琀⸀ഀഀ
     > Usage਍     簀 刀愀瀀栀愀攀氀⸀攀氀⸀爀攀搀 㴀 昀甀渀挀琀椀漀渀 ⠀⤀ 笀ഀഀ
     |     this.attr({fill: "#f00"});਍     簀 紀㬀ഀഀ
     | // then use it਍     簀 瀀愀瀀攀爀⸀挀椀爀挀氀攀⠀㄀　　Ⰰ ㄀　　Ⰰ ㈀　⤀⸀爀攀搀⠀⤀㬀ഀഀ
    \*/਍    攀氀瀀爀漀琀漀 㴀 刀⸀攀氀 㴀 笀紀㬀ഀഀ
    /*\਍     ⨀ 䔀氀攀洀攀渀琀⸀挀氀椀挀欀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Adds event handler for click for the element.਍     㸀 倀愀爀愀洀攀琀攀爀猀ഀഀ
     - handler (function) handler for the event਍     㴀 ⠀漀戀樀攀挀琀⤀ 䀀䔀氀攀洀攀渀琀ഀഀ
    \*/਍    ⼀⨀尀ഀഀ
     * Element.unclick਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 刀攀洀漀瘀攀猀 攀瘀攀渀琀 栀愀渀搀氀攀爀 昀漀爀 挀氀椀挀欀 昀漀爀 琀栀攀 攀氀攀洀攀渀琀⸀ഀഀ
     > Parameters਍     ⴀ 栀愀渀搀氀攀爀 ⠀昀甀渀挀琀椀漀渀⤀ ⌀漀瀀琀椀漀渀愀氀 栀愀渀搀氀攀爀 昀漀爀 琀栀攀 攀瘀攀渀琀ഀഀ
     = (object) @Element਍    尀⨀⼀ഀഀ
਍    ⼀⨀尀ഀഀ
     * Element.dblclick਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 䄀搀搀猀 攀瘀攀渀琀 栀愀渀搀氀攀爀 昀漀爀 搀漀甀戀氀攀 挀氀椀挀欀 昀漀爀 琀栀攀 攀氀攀洀攀渀琀⸀ഀഀ
     > Parameters਍     ⴀ 栀愀渀搀氀攀爀 ⠀昀甀渀挀琀椀漀渀⤀ 栀愀渀搀氀攀爀 昀漀爀 琀栀攀 攀瘀攀渀琀ഀഀ
     = (object) @Element਍    尀⨀⼀ഀഀ
    /*\਍     ⨀ 䔀氀攀洀攀渀琀⸀甀渀搀戀氀挀氀椀挀欀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Removes event handler for double click for the element.਍     㸀 倀愀爀愀洀攀琀攀爀猀ഀഀ
     - handler (function) #optional handler for the event਍     㴀 ⠀漀戀樀攀挀琀⤀ 䀀䔀氀攀洀攀渀琀ഀഀ
    \*/਍ഀഀ
    /*\਍     ⨀ 䔀氀攀洀攀渀琀⸀洀漀甀猀攀搀漀眀渀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Adds event handler for mousedown for the element.਍     㸀 倀愀爀愀洀攀琀攀爀猀ഀഀ
     - handler (function) handler for the event਍     㴀 ⠀漀戀樀攀挀琀⤀ 䀀䔀氀攀洀攀渀琀ഀഀ
    \*/਍    ⼀⨀尀ഀഀ
     * Element.unmousedown਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 刀攀洀漀瘀攀猀 攀瘀攀渀琀 栀愀渀搀氀攀爀 昀漀爀 洀漀甀猀攀搀漀眀渀 昀漀爀 琀栀攀 攀氀攀洀攀渀琀⸀ഀഀ
     > Parameters਍     ⴀ 栀愀渀搀氀攀爀 ⠀昀甀渀挀琀椀漀渀⤀ ⌀漀瀀琀椀漀渀愀氀 栀愀渀搀氀攀爀 昀漀爀 琀栀攀 攀瘀攀渀琀ഀഀ
     = (object) @Element਍    尀⨀⼀ഀഀ
਍    ⼀⨀尀ഀഀ
     * Element.mousemove਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 䄀搀搀猀 攀瘀攀渀琀 栀愀渀搀氀攀爀 昀漀爀 洀漀甀猀攀洀漀瘀攀 昀漀爀 琀栀攀 攀氀攀洀攀渀琀⸀ഀഀ
     > Parameters਍     ⴀ 栀愀渀搀氀攀爀 ⠀昀甀渀挀琀椀漀渀⤀ 栀愀渀搀氀攀爀 昀漀爀 琀栀攀 攀瘀攀渀琀ഀഀ
     = (object) @Element਍    尀⨀⼀ഀഀ
    /*\਍     ⨀ 䔀氀攀洀攀渀琀⸀甀渀洀漀甀猀攀洀漀瘀攀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Removes event handler for mousemove for the element.਍     㸀 倀愀爀愀洀攀琀攀爀猀ഀഀ
     - handler (function) #optional handler for the event਍     㴀 ⠀漀戀樀攀挀琀⤀ 䀀䔀氀攀洀攀渀琀ഀഀ
    \*/਍ഀഀ
    /*\਍     ⨀ 䔀氀攀洀攀渀琀⸀洀漀甀猀攀漀甀琀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Adds event handler for mouseout for the element.਍     㸀 倀愀爀愀洀攀琀攀爀猀ഀഀ
     - handler (function) handler for the event਍     㴀 ⠀漀戀樀攀挀琀⤀ 䀀䔀氀攀洀攀渀琀ഀഀ
    \*/਍    ⼀⨀尀ഀഀ
     * Element.unmouseout਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 刀攀洀漀瘀攀猀 攀瘀攀渀琀 栀愀渀搀氀攀爀 昀漀爀 洀漀甀猀攀漀甀琀 昀漀爀 琀栀攀 攀氀攀洀攀渀琀⸀ഀഀ
     > Parameters਍     ⴀ 栀愀渀搀氀攀爀 ⠀昀甀渀挀琀椀漀渀⤀ ⌀漀瀀琀椀漀渀愀氀 栀愀渀搀氀攀爀 昀漀爀 琀栀攀 攀瘀攀渀琀ഀഀ
     = (object) @Element਍    尀⨀⼀ഀഀ
਍    ⼀⨀尀ഀഀ
     * Element.mouseover਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 䄀搀搀猀 攀瘀攀渀琀 栀愀渀搀氀攀爀 昀漀爀 洀漀甀猀攀漀瘀攀爀 昀漀爀 琀栀攀 攀氀攀洀攀渀琀⸀ഀഀ
     > Parameters਍     ⴀ 栀愀渀搀氀攀爀 ⠀昀甀渀挀琀椀漀渀⤀ 栀愀渀搀氀攀爀 昀漀爀 琀栀攀 攀瘀攀渀琀ഀഀ
     = (object) @Element਍    尀⨀⼀ഀഀ
    /*\਍     ⨀ 䔀氀攀洀攀渀琀⸀甀渀洀漀甀猀攀漀瘀攀爀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Removes event handler for mouseover for the element.਍     㸀 倀愀爀愀洀攀琀攀爀猀ഀഀ
     - handler (function) #optional handler for the event਍     㴀 ⠀漀戀樀攀挀琀⤀ 䀀䔀氀攀洀攀渀琀ഀഀ
    \*/਍ഀഀ
    /*\਍     ⨀ 䔀氀攀洀攀渀琀⸀洀漀甀猀攀甀瀀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Adds event handler for mouseup for the element.਍     㸀 倀愀爀愀洀攀琀攀爀猀ഀഀ
     - handler (function) handler for the event਍     㴀 ⠀漀戀樀攀挀琀⤀ 䀀䔀氀攀洀攀渀琀ഀഀ
    \*/਍    ⼀⨀尀ഀഀ
     * Element.unmouseup਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 刀攀洀漀瘀攀猀 攀瘀攀渀琀 栀愀渀搀氀攀爀 昀漀爀 洀漀甀猀攀甀瀀 昀漀爀 琀栀攀 攀氀攀洀攀渀琀⸀ഀഀ
     > Parameters਍     ⴀ 栀愀渀搀氀攀爀 ⠀昀甀渀挀琀椀漀渀⤀ ⌀漀瀀琀椀漀渀愀氀 栀愀渀搀氀攀爀 昀漀爀 琀栀攀 攀瘀攀渀琀ഀഀ
     = (object) @Element਍    尀⨀⼀ഀഀ
਍    ⼀⨀尀ഀഀ
     * Element.touchstart਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 䄀搀搀猀 攀瘀攀渀琀 栀愀渀搀氀攀爀 昀漀爀 琀漀甀挀栀猀琀愀爀琀 昀漀爀 琀栀攀 攀氀攀洀攀渀琀⸀ഀഀ
     > Parameters਍     ⴀ 栀愀渀搀氀攀爀 ⠀昀甀渀挀琀椀漀渀⤀ 栀愀渀搀氀攀爀 昀漀爀 琀栀攀 攀瘀攀渀琀ഀഀ
     = (object) @Element਍    尀⨀⼀ഀഀ
    /*\਍     ⨀ 䔀氀攀洀攀渀琀⸀甀渀琀漀甀挀栀猀琀愀爀琀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Removes event handler for touchstart for the element.਍     㸀 倀愀爀愀洀攀琀攀爀猀ഀഀ
     - handler (function) #optional handler for the event਍     㴀 ⠀漀戀樀攀挀琀⤀ 䀀䔀氀攀洀攀渀琀ഀഀ
    \*/਍ഀഀ
    /*\਍     ⨀ 䔀氀攀洀攀渀琀⸀琀漀甀挀栀洀漀瘀攀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Adds event handler for touchmove for the element.਍     㸀 倀愀爀愀洀攀琀攀爀猀ഀഀ
     - handler (function) handler for the event਍     㴀 ⠀漀戀樀攀挀琀⤀ 䀀䔀氀攀洀攀渀琀ഀഀ
    \*/਍    ⼀⨀尀ഀഀ
     * Element.untouchmove਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 刀攀洀漀瘀攀猀 攀瘀攀渀琀 栀愀渀搀氀攀爀 昀漀爀 琀漀甀挀栀洀漀瘀攀 昀漀爀 琀栀攀 攀氀攀洀攀渀琀⸀ഀഀ
     > Parameters਍     ⴀ 栀愀渀搀氀攀爀 ⠀昀甀渀挀琀椀漀渀⤀ ⌀漀瀀琀椀漀渀愀氀 栀愀渀搀氀攀爀 昀漀爀 琀栀攀 攀瘀攀渀琀ഀഀ
     = (object) @Element਍    尀⨀⼀ഀഀ
਍    ⼀⨀尀ഀഀ
     * Element.touchend਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 䄀搀搀猀 攀瘀攀渀琀 栀愀渀搀氀攀爀 昀漀爀 琀漀甀挀栀攀渀搀 昀漀爀 琀栀攀 攀氀攀洀攀渀琀⸀ഀഀ
     > Parameters਍     ⴀ 栀愀渀搀氀攀爀 ⠀昀甀渀挀琀椀漀渀⤀ 栀愀渀搀氀攀爀 昀漀爀 琀栀攀 攀瘀攀渀琀ഀഀ
     = (object) @Element਍    尀⨀⼀ഀഀ
    /*\਍     ⨀ 䔀氀攀洀攀渀琀⸀甀渀琀漀甀挀栀攀渀搀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Removes event handler for touchend for the element.਍     㸀 倀愀爀愀洀攀琀攀爀猀ഀഀ
     - handler (function) #optional handler for the event਍     㴀 ⠀漀戀樀攀挀琀⤀ 䀀䔀氀攀洀攀渀琀ഀഀ
    \*/਍ഀഀ
    /*\਍     ⨀ 䔀氀攀洀攀渀琀⸀琀漀甀挀栀挀愀渀挀攀氀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Adds event handler for touchcancel for the element.਍     㸀 倀愀爀愀洀攀琀攀爀猀ഀഀ
     - handler (function) handler for the event਍     㴀 ⠀漀戀樀攀挀琀⤀ 䀀䔀氀攀洀攀渀琀ഀഀ
    \*/਍    ⼀⨀尀ഀഀ
     * Element.untouchcancel਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 刀攀洀漀瘀攀猀 攀瘀攀渀琀 栀愀渀搀氀攀爀 昀漀爀 琀漀甀挀栀挀愀渀挀攀氀 昀漀爀 琀栀攀 攀氀攀洀攀渀琀⸀ഀഀ
     > Parameters਍     ⴀ 栀愀渀搀氀攀爀 ⠀昀甀渀挀琀椀漀渀⤀ ⌀漀瀀琀椀漀渀愀氀 栀愀渀搀氀攀爀 昀漀爀 琀栀攀 攀瘀攀渀琀ഀഀ
     = (object) @Element਍    尀⨀⼀ഀഀ
    for (var i = events.length; i--;) {਍        ⠀昀甀渀挀琀椀漀渀 ⠀攀瘀攀渀琀一愀洀攀⤀ 笀ഀഀ
            R[eventName] = elproto[eventName] = function (fn, scope) {਍                椀昀 ⠀刀⸀椀猀⠀昀渀Ⰰ ∀昀甀渀挀琀椀漀渀∀⤀⤀ 笀ഀഀ
                    this.events = this.events || [];਍                    琀栀椀猀⸀攀瘀攀渀琀猀⸀瀀甀猀栀⠀笀渀愀洀攀㨀 攀瘀攀渀琀一愀洀攀Ⰰ 昀㨀 昀渀Ⰰ 甀渀戀椀渀搀㨀 愀搀搀䔀瘀攀渀琀⠀琀栀椀猀⸀猀栀愀瀀攀 簀簀 琀栀椀猀⸀渀漀搀攀 簀簀 最⸀搀漀挀Ⰰ 攀瘀攀渀琀一愀洀攀Ⰰ 昀渀Ⰰ 猀挀漀瀀攀 簀簀 琀栀椀猀⤀紀⤀㬀ഀഀ
                }਍                爀攀琀甀爀渀 琀栀椀猀㬀ഀഀ
            };਍            刀嬀∀甀渀∀ ⬀ 攀瘀攀渀琀一愀洀攀崀 㴀 攀氀瀀爀漀琀漀嬀∀甀渀∀ ⬀ 攀瘀攀渀琀一愀洀攀崀 㴀 昀甀渀挀琀椀漀渀 ⠀昀渀⤀ 笀ഀഀ
                var events = this.events || [],਍                    氀 㴀 攀瘀攀渀琀猀⸀氀攀渀最琀栀㬀ഀഀ
                while (l--){਍                    椀昀 ⠀攀瘀攀渀琀猀嬀氀崀⸀渀愀洀攀 㴀㴀 攀瘀攀渀琀一愀洀攀 ☀☀ ⠀刀⸀椀猀⠀昀渀Ⰰ ∀甀渀搀攀昀椀渀攀搀∀⤀ 簀簀 攀瘀攀渀琀猀嬀氀崀⸀昀 㴀㴀 昀渀⤀⤀ 笀ഀഀ
                        events[l].unbind();਍                        攀瘀攀渀琀猀⸀猀瀀氀椀挀攀⠀氀Ⰰ ㄀⤀㬀ഀഀ
                        !events.length && delete this.events;਍                    紀ഀഀ
                }਍                爀攀琀甀爀渀 琀栀椀猀㬀ഀഀ
            };਍        紀⤀⠀攀瘀攀渀琀猀嬀椀崀⤀㬀ഀഀ
    }਍ഀഀ
    /*\਍     ⨀ 䔀氀攀洀攀渀琀⸀搀愀琀愀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Adds or retrieves given value asociated with given key.਍     ⨀⨀ഀഀ
     * See also @Element.removeData਍     㸀 倀愀爀愀洀攀琀攀爀猀ഀഀ
     - key (string) key to store data਍     ⴀ 瘀愀氀甀攀 ⠀愀渀礀⤀ ⌀漀瀀琀椀漀渀愀氀 瘀愀氀甀攀 琀漀 猀琀漀爀攀ഀഀ
     = (object) @Element਍     ⨀ 漀爀Ⰰ 椀昀 瘀愀氀甀攀 椀猀 渀漀琀 猀瀀攀挀椀昀椀攀搀㨀ഀഀ
     = (any) value਍     ⨀ 漀爀Ⰰ 椀昀 欀攀礀 愀渀搀 瘀愀氀甀攀 愀爀攀 渀漀琀 猀瀀攀挀椀昀椀攀搀㨀ഀഀ
     = (object) Key/value pairs for all the data associated with the element.਍     㸀 唀猀愀最攀ഀഀ
     | for (var i = 0, i < 5, i++) {਍     簀     瀀愀瀀攀爀⸀挀椀爀挀氀攀⠀㄀　 ⬀ ㄀㔀 ⨀ 椀Ⰰ ㄀　Ⰰ ㄀　⤀ഀഀ
     |          .attr({fill: "#000"})਍     簀          ⸀搀愀琀愀⠀∀椀∀Ⰰ 椀⤀ഀഀ
     |          .click(function () {਍     簀             愀氀攀爀琀⠀琀栀椀猀⸀搀愀琀愀⠀∀椀∀⤀⤀㬀ഀഀ
     |          });਍     簀 紀ഀഀ
    \*/਍    攀氀瀀爀漀琀漀⸀搀愀琀愀 㴀 昀甀渀挀琀椀漀渀 ⠀欀攀礀Ⰰ 瘀愀氀甀攀⤀ 笀ഀഀ
        var data = eldata[this.id] = eldata[this.id] || {};਍        椀昀 ⠀愀爀最甀洀攀渀琀猀⸀氀攀渀最琀栀 㴀㴀 　⤀ 笀ഀഀ
            return data;਍        紀ഀഀ
        if (arguments.length == 1) {਍            椀昀 ⠀刀⸀椀猀⠀欀攀礀Ⰰ ∀漀戀樀攀挀琀∀⤀⤀ 笀ഀഀ
                for (var i in key) if (key[has](i)) {਍                    琀栀椀猀⸀搀愀琀愀⠀椀Ⰰ 欀攀礀嬀椀崀⤀㬀ഀഀ
                }਍                爀攀琀甀爀渀 琀栀椀猀㬀ഀഀ
            }਍            攀瘀攀⠀∀爀愀瀀栀愀攀氀⸀搀愀琀愀⸀最攀琀⸀∀ ⬀ 琀栀椀猀⸀椀搀Ⰰ 琀栀椀猀Ⰰ 搀愀琀愀嬀欀攀礀崀Ⰰ 欀攀礀⤀㬀ഀഀ
            return data[key];਍        紀ഀഀ
        data[key] = value;਍        攀瘀攀⠀∀爀愀瀀栀愀攀氀⸀搀愀琀愀⸀猀攀琀⸀∀ ⬀ 琀栀椀猀⸀椀搀Ⰰ 琀栀椀猀Ⰰ 瘀愀氀甀攀Ⰰ 欀攀礀⤀㬀ഀഀ
        return this;਍    紀㬀ഀഀ
    /*\਍     ⨀ 䔀氀攀洀攀渀琀⸀爀攀洀漀瘀攀䐀愀琀愀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Removes value associated with an element by given key.਍     ⨀ 䤀昀 欀攀礀 椀猀 渀漀琀 瀀爀漀瘀椀搀攀搀Ⰰ 爀攀洀漀瘀攀猀 愀氀氀 琀栀攀 搀愀琀愀 漀昀 琀栀攀 攀氀攀洀攀渀琀⸀ഀഀ
     > Parameters਍     ⴀ 欀攀礀 ⠀猀琀爀椀渀最⤀ ⌀漀瀀琀椀漀渀愀氀 欀攀礀ഀഀ
     = (object) @Element਍    尀⨀⼀ഀഀ
    elproto.removeData = function (key) {਍        椀昀 ⠀欀攀礀 㴀㴀 渀甀氀氀⤀ 笀ഀഀ
            eldata[this.id] = {};਍        紀 攀氀猀攀 笀ഀഀ
            eldata[this.id] && delete eldata[this.id][key];਍        紀ഀഀ
        return this;਍    紀㬀ഀഀ
     /*\਍     ⨀ 䔀氀攀洀攀渀琀⸀最攀琀䐀愀琀愀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Retrieves the element data਍     㴀 ⠀漀戀樀攀挀琀⤀ 搀愀琀愀ഀഀ
    \*/਍    攀氀瀀爀漀琀漀⸀最攀琀䐀愀琀愀 㴀 昀甀渀挀琀椀漀渀 ⠀⤀ 笀ഀഀ
        return clone(eldata[this.id] || {});਍    紀㬀ഀഀ
    /*\਍     ⨀ 䔀氀攀洀攀渀琀⸀栀漀瘀攀爀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Adds event handlers for hover for the element.਍     㸀 倀愀爀愀洀攀琀攀爀猀ഀഀ
     - f_in (function) handler for hover in਍     ⴀ 昀开漀甀琀 ⠀昀甀渀挀琀椀漀渀⤀ 栀愀渀搀氀攀爀 昀漀爀 栀漀瘀攀爀 漀甀琀ഀഀ
     - icontext (object) #optional context for hover in handler਍     ⴀ 漀挀漀渀琀攀砀琀 ⠀漀戀樀攀挀琀⤀ ⌀漀瀀琀椀漀渀愀氀 挀漀渀琀攀砀琀 昀漀爀 栀漀瘀攀爀 漀甀琀 栀愀渀搀氀攀爀ഀഀ
     = (object) @Element਍    尀⨀⼀ഀഀ
    elproto.hover = function (f_in, f_out, scope_in, scope_out) {਍        爀攀琀甀爀渀 琀栀椀猀⸀洀漀甀猀攀漀瘀攀爀⠀昀开椀渀Ⰰ 猀挀漀瀀攀开椀渀⤀⸀洀漀甀猀攀漀甀琀⠀昀开漀甀琀Ⰰ 猀挀漀瀀攀开漀甀琀 簀簀 猀挀漀瀀攀开椀渀⤀㬀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * Element.unhover਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 刀攀洀漀瘀攀猀 攀瘀攀渀琀 栀愀渀搀氀攀爀猀 昀漀爀 栀漀瘀攀爀 昀漀爀 琀栀攀 攀氀攀洀攀渀琀⸀ഀഀ
     > Parameters਍     ⴀ 昀开椀渀 ⠀昀甀渀挀琀椀漀渀⤀ 栀愀渀搀氀攀爀 昀漀爀 栀漀瘀攀爀 椀渀ഀഀ
     - f_out (function) handler for hover out਍     㴀 ⠀漀戀樀攀挀琀⤀ 䀀䔀氀攀洀攀渀琀ഀഀ
    \*/਍    攀氀瀀爀漀琀漀⸀甀渀栀漀瘀攀爀 㴀 昀甀渀挀琀椀漀渀 ⠀昀开椀渀Ⰰ 昀开漀甀琀⤀ 笀ഀഀ
        return this.unmouseover(f_in).unmouseout(f_out);਍    紀㬀ഀഀ
    var draggable = [];਍    ⼀⨀尀ഀഀ
     * Element.drag਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 䄀搀搀猀 攀瘀攀渀琀 栀愀渀搀氀攀爀猀 昀漀爀 搀爀愀最 漀昀 琀栀攀 攀氀攀洀攀渀琀⸀ഀഀ
     > Parameters਍     ⴀ 漀渀洀漀瘀攀 ⠀昀甀渀挀琀椀漀渀⤀ 栀愀渀搀氀攀爀 昀漀爀 洀漀瘀椀渀最ഀഀ
     - onstart (function) handler for drag start਍     ⴀ 漀渀攀渀搀 ⠀昀甀渀挀琀椀漀渀⤀ 栀愀渀搀氀攀爀 昀漀爀 搀爀愀最 攀渀搀ഀഀ
     - mcontext (object) #optional context for moving handler਍     ⴀ 猀挀漀渀琀攀砀琀 ⠀漀戀樀攀挀琀⤀ ⌀漀瀀琀椀漀渀愀氀 挀漀渀琀攀砀琀 昀漀爀 搀爀愀最 猀琀愀爀琀 栀愀渀搀氀攀爀ഀഀ
     - econtext (object) #optional context for drag end handler਍     ⨀ 䄀搀搀椀琀椀漀渀愀氀礀 昀漀氀氀漀眀椀渀最 怀搀爀愀最怀 攀瘀攀渀琀猀 眀椀氀氀 戀攀 琀爀椀最最攀爀攀搀㨀 怀搀爀愀最⸀猀琀愀爀琀⸀㰀椀搀㸀怀 漀渀 猀琀愀爀琀Ⰰഀഀ
     * `drag.end.<id>` on end and `drag.move.<id>` on every move. When element will be dragged over another element਍     ⨀ 怀搀爀愀最⸀漀瘀攀爀⸀㰀椀搀㸀怀 眀椀氀氀 戀攀 昀椀爀攀搀 愀猀 眀攀氀氀⸀ഀഀ
     *਍     ⨀ 匀琀愀爀琀 攀瘀攀渀琀 愀渀搀 猀琀愀爀琀 栀愀渀搀氀攀爀 眀椀氀氀 戀攀 挀愀氀氀攀搀 椀渀 猀瀀攀挀椀昀椀攀搀 挀漀渀琀攀砀琀 漀爀 椀渀 挀漀渀琀攀砀琀 漀昀 琀栀攀 攀氀攀洀攀渀琀 眀椀琀栀 昀漀氀氀漀眀椀渀最 瀀愀爀愀洀攀琀攀爀猀㨀ഀഀ
     o x (number) x position of the mouse਍     漀 礀 ⠀渀甀洀戀攀爀⤀ 礀 瀀漀猀椀琀椀漀渀 漀昀 琀栀攀 洀漀甀猀攀ഀഀ
     o event (object) DOM event object਍     ⨀ 䴀漀瘀攀 攀瘀攀渀琀 愀渀搀 洀漀瘀攀 栀愀渀搀氀攀爀 眀椀氀氀 戀攀 挀愀氀氀攀搀 椀渀 猀瀀攀挀椀昀椀攀搀 挀漀渀琀攀砀琀 漀爀 椀渀 挀漀渀琀攀砀琀 漀昀 琀栀攀 攀氀攀洀攀渀琀 眀椀琀栀 昀漀氀氀漀眀椀渀最 瀀愀爀愀洀攀琀攀爀猀㨀ഀഀ
     o dx (number) shift by x from the start point਍     漀 搀礀 ⠀渀甀洀戀攀爀⤀ 猀栀椀昀琀 戀礀 礀 昀爀漀洀 琀栀攀 猀琀愀爀琀 瀀漀椀渀琀ഀഀ
     o x (number) x position of the mouse਍     漀 礀 ⠀渀甀洀戀攀爀⤀ 礀 瀀漀猀椀琀椀漀渀 漀昀 琀栀攀 洀漀甀猀攀ഀഀ
     o event (object) DOM event object਍     ⨀ 䔀渀搀 攀瘀攀渀琀 愀渀搀 攀渀搀 栀愀渀搀氀攀爀 眀椀氀氀 戀攀 挀愀氀氀攀搀 椀渀 猀瀀攀挀椀昀椀攀搀 挀漀渀琀攀砀琀 漀爀 椀渀 挀漀渀琀攀砀琀 漀昀 琀栀攀 攀氀攀洀攀渀琀 眀椀琀栀 昀漀氀氀漀眀椀渀最 瀀愀爀愀洀攀琀攀爀猀㨀ഀഀ
     o event (object) DOM event object਍     㴀 ⠀漀戀樀攀挀琀⤀ 䀀䔀氀攀洀攀渀琀ഀഀ
    \*/਍    攀氀瀀爀漀琀漀⸀搀爀愀最 㴀 昀甀渀挀琀椀漀渀 ⠀漀渀洀漀瘀攀Ⰰ 漀渀猀琀愀爀琀Ⰰ 漀渀攀渀搀Ⰰ 洀漀瘀攀开猀挀漀瀀攀Ⰰ 猀琀愀爀琀开猀挀漀瀀攀Ⰰ 攀渀搀开猀挀漀瀀攀⤀ 笀ഀഀ
        function start(e) {਍            ⠀攀⸀漀爀椀最椀渀愀氀䔀瘀攀渀琀 簀簀 攀⤀⸀瀀爀攀瘀攀渀琀䐀攀昀愀甀氀琀⠀⤀㬀ഀഀ
            var x = e.clientX,਍                礀 㴀 攀⸀挀氀椀攀渀琀夀Ⰰഀഀ
                scrollY = g.doc.documentElement.scrollTop || g.doc.body.scrollTop,਍                猀挀爀漀氀氀堀 㴀 最⸀搀漀挀⸀搀漀挀甀洀攀渀琀䔀氀攀洀攀渀琀⸀猀挀爀漀氀氀䰀攀昀琀 簀簀 最⸀搀漀挀⸀戀漀搀礀⸀猀挀爀漀氀氀䰀攀昀琀㬀ഀഀ
            this._drag.id = e.identifier;਍            椀昀 ⠀猀甀瀀瀀漀爀琀猀吀漀甀挀栀 ☀☀ 攀⸀琀漀甀挀栀攀猀⤀ 笀ഀഀ
                var i = e.touches.length, touch;਍                眀栀椀氀攀 ⠀椀ⴀⴀ⤀ 笀ഀഀ
                    touch = e.touches[i];਍                    琀栀椀猀⸀开搀爀愀最⸀椀搀 㴀 琀漀甀挀栀⸀椀搀攀渀琀椀昀椀攀爀㬀ഀഀ
                    if (touch.identifier == this._drag.id) {਍                        砀 㴀 琀漀甀挀栀⸀挀氀椀攀渀琀堀㬀ഀഀ
                        y = touch.clientY;਍                        戀爀攀愀欀㬀ഀഀ
                    }਍                紀ഀഀ
            }਍            琀栀椀猀⸀开搀爀愀最⸀砀 㴀 砀 ⬀ 猀挀爀漀氀氀堀㬀ഀഀ
            this._drag.y = y + scrollY;਍            ℀搀爀愀最⸀氀攀渀最琀栀 ☀☀ 刀⸀洀漀甀猀攀洀漀瘀攀⠀搀爀愀最䴀漀瘀攀⤀⸀洀漀甀猀攀甀瀀⠀搀爀愀最唀瀀⤀㬀ഀഀ
            drag.push({el: this, move_scope: move_scope, start_scope: start_scope, end_scope: end_scope});਍            漀渀猀琀愀爀琀 ☀☀ 攀瘀攀⸀漀渀⠀∀爀愀瀀栀愀攀氀⸀搀爀愀最⸀猀琀愀爀琀⸀∀ ⬀ 琀栀椀猀⸀椀搀Ⰰ 漀渀猀琀愀爀琀⤀㬀ഀഀ
            onmove && eve.on("raphael.drag.move." + this.id, onmove);਍            漀渀攀渀搀 ☀☀ 攀瘀攀⸀漀渀⠀∀爀愀瀀栀愀攀氀⸀搀爀愀最⸀攀渀搀⸀∀ ⬀ 琀栀椀猀⸀椀搀Ⰰ 漀渀攀渀搀⤀㬀ഀഀ
            eve("raphael.drag.start." + this.id, start_scope || move_scope || this, e.clientX + scrollX, e.clientY + scrollY, e);਍        紀ഀഀ
        this._drag = {};਍        搀爀愀最最愀戀氀攀⸀瀀甀猀栀⠀笀攀氀㨀 琀栀椀猀Ⰰ 猀琀愀爀琀㨀 猀琀愀爀琀紀⤀㬀ഀഀ
        this.mousedown(start);਍        爀攀琀甀爀渀 琀栀椀猀㬀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * Element.onDragOver਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 匀栀漀爀琀挀甀琀 昀漀爀 愀猀猀椀最渀椀渀最 攀瘀攀渀琀 栀愀渀搀氀攀爀 昀漀爀 怀搀爀愀最⸀漀瘀攀爀⸀㰀椀搀㸀怀 攀瘀攀渀琀Ⰰ 眀栀攀爀攀 椀搀 椀猀 椀搀 漀昀 琀栀攀 攀氀攀洀攀渀琀 ⠀猀攀攀 䀀䔀氀攀洀攀渀琀⸀椀搀⤀⸀ഀഀ
     > Parameters਍     ⴀ 昀 ⠀昀甀渀挀琀椀漀渀⤀ 栀愀渀搀氀攀爀 昀漀爀 攀瘀攀渀琀Ⰰ 昀椀爀猀琀 愀爀最甀洀攀渀琀 眀漀甀氀搀 戀攀 琀栀攀 攀氀攀洀攀渀琀 礀漀甀 愀爀攀 搀爀愀最最椀渀最 漀瘀攀爀ഀഀ
    \*/਍    攀氀瀀爀漀琀漀⸀漀渀䐀爀愀最伀瘀攀爀 㴀 昀甀渀挀琀椀漀渀 ⠀昀⤀ 笀ഀഀ
        f ? eve.on("raphael.drag.over." + this.id, f) : eve.unbind("raphael.drag.over." + this.id);਍    紀㬀ഀഀ
    /*\਍     ⨀ 䔀氀攀洀攀渀琀⸀甀渀搀爀愀最ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Removes all drag event handlers from given element.਍    尀⨀⼀ഀഀ
    elproto.undrag = function () {਍        瘀愀爀 椀 㴀 搀爀愀最最愀戀氀攀⸀氀攀渀最琀栀㬀ഀഀ
        while (i--) if (draggable[i].el == this) {਍            琀栀椀猀⸀甀渀洀漀甀猀攀搀漀眀渀⠀搀爀愀最最愀戀氀攀嬀椀崀⸀猀琀愀爀琀⤀㬀ഀഀ
            draggable.splice(i, 1);਍            攀瘀攀⸀甀渀戀椀渀搀⠀∀爀愀瀀栀愀攀氀⸀搀爀愀最⸀⨀⸀∀ ⬀ 琀栀椀猀⸀椀搀⤀㬀ഀഀ
        }਍        ℀搀爀愀最最愀戀氀攀⸀氀攀渀最琀栀 ☀☀ 刀⸀甀渀洀漀甀猀攀洀漀瘀攀⠀搀爀愀最䴀漀瘀攀⤀⸀甀渀洀漀甀猀攀甀瀀⠀搀爀愀最唀瀀⤀㬀ഀഀ
        drag = [];਍    紀㬀ഀഀ
    /*\਍     ⨀ 倀愀瀀攀爀⸀挀椀爀挀氀攀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Draws a circle.਍     ⨀⨀ഀഀ
     > Parameters਍     ⨀⨀ഀഀ
     - x (number) x coordinate of the centre਍     ⴀ 礀 ⠀渀甀洀戀攀爀⤀ 礀 挀漀漀爀搀椀渀愀琀攀 漀昀 琀栀攀 挀攀渀琀爀攀ഀഀ
     - r (number) radius਍     㴀 ⠀漀戀樀攀挀琀⤀ 刀愀瀀栀愀氀 攀氀攀洀攀渀琀 漀戀樀攀挀琀 眀椀琀栀 琀礀瀀攀 ᰀ挠椀爀挀氀攀ᴀഠഀ
     **਍     㸀 唀猀愀最攀ഀഀ
     | var c = paper.circle(50, 50, 40);਍    尀⨀⼀ഀഀ
    paperproto.circle = function (x, y, r) {਍        瘀愀爀 漀甀琀 㴀 刀⸀开攀渀最椀渀攀⸀挀椀爀挀氀攀⠀琀栀椀猀Ⰰ 砀 簀簀 　Ⰰ 礀 簀簀 　Ⰰ 爀 簀簀 　⤀㬀ഀഀ
        this.__set__ && this.__set__.push(out);਍        爀攀琀甀爀渀 漀甀琀㬀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * Paper.rect਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     *਍     ⨀ 䐀爀愀眀猀 愀 爀攀挀琀愀渀最氀攀⸀ഀഀ
     **਍     㸀 倀愀爀愀洀攀琀攀爀猀ഀഀ
     **਍     ⴀ 砀 ⠀渀甀洀戀攀爀⤀ 砀 挀漀漀爀搀椀渀愀琀攀 漀昀 琀栀攀 琀漀瀀 氀攀昀琀 挀漀爀渀攀爀ഀഀ
     - y (number) y coordinate of the top left corner਍     ⴀ 眀椀搀琀栀 ⠀渀甀洀戀攀爀⤀ 眀椀搀琀栀ഀഀ
     - height (number) height਍     ⴀ 爀 ⠀渀甀洀戀攀爀⤀ ⌀漀瀀琀椀漀渀愀氀 爀愀搀椀甀猀 昀漀爀 爀漀甀渀搀攀搀 挀漀爀渀攀爀猀Ⰰ 搀攀昀愀甀氀琀 椀猀 　ഀഀ
     = (object) Raphaël element object with type “rect”਍     ⨀⨀ഀഀ
     > Usage਍     簀 ⼀⼀ 爀攀最甀氀愀爀 爀攀挀琀愀渀最氀攀ഀഀ
     | var c = paper.rect(10, 10, 50, 50);਍     簀 ⼀⼀ 爀攀挀琀愀渀最氀攀 眀椀琀栀 爀漀甀渀搀攀搀 挀漀爀渀攀爀猀ഀഀ
     | var c = paper.rect(40, 40, 50, 50, 10);਍    尀⨀⼀ഀഀ
    paperproto.rect = function (x, y, w, h, r) {਍        瘀愀爀 漀甀琀 㴀 刀⸀开攀渀最椀渀攀⸀爀攀挀琀⠀琀栀椀猀Ⰰ 砀 簀簀 　Ⰰ 礀 簀簀 　Ⰰ 眀 簀簀 　Ⰰ 栀 簀簀 　Ⰰ 爀 簀簀 　⤀㬀ഀഀ
        this.__set__ && this.__set__.push(out);਍        爀攀琀甀爀渀 漀甀琀㬀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * Paper.ellipse਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 䐀爀愀眀猀 愀渀 攀氀氀椀瀀猀攀⸀ഀഀ
     **਍     㸀 倀愀爀愀洀攀琀攀爀猀ഀഀ
     **਍     ⴀ 砀 ⠀渀甀洀戀攀爀⤀ 砀 挀漀漀爀搀椀渀愀琀攀 漀昀 琀栀攀 挀攀渀琀爀攀ഀഀ
     - y (number) y coordinate of the centre਍     ⴀ 爀砀 ⠀渀甀洀戀攀爀⤀ 栀漀爀椀稀漀渀琀愀氀 爀愀搀椀甀猀ഀഀ
     - ry (number) vertical radius਍     㴀 ⠀漀戀樀攀挀琀⤀ 刀愀瀀栀愀氀 攀氀攀洀攀渀琀 漀戀樀攀挀琀 眀椀琀栀 琀礀瀀攀 ᰀ攠氀氀椀瀀猀攀ᴀഠഀ
     **਍     㸀 唀猀愀最攀ഀഀ
     | var c = paper.ellipse(50, 50, 40, 20);਍    尀⨀⼀ഀഀ
    paperproto.ellipse = function (x, y, rx, ry) {਍        瘀愀爀 漀甀琀 㴀 刀⸀开攀渀最椀渀攀⸀攀氀氀椀瀀猀攀⠀琀栀椀猀Ⰰ 砀 簀簀 　Ⰰ 礀 簀簀 　Ⰰ 爀砀 簀簀 　Ⰰ 爀礀 簀簀 　⤀㬀ഀഀ
        this.__set__ && this.__set__.push(out);਍        爀攀琀甀爀渀 漀甀琀㬀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * Paper.path਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 䌀爀攀愀琀攀猀 愀 瀀愀琀栀 攀氀攀洀攀渀琀 戀礀 最椀瘀攀渀 瀀愀琀栀 搀愀琀愀 猀琀爀椀渀最⸀ഀഀ
     > Parameters਍     ⴀ 瀀愀琀栀匀琀爀椀渀最 ⠀猀琀爀椀渀最⤀ ⌀漀瀀琀椀漀渀愀氀 瀀愀琀栀 猀琀爀椀渀最 椀渀 匀嘀䜀 昀漀爀洀愀琀⸀ഀഀ
     * Path string consists of one-letter commands, followed by comma seprarated arguments in numercal form. Example:਍     簀 ∀䴀㄀　Ⰰ㈀　䰀㌀　Ⰰ㐀　∀ഀഀ
     * Here we can see two commands: “M”, with arguments `(10, 20)` and “L” with arguments `(30, 40)`. Upper case letter mean command is absolute, lower case—relative.਍     ⨀ഀഀ
     # <p>Here is short list of commands available, for more details see <a href="http://www.w3.org/TR/SVG/paths.html#PathData" title="Details of a path's data attribute's format are described in the SVG specification.">SVG path string format</a>.</p>਍     ⌀ 㰀琀愀戀氀攀㸀㰀琀栀攀愀搀㸀㰀琀爀㸀㰀琀栀㸀䌀漀洀洀愀渀搀㰀⼀琀栀㸀㰀琀栀㸀一愀洀攀㰀⼀琀栀㸀㰀琀栀㸀倀愀爀愀洀攀琀攀爀猀㰀⼀琀栀㸀㰀⼀琀爀㸀㰀⼀琀栀攀愀搀㸀㰀琀戀漀搀礀㸀ഀഀ
     # <tr><td>M</td><td>moveto</td><td>(x y)+</td></tr>਍     ⌀ 㰀琀爀㸀㰀琀搀㸀娀㰀⼀琀搀㸀㰀琀搀㸀挀氀漀猀攀瀀愀琀栀㰀⼀琀搀㸀㰀琀搀㸀⠀渀漀渀攀⤀㰀⼀琀搀㸀㰀⼀琀爀㸀ഀഀ
     # <tr><td>L</td><td>lineto</td><td>(x y)+</td></tr>਍     ⌀ 㰀琀爀㸀㰀琀搀㸀䠀㰀⼀琀搀㸀㰀琀搀㸀栀漀爀椀稀漀渀琀愀氀 氀椀渀攀琀漀㰀⼀琀搀㸀㰀琀搀㸀砀⬀㰀⼀琀搀㸀㰀⼀琀爀㸀ഀഀ
     # <tr><td>V</td><td>vertical lineto</td><td>y+</td></tr>਍     ⌀ 㰀琀爀㸀㰀琀搀㸀䌀㰀⼀琀搀㸀㰀琀搀㸀挀甀爀瘀攀琀漀㰀⼀琀搀㸀㰀琀搀㸀⠀砀㄀ 礀㄀ 砀㈀ 礀㈀ 砀 礀⤀⬀㰀⼀琀搀㸀㰀⼀琀爀㸀ഀഀ
     # <tr><td>S</td><td>smooth curveto</td><td>(x2 y2 x y)+</td></tr>਍     ⌀ 㰀琀爀㸀㰀琀搀㸀儀㰀⼀琀搀㸀㰀琀搀㸀焀甀愀搀爀愀琀椀挀 䈀稀椀攀爀 挀甀爀瘀攀琀漀㰀⼀琀搀㸀㰀琀搀㸀⠀砀㄀ 礀㄀ 砀 礀⤀⬀㰀⼀琀搀㸀㰀⼀琀爀㸀ഀഀ
     # <tr><td>T</td><td>smooth quadratic Bézier curveto</td><td>(x y)+</td></tr>਍     ⌀ 㰀琀爀㸀㰀琀搀㸀䄀㰀⼀琀搀㸀㰀琀搀㸀攀氀氀椀瀀琀椀挀愀氀 愀爀挀㰀⼀琀搀㸀㰀琀搀㸀⠀爀砀 爀礀 砀ⴀ愀砀椀猀ⴀ爀漀琀愀琀椀漀渀 氀愀爀最攀ⴀ愀爀挀ⴀ昀氀愀最 猀眀攀攀瀀ⴀ昀氀愀最 砀 礀⤀⬀㰀⼀琀搀㸀㰀⼀琀爀㸀ഀഀ
     # <tr><td>R</td><td><a href="http://en.wikipedia.org/wiki/Catmull–Rom_spline#Catmull.E2.80.93Rom_spline">Catmull-Rom curveto</a>*</td><td>x1 y1 (x y)+</td></tr></tbody></table>਍     ⨀ ⨀ ᰀ䌠愀琀洀甀氀氀ⴀ刀漀洀 挀甀爀瘀攀琀漀ᴀ†椀猀 愀 渀漀琀 猀琀愀渀搀愀爀搀 匀嘀䜀 挀漀洀洀愀渀搀 愀渀搀 愀搀搀攀搀 椀渀 ㈀⸀　 琀漀 洀愀欀攀 氀椀昀攀 攀愀猀椀攀爀⸀ഀഀ
     * Note: there is a special case when path consist of just three commands: “M10,10R…z”. In this case path will smoothly connects to its beginning.਍     㸀 唀猀愀最攀ഀഀ
     | var c = paper.path("M10 10L90 90");਍     簀 ⼀⼀ 搀爀愀眀 愀 搀椀愀最漀渀愀氀 氀椀渀攀㨀ഀഀ
     | // move to 10,10, line to 90,90਍     ⨀ 䘀漀爀 攀砀愀洀瀀氀攀 漀昀 瀀愀琀栀 猀琀爀椀渀最猀Ⰰ 挀栀攀挀欀 漀甀琀 琀栀攀猀攀 椀挀漀渀猀㨀 栀琀琀瀀㨀⼀⼀爀愀瀀栀愀攀氀樀猀⸀挀漀洀⼀椀挀漀渀猀⼀ഀഀ
    \*/਍    瀀愀瀀攀爀瀀爀漀琀漀⸀瀀愀琀栀 㴀 昀甀渀挀琀椀漀渀 ⠀瀀愀琀栀匀琀爀椀渀最⤀ 笀ഀഀ
        pathString && !R.is(pathString, string) && !R.is(pathString[0], array) && (pathString += E);਍        瘀愀爀 漀甀琀 㴀 刀⸀开攀渀最椀渀攀⸀瀀愀琀栀⠀刀⸀昀漀爀洀愀琀嬀愀瀀瀀氀礀崀⠀刀Ⰰ 愀爀最甀洀攀渀琀猀⤀Ⰰ 琀栀椀猀⤀㬀ഀഀ
        this.__set__ && this.__set__.push(out);਍        爀攀琀甀爀渀 漀甀琀㬀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * Paper.image਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 䔀洀戀攀搀猀 愀渀 椀洀愀最攀 椀渀琀漀 琀栀攀 猀甀爀昀愀挀攀⸀ഀഀ
     **਍     㸀 倀愀爀愀洀攀琀攀爀猀ഀഀ
     **਍     ⴀ 猀爀挀 ⠀猀琀爀椀渀最⤀ 唀刀䤀 漀昀 琀栀攀 猀漀甀爀挀攀 椀洀愀最攀ഀഀ
     - x (number) x coordinate position਍     ⴀ 礀 ⠀渀甀洀戀攀爀⤀ 礀 挀漀漀爀搀椀渀愀琀攀 瀀漀猀椀琀椀漀渀ഀഀ
     - width (number) width of the image਍     ⴀ 栀攀椀最栀琀 ⠀渀甀洀戀攀爀⤀ 栀攀椀最栀琀 漀昀 琀栀攀 椀洀愀最攀ഀഀ
     = (object) Raphaël element object with type “image”਍     ⨀⨀ഀഀ
     > Usage਍     簀 瘀愀爀 挀 㴀 瀀愀瀀攀爀⸀椀洀愀最攀⠀∀愀瀀瀀氀攀⸀瀀渀最∀Ⰰ ㄀　Ⰰ ㄀　Ⰰ 㠀　Ⰰ 㠀　⤀㬀ഀഀ
    \*/਍    瀀愀瀀攀爀瀀爀漀琀漀⸀椀洀愀最攀 㴀 昀甀渀挀琀椀漀渀 ⠀猀爀挀Ⰰ 砀Ⰰ 礀Ⰰ 眀Ⰰ 栀⤀ 笀ഀഀ
        var out = R._engine.image(this, src || "about:blank", x || 0, y || 0, w || 0, h || 0);਍        琀栀椀猀⸀开开猀攀琀开开 ☀☀ 琀栀椀猀⸀开开猀攀琀开开⸀瀀甀猀栀⠀漀甀琀⤀㬀ഀഀ
        return out;਍    紀㬀ഀഀ
    /*\਍     ⨀ 倀愀瀀攀爀⸀琀攀砀琀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Draws a text string. If you need line breaks, put “\n” in the string.਍     ⨀⨀ഀഀ
     > Parameters਍     ⨀⨀ഀഀ
     - x (number) x coordinate position਍     ⴀ 礀 ⠀渀甀洀戀攀爀⤀ 礀 挀漀漀爀搀椀渀愀琀攀 瀀漀猀椀琀椀漀渀ഀഀ
     - text (string) The text string to draw਍     㴀 ⠀漀戀樀攀挀琀⤀ 刀愀瀀栀愀氀 攀氀攀洀攀渀琀 漀戀樀攀挀琀 眀椀琀栀 琀礀瀀攀 ᰀ琠攀砀琀ᴀഠഀ
     **਍     㸀 唀猀愀最攀ഀഀ
     | var t = paper.text(50, 50, "Raphaël\nkicks\nbutt!");਍    尀⨀⼀ഀഀ
    paperproto.text = function (x, y, text) {਍        瘀愀爀 漀甀琀 㴀 刀⸀开攀渀最椀渀攀⸀琀攀砀琀⠀琀栀椀猀Ⰰ 砀 簀簀 　Ⰰ 礀 簀簀 　Ⰰ 匀琀爀⠀琀攀砀琀⤀⤀㬀ഀഀ
        this.__set__ && this.__set__.push(out);਍        爀攀琀甀爀渀 漀甀琀㬀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * Paper.set਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 䌀爀攀愀琀攀猀 愀爀爀愀礀ⴀ氀椀欀攀 漀戀樀攀挀琀 琀漀 欀攀攀瀀 愀渀搀 漀瀀攀爀愀琀攀 猀攀瘀攀爀愀氀 攀氀攀洀攀渀琀猀 愀琀 漀渀挀攀⸀ഀഀ
     * Warning: it doesn’t create any elements for itself in the page, it just groups existing elements.਍     ⨀ 匀攀琀猀 愀挀琀 愀猀 瀀猀攀甀搀漀 攀氀攀洀攀渀琀猀 ᐀†愀氀氀 洀攀琀栀漀搀猀 愀瘀愀椀氀愀戀氀攀 琀漀 愀渀 攀氀攀洀攀渀琀 挀愀渀 戀攀 甀猀攀搀 漀渀 愀 猀攀琀⸀ഀഀ
     = (object) array-like object that represents set of elements਍     ⨀⨀ഀഀ
     > Usage਍     簀 瘀愀爀 猀琀 㴀 瀀愀瀀攀爀⸀猀攀琀⠀⤀㬀ഀഀ
     | st.push(਍     簀     瀀愀瀀攀爀⸀挀椀爀挀氀攀⠀㄀　Ⰰ ㄀　Ⰰ 㔀⤀Ⰰഀഀ
     |     paper.circle(30, 10, 5)਍     簀 ⤀㬀ഀഀ
     | st.attr({fill: "red"}); // changes the fill of both circles਍    尀⨀⼀ഀഀ
    paperproto.set = function (itemsArray) {਍        ℀刀⸀椀猀⠀椀琀攀洀猀䄀爀爀愀礀Ⰰ ∀愀爀爀愀礀∀⤀ ☀☀ ⠀椀琀攀洀猀䄀爀爀愀礀 㴀 䄀爀爀愀礀⸀瀀爀漀琀漀琀礀瀀攀⸀猀瀀氀椀挀攀⸀挀愀氀氀⠀愀爀最甀洀攀渀琀猀Ⰰ 　Ⰰ 愀爀最甀洀攀渀琀猀⸀氀攀渀最琀栀⤀⤀㬀ഀഀ
        var out = new Set(itemsArray);਍        琀栀椀猀⸀开开猀攀琀开开 ☀☀ 琀栀椀猀⸀开开猀攀琀开开⸀瀀甀猀栀⠀漀甀琀⤀㬀ഀഀ
        out["paper"] = this;਍        漀甀琀嬀∀琀礀瀀攀∀崀 㴀 ∀猀攀琀∀㬀ഀഀ
        return out;਍    紀㬀ഀഀ
    /*\਍     ⨀ 倀愀瀀攀爀⸀猀攀琀匀琀愀爀琀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Creates @Paper.set. All elements that will be created after calling this method and before calling਍     ⨀ 䀀倀愀瀀攀爀⸀猀攀琀䘀椀渀椀猀栀 眀椀氀氀 戀攀 愀搀搀攀搀 琀漀 琀栀攀 猀攀琀⸀ഀഀ
     **਍     㸀 唀猀愀最攀ഀഀ
     | paper.setStart();਍     簀 瀀愀瀀攀爀⸀挀椀爀挀氀攀⠀㄀　Ⰰ ㄀　Ⰰ 㔀⤀Ⰰഀഀ
     | paper.circle(30, 10, 5)਍     簀 瘀愀爀 猀琀 㴀 瀀愀瀀攀爀⸀猀攀琀䘀椀渀椀猀栀⠀⤀㬀ഀഀ
     | st.attr({fill: "red"}); // changes the fill of both circles਍    尀⨀⼀ഀഀ
    paperproto.setStart = function (set) {਍        琀栀椀猀⸀开开猀攀琀开开 㴀 猀攀琀 簀簀 琀栀椀猀⸀猀攀琀⠀⤀㬀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * Paper.setFinish਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 匀攀攀 䀀倀愀瀀攀爀⸀猀攀琀匀琀愀爀琀⸀ 吀栀椀猀 洀攀琀栀漀搀 昀椀渀椀猀栀攀猀 挀愀琀挀栀椀渀最 愀渀搀 爀攀琀甀爀渀猀 爀攀猀甀氀琀椀渀最 猀攀琀⸀ഀഀ
     **਍     㴀 ⠀漀戀樀攀挀琀⤀ 猀攀琀ഀഀ
    \*/਍    瀀愀瀀攀爀瀀爀漀琀漀⸀猀攀琀䘀椀渀椀猀栀 㴀 昀甀渀挀琀椀漀渀 ⠀猀攀琀⤀ 笀ഀഀ
        var out = this.__set__;਍        搀攀氀攀琀攀 琀栀椀猀⸀开开猀攀琀开开㬀ഀഀ
        return out;਍    紀㬀ഀഀ
    /*\਍     ⨀ 倀愀瀀攀爀⸀最攀琀匀椀稀攀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Obtains current paper actual size.਍     ⨀⨀ഀഀ
     = (object)਍     尀⨀⼀ഀഀ
    paperproto.getSize = function () {਍        瘀愀爀 挀漀渀琀愀椀渀攀爀 㴀 琀栀椀猀⸀挀愀渀瘀愀猀⸀瀀愀爀攀渀琀一漀搀攀㬀ഀഀ
        return {਍            眀椀搀琀栀㨀 挀漀渀琀愀椀渀攀爀⸀漀昀昀猀攀琀圀椀搀琀栀Ⰰഀഀ
            height: container.offsetHeight਍                紀㬀ഀഀ
        };਍    ⼀⨀尀ഀഀ
     * Paper.setSize਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 䤀昀 礀漀甀 渀攀攀搀 琀漀 挀栀愀渀最攀 搀椀洀攀渀猀椀漀渀猀 漀昀 琀栀攀 挀愀渀瘀愀猀 挀愀氀氀 琀栀椀猀 洀攀琀栀漀搀ഀഀ
     **਍     㸀 倀愀爀愀洀攀琀攀爀猀ഀഀ
     **਍     ⴀ 眀椀搀琀栀 ⠀渀甀洀戀攀爀⤀ 渀攀眀 眀椀搀琀栀 漀昀 琀栀攀 挀愀渀瘀愀猀ഀഀ
     - height (number) new height of the canvas਍    尀⨀⼀ഀഀ
    paperproto.setSize = function (width, height) {਍        爀攀琀甀爀渀 刀⸀开攀渀最椀渀攀⸀猀攀琀匀椀稀攀⸀挀愀氀氀⠀琀栀椀猀Ⰰ 眀椀搀琀栀Ⰰ 栀攀椀最栀琀⤀㬀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * Paper.setViewBox਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 匀攀琀猀 琀栀攀 瘀椀攀眀 戀漀砀 漀昀 琀栀攀 瀀愀瀀攀爀⸀ 倀爀愀挀琀椀挀愀氀氀礀 椀琀 最椀瘀攀猀 礀漀甀 愀戀椀氀椀琀礀 琀漀 稀漀漀洀 愀渀搀 瀀愀渀 眀栀漀氀攀 瀀愀瀀攀爀 猀甀爀昀愀挀攀 戀礀ഀഀ
     * specifying new boundaries.਍     ⨀⨀ഀഀ
     > Parameters਍     ⨀⨀ഀഀ
     - x (number) new x position, default is `0`਍     ⴀ 礀 ⠀渀甀洀戀攀爀⤀ 渀攀眀 礀 瀀漀猀椀琀椀漀渀Ⰰ 搀攀昀愀甀氀琀 椀猀 怀　怀ഀഀ
     - w (number) new width of the canvas਍     ⴀ 栀 ⠀渀甀洀戀攀爀⤀ 渀攀眀 栀攀椀最栀琀 漀昀 琀栀攀 挀愀渀瘀愀猀ഀഀ
     - fit (boolean) `true` if you want graphics to fit into new boundary box਍    尀⨀⼀ഀഀ
    paperproto.setViewBox = function (x, y, w, h, fit) {਍        爀攀琀甀爀渀 刀⸀开攀渀最椀渀攀⸀猀攀琀嘀椀攀眀䈀漀砀⸀挀愀氀氀⠀琀栀椀猀Ⰰ 砀Ⰰ 礀Ⰰ 眀Ⰰ 栀Ⰰ 昀椀琀⤀㬀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * Paper.top਍     嬀 瀀爀漀瀀攀爀琀礀 崀ഀഀ
     **਍     ⨀ 倀漀椀渀琀猀 琀漀 琀栀攀 琀漀瀀洀漀猀琀 攀氀攀洀攀渀琀 漀渀 琀栀攀 瀀愀瀀攀爀ഀഀ
    \*/਍    ⼀⨀尀ഀഀ
     * Paper.bottom਍     嬀 瀀爀漀瀀攀爀琀礀 崀ഀഀ
     **਍     ⨀ 倀漀椀渀琀猀 琀漀 琀栀攀 戀漀琀琀漀洀 攀氀攀洀攀渀琀 漀渀 琀栀攀 瀀愀瀀攀爀ഀഀ
    \*/਍    瀀愀瀀攀爀瀀爀漀琀漀⸀琀漀瀀 㴀 瀀愀瀀攀爀瀀爀漀琀漀⸀戀漀琀琀漀洀 㴀 渀甀氀氀㬀ഀഀ
    /*\਍     ⨀ 倀愀瀀攀爀⸀爀愀瀀栀愀攀氀ഀഀ
     [ property ]਍     ⨀⨀ഀഀ
     * Points to the @Raphael object/function਍    尀⨀⼀ഀഀ
    paperproto.raphael = R;਍    瘀愀爀 最攀琀伀昀昀猀攀琀 㴀 昀甀渀挀琀椀漀渀 ⠀攀氀攀洀⤀ 笀ഀഀ
        var box = elem.getBoundingClientRect(),਍            搀漀挀 㴀 攀氀攀洀⸀漀眀渀攀爀䐀漀挀甀洀攀渀琀Ⰰഀഀ
            body = doc.body,਍            搀漀挀䔀氀攀洀 㴀 搀漀挀⸀搀漀挀甀洀攀渀琀䔀氀攀洀攀渀琀Ⰰഀഀ
            clientTop = docElem.clientTop || body.clientTop || 0, clientLeft = docElem.clientLeft || body.clientLeft || 0,਍            琀漀瀀  㴀 戀漀砀⸀琀漀瀀  ⬀ ⠀最⸀眀椀渀⸀瀀愀最攀夀伀昀昀猀攀琀 簀簀 搀漀挀䔀氀攀洀⸀猀挀爀漀氀氀吀漀瀀 簀簀 戀漀搀礀⸀猀挀爀漀氀氀吀漀瀀 ⤀ ⴀ 挀氀椀攀渀琀吀漀瀀Ⰰഀഀ
            left = box.left + (g.win.pageXOffset || docElem.scrollLeft || body.scrollLeft) - clientLeft;਍        爀攀琀甀爀渀 笀ഀഀ
            y: top,਍            砀㨀 氀攀昀琀ഀഀ
        };਍    紀㬀ഀഀ
    /*\਍     ⨀ 倀愀瀀攀爀⸀最攀琀䔀氀攀洀攀渀琀䈀礀倀漀椀渀琀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Returns you topmost element under given point.਍     ⨀⨀ഀഀ
     = (object) Raphaël element object਍     㸀 倀愀爀愀洀攀琀攀爀猀ഀഀ
     **਍     ⴀ 砀 ⠀渀甀洀戀攀爀⤀ 砀 挀漀漀爀搀椀渀愀琀攀 昀爀漀洀 琀栀攀 琀漀瀀 氀攀昀琀 挀漀爀渀攀爀 漀昀 琀栀攀 眀椀渀搀漀眀ഀഀ
     - y (number) y coordinate from the top left corner of the window਍     㸀 唀猀愀最攀ഀഀ
     | paper.getElementByPoint(mouseX, mouseY).attr({stroke: "#f00"});਍    尀⨀⼀ഀഀ
    paperproto.getElementByPoint = function (x, y) {਍        瘀愀爀 瀀愀瀀攀爀 㴀 琀栀椀猀Ⰰഀഀ
            svg = paper.canvas,਍            琀愀爀最攀琀 㴀 最⸀搀漀挀⸀攀氀攀洀攀渀琀䘀爀漀洀倀漀椀渀琀⠀砀Ⰰ 礀⤀㬀ഀഀ
        if (g.win.opera && target.tagName == "svg") {਍            瘀愀爀 猀漀 㴀 最攀琀伀昀昀猀攀琀⠀猀瘀最⤀Ⰰഀഀ
                sr = svg.createSVGRect();਍            猀爀⸀砀 㴀 砀 ⴀ 猀漀⸀砀㬀ഀഀ
            sr.y = y - so.y;਍            猀爀⸀眀椀搀琀栀 㴀 猀爀⸀栀攀椀最栀琀 㴀 ㄀㬀ഀഀ
            var hits = svg.getIntersectionList(sr, null);਍            椀昀 ⠀栀椀琀猀⸀氀攀渀最琀栀⤀ 笀ഀഀ
                target = hits[hits.length - 1];਍            紀ഀഀ
        }਍        椀昀 ⠀℀琀愀爀最攀琀⤀ 笀ഀഀ
            return null;਍        紀ഀഀ
        while (target.parentNode && target != svg.parentNode && !target.raphael) {਍            琀愀爀最攀琀 㴀 琀愀爀最攀琀⸀瀀愀爀攀渀琀一漀搀攀㬀ഀഀ
        }਍        琀愀爀最攀琀 㴀㴀 瀀愀瀀攀爀⸀挀愀渀瘀愀猀⸀瀀愀爀攀渀琀一漀搀攀 ☀☀ ⠀琀愀爀最攀琀 㴀 猀瘀最⤀㬀ഀഀ
        target = target && target.raphael ? paper.getById(target.raphaelid) : null;਍        爀攀琀甀爀渀 琀愀爀最攀琀㬀ഀഀ
    };਍ഀഀ
    /*\਍     ⨀ 倀愀瀀攀爀⸀最攀琀䔀氀攀洀攀渀琀猀䈀礀䈀䈀漀砀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Returns set of elements that have an intersecting bounding box਍     ⨀⨀ഀഀ
     > Parameters਍     ⨀⨀ഀഀ
     - bbox (object) bbox to check with਍     㴀 ⠀漀戀樀攀挀琀⤀ 䀀匀攀琀ഀഀ
     \*/਍    瀀愀瀀攀爀瀀爀漀琀漀⸀最攀琀䔀氀攀洀攀渀琀猀䈀礀䈀䈀漀砀 㴀 昀甀渀挀琀椀漀渀 ⠀戀戀漀砀⤀ 笀ഀഀ
        var set = this.set();਍        琀栀椀猀⸀昀漀爀䔀愀挀栀⠀昀甀渀挀琀椀漀渀 ⠀攀氀⤀ 笀ഀഀ
            if (R.isBBoxIntersect(el.getBBox(), bbox)) {਍                猀攀琀⸀瀀甀猀栀⠀攀氀⤀㬀ഀഀ
            }਍        紀⤀㬀ഀഀ
        return set;਍    紀㬀ഀഀ
਍    ⼀⨀尀ഀഀ
     * Paper.getById਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 刀攀琀甀爀渀猀 礀漀甀 攀氀攀洀攀渀琀 戀礀 椀琀猀 椀渀琀攀爀渀愀氀 䤀䐀⸀ഀഀ
     **਍     㸀 倀愀爀愀洀攀琀攀爀猀ഀഀ
     **਍     ⴀ 椀搀 ⠀渀甀洀戀攀爀⤀ 椀搀ഀഀ
     = (object) Raphaël element object਍    尀⨀⼀ഀഀ
    paperproto.getById = function (id) {਍        瘀愀爀 戀漀琀 㴀 琀栀椀猀⸀戀漀琀琀漀洀㬀ഀഀ
        while (bot) {਍            椀昀 ⠀戀漀琀⸀椀搀 㴀㴀 椀搀⤀ 笀ഀഀ
                return bot;਍            紀ഀഀ
            bot = bot.next;਍        紀ഀഀ
        return null;਍    紀㬀ഀഀ
    /*\਍     ⨀ 倀愀瀀攀爀⸀昀漀爀䔀愀挀栀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Executes given function for each element on the paper਍     ⨀ഀഀ
     * If callback function returns `false` it will stop loop running.਍     ⨀⨀ഀഀ
     > Parameters਍     ⨀⨀ഀഀ
     - callback (function) function to run਍     ⴀ 琀栀椀猀䄀爀最 ⠀漀戀樀攀挀琀⤀ 挀漀渀琀攀砀琀 漀戀樀攀挀琀 昀漀爀 琀栀攀 挀愀氀氀戀愀挀欀ഀഀ
     = (object) Paper object਍     㸀 唀猀愀最攀ഀഀ
     | paper.forEach(function (el) {਍     簀     攀氀⸀愀琀琀爀⠀笀 猀琀爀漀欀攀㨀 ∀戀氀甀攀∀ 紀⤀㬀ഀഀ
     | });਍    尀⨀⼀ഀഀ
    paperproto.forEach = function (callback, thisArg) {਍        瘀愀爀 戀漀琀 㴀 琀栀椀猀⸀戀漀琀琀漀洀㬀ഀഀ
        while (bot) {਍            椀昀 ⠀挀愀氀氀戀愀挀欀⸀挀愀氀氀⠀琀栀椀猀䄀爀最Ⰰ 戀漀琀⤀ 㴀㴀㴀 昀愀氀猀攀⤀ 笀ഀഀ
                return this;਍            紀ഀഀ
            bot = bot.next;਍        紀ഀഀ
        return this;਍    紀㬀ഀഀ
    /*\਍     ⨀ 倀愀瀀攀爀⸀最攀琀䔀氀攀洀攀渀琀猀䈀礀倀漀椀渀琀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Returns set of elements that have common point inside਍     ⨀⨀ഀഀ
     > Parameters਍     ⨀⨀ഀഀ
     - x (number) x coordinate of the point਍     ⴀ 礀 ⠀渀甀洀戀攀爀⤀ 礀 挀漀漀爀搀椀渀愀琀攀 漀昀 琀栀攀 瀀漀椀渀琀ഀഀ
     = (object) @Set਍    尀⨀⼀ഀഀ
    paperproto.getElementsByPoint = function (x, y) {਍        瘀愀爀 猀攀琀 㴀 琀栀椀猀⸀猀攀琀⠀⤀㬀ഀഀ
        this.forEach(function (el) {਍            椀昀 ⠀攀氀⸀椀猀倀漀椀渀琀䤀渀猀椀搀攀⠀砀Ⰰ 礀⤀⤀ 笀ഀഀ
                set.push(el);਍            紀ഀഀ
        });਍        爀攀琀甀爀渀 猀攀琀㬀ഀഀ
    };਍    昀甀渀挀琀椀漀渀 砀开礀⠀⤀ 笀ഀഀ
        return this.x + S + this.y;਍    紀ഀഀ
    function x_y_w_h() {਍        爀攀琀甀爀渀 琀栀椀猀⸀砀 ⬀ 匀 ⬀ 琀栀椀猀⸀礀 ⬀ 匀 ⬀ 琀栀椀猀⸀眀椀搀琀栀 ⬀ ∀ 尀砀搀㜀 ∀ ⬀ 琀栀椀猀⸀栀攀椀最栀琀㬀ഀഀ
    }਍    ⼀⨀尀ഀഀ
     * Element.isPointInside਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 䐀攀琀攀爀洀椀渀攀 椀昀 最椀瘀攀渀 瀀漀椀渀琀 椀猀 椀渀猀椀搀攀 琀栀椀猀 攀氀攀洀攀渀琀ᤀ猠 猀栀愀瀀攀ഀഀ
     **਍     㸀 倀愀爀愀洀攀琀攀爀猀ഀഀ
     **਍     ⴀ 砀 ⠀渀甀洀戀攀爀⤀ 砀 挀漀漀爀搀椀渀愀琀攀 漀昀 琀栀攀 瀀漀椀渀琀ഀഀ
     - y (number) y coordinate of the point਍     㴀 ⠀戀漀漀氀攀愀渀⤀ 怀琀爀甀攀怀 椀昀 瀀漀椀渀琀 椀渀猀椀搀攀 琀栀攀 猀栀愀瀀攀ഀഀ
    \*/਍    攀氀瀀爀漀琀漀⸀椀猀倀漀椀渀琀䤀渀猀椀搀攀 㴀 昀甀渀挀琀椀漀渀 ⠀砀Ⰰ 礀⤀ 笀ഀഀ
        var rp = this.realPath = getPath[this.type](this);਍        椀昀 ⠀琀栀椀猀⸀愀琀琀爀⠀✀琀爀愀渀猀昀漀爀洀✀⤀ ☀☀ 琀栀椀猀⸀愀琀琀爀⠀✀琀爀愀渀猀昀漀爀洀✀⤀⸀氀攀渀最琀栀⤀ 笀ഀഀ
            rp = R.transformPath(rp, this.attr('transform'));਍        紀ഀഀ
        return R.isPointInsidePath(rp, x, y);਍    紀㬀ഀഀ
    /*\਍     ⨀ 䔀氀攀洀攀渀琀⸀最攀琀䈀䈀漀砀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Return bounding box for a given element਍     ⨀⨀ഀഀ
     > Parameters਍     ⨀⨀ഀഀ
     - isWithoutTransform (boolean) flag, `true` if you want to have bounding box before transformations. Default is `false`.਍     㴀 ⠀漀戀樀攀挀琀⤀ 䈀漀甀渀搀椀渀最 戀漀砀 漀戀樀攀挀琀㨀ഀഀ
     o {਍     漀     砀㨀 ⠀渀甀洀戀攀爀⤀ 琀漀瀀 氀攀昀琀 挀漀爀渀攀爀 砀ഀഀ
     o     y: (number) top left corner y਍     漀     砀㈀㨀 ⠀渀甀洀戀攀爀⤀ 戀漀琀琀漀洀 爀椀最栀琀 挀漀爀渀攀爀 砀ഀഀ
     o     y2: (number) bottom right corner y਍     漀     眀椀搀琀栀㨀 ⠀渀甀洀戀攀爀⤀ 眀椀搀琀栀ഀഀ
     o     height: (number) height਍     漀 紀ഀഀ
    \*/਍    攀氀瀀爀漀琀漀⸀最攀琀䈀䈀漀砀 㴀 昀甀渀挀琀椀漀渀 ⠀椀猀圀椀琀栀漀甀琀吀爀愀渀猀昀漀爀洀⤀ 笀ഀഀ
        if (this.removed) {਍            爀攀琀甀爀渀 笀紀㬀ഀഀ
        }਍        瘀愀爀 开 㴀 琀栀椀猀⸀开㬀ഀഀ
        if (isWithoutTransform) {਍            椀昀 ⠀开⸀搀椀爀琀礀 簀簀 ℀开⸀戀戀漀砀眀琀⤀ 笀ഀഀ
                this.realPath = getPath[this.type](this);਍                开⸀戀戀漀砀眀琀 㴀 瀀愀琀栀䐀椀洀攀渀猀椀漀渀猀⠀琀栀椀猀⸀爀攀愀氀倀愀琀栀⤀㬀ഀഀ
                _.bboxwt.toString = x_y_w_h;਍                开⸀搀椀爀琀礀 㴀 　㬀ഀഀ
            }਍            爀攀琀甀爀渀 开⸀戀戀漀砀眀琀㬀ഀഀ
        }਍        椀昀 ⠀开⸀搀椀爀琀礀 簀簀 开⸀搀椀爀琀礀吀 簀簀 ℀开⸀戀戀漀砀⤀ 笀ഀഀ
            if (_.dirty || !this.realPath) {਍                开⸀戀戀漀砀眀琀 㴀 　㬀ഀഀ
                this.realPath = getPath[this.type](this);਍            紀ഀഀ
            _.bbox = pathDimensions(mapPath(this.realPath, this.matrix));਍            开⸀戀戀漀砀⸀琀漀匀琀爀椀渀最 㴀 砀开礀开眀开栀㬀ഀഀ
            _.dirty = _.dirtyT = 0;਍        紀ഀഀ
        return _.bbox;਍    紀㬀ഀഀ
    /*\਍     ⨀ 䔀氀攀洀攀渀琀⸀挀氀漀渀攀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     = (object) clone of a given element਍     ⨀⨀ഀഀ
    \*/਍    攀氀瀀爀漀琀漀⸀挀氀漀渀攀 㴀 昀甀渀挀琀椀漀渀 ⠀⤀ 笀ഀഀ
        if (this.removed) {਍            爀攀琀甀爀渀 渀甀氀氀㬀ഀഀ
        }਍        瘀愀爀 漀甀琀 㴀 琀栀椀猀⸀瀀愀瀀攀爀嬀琀栀椀猀⸀琀礀瀀攀崀⠀⤀⸀愀琀琀爀⠀琀栀椀猀⸀愀琀琀爀⠀⤀⤀㬀ഀഀ
        this.__set__ && this.__set__.push(out);਍        爀攀琀甀爀渀 漀甀琀㬀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * Element.glow਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 刀攀琀甀爀渀 猀攀琀 漀昀 攀氀攀洀攀渀琀猀 琀栀愀琀 挀爀攀愀琀攀 最氀漀眀ⴀ氀椀欀攀 攀昀昀攀挀琀 愀爀漀甀渀搀 最椀瘀攀渀 攀氀攀洀攀渀琀⸀ 匀攀攀 䀀倀愀瀀攀爀⸀猀攀琀⸀ഀഀ
     *਍     ⨀ 一漀琀攀㨀 䜀氀漀眀 椀猀 渀漀琀 挀漀渀渀攀挀琀攀搀 琀漀 琀栀攀 攀氀攀洀攀渀琀⸀ 䤀昀 礀漀甀 挀栀愀渀最攀 攀氀攀洀攀渀琀 愀琀琀爀椀戀甀琀攀猀 椀琀 眀漀渀ᤀ琠 愀搀樀甀猀琀 椀琀猀攀氀昀⸀ഀഀ
     **਍     㸀 倀愀爀愀洀攀琀攀爀猀ഀഀ
     **਍     ⴀ 最氀漀眀 ⠀漀戀樀攀挀琀⤀ ⌀漀瀀琀椀漀渀愀氀 瀀愀爀愀洀攀琀攀爀猀 漀戀樀攀挀琀 眀椀琀栀 愀氀氀 瀀爀漀瀀攀爀琀椀攀猀 漀瀀琀椀漀渀愀氀㨀ഀഀ
     o {਍     漀     眀椀搀琀栀 ⠀渀甀洀戀攀爀⤀ 猀椀稀攀 漀昀 琀栀攀 最氀漀眀Ⰰ 搀攀昀愀甀氀琀 椀猀 怀㄀　怀ഀഀ
     o     fill (boolean) will it be filled, default is `false`਍     漀     漀瀀愀挀椀琀礀 ⠀渀甀洀戀攀爀⤀ 漀瀀愀挀椀琀礀Ⰰ 搀攀昀愀甀氀琀 椀猀 怀　⸀㔀怀ഀഀ
     o     offsetx (number) horizontal offset, default is `0`਍     漀     漀昀昀猀攀琀礀 ⠀渀甀洀戀攀爀⤀ 瘀攀爀琀椀挀愀氀 漀昀昀猀攀琀Ⰰ 搀攀昀愀甀氀琀 椀猀 怀　怀ഀഀ
     o     color (string) glow colour, default is `black`਍     漀 紀ഀഀ
     = (object) @Paper.set of elements that represents glow਍    尀⨀⼀ഀഀ
    elproto.glow = function (glow) {਍        椀昀 ⠀琀栀椀猀⸀琀礀瀀攀 㴀㴀 ∀琀攀砀琀∀⤀ 笀ഀഀ
            return null;਍        紀ഀഀ
        glow = glow || {};਍        瘀愀爀 猀 㴀 笀ഀഀ
            width: (glow.width || 10) + (+this.attr("stroke-width") || 1),਍            昀椀氀氀㨀 最氀漀眀⸀昀椀氀氀 簀簀 昀愀氀猀攀Ⰰഀഀ
            opacity: glow.opacity || .5,਍            漀昀昀猀攀琀砀㨀 最氀漀眀⸀漀昀昀猀攀琀砀 簀簀 　Ⰰഀഀ
            offsety: glow.offsety || 0,਍            挀漀氀漀爀㨀 最氀漀眀⸀挀漀氀漀爀 簀簀 ∀⌀　　　∀ഀഀ
        },਍            挀 㴀 猀⸀眀椀搀琀栀 ⼀ ㈀Ⰰഀഀ
            r = this.paper,਍            漀甀琀 㴀 爀⸀猀攀琀⠀⤀Ⰰഀഀ
            path = this.realPath || getPath[this.type](this);਍        瀀愀琀栀 㴀 琀栀椀猀⸀洀愀琀爀椀砀 㼀 洀愀瀀倀愀琀栀⠀瀀愀琀栀Ⰰ 琀栀椀猀⸀洀愀琀爀椀砀⤀ 㨀 瀀愀琀栀㬀ഀഀ
        for (var i = 1; i < c + 1; i++) {਍            漀甀琀⸀瀀甀猀栀⠀爀⸀瀀愀琀栀⠀瀀愀琀栀⤀⸀愀琀琀爀⠀笀ഀഀ
                stroke: s.color,਍                昀椀氀氀㨀 猀⸀昀椀氀氀 㼀 猀⸀挀漀氀漀爀 㨀 ∀渀漀渀攀∀Ⰰഀഀ
                "stroke-linejoin": "round",਍                ∀猀琀爀漀欀攀ⴀ氀椀渀攀挀愀瀀∀㨀 ∀爀漀甀渀搀∀Ⰰഀഀ
                "stroke-width": +(s.width / c * i).toFixed(3),਍                漀瀀愀挀椀琀礀㨀 ⬀⠀猀⸀漀瀀愀挀椀琀礀 ⼀ 挀⤀⸀琀漀䘀椀砀攀搀⠀㌀⤀ഀഀ
            }));਍        紀ഀഀ
        return out.insertBefore(this).translate(s.offsetx, s.offsety);਍    紀㬀ഀഀ
    var curveslengths = {},਍    最攀琀倀漀椀渀琀䄀琀匀攀最洀攀渀琀䰀攀渀最琀栀 㴀 昀甀渀挀琀椀漀渀 ⠀瀀㄀砀Ⰰ 瀀㄀礀Ⰰ 挀㄀砀Ⰰ 挀㄀礀Ⰰ 挀㈀砀Ⰰ 挀㈀礀Ⰰ 瀀㈀砀Ⰰ 瀀㈀礀Ⰰ 氀攀渀最琀栀⤀ 笀ഀഀ
        if (length == null) {਍            爀攀琀甀爀渀 戀攀稀氀攀渀⠀瀀㄀砀Ⰰ 瀀㄀礀Ⰰ 挀㄀砀Ⰰ 挀㄀礀Ⰰ 挀㈀砀Ⰰ 挀㈀礀Ⰰ 瀀㈀砀Ⰰ 瀀㈀礀⤀㬀ഀഀ
        } else {਍            爀攀琀甀爀渀 刀⸀昀椀渀搀䐀漀琀猀䄀琀匀攀最洀攀渀琀⠀瀀㄀砀Ⰰ 瀀㄀礀Ⰰ 挀㄀砀Ⰰ 挀㄀礀Ⰰ 挀㈀砀Ⰰ 挀㈀礀Ⰰ 瀀㈀砀Ⰰ 瀀㈀礀Ⰰ 最攀琀吀愀琀䰀攀渀⠀瀀㄀砀Ⰰ 瀀㄀礀Ⰰ 挀㄀砀Ⰰ 挀㄀礀Ⰰ 挀㈀砀Ⰰ 挀㈀礀Ⰰ 瀀㈀砀Ⰰ 瀀㈀礀Ⰰ 氀攀渀最琀栀⤀⤀㬀ഀഀ
        }਍    紀Ⰰഀഀ
    getLengthFactory = function (istotal, subpath) {਍        爀攀琀甀爀渀 昀甀渀挀琀椀漀渀 ⠀瀀愀琀栀Ⰰ 氀攀渀最琀栀Ⰰ 漀渀氀礀猀琀愀爀琀⤀ 笀ഀഀ
            path = path2curve(path);਍            瘀愀爀 砀Ⰰ 礀Ⰰ 瀀Ⰰ 氀Ⰰ 猀瀀 㴀 ∀∀Ⰰ 猀甀戀瀀愀琀栀猀 㴀 笀紀Ⰰ 瀀漀椀渀琀Ⰰഀഀ
                len = 0;਍            昀漀爀 ⠀瘀愀爀 椀 㴀 　Ⰰ 椀椀 㴀 瀀愀琀栀⸀氀攀渀最琀栀㬀 椀 㰀 椀椀㬀 椀⬀⬀⤀ 笀ഀഀ
                p = path[i];਍                椀昀 ⠀瀀嬀　崀 㴀㴀 ∀䴀∀⤀ 笀ഀഀ
                    x = +p[1];਍                    礀 㴀 ⬀瀀嬀㈀崀㬀ഀഀ
                } else {਍                    氀 㴀 最攀琀倀漀椀渀琀䄀琀匀攀最洀攀渀琀䰀攀渀最琀栀⠀砀Ⰰ 礀Ⰰ 瀀嬀㄀崀Ⰰ 瀀嬀㈀崀Ⰰ 瀀嬀㌀崀Ⰰ 瀀嬀㐀崀Ⰰ 瀀嬀㔀崀Ⰰ 瀀嬀㘀崀⤀㬀ഀഀ
                    if (len + l > length) {਍                        椀昀 ⠀猀甀戀瀀愀琀栀 ☀☀ ℀猀甀戀瀀愀琀栀猀⸀猀琀愀爀琀⤀ 笀ഀഀ
                            point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);਍                            猀瀀 ⬀㴀 嬀∀䌀∀ ⬀ 瀀漀椀渀琀⸀猀琀愀爀琀⸀砀Ⰰ 瀀漀椀渀琀⸀猀琀愀爀琀⸀礀Ⰰ 瀀漀椀渀琀⸀洀⸀砀Ⰰ 瀀漀椀渀琀⸀洀⸀礀Ⰰ 瀀漀椀渀琀⸀砀Ⰰ 瀀漀椀渀琀⸀礀崀㬀ഀഀ
                            if (onlystart) {return sp;}਍                            猀甀戀瀀愀琀栀猀⸀猀琀愀爀琀 㴀 猀瀀㬀ഀഀ
                            sp = ["M" + point.x, point.y + "C" + point.n.x, point.n.y, point.end.x, point.end.y, p[5], p[6]].join();਍                            氀攀渀 ⬀㴀 氀㬀ഀഀ
                            x = +p[5];਍                            礀 㴀 ⬀瀀嬀㘀崀㬀ഀഀ
                            continue;਍                        紀ഀഀ
                        if (!istotal && !subpath) {਍                            瀀漀椀渀琀 㴀 最攀琀倀漀椀渀琀䄀琀匀攀最洀攀渀琀䰀攀渀最琀栀⠀砀Ⰰ 礀Ⰰ 瀀嬀㄀崀Ⰰ 瀀嬀㈀崀Ⰰ 瀀嬀㌀崀Ⰰ 瀀嬀㐀崀Ⰰ 瀀嬀㔀崀Ⰰ 瀀嬀㘀崀Ⰰ 氀攀渀最琀栀 ⴀ 氀攀渀⤀㬀ഀഀ
                            return {x: point.x, y: point.y, alpha: point.alpha};਍                        紀ഀഀ
                    }਍                    氀攀渀 ⬀㴀 氀㬀ഀഀ
                    x = +p[5];਍                    礀 㴀 ⬀瀀嬀㘀崀㬀ഀഀ
                }਍                猀瀀 ⬀㴀 瀀⸀猀栀椀昀琀⠀⤀ ⬀ 瀀㬀ഀഀ
            }਍            猀甀戀瀀愀琀栀猀⸀攀渀搀 㴀 猀瀀㬀ഀഀ
            point = istotal ? len : subpath ? subpaths : R.findDotsAtSegment(x, y, p[0], p[1], p[2], p[3], p[4], p[5], 1);਍            瀀漀椀渀琀⸀愀氀瀀栀愀 ☀☀ ⠀瀀漀椀渀琀 㴀 笀砀㨀 瀀漀椀渀琀⸀砀Ⰰ 礀㨀 瀀漀椀渀琀⸀礀Ⰰ 愀氀瀀栀愀㨀 瀀漀椀渀琀⸀愀氀瀀栀愀紀⤀㬀ഀഀ
            return point;਍        紀㬀ഀഀ
    };਍    瘀愀爀 最攀琀吀漀琀愀氀䰀攀渀最琀栀 㴀 最攀琀䰀攀渀最琀栀䘀愀挀琀漀爀礀⠀㄀⤀Ⰰഀഀ
        getPointAtLength = getLengthFactory(),਍        最攀琀匀甀戀瀀愀琀栀猀䄀琀䰀攀渀最琀栀 㴀 最攀琀䰀攀渀最琀栀䘀愀挀琀漀爀礀⠀　Ⰰ ㄀⤀㬀ഀഀ
    /*\਍     ⨀ 刀愀瀀栀愀攀氀⸀最攀琀吀漀琀愀氀䰀攀渀最琀栀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Returns length of the given path in pixels.਍     ⨀⨀ഀഀ
     > Parameters਍     ⨀⨀ഀഀ
     - path (string) SVG path string.਍     ⨀⨀ഀഀ
     = (number) length.਍    尀⨀⼀ഀഀ
    R.getTotalLength = getTotalLength;਍    ⼀⨀尀ഀഀ
     * Raphael.getPointAtLength਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 刀攀琀甀爀渀 挀漀漀爀搀椀渀愀琀攀猀 漀昀 琀栀攀 瀀漀椀渀琀 氀漀挀愀琀攀搀 愀琀 琀栀攀 最椀瘀攀渀 氀攀渀最琀栀 漀渀 琀栀攀 最椀瘀攀渀 瀀愀琀栀⸀ഀഀ
     **਍     㸀 倀愀爀愀洀攀琀攀爀猀ഀഀ
     **਍     ⴀ 瀀愀琀栀 ⠀猀琀爀椀渀最⤀ 匀嘀䜀 瀀愀琀栀 猀琀爀椀渀最ഀഀ
     - length (number)਍     ⨀⨀ഀഀ
     = (object) representation of the point:਍     漀 笀ഀഀ
     o     x: (number) x coordinate਍     漀     礀㨀 ⠀渀甀洀戀攀爀⤀ 礀 挀漀漀爀搀椀渀愀琀攀ഀഀ
     o     alpha: (number) angle of derivative਍     漀 紀ഀഀ
    \*/਍    刀⸀最攀琀倀漀椀渀琀䄀琀䰀攀渀最琀栀 㴀 最攀琀倀漀椀渀琀䄀琀䰀攀渀最琀栀㬀ഀഀ
    /*\਍     ⨀ 刀愀瀀栀愀攀氀⸀最攀琀匀甀戀瀀愀琀栀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Return subpath of a given path from given length to given length.਍     ⨀⨀ഀഀ
     > Parameters਍     ⨀⨀ഀഀ
     - path (string) SVG path string਍     ⴀ 昀爀漀洀 ⠀渀甀洀戀攀爀⤀ 瀀漀猀椀琀椀漀渀 漀昀 琀栀攀 猀琀愀爀琀 漀昀 琀栀攀 猀攀最洀攀渀琀ഀഀ
     - to (number) position of the end of the segment਍     ⨀⨀ഀഀ
     = (string) pathstring for the segment਍    尀⨀⼀ഀഀ
    R.getSubpath = function (path, from, to) {਍        椀昀 ⠀琀栀椀猀⸀最攀琀吀漀琀愀氀䰀攀渀最琀栀⠀瀀愀琀栀⤀ ⴀ 琀漀 㰀 ㄀攀ⴀ㘀⤀ 笀ഀഀ
            return getSubpathsAtLength(path, from).end;਍        紀ഀഀ
        var a = getSubpathsAtLength(path, to, 1);਍        爀攀琀甀爀渀 昀爀漀洀 㼀 最攀琀匀甀戀瀀愀琀栀猀䄀琀䰀攀渀最琀栀⠀愀Ⰰ 昀爀漀洀⤀⸀攀渀搀 㨀 愀㬀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * Element.getTotalLength਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 刀攀琀甀爀渀猀 氀攀渀最琀栀 漀昀 琀栀攀 瀀愀琀栀 椀渀 瀀椀砀攀氀猀⸀ 伀渀氀礀 眀漀爀欀猀 昀漀爀 攀氀攀洀攀渀琀 漀昀 ᰀ瀠愀琀栀ᴀ†琀礀瀀攀⸀ഀഀ
     = (number) length.਍    尀⨀⼀ഀഀ
    elproto.getTotalLength = function () {਍        瘀愀爀 瀀愀琀栀 㴀 琀栀椀猀⸀最攀琀倀愀琀栀⠀⤀㬀ഀഀ
        if (!path) {਍            爀攀琀甀爀渀㬀ഀഀ
        }਍ഀഀ
        if (this.node.getTotalLength) {਍            爀攀琀甀爀渀 琀栀椀猀⸀渀漀搀攀⸀最攀琀吀漀琀愀氀䰀攀渀最琀栀⠀⤀㬀ഀഀ
        }਍ഀഀ
        return getTotalLength(path);਍    紀㬀ഀഀ
    /*\਍     ⨀ 䔀氀攀洀攀渀琀⸀最攀琀倀漀椀渀琀䄀琀䰀攀渀最琀栀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Return coordinates of the point located at the given length on the given path. Only works for element of “path” type.਍     ⨀⨀ഀഀ
     > Parameters਍     ⨀⨀ഀഀ
     - length (number)਍     ⨀⨀ഀഀ
     = (object) representation of the point:਍     漀 笀ഀഀ
     o     x: (number) x coordinate਍     漀     礀㨀 ⠀渀甀洀戀攀爀⤀ 礀 挀漀漀爀搀椀渀愀琀攀ഀഀ
     o     alpha: (number) angle of derivative਍     漀 紀ഀഀ
    \*/਍    攀氀瀀爀漀琀漀⸀最攀琀倀漀椀渀琀䄀琀䰀攀渀最琀栀 㴀 昀甀渀挀琀椀漀渀 ⠀氀攀渀最琀栀⤀ 笀ഀഀ
        var path = this.getPath();਍        椀昀 ⠀℀瀀愀琀栀⤀ 笀ഀഀ
            return;਍        紀ഀഀ
਍        爀攀琀甀爀渀 最攀琀倀漀椀渀琀䄀琀䰀攀渀最琀栀⠀瀀愀琀栀Ⰰ 氀攀渀最琀栀⤀㬀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * Element.getPath਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 刀攀琀甀爀渀猀 瀀愀琀栀 漀昀 琀栀攀 攀氀攀洀攀渀琀⸀ 伀渀氀礀 眀漀爀欀猀 昀漀爀 攀氀攀洀攀渀琀猀 漀昀 ᰀ瀠愀琀栀ᴀ†琀礀瀀攀 愀渀搀 猀椀洀瀀氀攀 攀氀攀洀攀渀琀猀 氀椀欀攀 挀椀爀挀氀攀⸀ഀഀ
     = (object) path਍     ⨀⨀ഀഀ
    \*/਍    攀氀瀀爀漀琀漀⸀最攀琀倀愀琀栀 㴀 昀甀渀挀琀椀漀渀 ⠀⤀ 笀ഀഀ
        var path,਍            最攀琀倀愀琀栀 㴀 刀⸀开最攀琀倀愀琀栀嬀琀栀椀猀⸀琀礀瀀攀崀㬀ഀഀ
਍        椀昀 ⠀琀栀椀猀⸀琀礀瀀攀 㴀㴀 ∀琀攀砀琀∀ 簀簀 琀栀椀猀⸀琀礀瀀攀 㴀㴀 ∀猀攀琀∀⤀ 笀ഀഀ
            return;਍        紀ഀഀ
਍        椀昀 ⠀最攀琀倀愀琀栀⤀ 笀ഀഀ
            path = getPath(this);਍        紀ഀഀ
਍        爀攀琀甀爀渀 瀀愀琀栀㬀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * Element.getSubpath਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 刀攀琀甀爀渀 猀甀戀瀀愀琀栀 漀昀 愀 最椀瘀攀渀 攀氀攀洀攀渀琀 昀爀漀洀 最椀瘀攀渀 氀攀渀最琀栀 琀漀 最椀瘀攀渀 氀攀渀最琀栀⸀ 伀渀氀礀 眀漀爀欀猀 昀漀爀 攀氀攀洀攀渀琀 漀昀 ᰀ瀠愀琀栀ᴀ†琀礀瀀攀⸀ഀഀ
     **਍     㸀 倀愀爀愀洀攀琀攀爀猀ഀഀ
     **਍     ⴀ 昀爀漀洀 ⠀渀甀洀戀攀爀⤀ 瀀漀猀椀琀椀漀渀 漀昀 琀栀攀 猀琀愀爀琀 漀昀 琀栀攀 猀攀最洀攀渀琀ഀഀ
     - to (number) position of the end of the segment਍     ⨀⨀ഀഀ
     = (string) pathstring for the segment਍    尀⨀⼀ഀഀ
    elproto.getSubpath = function (from, to) {਍        瘀愀爀 瀀愀琀栀 㴀 琀栀椀猀⸀最攀琀倀愀琀栀⠀⤀㬀ഀഀ
        if (!path) {਍            爀攀琀甀爀渀㬀ഀഀ
        }਍ഀഀ
        return R.getSubpath(path, from, to);਍    紀㬀ഀഀ
    /*\਍     ⨀ 刀愀瀀栀愀攀氀⸀攀愀猀椀渀最开昀漀爀洀甀氀愀猀ഀഀ
     [ property ]਍     ⨀⨀ഀഀ
     * Object that contains easing formulas for animation. You could extend it with your own. By default it has following list of easing:਍     ⌀ 㰀甀氀㸀ഀഀ
     #     <li>“linear”</li>਍     ⌀     㰀氀椀㸀ᰀ☠氀琀㬀ᴀ†漀爀 ᰀ攠愀猀攀䤀渀ᴀ†漀爀 ᰀ攠愀猀攀ⴀ椀渀ᴀ㰠⼀氀椀㸀ഀഀ
     #     <li>“>” or “easeOut” or “ease-out”</li>਍     ⌀     㰀氀椀㸀ᰀ☠氀琀㬀㸀ᴀ†漀爀 ᰀ攠愀猀攀䤀渀伀甀琀ᴀ†漀爀 ᰀ攠愀猀攀ⴀ椀渀ⴀ漀甀琀ᴀ㰠⼀氀椀㸀ഀഀ
     #     <li>“backIn” or “back-in”</li>਍     ⌀     㰀氀椀㸀ᰀ戠愀挀欀伀甀琀ᴀ†漀爀 ᰀ戠愀挀欀ⴀ漀甀琀ᴀ㰠⼀氀椀㸀ഀഀ
     #     <li>“elastic”</li>਍     ⌀     㰀氀椀㸀ᰀ戠漀甀渀挀攀ᴀ㰠⼀氀椀㸀ഀഀ
     # </ul>਍     ⌀ 㰀瀀㸀匀攀攀 愀氀猀漀 㰀愀 栀爀攀昀㴀∀栀琀琀瀀㨀⼀⼀爀愀瀀栀愀攀氀樀猀⸀挀漀洀⼀攀愀猀椀渀最⸀栀琀洀氀∀㸀䔀愀猀椀渀最 搀攀洀漀㰀⼀愀㸀⸀㰀⼀瀀㸀ഀഀ
    \*/਍    瘀愀爀 攀昀 㴀 刀⸀攀愀猀椀渀最开昀漀爀洀甀氀愀猀 㴀 笀ഀഀ
        linear: function (n) {਍            爀攀琀甀爀渀 渀㬀ഀഀ
        },਍        ∀㰀∀㨀 昀甀渀挀琀椀漀渀 ⠀渀⤀ 笀ഀഀ
            return pow(n, 1.7);਍        紀Ⰰഀഀ
        ">": function (n) {਍            爀攀琀甀爀渀 瀀漀眀⠀渀Ⰰ ⸀㐀㠀⤀㬀ഀഀ
        },਍        ∀㰀㸀∀㨀 昀甀渀挀琀椀漀渀 ⠀渀⤀ 笀ഀഀ
            var q = .48 - n / 1.04,਍                儀 㴀 洀愀琀栀⸀猀焀爀琀⠀⸀㄀㜀㌀㐀 ⬀ 焀 ⨀ 焀⤀Ⰰഀഀ
                x = Q - q,਍                堀 㴀 瀀漀眀⠀愀戀猀⠀砀⤀Ⰰ ㄀ ⼀ ㌀⤀ ⨀ ⠀砀 㰀 　 㼀 ⴀ㄀ 㨀 ㄀⤀Ⰰഀഀ
                y = -Q - q,਍                夀 㴀 瀀漀眀⠀愀戀猀⠀礀⤀Ⰰ ㄀ ⼀ ㌀⤀ ⨀ ⠀礀 㰀 　 㼀 ⴀ㄀ 㨀 ㄀⤀Ⰰഀഀ
                t = X + Y + .5;਍            爀攀琀甀爀渀 ⠀㄀ ⴀ 琀⤀ ⨀ ㌀ ⨀ 琀 ⨀ 琀 ⬀ 琀 ⨀ 琀 ⨀ 琀㬀ഀഀ
        },਍        戀愀挀欀䤀渀㨀 昀甀渀挀琀椀漀渀 ⠀渀⤀ 笀ഀഀ
            var s = 1.70158;਍            爀攀琀甀爀渀 渀 ⨀ 渀 ⨀ ⠀⠀猀 ⬀ ㄀⤀ ⨀ 渀 ⴀ 猀⤀㬀ഀഀ
        },਍        戀愀挀欀伀甀琀㨀 昀甀渀挀琀椀漀渀 ⠀渀⤀ 笀ഀഀ
            n = n - 1;਍            瘀愀爀 猀 㴀 ㄀⸀㜀　㄀㔀㠀㬀ഀഀ
            return n * n * ((s + 1) * n + s) + 1;਍        紀Ⰰഀഀ
        elastic: function (n) {਍            椀昀 ⠀渀 㴀㴀 ℀℀渀⤀ 笀ഀഀ
                return n;਍            紀ഀഀ
            return pow(2, -10 * n) * math.sin((n - .075) * (2 * PI) / .3) + 1;਍        紀Ⰰഀഀ
        bounce: function (n) {਍            瘀愀爀 猀 㴀 㜀⸀㔀㘀㈀㔀Ⰰഀഀ
                p = 2.75,਍                氀㬀ഀഀ
            if (n < (1 / p)) {਍                氀 㴀 猀 ⨀ 渀 ⨀ 渀㬀ഀഀ
            } else {਍                椀昀 ⠀渀 㰀 ⠀㈀ ⼀ 瀀⤀⤀ 笀ഀഀ
                    n -= (1.5 / p);਍                    氀 㴀 猀 ⨀ 渀 ⨀ 渀 ⬀ ⸀㜀㔀㬀ഀഀ
                } else {਍                    椀昀 ⠀渀 㰀 ⠀㈀⸀㔀 ⼀ 瀀⤀⤀ 笀ഀഀ
                        n -= (2.25 / p);਍                        氀 㴀 猀 ⨀ 渀 ⨀ 渀 ⬀ ⸀㤀㌀㜀㔀㬀ഀഀ
                    } else {਍                        渀 ⴀ㴀 ⠀㈀⸀㘀㈀㔀 ⼀ 瀀⤀㬀ഀഀ
                        l = s * n * n + .984375;਍                    紀ഀഀ
                }਍            紀ഀഀ
            return l;਍        紀ഀഀ
    };਍    攀昀⸀攀愀猀攀䤀渀 㴀 攀昀嬀∀攀愀猀攀ⴀ椀渀∀崀 㴀 攀昀嬀∀㰀∀崀㬀ഀഀ
    ef.easeOut = ef["ease-out"] = ef[">"];਍    攀昀⸀攀愀猀攀䤀渀伀甀琀 㴀 攀昀嬀∀攀愀猀攀ⴀ椀渀ⴀ漀甀琀∀崀 㴀 攀昀嬀∀㰀㸀∀崀㬀ഀഀ
    ef["back-in"] = ef.backIn;਍    攀昀嬀∀戀愀挀欀ⴀ漀甀琀∀崀 㴀 攀昀⸀戀愀挀欀伀甀琀㬀ഀഀ
਍    瘀愀爀 愀渀椀洀愀琀椀漀渀䔀氀攀洀攀渀琀猀 㴀 嬀崀Ⰰഀഀ
        requestAnimFrame = window.requestAnimationFrame       ||਍                           眀椀渀搀漀眀⸀眀攀戀欀椀琀刀攀焀甀攀猀琀䄀渀椀洀愀琀椀漀渀䘀爀愀洀攀 簀簀ഀഀ
                           window.mozRequestAnimationFrame    ||਍                           眀椀渀搀漀眀⸀漀刀攀焀甀攀猀琀䄀渀椀洀愀琀椀漀渀䘀爀愀洀攀      簀簀ഀഀ
                           window.msRequestAnimationFrame     ||਍                           昀甀渀挀琀椀漀渀 ⠀挀愀氀氀戀愀挀欀⤀ 笀ഀഀ
                               setTimeout(callback, 16);਍                           紀Ⰰഀഀ
        animation = function () {਍            瘀愀爀 一漀眀 㴀 ⬀渀攀眀 䐀愀琀攀Ⰰഀഀ
                l = 0;਍            昀漀爀 ⠀㬀 氀 㰀 愀渀椀洀愀琀椀漀渀䔀氀攀洀攀渀琀猀⸀氀攀渀最琀栀㬀 氀⬀⬀⤀ 笀ഀഀ
                var e = animationElements[l];਍                椀昀 ⠀攀⸀攀氀⸀爀攀洀漀瘀攀搀 簀簀 攀⸀瀀愀甀猀攀搀⤀ 笀ഀഀ
                    continue;਍                紀ഀഀ
                var time = Now - e.start,਍                    洀猀 㴀 攀⸀洀猀Ⰰഀഀ
                    easing = e.easing,਍                    昀爀漀洀 㴀 攀⸀昀爀漀洀Ⰰഀഀ
                    diff = e.diff,਍                    琀漀 㴀 攀⸀琀漀Ⰰഀഀ
                    t = e.t,਍                    琀栀愀琀 㴀 攀⸀攀氀Ⰰഀഀ
                    set = {},਍                    渀漀眀Ⰰഀഀ
                    init = {},਍                    欀攀礀㬀ഀഀ
                if (e.initstatus) {਍                    琀椀洀攀 㴀 ⠀攀⸀椀渀椀琀猀琀愀琀甀猀 ⨀ 攀⸀愀渀椀洀⸀琀漀瀀 ⴀ 攀⸀瀀爀攀瘀⤀ ⼀ ⠀攀⸀瀀攀爀挀攀渀琀 ⴀ 攀⸀瀀爀攀瘀⤀ ⨀ 洀猀㬀ഀഀ
                    e.status = e.initstatus;਍                    搀攀氀攀琀攀 攀⸀椀渀椀琀猀琀愀琀甀猀㬀ഀഀ
                    e.stop && animationElements.splice(l--, 1);਍                紀 攀氀猀攀 笀ഀഀ
                    e.status = (e.prev + (e.percent - e.prev) * (time / ms)) / e.anim.top;਍                紀ഀഀ
                if (time < 0) {਍                    挀漀渀琀椀渀甀攀㬀ഀഀ
                }਍                椀昀 ⠀琀椀洀攀 㰀 洀猀⤀ 笀ഀഀ
                    var pos = easing(time / ms);਍                    昀漀爀 ⠀瘀愀爀 愀琀琀爀 椀渀 昀爀漀洀⤀ 椀昀 ⠀昀爀漀洀嬀栀愀猀崀⠀愀琀琀爀⤀⤀ 笀ഀഀ
                        switch (availableAnimAttrs[attr]) {਍                            挀愀猀攀 渀甀㨀ഀഀ
                                now = +from[attr] + pos * ms * diff[attr];਍                                戀爀攀愀欀㬀ഀഀ
                            case "colour":਍                                渀漀眀 㴀 ∀爀最戀⠀∀ ⬀ 嬀ഀഀ
                                    upto255(round(from[attr].r + pos * ms * diff[attr].r)),਍                                    甀瀀琀漀㈀㔀㔀⠀爀漀甀渀搀⠀昀爀漀洀嬀愀琀琀爀崀⸀最 ⬀ 瀀漀猀 ⨀ 洀猀 ⨀ 搀椀昀昀嬀愀琀琀爀崀⸀最⤀⤀Ⰰഀഀ
                                    upto255(round(from[attr].b + pos * ms * diff[attr].b))਍                                崀⸀樀漀椀渀⠀∀Ⰰ∀⤀ ⬀ ∀⤀∀㬀ഀഀ
                                break;਍                            挀愀猀攀 ∀瀀愀琀栀∀㨀ഀഀ
                                now = [];਍                                昀漀爀 ⠀瘀愀爀 椀 㴀 　Ⰰ 椀椀 㴀 昀爀漀洀嬀愀琀琀爀崀⸀氀攀渀最琀栀㬀 椀 㰀 椀椀㬀 椀⬀⬀⤀ 笀ഀഀ
                                    now[i] = [from[attr][i][0]];਍                                    昀漀爀 ⠀瘀愀爀 樀 㴀 ㄀Ⰰ 樀樀 㴀 昀爀漀洀嬀愀琀琀爀崀嬀椀崀⸀氀攀渀最琀栀㬀 樀 㰀 樀樀㬀 樀⬀⬀⤀ 笀ഀഀ
                                        now[i][j] = +from[attr][i][j] + pos * ms * diff[attr][i][j];਍                                    紀ഀഀ
                                    now[i] = now[i].join(S);਍                                紀ഀഀ
                                now = now.join(S);਍                                戀爀攀愀欀㬀ഀഀ
                            case "transform":਍                                椀昀 ⠀搀椀昀昀嬀愀琀琀爀崀⸀爀攀愀氀⤀ 笀ഀഀ
                                    now = [];਍                                    昀漀爀 ⠀椀 㴀 　Ⰰ 椀椀 㴀 昀爀漀洀嬀愀琀琀爀崀⸀氀攀渀最琀栀㬀 椀 㰀 椀椀㬀 椀⬀⬀⤀ 笀ഀഀ
                                        now[i] = [from[attr][i][0]];਍                                        昀漀爀 ⠀樀 㴀 ㄀Ⰰ 樀樀 㴀 昀爀漀洀嬀愀琀琀爀崀嬀椀崀⸀氀攀渀最琀栀㬀 樀 㰀 樀樀㬀 樀⬀⬀⤀ 笀ഀഀ
                                            now[i][j] = from[attr][i][j] + pos * ms * diff[attr][i][j];਍                                        紀ഀഀ
                                    }਍                                紀 攀氀猀攀 笀ഀഀ
                                    var get = function (i) {਍                                        爀攀琀甀爀渀 ⬀昀爀漀洀嬀愀琀琀爀崀嬀椀崀 ⬀ 瀀漀猀 ⨀ 洀猀 ⨀ 搀椀昀昀嬀愀琀琀爀崀嬀椀崀㬀ഀഀ
                                    };਍                                    ⼀⼀ 渀漀眀 㴀 嬀嬀∀爀∀Ⰰ 最攀琀⠀㈀⤀Ⰰ 　Ⰰ 　崀Ⰰ 嬀∀琀∀Ⰰ 最攀琀⠀㌀⤀Ⰰ 最攀琀⠀㐀⤀崀Ⰰ 嬀∀猀∀Ⰰ 最攀琀⠀　⤀Ⰰ 最攀琀⠀㄀⤀Ⰰ 　Ⰰ 　崀崀㬀ഀഀ
                                    now = [["m", get(0), get(1), get(2), get(3), get(4), get(5)]];਍                                紀ഀഀ
                                break;਍                            挀愀猀攀 ∀挀猀瘀∀㨀ഀഀ
                                if (attr == "clip-rect") {਍                                    渀漀眀 㴀 嬀崀㬀ഀഀ
                                    i = 4;਍                                    眀栀椀氀攀 ⠀椀ⴀⴀ⤀ 笀ഀഀ
                                        now[i] = +from[attr][i] + pos * ms * diff[attr][i];਍                                    紀ഀഀ
                                }਍                                戀爀攀愀欀㬀ഀഀ
                            default:਍                                瘀愀爀 昀爀漀洀㈀ 㴀 嬀崀嬀挀漀渀挀愀琀崀⠀昀爀漀洀嬀愀琀琀爀崀⤀㬀ഀഀ
                                now = [];਍                                椀 㴀 琀栀愀琀⸀瀀愀瀀攀爀⸀挀甀猀琀漀洀䄀琀琀爀椀戀甀琀攀猀嬀愀琀琀爀崀⸀氀攀渀最琀栀㬀ഀഀ
                                while (i--) {਍                                    渀漀眀嬀椀崀 㴀 ⬀昀爀漀洀㈀嬀椀崀 ⬀ 瀀漀猀 ⨀ 洀猀 ⨀ 搀椀昀昀嬀愀琀琀爀崀嬀椀崀㬀ഀഀ
                                }਍                                戀爀攀愀欀㬀ഀഀ
                        }਍                        猀攀琀嬀愀琀琀爀崀 㴀 渀漀眀㬀ഀഀ
                    }਍                    琀栀愀琀⸀愀琀琀爀⠀猀攀琀⤀㬀ഀഀ
                    (function (id, that, anim) {਍                        猀攀琀吀椀洀攀漀甀琀⠀昀甀渀挀琀椀漀渀 ⠀⤀ 笀ഀഀ
                            eve("raphael.anim.frame." + id, that, anim);਍                        紀⤀㬀ഀഀ
                    })(that.id, that, e.anim);਍                紀 攀氀猀攀 笀ഀഀ
                    (function(f, el, a) {਍                        猀攀琀吀椀洀攀漀甀琀⠀昀甀渀挀琀椀漀渀⠀⤀ 笀ഀഀ
                            eve("raphael.anim.frame." + el.id, el, a);਍                            攀瘀攀⠀∀爀愀瀀栀愀攀氀⸀愀渀椀洀⸀昀椀渀椀猀栀⸀∀ ⬀ 攀氀⸀椀搀Ⰰ 攀氀Ⰰ 愀⤀㬀ഀഀ
                            R.is(f, "function") && f.call(el);਍                        紀⤀㬀ഀഀ
                    })(e.callback, that, e.anim);਍                    琀栀愀琀⸀愀琀琀爀⠀琀漀⤀㬀ഀഀ
                    animationElements.splice(l--, 1);਍                    椀昀 ⠀攀⸀爀攀瀀攀愀琀 㸀 ㄀ ☀☀ ℀攀⸀渀攀砀琀⤀ 笀ഀഀ
                        for (key in to) if (to[has](key)) {਍                            椀渀椀琀嬀欀攀礀崀 㴀 攀⸀琀漀琀愀氀伀爀椀最椀渀嬀欀攀礀崀㬀ഀഀ
                        }਍                        攀⸀攀氀⸀愀琀琀爀⠀椀渀椀琀⤀㬀ഀഀ
                        runAnimation(e.anim, e.el, e.anim.percents[0], null, e.totalOrigin, e.repeat - 1);਍                    紀ഀഀ
                    if (e.next && !e.stop) {਍                        爀甀渀䄀渀椀洀愀琀椀漀渀⠀攀⸀愀渀椀洀Ⰰ 攀⸀攀氀Ⰰ 攀⸀渀攀砀琀Ⰰ 渀甀氀氀Ⰰ 攀⸀琀漀琀愀氀伀爀椀最椀渀Ⰰ 攀⸀爀攀瀀攀愀琀⤀㬀ഀഀ
                    }਍                紀ഀഀ
            }਍            愀渀椀洀愀琀椀漀渀䔀氀攀洀攀渀琀猀⸀氀攀渀最琀栀 ☀☀ 爀攀焀甀攀猀琀䄀渀椀洀䘀爀愀洀攀⠀愀渀椀洀愀琀椀漀渀⤀㬀ഀഀ
        },਍        甀瀀琀漀㈀㔀㔀 㴀 昀甀渀挀琀椀漀渀 ⠀挀漀氀漀爀⤀ 笀ഀഀ
            return color > 255 ? 255 : color < 0 ? 0 : color;਍        紀㬀ഀഀ
    /*\਍     ⨀ 䔀氀攀洀攀渀琀⸀愀渀椀洀愀琀攀圀椀琀栀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Acts similar to @Element.animate, but ensure that given animation runs in sync with another given element.਍     ⨀⨀ഀഀ
     > Parameters਍     ⨀⨀ഀഀ
     - el (object) element to sync with਍     ⴀ 愀渀椀洀 ⠀漀戀樀攀挀琀⤀ 愀渀椀洀愀琀椀漀渀 琀漀 猀礀渀挀 眀椀琀栀ഀഀ
     - params (object) #optional final attributes for the element, see also @Element.attr਍     ⴀ 洀猀 ⠀渀甀洀戀攀爀⤀ ⌀漀瀀琀椀漀渀愀氀 渀甀洀戀攀爀 漀昀 洀椀氀氀椀猀攀挀漀渀搀猀 昀漀爀 愀渀椀洀愀琀椀漀渀 琀漀 爀甀渀ഀഀ
     - easing (string) #optional easing type. Accept on of @Raphael.easing_formulas or CSS format: `cubic&#x2010;bezier(XX,&#160;XX,&#160;XX,&#160;XX)`਍     ⴀ 挀愀氀氀戀愀挀欀 ⠀昀甀渀挀琀椀漀渀⤀ ⌀漀瀀琀椀漀渀愀氀 挀愀氀氀戀愀挀欀 昀甀渀挀琀椀漀渀⸀ 圀椀氀氀 戀攀 挀愀氀氀攀搀 愀琀 琀栀攀 攀渀搀 漀昀 愀渀椀洀愀琀椀漀渀⸀ഀഀ
     * or਍     ⴀ 攀氀攀洀攀渀琀 ⠀漀戀樀攀挀琀⤀ 攀氀攀洀攀渀琀 琀漀 猀礀渀挀 眀椀琀栀ഀഀ
     - anim (object) animation to sync with਍     ⴀ 愀渀椀洀愀琀椀漀渀 ⠀漀戀樀攀挀琀⤀ ⌀漀瀀琀椀漀渀愀氀 愀渀椀洀愀琀椀漀渀 漀戀樀攀挀琀Ⰰ 猀攀攀 䀀刀愀瀀栀愀攀氀⸀愀渀椀洀愀琀椀漀渀ഀഀ
     **਍     㴀 ⠀漀戀樀攀挀琀⤀ 漀爀椀最椀渀愀氀 攀氀攀洀攀渀琀ഀഀ
    \*/਍    攀氀瀀爀漀琀漀⸀愀渀椀洀愀琀攀圀椀琀栀 㴀 昀甀渀挀琀椀漀渀 ⠀攀氀Ⰰ 愀渀椀洀Ⰰ 瀀愀爀愀洀猀Ⰰ 洀猀Ⰰ 攀愀猀椀渀最Ⰰ 挀愀氀氀戀愀挀欀⤀ 笀ഀഀ
        var element = this;਍        椀昀 ⠀攀氀攀洀攀渀琀⸀爀攀洀漀瘀攀搀⤀ 笀ഀഀ
            callback && callback.call(element);਍            爀攀琀甀爀渀 攀氀攀洀攀渀琀㬀ഀഀ
        }਍        瘀愀爀 愀 㴀 瀀愀爀愀洀猀 椀渀猀琀愀渀挀攀漀昀 䄀渀椀洀愀琀椀漀渀 㼀 瀀愀爀愀洀猀 㨀 刀⸀愀渀椀洀愀琀椀漀渀⠀瀀愀爀愀洀猀Ⰰ 洀猀Ⰰ 攀愀猀椀渀最Ⰰ 挀愀氀氀戀愀挀欀⤀Ⰰഀഀ
            x, y;਍        爀甀渀䄀渀椀洀愀琀椀漀渀⠀愀Ⰰ 攀氀攀洀攀渀琀Ⰰ 愀⸀瀀攀爀挀攀渀琀猀嬀　崀Ⰰ 渀甀氀氀Ⰰ 攀氀攀洀攀渀琀⸀愀琀琀爀⠀⤀⤀㬀ഀഀ
        for (var i = 0, ii = animationElements.length; i < ii; i++) {਍            椀昀 ⠀愀渀椀洀愀琀椀漀渀䔀氀攀洀攀渀琀猀嬀椀崀⸀愀渀椀洀 㴀㴀 愀渀椀洀 ☀☀ 愀渀椀洀愀琀椀漀渀䔀氀攀洀攀渀琀猀嬀椀崀⸀攀氀 㴀㴀 攀氀⤀ 笀ഀഀ
                animationElements[ii - 1].start = animationElements[i].start;਍                戀爀攀愀欀㬀ഀഀ
            }਍        紀ഀഀ
        return element;਍        ⼀⼀ഀഀ
        //਍        ⼀⼀ 瘀愀爀 愀 㴀 瀀愀爀愀洀猀 㼀 刀⸀愀渀椀洀愀琀椀漀渀⠀瀀愀爀愀洀猀Ⰰ 洀猀Ⰰ 攀愀猀椀渀最Ⰰ 挀愀氀氀戀愀挀欀⤀ 㨀 愀渀椀洀Ⰰഀഀ
        //     status = element.status(anim);਍        ⼀⼀ 爀攀琀甀爀渀 琀栀椀猀⸀愀渀椀洀愀琀攀⠀愀⤀⸀猀琀愀琀甀猀⠀愀Ⰰ 猀琀愀琀甀猀 ⨀ 愀渀椀洀⸀洀猀 ⼀ 愀⸀洀猀⤀㬀ഀഀ
    };਍    昀甀渀挀琀椀漀渀 䌀甀戀椀挀䈀攀稀椀攀爀䄀琀吀椀洀攀⠀琀Ⰰ 瀀㄀砀Ⰰ 瀀㄀礀Ⰰ 瀀㈀砀Ⰰ 瀀㈀礀Ⰰ 搀甀爀愀琀椀漀渀⤀ 笀ഀഀ
        var cx = 3 * p1x,਍            戀砀 㴀 ㌀ ⨀ ⠀瀀㈀砀 ⴀ 瀀㄀砀⤀ ⴀ 挀砀Ⰰഀഀ
            ax = 1 - cx - bx,਍            挀礀 㴀 ㌀ ⨀ 瀀㄀礀Ⰰഀഀ
            by = 3 * (p2y - p1y) - cy,਍            愀礀 㴀 ㄀ ⴀ 挀礀 ⴀ 戀礀㬀ഀഀ
        function sampleCurveX(t) {਍            爀攀琀甀爀渀 ⠀⠀愀砀 ⨀ 琀 ⬀ 戀砀⤀ ⨀ 琀 ⬀ 挀砀⤀ ⨀ 琀㬀ഀഀ
        }਍        昀甀渀挀琀椀漀渀 猀漀氀瘀攀⠀砀Ⰰ 攀瀀猀椀氀漀渀⤀ 笀ഀഀ
            var t = solveCurveX(x, epsilon);਍            爀攀琀甀爀渀 ⠀⠀愀礀 ⨀ 琀 ⬀ 戀礀⤀ ⨀ 琀 ⬀ 挀礀⤀ ⨀ 琀㬀ഀഀ
        }਍        昀甀渀挀琀椀漀渀 猀漀氀瘀攀䌀甀爀瘀攀堀⠀砀Ⰰ 攀瀀猀椀氀漀渀⤀ 笀ഀഀ
            var t0, t1, t2, x2, d2, i;਍            昀漀爀⠀琀㈀ 㴀 砀Ⰰ 椀 㴀 　㬀 椀 㰀 㠀㬀 椀⬀⬀⤀ 笀ഀഀ
                x2 = sampleCurveX(t2) - x;਍                椀昀 ⠀愀戀猀⠀砀㈀⤀ 㰀 攀瀀猀椀氀漀渀⤀ 笀ഀഀ
                    return t2;਍                紀ഀഀ
                d2 = (3 * ax * t2 + 2 * bx) * t2 + cx;਍                椀昀 ⠀愀戀猀⠀搀㈀⤀ 㰀 ㄀攀ⴀ㘀⤀ 笀ഀഀ
                    break;਍                紀ഀഀ
                t2 = t2 - x2 / d2;਍            紀ഀഀ
            t0 = 0;਍            琀㄀ 㴀 ㄀㬀ഀഀ
            t2 = x;਍            椀昀 ⠀琀㈀ 㰀 琀　⤀ 笀ഀഀ
                return t0;਍            紀ഀഀ
            if (t2 > t1) {਍                爀攀琀甀爀渀 琀㄀㬀ഀഀ
            }਍            眀栀椀氀攀 ⠀琀　 㰀 琀㄀⤀ 笀ഀഀ
                x2 = sampleCurveX(t2);਍                椀昀 ⠀愀戀猀⠀砀㈀ ⴀ 砀⤀ 㰀 攀瀀猀椀氀漀渀⤀ 笀ഀഀ
                    return t2;਍                紀ഀഀ
                if (x > x2) {਍                    琀　 㴀 琀㈀㬀ഀഀ
                } else {਍                    琀㄀ 㴀 琀㈀㬀ഀഀ
                }਍                琀㈀ 㴀 ⠀琀㄀ ⴀ 琀　⤀ ⼀ ㈀ ⬀ 琀　㬀ഀഀ
            }਍            爀攀琀甀爀渀 琀㈀㬀ഀഀ
        }਍        爀攀琀甀爀渀 猀漀氀瘀攀⠀琀Ⰰ ㄀ ⼀ ⠀㈀　　 ⨀ 搀甀爀愀琀椀漀渀⤀⤀㬀ഀഀ
    }਍    攀氀瀀爀漀琀漀⸀漀渀䄀渀椀洀愀琀椀漀渀 㴀 昀甀渀挀琀椀漀渀 ⠀昀⤀ 笀ഀഀ
        f ? eve.on("raphael.anim.frame." + this.id, f) : eve.unbind("raphael.anim.frame." + this.id);਍        爀攀琀甀爀渀 琀栀椀猀㬀ഀഀ
    };਍    昀甀渀挀琀椀漀渀 䄀渀椀洀愀琀椀漀渀⠀愀渀椀洀Ⰰ 洀猀⤀ 笀ഀഀ
        var percents = [],਍            渀攀眀䄀渀椀洀 㴀 笀紀㬀ഀഀ
        this.ms = ms;਍        琀栀椀猀⸀琀椀洀攀猀 㴀 ㄀㬀ഀഀ
        if (anim) {਍            昀漀爀 ⠀瘀愀爀 愀琀琀爀 椀渀 愀渀椀洀⤀ 椀昀 ⠀愀渀椀洀嬀栀愀猀崀⠀愀琀琀爀⤀⤀ 笀ഀഀ
                newAnim[toFloat(attr)] = anim[attr];਍                瀀攀爀挀攀渀琀猀⸀瀀甀猀栀⠀琀漀䘀氀漀愀琀⠀愀琀琀爀⤀⤀㬀ഀഀ
            }਍            瀀攀爀挀攀渀琀猀⸀猀漀爀琀⠀猀漀爀琀䈀礀一甀洀戀攀爀⤀㬀ഀഀ
        }਍        琀栀椀猀⸀愀渀椀洀 㴀 渀攀眀䄀渀椀洀㬀ഀഀ
        this.top = percents[percents.length - 1];਍        琀栀椀猀⸀瀀攀爀挀攀渀琀猀 㴀 瀀攀爀挀攀渀琀猀㬀ഀഀ
    }਍    ⼀⨀尀ഀഀ
     * Animation.delay਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 䌀爀攀愀琀攀猀 愀 挀漀瀀礀 漀昀 攀砀椀猀琀椀渀最 愀渀椀洀愀琀椀漀渀 漀戀樀攀挀琀 眀椀琀栀 最椀瘀攀渀 搀攀氀愀礀⸀ഀഀ
     **਍     㸀 倀愀爀愀洀攀琀攀爀猀ഀഀ
     **਍     ⴀ 搀攀氀愀礀 ⠀渀甀洀戀攀爀⤀ 渀甀洀戀攀爀 漀昀 洀猀 琀漀 瀀愀猀猀 戀攀琀眀攀攀渀 愀渀椀洀愀琀椀漀渀 猀琀愀爀琀 愀渀搀 愀挀琀甀愀氀 愀渀椀洀愀琀椀漀渀ഀഀ
     **਍     㴀 ⠀漀戀樀攀挀琀⤀ 渀攀眀 愀氀琀攀爀攀搀 䄀渀椀洀愀琀椀漀渀 漀戀樀攀挀琀ഀഀ
     | var anim = Raphael.animation({cx: 10, cy: 20}, 2e3);਍     簀 挀椀爀挀氀攀㄀⸀愀渀椀洀愀琀攀⠀愀渀椀洀⤀㬀 ⼀⼀ 爀甀渀 琀栀攀 最椀瘀攀渀 愀渀椀洀愀琀椀漀渀 椀洀洀攀搀椀愀琀攀氀礀ഀഀ
     | circle2.animate(anim.delay(500)); // run the given animation after 500 ms਍    尀⨀⼀ഀഀ
    Animation.prototype.delay = function (delay) {਍        瘀愀爀 愀 㴀 渀攀眀 䄀渀椀洀愀琀椀漀渀⠀琀栀椀猀⸀愀渀椀洀Ⰰ 琀栀椀猀⸀洀猀⤀㬀ഀഀ
        a.times = this.times;਍        愀⸀搀攀氀 㴀 ⬀搀攀氀愀礀 簀簀 　㬀ഀഀ
        return a;਍    紀㬀ഀഀ
    /*\਍     ⨀ 䄀渀椀洀愀琀椀漀渀⸀爀攀瀀攀愀琀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Creates a copy of existing animation object with given repetition.਍     ⨀⨀ഀഀ
     > Parameters਍     ⨀⨀ഀഀ
     - repeat (number) number iterations of animation. For infinite animation pass `Infinity`਍     ⨀⨀ഀഀ
     = (object) new altered Animation object਍    尀⨀⼀ഀഀ
    Animation.prototype.repeat = function (times) {਍        瘀愀爀 愀 㴀 渀攀眀 䄀渀椀洀愀琀椀漀渀⠀琀栀椀猀⸀愀渀椀洀Ⰰ 琀栀椀猀⸀洀猀⤀㬀ഀഀ
        a.del = this.del;਍        愀⸀琀椀洀攀猀 㴀 洀愀琀栀⸀昀氀漀漀爀⠀洀洀愀砀⠀琀椀洀攀猀Ⰰ 　⤀⤀ 簀簀 ㄀㬀ഀഀ
        return a;਍    紀㬀ഀഀ
    function runAnimation(anim, element, percent, status, totalOrigin, times) {਍        瀀攀爀挀攀渀琀 㴀 琀漀䘀氀漀愀琀⠀瀀攀爀挀攀渀琀⤀㬀ഀഀ
        var params,਍            椀猀䤀渀䄀渀椀洀Ⰰഀഀ
            isInAnimSet,਍            瀀攀爀挀攀渀琀猀 㴀 嬀崀Ⰰഀഀ
            next,਍            瀀爀攀瘀Ⰰഀഀ
            timestamp,਍            洀猀 㴀 愀渀椀洀⸀洀猀Ⰰഀഀ
            from = {},਍            琀漀 㴀 笀紀Ⰰഀഀ
            diff = {};਍        椀昀 ⠀猀琀愀琀甀猀⤀ 笀ഀഀ
            for (i = 0, ii = animationElements.length; i < ii; i++) {਍                瘀愀爀 攀 㴀 愀渀椀洀愀琀椀漀渀䔀氀攀洀攀渀琀猀嬀椀崀㬀ഀഀ
                if (e.el.id == element.id && e.anim == anim) {਍                    椀昀 ⠀攀⸀瀀攀爀挀攀渀琀 ℀㴀 瀀攀爀挀攀渀琀⤀ 笀ഀഀ
                        animationElements.splice(i, 1);਍                        椀猀䤀渀䄀渀椀洀匀攀琀 㴀 ㄀㬀ഀഀ
                    } else {਍                        椀猀䤀渀䄀渀椀洀 㴀 攀㬀ഀഀ
                    }਍                    攀氀攀洀攀渀琀⸀愀琀琀爀⠀攀⸀琀漀琀愀氀伀爀椀最椀渀⤀㬀ഀഀ
                    break;਍                紀ഀഀ
            }਍        紀 攀氀猀攀 笀ഀഀ
            status = +to; // NaN਍        紀ഀഀ
        for (var i = 0, ii = anim.percents.length; i < ii; i++) {਍            椀昀 ⠀愀渀椀洀⸀瀀攀爀挀攀渀琀猀嬀椀崀 㴀㴀 瀀攀爀挀攀渀琀 簀簀 愀渀椀洀⸀瀀攀爀挀攀渀琀猀嬀椀崀 㸀 猀琀愀琀甀猀 ⨀ 愀渀椀洀⸀琀漀瀀⤀ 笀ഀഀ
                percent = anim.percents[i];਍                瀀爀攀瘀 㴀 愀渀椀洀⸀瀀攀爀挀攀渀琀猀嬀椀 ⴀ ㄀崀 簀簀 　㬀ഀഀ
                ms = ms / anim.top * (percent - prev);਍                渀攀砀琀 㴀 愀渀椀洀⸀瀀攀爀挀攀渀琀猀嬀椀 ⬀ ㄀崀㬀ഀഀ
                params = anim.anim[percent];਍                戀爀攀愀欀㬀ഀഀ
            } else if (status) {਍                攀氀攀洀攀渀琀⸀愀琀琀爀⠀愀渀椀洀⸀愀渀椀洀嬀愀渀椀洀⸀瀀攀爀挀攀渀琀猀嬀椀崀崀⤀㬀ഀഀ
            }਍        紀ഀഀ
        if (!params) {਍            爀攀琀甀爀渀㬀ഀഀ
        }਍        椀昀 ⠀℀椀猀䤀渀䄀渀椀洀⤀ 笀ഀഀ
            for (var attr in params) if (params[has](attr)) {਍                椀昀 ⠀愀瘀愀椀氀愀戀氀攀䄀渀椀洀䄀琀琀爀猀嬀栀愀猀崀⠀愀琀琀爀⤀ 簀簀 攀氀攀洀攀渀琀⸀瀀愀瀀攀爀⸀挀甀猀琀漀洀䄀琀琀爀椀戀甀琀攀猀嬀栀愀猀崀⠀愀琀琀爀⤀⤀ 笀ഀഀ
                    from[attr] = element.attr(attr);਍                    ⠀昀爀漀洀嬀愀琀琀爀崀 㴀㴀 渀甀氀氀⤀ ☀☀ ⠀昀爀漀洀嬀愀琀琀爀崀 㴀 愀瘀愀椀氀愀戀氀攀䄀琀琀爀猀嬀愀琀琀爀崀⤀㬀ഀഀ
                    to[attr] = params[attr];਍                    猀眀椀琀挀栀 ⠀愀瘀愀椀氀愀戀氀攀䄀渀椀洀䄀琀琀爀猀嬀愀琀琀爀崀⤀ 笀ഀഀ
                        case nu:਍                            搀椀昀昀嬀愀琀琀爀崀 㴀 ⠀琀漀嬀愀琀琀爀崀 ⴀ 昀爀漀洀嬀愀琀琀爀崀⤀ ⼀ 洀猀㬀ഀഀ
                            break;਍                        挀愀猀攀 ∀挀漀氀漀甀爀∀㨀ഀഀ
                            from[attr] = R.getRGB(from[attr]);਍                            瘀愀爀 琀漀䌀漀氀漀甀爀 㴀 刀⸀最攀琀刀䜀䈀⠀琀漀嬀愀琀琀爀崀⤀㬀ഀഀ
                            diff[attr] = {਍                                爀㨀 ⠀琀漀䌀漀氀漀甀爀⸀爀 ⴀ 昀爀漀洀嬀愀琀琀爀崀⸀爀⤀ ⼀ 洀猀Ⰰഀഀ
                                g: (toColour.g - from[attr].g) / ms,਍                                戀㨀 ⠀琀漀䌀漀氀漀甀爀⸀戀 ⴀ 昀爀漀洀嬀愀琀琀爀崀⸀戀⤀ ⼀ 洀猀ഀഀ
                            };਍                            戀爀攀愀欀㬀ഀഀ
                        case "path":਍                            瘀愀爀 瀀愀琀栀攀猀 㴀 瀀愀琀栀㈀挀甀爀瘀攀⠀昀爀漀洀嬀愀琀琀爀崀Ⰰ 琀漀嬀愀琀琀爀崀⤀Ⰰഀഀ
                                toPath = pathes[1];਍                            昀爀漀洀嬀愀琀琀爀崀 㴀 瀀愀琀栀攀猀嬀　崀㬀ഀഀ
                            diff[attr] = [];਍                            昀漀爀 ⠀椀 㴀 　Ⰰ 椀椀 㴀 昀爀漀洀嬀愀琀琀爀崀⸀氀攀渀最琀栀㬀 椀 㰀 椀椀㬀 椀⬀⬀⤀ 笀ഀഀ
                                diff[attr][i] = [0];਍                                昀漀爀 ⠀瘀愀爀 樀 㴀 ㄀Ⰰ 樀樀 㴀 昀爀漀洀嬀愀琀琀爀崀嬀椀崀⸀氀攀渀最琀栀㬀 樀 㰀 樀樀㬀 樀⬀⬀⤀ 笀ഀഀ
                                    diff[attr][i][j] = (toPath[i][j] - from[attr][i][j]) / ms;਍                                紀ഀഀ
                            }਍                            戀爀攀愀欀㬀ഀഀ
                        case "transform":਍                            瘀愀爀 开 㴀 攀氀攀洀攀渀琀⸀开Ⰰഀഀ
                                eq = equaliseTransform(_[attr], to[attr]);਍                            椀昀 ⠀攀焀⤀ 笀ഀഀ
                                from[attr] = eq.from;਍                                琀漀嬀愀琀琀爀崀 㴀 攀焀⸀琀漀㬀ഀഀ
                                diff[attr] = [];਍                                搀椀昀昀嬀愀琀琀爀崀⸀爀攀愀氀 㴀 琀爀甀攀㬀ഀഀ
                                for (i = 0, ii = from[attr].length; i < ii; i++) {਍                                    搀椀昀昀嬀愀琀琀爀崀嬀椀崀 㴀 嬀昀爀漀洀嬀愀琀琀爀崀嬀椀崀嬀　崀崀㬀ഀഀ
                                    for (j = 1, jj = from[attr][i].length; j < jj; j++) {਍                                        搀椀昀昀嬀愀琀琀爀崀嬀椀崀嬀樀崀 㴀 ⠀琀漀嬀愀琀琀爀崀嬀椀崀嬀樀崀 ⴀ 昀爀漀洀嬀愀琀琀爀崀嬀椀崀嬀樀崀⤀ ⼀ 洀猀㬀ഀഀ
                                    }਍                                紀ഀഀ
                            } else {਍                                瘀愀爀 洀 㴀 ⠀攀氀攀洀攀渀琀⸀洀愀琀爀椀砀 簀簀 渀攀眀 䴀愀琀爀椀砀⤀Ⰰഀഀ
                                    to2 = {਍                                        开㨀 笀琀爀愀渀猀昀漀爀洀㨀 开⸀琀爀愀渀猀昀漀爀洀紀Ⰰഀഀ
                                        getBBox: function () {਍                                            爀攀琀甀爀渀 攀氀攀洀攀渀琀⸀最攀琀䈀䈀漀砀⠀㄀⤀㬀ഀഀ
                                        }਍                                    紀㬀ഀഀ
                                from[attr] = [਍                                    洀⸀愀Ⰰഀഀ
                                    m.b,਍                                    洀⸀挀Ⰰഀഀ
                                    m.d,਍                                    洀⸀攀Ⰰഀഀ
                                    m.f਍                                崀㬀ഀഀ
                                extractTransform(to2, to[attr]);਍                                琀漀嬀愀琀琀爀崀 㴀 琀漀㈀⸀开⸀琀爀愀渀猀昀漀爀洀㬀ഀഀ
                                diff[attr] = [਍                                    ⠀琀漀㈀⸀洀愀琀爀椀砀⸀愀 ⴀ 洀⸀愀⤀ ⼀ 洀猀Ⰰഀഀ
                                    (to2.matrix.b - m.b) / ms,਍                                    ⠀琀漀㈀⸀洀愀琀爀椀砀⸀挀 ⴀ 洀⸀挀⤀ ⼀ 洀猀Ⰰഀഀ
                                    (to2.matrix.d - m.d) / ms,਍                                    ⠀琀漀㈀⸀洀愀琀爀椀砀⸀攀 ⴀ 洀⸀攀⤀ ⼀ 洀猀Ⰰഀഀ
                                    (to2.matrix.f - m.f) / ms਍                                崀㬀ഀഀ
                                // from[attr] = [_.sx, _.sy, _.deg, _.dx, _.dy];਍                                ⼀⼀ 瘀愀爀 琀漀㈀ 㴀 笀开㨀笀紀Ⰰ 最攀琀䈀䈀漀砀㨀 昀甀渀挀琀椀漀渀 ⠀⤀ 笀 爀攀琀甀爀渀 攀氀攀洀攀渀琀⸀最攀琀䈀䈀漀砀⠀⤀㬀 紀紀㬀ഀഀ
                                // extractTransform(to2, to[attr]);਍                                ⼀⼀ 搀椀昀昀嬀愀琀琀爀崀 㴀 嬀ഀഀ
                                //     (to2._.sx - _.sx) / ms,਍                                ⼀⼀     ⠀琀漀㈀⸀开⸀猀礀 ⴀ 开⸀猀礀⤀ ⼀ 洀猀Ⰰഀഀ
                                //     (to2._.deg - _.deg) / ms,਍                                ⼀⼀     ⠀琀漀㈀⸀开⸀搀砀 ⴀ 开⸀搀砀⤀ ⼀ 洀猀Ⰰഀഀ
                                //     (to2._.dy - _.dy) / ms਍                                ⼀⼀ 崀㬀ഀഀ
                            }਍                            戀爀攀愀欀㬀ഀഀ
                        case "csv":਍                            瘀愀爀 瘀愀氀甀攀猀 㴀 匀琀爀⠀瀀愀爀愀洀猀嬀愀琀琀爀崀⤀嬀猀瀀氀椀琀崀⠀猀攀瀀愀爀愀琀漀爀⤀Ⰰഀഀ
                                from2 = Str(from[attr])[split](separator);਍                            椀昀 ⠀愀琀琀爀 㴀㴀 ∀挀氀椀瀀ⴀ爀攀挀琀∀⤀ 笀ഀഀ
                                from[attr] = from2;਍                                搀椀昀昀嬀愀琀琀爀崀 㴀 嬀崀㬀ഀഀ
                                i = from2.length;਍                                眀栀椀氀攀 ⠀椀ⴀⴀ⤀ 笀ഀഀ
                                    diff[attr][i] = (values[i] - from[attr][i]) / ms;਍                                紀ഀഀ
                            }਍                            琀漀嬀愀琀琀爀崀 㴀 瘀愀氀甀攀猀㬀ഀഀ
                            break;਍                        搀攀昀愀甀氀琀㨀ഀഀ
                            values = [][concat](params[attr]);਍                            昀爀漀洀㈀ 㴀 嬀崀嬀挀漀渀挀愀琀崀⠀昀爀漀洀嬀愀琀琀爀崀⤀㬀ഀഀ
                            diff[attr] = [];਍                            椀 㴀 攀氀攀洀攀渀琀⸀瀀愀瀀攀爀⸀挀甀猀琀漀洀䄀琀琀爀椀戀甀琀攀猀嬀愀琀琀爀崀⸀氀攀渀最琀栀㬀ഀഀ
                            while (i--) {਍                                搀椀昀昀嬀愀琀琀爀崀嬀椀崀 㴀 ⠀⠀瘀愀氀甀攀猀嬀椀崀 簀簀 　⤀ ⴀ ⠀昀爀漀洀㈀嬀椀崀 簀簀 　⤀⤀ ⼀ 洀猀㬀ഀഀ
                            }਍                            戀爀攀愀欀㬀ഀഀ
                    }਍                紀ഀഀ
            }਍            瘀愀爀 攀愀猀椀渀最 㴀 瀀愀爀愀洀猀⸀攀愀猀椀渀最Ⰰഀഀ
                easyeasy = R.easing_formulas[easing];਍            椀昀 ⠀℀攀愀猀礀攀愀猀礀⤀ 笀ഀഀ
                easyeasy = Str(easing).match(bezierrg);਍                椀昀 ⠀攀愀猀礀攀愀猀礀 ☀☀ 攀愀猀礀攀愀猀礀⸀氀攀渀最琀栀 㴀㴀 㔀⤀ 笀ഀഀ
                    var curve = easyeasy;਍                    攀愀猀礀攀愀猀礀 㴀 昀甀渀挀琀椀漀渀 ⠀琀⤀ 笀ഀഀ
                        return CubicBezierAtTime(t, +curve[1], +curve[2], +curve[3], +curve[4], ms);਍                    紀㬀ഀഀ
                } else {਍                    攀愀猀礀攀愀猀礀 㴀 瀀椀瀀攀㬀ഀഀ
                }਍            紀ഀഀ
            timestamp = params.start || anim.start || +new Date;਍            攀 㴀 笀ഀഀ
                anim: anim,਍                瀀攀爀挀攀渀琀㨀 瀀攀爀挀攀渀琀Ⰰഀഀ
                timestamp: timestamp,਍                猀琀愀爀琀㨀 琀椀洀攀猀琀愀洀瀀 ⬀ ⠀愀渀椀洀⸀搀攀氀 簀簀 　⤀Ⰰഀഀ
                status: 0,਍                椀渀椀琀猀琀愀琀甀猀㨀 猀琀愀琀甀猀 簀簀 　Ⰰഀഀ
                stop: false,਍                洀猀㨀 洀猀Ⰰഀഀ
                easing: easyeasy,਍                昀爀漀洀㨀 昀爀漀洀Ⰰഀഀ
                diff: diff,਍                琀漀㨀 琀漀Ⰰഀഀ
                el: element,਍                挀愀氀氀戀愀挀欀㨀 瀀愀爀愀洀猀⸀挀愀氀氀戀愀挀欀Ⰰഀഀ
                prev: prev,਍                渀攀砀琀㨀 渀攀砀琀Ⰰഀഀ
                repeat: times || anim.times,਍                漀爀椀最椀渀㨀 攀氀攀洀攀渀琀⸀愀琀琀爀⠀⤀Ⰰഀഀ
                totalOrigin: totalOrigin਍            紀㬀ഀഀ
            animationElements.push(e);਍            椀昀 ⠀猀琀愀琀甀猀 ☀☀ ℀椀猀䤀渀䄀渀椀洀 ☀☀ ℀椀猀䤀渀䄀渀椀洀匀攀琀⤀ 笀ഀഀ
                e.stop = true;਍                攀⸀猀琀愀爀琀 㴀 渀攀眀 䐀愀琀攀 ⴀ 洀猀 ⨀ 猀琀愀琀甀猀㬀ഀഀ
                if (animationElements.length == 1) {਍                    爀攀琀甀爀渀 愀渀椀洀愀琀椀漀渀⠀⤀㬀ഀഀ
                }਍            紀ഀഀ
            if (isInAnimSet) {਍                攀⸀猀琀愀爀琀 㴀 渀攀眀 䐀愀琀攀 ⴀ 攀⸀洀猀 ⨀ 猀琀愀琀甀猀㬀ഀഀ
            }਍            愀渀椀洀愀琀椀漀渀䔀氀攀洀攀渀琀猀⸀氀攀渀最琀栀 㴀㴀 ㄀ ☀☀ 爀攀焀甀攀猀琀䄀渀椀洀䘀爀愀洀攀⠀愀渀椀洀愀琀椀漀渀⤀㬀ഀഀ
        } else {਍            椀猀䤀渀䄀渀椀洀⸀椀渀椀琀猀琀愀琀甀猀 㴀 猀琀愀琀甀猀㬀ഀഀ
            isInAnim.start = new Date - isInAnim.ms * status;਍        紀ഀഀ
        eve("raphael.anim.start." + element.id, element, anim);਍    紀ഀഀ
    /*\਍     ⨀ 刀愀瀀栀愀攀氀⸀愀渀椀洀愀琀椀漀渀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Creates an animation object that can be passed to the @Element.animate or @Element.animateWith methods.਍     ⨀ 匀攀攀 愀氀猀漀 䀀䄀渀椀洀愀琀椀漀渀⸀搀攀氀愀礀 愀渀搀 䀀䄀渀椀洀愀琀椀漀渀⸀爀攀瀀攀愀琀 洀攀琀栀漀搀猀⸀ഀഀ
     **਍     㸀 倀愀爀愀洀攀琀攀爀猀ഀഀ
     **਍     ⴀ 瀀愀爀愀洀猀 ⠀漀戀樀攀挀琀⤀ 昀椀渀愀氀 愀琀琀爀椀戀甀琀攀猀 昀漀爀 琀栀攀 攀氀攀洀攀渀琀Ⰰ 猀攀攀 愀氀猀漀 䀀䔀氀攀洀攀渀琀⸀愀琀琀爀ഀഀ
     - ms (number) number of milliseconds for animation to run਍     ⴀ 攀愀猀椀渀最 ⠀猀琀爀椀渀最⤀ ⌀漀瀀琀椀漀渀愀氀 攀愀猀椀渀最 琀礀瀀攀⸀ 䄀挀挀攀瀀琀 漀渀攀 漀昀 䀀刀愀瀀栀愀攀氀⸀攀愀猀椀渀最开昀漀爀洀甀氀愀猀 漀爀 䌀匀匀 昀漀爀洀愀琀㨀 怀挀甀戀椀挀☀⌀砀㈀　㄀　㬀戀攀稀椀攀爀⠀堀堀Ⰰ☀⌀㄀㘀　㬀堀堀Ⰰ☀⌀㄀㘀　㬀堀堀Ⰰ☀⌀㄀㘀　㬀堀堀⤀怀ഀഀ
     - callback (function) #optional callback function. Will be called at the end of animation.਍     ⨀⨀ഀഀ
     = (object) @Animation਍    尀⨀⼀ഀഀ
    R.animation = function (params, ms, easing, callback) {਍        椀昀 ⠀瀀愀爀愀洀猀 椀渀猀琀愀渀挀攀漀昀 䄀渀椀洀愀琀椀漀渀⤀ 笀ഀഀ
            return params;਍        紀ഀഀ
        if (R.is(easing, "function") || !easing) {਍            挀愀氀氀戀愀挀欀 㴀 挀愀氀氀戀愀挀欀 簀簀 攀愀猀椀渀最 簀簀 渀甀氀氀㬀ഀഀ
            easing = null;਍        紀ഀഀ
        params = Object(params);਍        洀猀 㴀 ⬀洀猀 簀簀 　㬀ഀഀ
        var p = {},਍            樀猀漀渀Ⰰഀഀ
            attr;਍        昀漀爀 ⠀愀琀琀爀 椀渀 瀀愀爀愀洀猀⤀ 椀昀 ⠀瀀愀爀愀洀猀嬀栀愀猀崀⠀愀琀琀爀⤀ ☀☀ 琀漀䘀氀漀愀琀⠀愀琀琀爀⤀ ℀㴀 愀琀琀爀 ☀☀ 琀漀䘀氀漀愀琀⠀愀琀琀爀⤀ ⬀ ∀─∀ ℀㴀 愀琀琀爀⤀ 笀ഀഀ
            json = true;਍            瀀嬀愀琀琀爀崀 㴀 瀀愀爀愀洀猀嬀愀琀琀爀崀㬀ഀഀ
        }਍        椀昀 ⠀℀樀猀漀渀⤀ 笀ഀഀ
            // if percent-like syntax is used and end-of-all animation callback used਍            椀昀⠀挀愀氀氀戀愀挀欀⤀笀ഀഀ
                // find the last one਍                瘀愀爀 氀愀猀琀䬀攀礀 㴀 　㬀ഀഀ
                for(var i in params){਍                    瘀愀爀 瀀攀爀挀攀渀琀 㴀 琀漀䤀渀琀⠀椀⤀㬀ഀഀ
                    if(params[has](i) && percent > lastKey){਍                        氀愀猀琀䬀攀礀 㴀 瀀攀爀挀攀渀琀㬀ഀഀ
                    }਍                紀ഀഀ
                lastKey += '%';਍                ⼀⼀ 椀昀 愀氀爀攀愀搀礀 搀攀昀椀渀攀搀 挀愀氀氀戀愀挀欀 椀渀 琀栀攀 氀愀猀琀 欀攀礀昀爀愀洀攀Ⰰ 猀欀椀瀀ഀഀ
                !params[lastKey].callback && (params[lastKey].callback = callback);਍            紀ഀഀ
          return new Animation(params, ms);਍        紀 攀氀猀攀 笀ഀഀ
            easing && (p.easing = easing);਍            挀愀氀氀戀愀挀欀 ☀☀ ⠀瀀⸀挀愀氀氀戀愀挀欀 㴀 挀愀氀氀戀愀挀欀⤀㬀ഀഀ
            return new Animation({100: p}, ms);਍        紀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * Element.animate਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 䌀爀攀愀琀攀猀 愀渀搀 猀琀愀爀琀猀 愀渀椀洀愀琀椀漀渀 昀漀爀 最椀瘀攀渀 攀氀攀洀攀渀琀⸀ഀഀ
     **਍     㸀 倀愀爀愀洀攀琀攀爀猀ഀഀ
     **਍     ⴀ 瀀愀爀愀洀猀 ⠀漀戀樀攀挀琀⤀ 昀椀渀愀氀 愀琀琀爀椀戀甀琀攀猀 昀漀爀 琀栀攀 攀氀攀洀攀渀琀Ⰰ 猀攀攀 愀氀猀漀 䀀䔀氀攀洀攀渀琀⸀愀琀琀爀ഀഀ
     - ms (number) number of milliseconds for animation to run਍     ⴀ 攀愀猀椀渀最 ⠀猀琀爀椀渀最⤀ ⌀漀瀀琀椀漀渀愀氀 攀愀猀椀渀最 琀礀瀀攀⸀ 䄀挀挀攀瀀琀 漀渀攀 漀昀 䀀刀愀瀀栀愀攀氀⸀攀愀猀椀渀最开昀漀爀洀甀氀愀猀 漀爀 䌀匀匀 昀漀爀洀愀琀㨀 怀挀甀戀椀挀☀⌀砀㈀　㄀　㬀戀攀稀椀攀爀⠀堀堀Ⰰ☀⌀㄀㘀　㬀堀堀Ⰰ☀⌀㄀㘀　㬀堀堀Ⰰ☀⌀㄀㘀　㬀堀堀⤀怀ഀഀ
     - callback (function) #optional callback function. Will be called at the end of animation.਍     ⨀ 漀爀ഀഀ
     - animation (object) animation object, see @Raphael.animation਍     ⨀⨀ഀഀ
     = (object) original element਍    尀⨀⼀ഀഀ
    elproto.animate = function (params, ms, easing, callback) {਍        瘀愀爀 攀氀攀洀攀渀琀 㴀 琀栀椀猀㬀ഀഀ
        if (element.removed) {਍            挀愀氀氀戀愀挀欀 ☀☀ 挀愀氀氀戀愀挀欀⸀挀愀氀氀⠀攀氀攀洀攀渀琀⤀㬀ഀഀ
            return element;਍        紀ഀഀ
        var anim = params instanceof Animation ? params : R.animation(params, ms, easing, callback);਍        爀甀渀䄀渀椀洀愀琀椀漀渀⠀愀渀椀洀Ⰰ 攀氀攀洀攀渀琀Ⰰ 愀渀椀洀⸀瀀攀爀挀攀渀琀猀嬀　崀Ⰰ 渀甀氀氀Ⰰ 攀氀攀洀攀渀琀⸀愀琀琀爀⠀⤀⤀㬀ഀഀ
        return element;਍    紀㬀ഀഀ
    /*\਍     ⨀ 䔀氀攀洀攀渀琀⸀猀攀琀吀椀洀攀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Sets the status of animation of the element in milliseconds. Similar to @Element.status method.਍     ⨀⨀ഀഀ
     > Parameters਍     ⨀⨀ഀഀ
     - anim (object) animation object਍     ⴀ 瘀愀氀甀攀 ⠀渀甀洀戀攀爀⤀ 渀甀洀戀攀爀 漀昀 洀椀氀氀椀猀攀挀漀渀搀猀 昀爀漀洀 琀栀攀 戀攀最椀渀渀椀渀最 漀昀 琀栀攀 愀渀椀洀愀琀椀漀渀ഀഀ
     **਍     㴀 ⠀漀戀樀攀挀琀⤀ 漀爀椀最椀渀愀氀 攀氀攀洀攀渀琀 椀昀 怀瘀愀氀甀攀怀 椀猀 猀瀀攀挀椀昀椀攀搀ഀഀ
     * Note, that during animation following events are triggered:਍     ⨀ഀഀ
     * On each animation frame event `anim.frame.<id>`, on start `anim.start.<id>` and on end `anim.finish.<id>`.਍    尀⨀⼀ഀഀ
    elproto.setTime = function (anim, value) {਍        椀昀 ⠀愀渀椀洀 ☀☀ 瘀愀氀甀攀 ℀㴀 渀甀氀氀⤀ 笀ഀഀ
            this.status(anim, mmin(value, anim.ms) / anim.ms);਍        紀ഀഀ
        return this;਍    紀㬀ഀഀ
    /*\਍     ⨀ 䔀氀攀洀攀渀琀⸀猀琀愀琀甀猀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Gets or sets the status of animation of the element.਍     ⨀⨀ഀഀ
     > Parameters਍     ⨀⨀ഀഀ
     - anim (object) #optional animation object਍     ⴀ 瘀愀氀甀攀 ⠀渀甀洀戀攀爀⤀ ⌀漀瀀琀椀漀渀愀氀 　 ጀ†㄀⸀ 䤀昀 猀瀀攀挀椀昀椀攀搀Ⰰ 洀攀琀栀漀搀 眀漀爀欀猀 氀椀欀攀 愀 猀攀琀琀攀爀 愀渀搀 猀攀琀猀 琀栀攀 猀琀愀琀甀猀 漀昀 愀 最椀瘀攀渀 愀渀椀洀愀琀椀漀渀 琀漀 琀栀攀 瘀愀氀甀攀⸀ 吀栀椀猀 眀椀氀氀 挀愀甀猀攀 愀渀椀洀愀琀椀漀渀 琀漀 樀甀洀瀀 琀漀 琀栀攀 最椀瘀攀渀 瀀漀猀椀琀椀漀渀⸀ഀഀ
     **਍     㴀 ⠀渀甀洀戀攀爀⤀ 猀琀愀琀甀猀ഀഀ
     * or਍     㴀 ⠀愀爀爀愀礀⤀ 猀琀愀琀甀猀 椀昀 怀愀渀椀洀怀 椀猀 渀漀琀 猀瀀攀挀椀昀椀攀搀⸀ 䄀爀爀愀礀 漀昀 漀戀樀攀挀琀猀 椀渀 昀漀爀洀愀琀㨀ഀഀ
     o {਍     漀     愀渀椀洀㨀 ⠀漀戀樀攀挀琀⤀ 愀渀椀洀愀琀椀漀渀 漀戀樀攀挀琀ഀഀ
     o     status: (number) status਍     漀 紀ഀഀ
     * or਍     㴀 ⠀漀戀樀攀挀琀⤀ 漀爀椀最椀渀愀氀 攀氀攀洀攀渀琀 椀昀 怀瘀愀氀甀攀怀 椀猀 猀瀀攀挀椀昀椀攀搀ഀഀ
    \*/਍    攀氀瀀爀漀琀漀⸀猀琀愀琀甀猀 㴀 昀甀渀挀琀椀漀渀 ⠀愀渀椀洀Ⰰ 瘀愀氀甀攀⤀ 笀ഀഀ
        var out = [],਍            椀 㴀 　Ⰰഀഀ
            len,਍            攀㬀ഀഀ
        if (value != null) {਍            爀甀渀䄀渀椀洀愀琀椀漀渀⠀愀渀椀洀Ⰰ 琀栀椀猀Ⰰ ⴀ㄀Ⰰ 洀洀椀渀⠀瘀愀氀甀攀Ⰰ ㄀⤀⤀㬀ഀഀ
            return this;਍        紀 攀氀猀攀 笀ഀഀ
            len = animationElements.length;਍            昀漀爀 ⠀㬀 椀 㰀 氀攀渀㬀 椀⬀⬀⤀ 笀ഀഀ
                e = animationElements[i];਍                椀昀 ⠀攀⸀攀氀⸀椀搀 㴀㴀 琀栀椀猀⸀椀搀 ☀☀ ⠀℀愀渀椀洀 簀簀 攀⸀愀渀椀洀 㴀㴀 愀渀椀洀⤀⤀ 笀ഀഀ
                    if (anim) {਍                        爀攀琀甀爀渀 攀⸀猀琀愀琀甀猀㬀ഀഀ
                    }਍                    漀甀琀⸀瀀甀猀栀⠀笀ഀഀ
                        anim: e.anim,਍                        猀琀愀琀甀猀㨀 攀⸀猀琀愀琀甀猀ഀഀ
                    });਍                紀ഀഀ
            }਍            椀昀 ⠀愀渀椀洀⤀ 笀ഀഀ
                return 0;਍            紀ഀഀ
            return out;਍        紀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * Element.pause਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 匀琀漀瀀猀 愀渀椀洀愀琀椀漀渀 漀昀 琀栀攀 攀氀攀洀攀渀琀 眀椀琀栀 愀戀椀氀椀琀礀 琀漀 爀攀猀甀洀攀 椀琀 氀愀琀攀爀 漀渀⸀ഀഀ
     **਍     㸀 倀愀爀愀洀攀琀攀爀猀ഀഀ
     **਍     ⴀ 愀渀椀洀 ⠀漀戀樀攀挀琀⤀ ⌀漀瀀琀椀漀渀愀氀 愀渀椀洀愀琀椀漀渀 漀戀樀攀挀琀ഀഀ
     **਍     㴀 ⠀漀戀樀攀挀琀⤀ 漀爀椀最椀渀愀氀 攀氀攀洀攀渀琀ഀഀ
    \*/਍    攀氀瀀爀漀琀漀⸀瀀愀甀猀攀 㴀 昀甀渀挀琀椀漀渀 ⠀愀渀椀洀⤀ 笀ഀഀ
        for (var i = 0; i < animationElements.length; i++) if (animationElements[i].el.id == this.id && (!anim || animationElements[i].anim == anim)) {਍            椀昀 ⠀攀瘀攀⠀∀爀愀瀀栀愀攀氀⸀愀渀椀洀⸀瀀愀甀猀攀⸀∀ ⬀ 琀栀椀猀⸀椀搀Ⰰ 琀栀椀猀Ⰰ 愀渀椀洀愀琀椀漀渀䔀氀攀洀攀渀琀猀嬀椀崀⸀愀渀椀洀⤀ ℀㴀㴀 昀愀氀猀攀⤀ 笀ഀഀ
                animationElements[i].paused = true;਍            紀ഀഀ
        }਍        爀攀琀甀爀渀 琀栀椀猀㬀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * Element.resume਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 刀攀猀甀洀攀猀 愀渀椀洀愀琀椀漀渀 椀昀 椀琀 眀愀猀 瀀愀甀猀攀搀 眀椀琀栀 䀀䔀氀攀洀攀渀琀⸀瀀愀甀猀攀 洀攀琀栀漀搀⸀ഀഀ
     **਍     㸀 倀愀爀愀洀攀琀攀爀猀ഀഀ
     **਍     ⴀ 愀渀椀洀 ⠀漀戀樀攀挀琀⤀ ⌀漀瀀琀椀漀渀愀氀 愀渀椀洀愀琀椀漀渀 漀戀樀攀挀琀ഀഀ
     **਍     㴀 ⠀漀戀樀攀挀琀⤀ 漀爀椀最椀渀愀氀 攀氀攀洀攀渀琀ഀഀ
    \*/਍    攀氀瀀爀漀琀漀⸀爀攀猀甀洀攀 㴀 昀甀渀挀琀椀漀渀 ⠀愀渀椀洀⤀ 笀ഀഀ
        for (var i = 0; i < animationElements.length; i++) if (animationElements[i].el.id == this.id && (!anim || animationElements[i].anim == anim)) {਍            瘀愀爀 攀 㴀 愀渀椀洀愀琀椀漀渀䔀氀攀洀攀渀琀猀嬀椀崀㬀ഀഀ
            if (eve("raphael.anim.resume." + this.id, this, e.anim) !== false) {਍                搀攀氀攀琀攀 攀⸀瀀愀甀猀攀搀㬀ഀഀ
                this.status(e.anim, e.status);਍            紀ഀഀ
        }਍        爀攀琀甀爀渀 琀栀椀猀㬀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * Element.stop਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 匀琀漀瀀猀 愀渀椀洀愀琀椀漀渀 漀昀 琀栀攀 攀氀攀洀攀渀琀⸀ഀഀ
     **਍     㸀 倀愀爀愀洀攀琀攀爀猀ഀഀ
     **਍     ⴀ 愀渀椀洀 ⠀漀戀樀攀挀琀⤀ ⌀漀瀀琀椀漀渀愀氀 愀渀椀洀愀琀椀漀渀 漀戀樀攀挀琀ഀഀ
     **਍     㴀 ⠀漀戀樀攀挀琀⤀ 漀爀椀最椀渀愀氀 攀氀攀洀攀渀琀ഀഀ
    \*/਍    攀氀瀀爀漀琀漀⸀猀琀漀瀀 㴀 昀甀渀挀琀椀漀渀 ⠀愀渀椀洀⤀ 笀ഀഀ
        for (var i = 0; i < animationElements.length; i++) if (animationElements[i].el.id == this.id && (!anim || animationElements[i].anim == anim)) {਍            椀昀 ⠀攀瘀攀⠀∀爀愀瀀栀愀攀氀⸀愀渀椀洀⸀猀琀漀瀀⸀∀ ⬀ 琀栀椀猀⸀椀搀Ⰰ 琀栀椀猀Ⰰ 愀渀椀洀愀琀椀漀渀䔀氀攀洀攀渀琀猀嬀椀崀⸀愀渀椀洀⤀ ℀㴀㴀 昀愀氀猀攀⤀ 笀ഀഀ
                animationElements.splice(i--, 1);਍            紀ഀഀ
        }਍        爀攀琀甀爀渀 琀栀椀猀㬀ഀഀ
    };਍    昀甀渀挀琀椀漀渀 猀琀漀瀀䄀渀椀洀愀琀椀漀渀⠀瀀愀瀀攀爀⤀ 笀ഀഀ
        for (var i = 0; i < animationElements.length; i++) if (animationElements[i].el.paper == paper) {਍            愀渀椀洀愀琀椀漀渀䔀氀攀洀攀渀琀猀⸀猀瀀氀椀挀攀⠀椀ⴀⴀⰀ ㄀⤀㬀ഀഀ
        }਍    紀ഀഀ
    eve.on("raphael.remove", stopAnimation);਍    攀瘀攀⸀漀渀⠀∀爀愀瀀栀愀攀氀⸀挀氀攀愀爀∀Ⰰ 猀琀漀瀀䄀渀椀洀愀琀椀漀渀⤀㬀ഀഀ
    elproto.toString = function () {਍        爀攀琀甀爀渀 ∀刀愀瀀栀愀尀砀攀戀氀尀甀㈀　㄀㤀猀 漀戀樀攀挀琀∀㬀ഀഀ
    };਍ഀഀ
    // Set਍    瘀愀爀 匀攀琀 㴀 昀甀渀挀琀椀漀渀 ⠀椀琀攀洀猀⤀ 笀ഀഀ
        this.items = [];਍        琀栀椀猀⸀氀攀渀最琀栀 㴀 　㬀ഀഀ
        this.type = "set";਍        椀昀 ⠀椀琀攀洀猀⤀ 笀ഀഀ
            for (var i = 0, ii = items.length; i < ii; i++) {਍                椀昀 ⠀椀琀攀洀猀嬀椀崀 ☀☀ ⠀椀琀攀洀猀嬀椀崀⸀挀漀渀猀琀爀甀挀琀漀爀 㴀㴀 攀氀瀀爀漀琀漀⸀挀漀渀猀琀爀甀挀琀漀爀 簀簀 椀琀攀洀猀嬀椀崀⸀挀漀渀猀琀爀甀挀琀漀爀 㴀㴀 匀攀琀⤀⤀ 笀ഀഀ
                    this[this.items.length] = this.items[this.items.length] = items[i];਍                    琀栀椀猀⸀氀攀渀最琀栀⬀⬀㬀ഀഀ
                }਍            紀ഀഀ
        }਍    紀Ⰰഀഀ
    setproto = Set.prototype;਍    ⼀⨀尀ഀഀ
     * Set.push਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 䄀搀搀猀 攀愀挀栀 愀爀最甀洀攀渀琀 琀漀 琀栀攀 挀甀爀爀攀渀琀 猀攀琀⸀ഀഀ
     = (object) original element਍    尀⨀⼀ഀഀ
    setproto.push = function () {਍        瘀愀爀 椀琀攀洀Ⰰഀഀ
            len;਍        昀漀爀 ⠀瘀愀爀 椀 㴀 　Ⰰ 椀椀 㴀 愀爀最甀洀攀渀琀猀⸀氀攀渀最琀栀㬀 椀 㰀 椀椀㬀 椀⬀⬀⤀ 笀ഀഀ
            item = arguments[i];਍            椀昀 ⠀椀琀攀洀 ☀☀ ⠀椀琀攀洀⸀挀漀渀猀琀爀甀挀琀漀爀 㴀㴀 攀氀瀀爀漀琀漀⸀挀漀渀猀琀爀甀挀琀漀爀 簀簀 椀琀攀洀⸀挀漀渀猀琀爀甀挀琀漀爀 㴀㴀 匀攀琀⤀⤀ 笀ഀഀ
                len = this.items.length;਍                琀栀椀猀嬀氀攀渀崀 㴀 琀栀椀猀⸀椀琀攀洀猀嬀氀攀渀崀 㴀 椀琀攀洀㬀ഀഀ
                this.length++;਍            紀ഀഀ
        }਍        爀攀琀甀爀渀 琀栀椀猀㬀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * Set.pop਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 刀攀洀漀瘀攀猀 氀愀猀琀 攀氀攀洀攀渀琀 愀渀搀 爀攀琀甀爀渀猀 椀琀⸀ഀഀ
     = (object) element਍    尀⨀⼀ഀഀ
    setproto.pop = function () {਍        琀栀椀猀⸀氀攀渀最琀栀 ☀☀ 搀攀氀攀琀攀 琀栀椀猀嬀琀栀椀猀⸀氀攀渀最琀栀ⴀⴀ崀㬀ഀഀ
        return this.items.pop();਍    紀㬀ഀഀ
    /*\਍     ⨀ 匀攀琀⸀昀漀爀䔀愀挀栀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Executes given function for each element in the set.਍     ⨀ഀഀ
     * If function returns `false` it will stop loop running.਍     ⨀⨀ഀഀ
     > Parameters਍     ⨀⨀ഀഀ
     - callback (function) function to run਍     ⴀ 琀栀椀猀䄀爀最 ⠀漀戀樀攀挀琀⤀ 挀漀渀琀攀砀琀 漀戀樀攀挀琀 昀漀爀 琀栀攀 挀愀氀氀戀愀挀欀ഀഀ
     = (object) Set object਍    尀⨀⼀ഀഀ
    setproto.forEach = function (callback, thisArg) {਍        昀漀爀 ⠀瘀愀爀 椀 㴀 　Ⰰ 椀椀 㴀 琀栀椀猀⸀椀琀攀洀猀⸀氀攀渀最琀栀㬀 椀 㰀 椀椀㬀 椀⬀⬀⤀ 笀ഀഀ
            if (callback.call(thisArg, this.items[i], i) === false) {਍                爀攀琀甀爀渀 琀栀椀猀㬀ഀഀ
            }਍        紀ഀഀ
        return this;਍    紀㬀ഀഀ
    for (var method in elproto) if (elproto[has](method)) {਍        猀攀琀瀀爀漀琀漀嬀洀攀琀栀漀搀崀 㴀 ⠀昀甀渀挀琀椀漀渀 ⠀洀攀琀栀漀搀渀愀洀攀⤀ 笀ഀഀ
            return function () {਍                瘀愀爀 愀爀最 㴀 愀爀最甀洀攀渀琀猀㬀ഀഀ
                return this.forEach(function (el) {਍                    攀氀嬀洀攀琀栀漀搀渀愀洀攀崀嬀愀瀀瀀氀礀崀⠀攀氀Ⰰ 愀爀最⤀㬀ഀഀ
                });਍            紀㬀ഀഀ
        })(method);਍    紀ഀഀ
    setproto.attr = function (name, value) {਍        椀昀 ⠀渀愀洀攀 ☀☀ 刀⸀椀猀⠀渀愀洀攀Ⰰ 愀爀爀愀礀⤀ ☀☀ 刀⸀椀猀⠀渀愀洀攀嬀　崀Ⰰ ∀漀戀樀攀挀琀∀⤀⤀ 笀ഀഀ
            for (var j = 0, jj = name.length; j < jj; j++) {਍                琀栀椀猀⸀椀琀攀洀猀嬀樀崀⸀愀琀琀爀⠀渀愀洀攀嬀樀崀⤀㬀ഀഀ
            }਍        紀 攀氀猀攀 笀ഀഀ
            for (var i = 0, ii = this.items.length; i < ii; i++) {਍                琀栀椀猀⸀椀琀攀洀猀嬀椀崀⸀愀琀琀爀⠀渀愀洀攀Ⰰ 瘀愀氀甀攀⤀㬀ഀഀ
            }਍        紀ഀഀ
        return this;਍    紀㬀ഀഀ
    /*\਍     ⨀ 匀攀琀⸀挀氀攀愀爀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Removes all elements from the set਍    尀⨀⼀ഀഀ
    setproto.clear = function () {਍        眀栀椀氀攀 ⠀琀栀椀猀⸀氀攀渀最琀栀⤀ 笀ഀഀ
            this.pop();਍        紀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * Set.splice਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 刀攀洀漀瘀攀猀 最椀瘀攀渀 攀氀攀洀攀渀琀 昀爀漀洀 琀栀攀 猀攀琀ഀഀ
     **਍     㸀 倀愀爀愀洀攀琀攀爀猀ഀഀ
     **਍     ⴀ 椀渀搀攀砀 ⠀渀甀洀戀攀爀⤀ 瀀漀猀椀琀椀漀渀 漀昀 琀栀攀 搀攀氀攀琀椀漀渀ഀഀ
     - count (number) number of element to remove਍     ⴀ 椀渀猀攀爀琀椀漀渀☀†⠀漀戀樀攀挀琀⤀ ⌀漀瀀琀椀漀渀愀氀 攀氀攀洀攀渀琀猀 琀漀 椀渀猀攀爀琀ഀഀ
     = (object) set elements that were deleted਍    尀⨀⼀ഀഀ
    setproto.splice = function (index, count, insertion) {਍        椀渀搀攀砀 㴀 椀渀搀攀砀 㰀 　 㼀 洀洀愀砀⠀琀栀椀猀⸀氀攀渀最琀栀 ⬀ 椀渀搀攀砀Ⰰ 　⤀ 㨀 椀渀搀攀砀㬀ഀഀ
        count = mmax(0, mmin(this.length - index, count));਍        瘀愀爀 琀愀椀氀 㴀 嬀崀Ⰰഀഀ
            todel = [],਍            愀爀最猀 㴀 嬀崀Ⰰഀഀ
            i;਍        昀漀爀 ⠀椀 㴀 ㈀㬀 椀 㰀 愀爀最甀洀攀渀琀猀⸀氀攀渀最琀栀㬀 椀⬀⬀⤀ 笀ഀഀ
            args.push(arguments[i]);਍        紀ഀഀ
        for (i = 0; i < count; i++) {਍            琀漀搀攀氀⸀瀀甀猀栀⠀琀栀椀猀嬀椀渀搀攀砀 ⬀ 椀崀⤀㬀ഀഀ
        }਍        昀漀爀 ⠀㬀 椀 㰀 琀栀椀猀⸀氀攀渀最琀栀 ⴀ 椀渀搀攀砀㬀 椀⬀⬀⤀ 笀ഀഀ
            tail.push(this[index + i]);਍        紀ഀഀ
        var arglen = args.length;਍        昀漀爀 ⠀椀 㴀 　㬀 椀 㰀 愀爀最氀攀渀 ⬀ 琀愀椀氀⸀氀攀渀最琀栀㬀 椀⬀⬀⤀ 笀ഀഀ
            this.items[index + i] = this[index + i] = i < arglen ? args[i] : tail[i - arglen];਍        紀ഀഀ
        i = this.items.length = this.length -= count - arglen;਍        眀栀椀氀攀 ⠀琀栀椀猀嬀椀崀⤀ 笀ഀഀ
            delete this[i++];਍        紀ഀഀ
        return new Set(todel);਍    紀㬀ഀഀ
    /*\਍     ⨀ 匀攀琀⸀攀砀挀氀甀搀攀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Removes given element from the set਍     ⨀⨀ഀഀ
     > Parameters਍     ⨀⨀ഀഀ
     - element (object) element to remove਍     㴀 ⠀戀漀漀氀攀愀渀⤀ 怀琀爀甀攀怀 椀昀 漀戀樀攀挀琀 眀愀猀 昀漀甀渀搀 ☀ 爀攀洀漀瘀攀搀 昀爀漀洀 琀栀攀 猀攀琀ഀഀ
    \*/਍    猀攀琀瀀爀漀琀漀⸀攀砀挀氀甀搀攀 㴀 昀甀渀挀琀椀漀渀 ⠀攀氀⤀ 笀ഀഀ
        for (var i = 0, ii = this.length; i < ii; i++) if (this[i] == el) {਍            琀栀椀猀⸀猀瀀氀椀挀攀⠀椀Ⰰ ㄀⤀㬀ഀഀ
            return true;਍        紀ഀഀ
    };਍    猀攀琀瀀爀漀琀漀⸀愀渀椀洀愀琀攀 㴀 昀甀渀挀琀椀漀渀 ⠀瀀愀爀愀洀猀Ⰰ 洀猀Ⰰ 攀愀猀椀渀最Ⰰ 挀愀氀氀戀愀挀欀⤀ 笀ഀഀ
        (R.is(easing, "function") || !easing) && (callback = easing || null);਍        瘀愀爀 氀攀渀 㴀 琀栀椀猀⸀椀琀攀洀猀⸀氀攀渀最琀栀Ⰰഀഀ
            i = len,਍            椀琀攀洀Ⰰഀഀ
            set = this,਍            挀漀氀氀攀挀琀漀爀㬀ഀഀ
        if (!len) {਍            爀攀琀甀爀渀 琀栀椀猀㬀ഀഀ
        }਍        挀愀氀氀戀愀挀欀 ☀☀ ⠀挀漀氀氀攀挀琀漀爀 㴀 昀甀渀挀琀椀漀渀 ⠀⤀ 笀ഀഀ
            !--len && callback.call(set);਍        紀⤀㬀ഀഀ
        easing = R.is(easing, string) ? easing : collector;਍        瘀愀爀 愀渀椀洀 㴀 刀⸀愀渀椀洀愀琀椀漀渀⠀瀀愀爀愀洀猀Ⰰ 洀猀Ⰰ 攀愀猀椀渀最Ⰰ 挀漀氀氀攀挀琀漀爀⤀㬀ഀഀ
        item = this.items[--i].animate(anim);਍        眀栀椀氀攀 ⠀椀ⴀⴀ⤀ 笀ഀഀ
            this.items[i] && !this.items[i].removed && this.items[i].animateWith(item, anim, anim);਍            ⠀琀栀椀猀⸀椀琀攀洀猀嬀椀崀 ☀☀ ℀琀栀椀猀⸀椀琀攀洀猀嬀椀崀⸀爀攀洀漀瘀攀搀⤀ 簀簀 氀攀渀ⴀⴀ㬀ഀഀ
        }਍        爀攀琀甀爀渀 琀栀椀猀㬀ഀഀ
    };਍    猀攀琀瀀爀漀琀漀⸀椀渀猀攀爀琀䄀昀琀攀爀 㴀 昀甀渀挀琀椀漀渀 ⠀攀氀⤀ 笀ഀഀ
        var i = this.items.length;਍        眀栀椀氀攀 ⠀椀ⴀⴀ⤀ 笀ഀഀ
            this.items[i].insertAfter(el);਍        紀ഀഀ
        return this;਍    紀㬀ഀഀ
    setproto.getBBox = function () {਍        瘀愀爀 砀 㴀 嬀崀Ⰰഀഀ
            y = [],਍            砀㈀ 㴀 嬀崀Ⰰഀഀ
            y2 = [];਍        昀漀爀 ⠀瘀愀爀 椀 㴀 琀栀椀猀⸀椀琀攀洀猀⸀氀攀渀最琀栀㬀 椀ⴀⴀ㬀⤀ 椀昀 ⠀℀琀栀椀猀⸀椀琀攀洀猀嬀椀崀⸀爀攀洀漀瘀攀搀⤀ 笀ഀഀ
            var box = this.items[i].getBBox();਍            砀⸀瀀甀猀栀⠀戀漀砀⸀砀⤀㬀ഀഀ
            y.push(box.y);਍            砀㈀⸀瀀甀猀栀⠀戀漀砀⸀砀 ⬀ 戀漀砀⸀眀椀搀琀栀⤀㬀ഀഀ
            y2.push(box.y + box.height);਍        紀ഀഀ
        x = mmin[apply](0, x);਍        礀 㴀 洀洀椀渀嬀愀瀀瀀氀礀崀⠀　Ⰰ 礀⤀㬀ഀഀ
        x2 = mmax[apply](0, x2);਍        礀㈀ 㴀 洀洀愀砀嬀愀瀀瀀氀礀崀⠀　Ⰰ 礀㈀⤀㬀ഀഀ
        return {਍            砀㨀 砀Ⰰഀഀ
            y: y,਍            砀㈀㨀 砀㈀Ⰰഀഀ
            y2: y2,਍            眀椀搀琀栀㨀 砀㈀ ⴀ 砀Ⰰഀഀ
            height: y2 - y਍        紀㬀ഀഀ
    };਍    猀攀琀瀀爀漀琀漀⸀挀氀漀渀攀 㴀 昀甀渀挀琀椀漀渀 ⠀猀⤀ 笀ഀഀ
        s = this.paper.set();਍        昀漀爀 ⠀瘀愀爀 椀 㴀 　Ⰰ 椀椀 㴀 琀栀椀猀⸀椀琀攀洀猀⸀氀攀渀最琀栀㬀 椀 㰀 椀椀㬀 椀⬀⬀⤀ 笀ഀഀ
            s.push(this.items[i].clone());਍        紀ഀഀ
        return s;਍    紀㬀ഀഀ
    setproto.toString = function () {਍        爀攀琀甀爀渀 ∀刀愀瀀栀愀尀砀攀戀氀尀甀㈀　㄀㠀猀 猀攀琀∀㬀ഀഀ
    };਍ഀഀ
    setproto.glow = function(glowConfig) {਍        瘀愀爀 爀攀琀 㴀 琀栀椀猀⸀瀀愀瀀攀爀⸀猀攀琀⠀⤀㬀ഀഀ
        this.forEach(function(shape, index){਍            瘀愀爀 最 㴀 猀栀愀瀀攀⸀最氀漀眀⠀最氀漀眀䌀漀渀昀椀最⤀㬀ഀഀ
            if(g != null){਍                最⸀昀漀爀䔀愀挀栀⠀昀甀渀挀琀椀漀渀⠀猀栀愀瀀攀㈀Ⰰ 椀渀搀攀砀㈀⤀笀ഀഀ
                    ret.push(shape2);਍                紀⤀㬀ഀഀ
            }਍        紀⤀㬀ഀഀ
        return ret;਍    紀㬀ഀഀ
਍ഀഀ
    /*\਍     ⨀ 匀攀琀⸀椀猀倀漀椀渀琀䤀渀猀椀搀攀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Determine if given point is inside this set’s elements਍     ⨀⨀ഀഀ
     > Parameters਍     ⨀⨀ഀഀ
     - x (number) x coordinate of the point਍     ⴀ 礀 ⠀渀甀洀戀攀爀⤀ 礀 挀漀漀爀搀椀渀愀琀攀 漀昀 琀栀攀 瀀漀椀渀琀ഀഀ
     = (boolean) `true` if point is inside any of the set's elements਍     尀⨀⼀ഀഀ
    setproto.isPointInside = function (x, y) {਍        瘀愀爀 椀猀倀漀椀渀琀䤀渀猀椀搀攀 㴀 昀愀氀猀攀㬀ഀഀ
        this.forEach(function (el) {਍            椀昀 ⠀攀氀⸀椀猀倀漀椀渀琀䤀渀猀椀搀攀⠀砀Ⰰ 礀⤀⤀ 笀ഀഀ
                isPointInside = true;਍                爀攀琀甀爀渀 昀愀氀猀攀㬀 ⼀⼀ 猀琀漀瀀 氀漀漀瀀ഀഀ
            }਍        紀⤀㬀ഀഀ
        return isPointInside;਍    紀㬀ഀഀ
਍    ⼀⨀尀ഀഀ
     * Raphael.registerFont਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 䄀搀搀猀 最椀瘀攀渀 昀漀渀琀 琀漀 琀栀攀 爀攀最椀猀琀攀爀攀搀 猀攀琀 漀昀 昀漀渀琀猀 昀漀爀 刀愀瀀栀愀氀⸀ 匀栀漀甀氀搀 戀攀 甀猀攀搀 愀猀 愀渀 椀渀琀攀爀渀愀氀 挀愀氀氀 昀爀漀洀 眀椀琀栀椀渀 䌀甀昀渀ᤀ猠 昀漀渀琀 昀椀氀攀⸀ഀഀ
     * Returns original parameter, so it could be used with chaining.਍     ⌀ 㰀愀 栀爀攀昀㴀∀栀琀琀瀀㨀⼀⼀眀椀欀椀⸀最椀琀栀甀戀⸀挀漀洀⼀猀漀爀挀挀甀⼀挀甀昀漀渀⼀愀戀漀甀琀∀㸀䴀漀爀攀 愀戀漀甀琀 䌀甀昀渀 愀渀搀 栀漀眀 琀漀 挀漀渀瘀攀爀琀 礀漀甀爀 昀漀渀琀 昀漀爀洀 吀吀䘀Ⰰ 伀吀䘀Ⰰ 攀琀挀 琀漀 䨀愀瘀愀匀挀爀椀瀀琀 昀椀氀攀⸀㰀⼀愀㸀ഀഀ
     **਍     㸀 倀愀爀愀洀攀琀攀爀猀ഀഀ
     **਍     ⴀ 昀漀渀琀 ⠀漀戀樀攀挀琀⤀ 琀栀攀 昀漀渀琀 琀漀 爀攀最椀猀琀攀爀ഀഀ
     = (object) the font you passed in਍     㸀 唀猀愀最攀ഀഀ
     | Cufon.registerFont(Raphael.registerFont({…}));਍    尀⨀⼀ഀഀ
    R.registerFont = function (font) {਍        椀昀 ⠀℀昀漀渀琀⸀昀愀挀攀⤀ 笀ഀഀ
            return font;਍        紀ഀഀ
        this.fonts = this.fonts || {};਍        瘀愀爀 昀漀渀琀挀漀瀀礀 㴀 笀ഀഀ
                w: font.w,਍                昀愀挀攀㨀 笀紀Ⰰഀഀ
                glyphs: {}਍            紀Ⰰഀഀ
            family = font.face["font-family"];਍        昀漀爀 ⠀瘀愀爀 瀀爀漀瀀 椀渀 昀漀渀琀⸀昀愀挀攀⤀ 椀昀 ⠀昀漀渀琀⸀昀愀挀攀嬀栀愀猀崀⠀瀀爀漀瀀⤀⤀ 笀ഀഀ
            fontcopy.face[prop] = font.face[prop];਍        紀ഀഀ
        if (this.fonts[family]) {਍            琀栀椀猀⸀昀漀渀琀猀嬀昀愀洀椀氀礀崀⸀瀀甀猀栀⠀昀漀渀琀挀漀瀀礀⤀㬀ഀഀ
        } else {਍            琀栀椀猀⸀昀漀渀琀猀嬀昀愀洀椀氀礀崀 㴀 嬀昀漀渀琀挀漀瀀礀崀㬀ഀഀ
        }਍        椀昀 ⠀℀昀漀渀琀⸀猀瘀最⤀ 笀ഀഀ
            fontcopy.face["units-per-em"] = toInt(font.face["units-per-em"], 10);਍            昀漀爀 ⠀瘀愀爀 最氀礀瀀栀 椀渀 昀漀渀琀⸀最氀礀瀀栀猀⤀ 椀昀 ⠀昀漀渀琀⸀最氀礀瀀栀猀嬀栀愀猀崀⠀最氀礀瀀栀⤀⤀ 笀ഀഀ
                var path = font.glyphs[glyph];਍                昀漀渀琀挀漀瀀礀⸀最氀礀瀀栀猀嬀最氀礀瀀栀崀 㴀 笀ഀഀ
                    w: path.w,਍                    欀㨀 笀紀Ⰰഀഀ
                    d: path.d && "M" + path.d.replace(/[mlcxtrv]/g, function (command) {਍                            爀攀琀甀爀渀 笀氀㨀 ∀䰀∀Ⰰ 挀㨀 ∀䌀∀Ⰰ 砀㨀 ∀稀∀Ⰰ 琀㨀 ∀洀∀Ⰰ 爀㨀 ∀氀∀Ⰰ 瘀㨀 ∀挀∀紀嬀挀漀洀洀愀渀搀崀 簀簀 ∀䴀∀㬀ഀഀ
                        }) + "z"਍                紀㬀ഀഀ
                if (path.k) {਍                    昀漀爀 ⠀瘀愀爀 欀 椀渀 瀀愀琀栀⸀欀⤀ 椀昀 ⠀瀀愀琀栀嬀栀愀猀崀⠀欀⤀⤀ 笀ഀഀ
                        fontcopy.glyphs[glyph].k[k] = path.k[k];਍                    紀ഀഀ
                }਍            紀ഀഀ
        }਍        爀攀琀甀爀渀 昀漀渀琀㬀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * Paper.getFont਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 䘀椀渀搀猀 昀漀渀琀 漀戀樀攀挀琀 椀渀 琀栀攀 爀攀最椀猀琀攀爀攀搀 昀漀渀琀猀 戀礀 最椀瘀攀渀 瀀愀爀愀洀攀琀攀爀猀⸀ 夀漀甀 挀漀甀氀搀 猀瀀攀挀椀昀礀 漀渀氀礀 漀渀攀 眀漀爀搀 昀爀漀洀 琀栀攀 昀漀渀琀 渀愀洀攀Ⰰ 氀椀欀攀 ᰀ䴠礀爀椀愀搀ᴀ†昀漀爀 ᰀ䴠礀爀椀愀搀 倀爀漀ᴀ⸠ഀഀ
     **਍     㸀 倀愀爀愀洀攀琀攀爀猀ഀഀ
     **਍     ⴀ 昀愀洀椀氀礀 ⠀猀琀爀椀渀最⤀ 昀漀渀琀 昀愀洀椀氀礀 渀愀洀攀 漀爀 愀渀礀 眀漀爀搀 昀爀漀洀 椀琀ഀഀ
     - weight (string) #optional font weight਍     ⴀ 猀琀礀氀攀 ⠀猀琀爀椀渀最⤀ ⌀漀瀀琀椀漀渀愀氀 昀漀渀琀 猀琀礀氀攀ഀഀ
     - stretch (string) #optional font stretch਍     㴀 ⠀漀戀樀攀挀琀⤀ 琀栀攀 昀漀渀琀 漀戀樀攀挀琀ഀഀ
     > Usage਍     簀 瀀愀瀀攀爀⸀瀀爀椀渀琀⠀㄀　　Ⰰ ㄀　　Ⰰ ∀吀攀猀琀 猀琀爀椀渀最∀Ⰰ 瀀愀瀀攀爀⸀最攀琀䘀漀渀琀⠀∀吀椀洀攀猀∀Ⰰ 㠀　　⤀Ⰰ ㌀　⤀㬀ഀഀ
    \*/਍    瀀愀瀀攀爀瀀爀漀琀漀⸀最攀琀䘀漀渀琀 㴀 昀甀渀挀琀椀漀渀 ⠀昀愀洀椀氀礀Ⰰ 眀攀椀最栀琀Ⰰ 猀琀礀氀攀Ⰰ 猀琀爀攀琀挀栀⤀ 笀ഀഀ
        stretch = stretch || "normal";਍        猀琀礀氀攀 㴀 猀琀礀氀攀 簀簀 ∀渀漀爀洀愀氀∀㬀ഀഀ
        weight = +weight || {normal: 400, bold: 700, lighter: 300, bolder: 800}[weight] || 400;਍        椀昀 ⠀℀刀⸀昀漀渀琀猀⤀ 笀ഀഀ
            return;਍        紀ഀഀ
        var font = R.fonts[family];਍        椀昀 ⠀℀昀漀渀琀⤀ 笀ഀഀ
            var name = new RegExp("(^|\\s)" + family.replace(/[^\w\d\s+!~.:_-]/g, E) + "(\\s|$)", "i");਍            昀漀爀 ⠀瘀愀爀 昀漀渀琀一愀洀攀 椀渀 刀⸀昀漀渀琀猀⤀ 椀昀 ⠀刀⸀昀漀渀琀猀嬀栀愀猀崀⠀昀漀渀琀一愀洀攀⤀⤀ 笀ഀഀ
                if (name.test(fontName)) {਍                    昀漀渀琀 㴀 刀⸀昀漀渀琀猀嬀昀漀渀琀一愀洀攀崀㬀ഀഀ
                    break;਍                紀ഀഀ
            }਍        紀ഀഀ
        var thefont;਍        椀昀 ⠀昀漀渀琀⤀ 笀ഀഀ
            for (var i = 0, ii = font.length; i < ii; i++) {਍                琀栀攀昀漀渀琀 㴀 昀漀渀琀嬀椀崀㬀ഀഀ
                if (thefont.face["font-weight"] == weight && (thefont.face["font-style"] == style || !thefont.face["font-style"]) && thefont.face["font-stretch"] == stretch) {਍                    戀爀攀愀欀㬀ഀഀ
                }਍            紀ഀഀ
        }਍        爀攀琀甀爀渀 琀栀攀昀漀渀琀㬀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * Paper.print਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 䌀爀攀愀琀攀猀 瀀愀琀栀 琀栀愀琀 爀攀瀀爀攀猀攀渀琀 最椀瘀攀渀 琀攀砀琀 眀爀椀琀琀攀渀 甀猀椀渀最 最椀瘀攀渀 昀漀渀琀 愀琀 最椀瘀攀渀 瀀漀猀椀琀椀漀渀 眀椀琀栀 最椀瘀攀渀 猀椀稀攀⸀ഀഀ
     * Result of the method is path element that contains whole text as a separate path.਍     ⨀⨀ഀഀ
     > Parameters਍     ⨀⨀ഀഀ
     - x (number) x position of the text਍     ⴀ 礀 ⠀渀甀洀戀攀爀⤀ 礀 瀀漀猀椀琀椀漀渀 漀昀 琀栀攀 琀攀砀琀ഀഀ
     - string (string) text to print਍     ⴀ 昀漀渀琀 ⠀漀戀樀攀挀琀⤀ 昀漀渀琀 漀戀樀攀挀琀Ⰰ 猀攀攀 䀀倀愀瀀攀爀⸀最攀琀䘀漀渀琀ഀഀ
     - size (number) #optional size of the font, default is `16`਍     ⴀ 漀爀椀最椀渀 ⠀猀琀爀椀渀最⤀ ⌀漀瀀琀椀漀渀愀氀 挀漀甀氀搀 戀攀 怀∀戀愀猀攀氀椀渀攀∀怀 漀爀 怀∀洀椀搀搀氀攀∀怀Ⰰ 搀攀昀愀甀氀琀 椀猀 怀∀洀椀搀搀氀攀∀怀ഀഀ
     - letter_spacing (number) #optional number in range `-1..1`, default is `0`਍     ⴀ 氀椀渀攀开猀瀀愀挀椀渀最 ⠀渀甀洀戀攀爀⤀ ⌀漀瀀琀椀漀渀愀氀 渀甀洀戀攀爀 椀渀 爀愀渀最攀 怀㄀⸀⸀㌀怀Ⰰ 搀攀昀愀甀氀琀 椀猀 怀㄀怀ഀഀ
     = (object) resulting path element, which consist of all letters਍     㸀 唀猀愀最攀ഀഀ
     | var txt = r.print(10, 50, "print", r.getFont("Museo"), 30).attr({fill: "#fff"});਍    尀⨀⼀ഀഀ
    paperproto.print = function (x, y, string, font, size, origin, letter_spacing, line_spacing) {਍        漀爀椀最椀渀 㴀 漀爀椀最椀渀 簀簀 ∀洀椀搀搀氀攀∀㬀 ⼀⼀ 戀愀猀攀氀椀渀攀簀洀椀搀搀氀攀ഀഀ
        letter_spacing = mmax(mmin(letter_spacing || 0, 1), -1);਍        氀椀渀攀开猀瀀愀挀椀渀最 㴀 洀洀愀砀⠀洀洀椀渀⠀氀椀渀攀开猀瀀愀挀椀渀最 簀簀 ㄀Ⰰ ㌀⤀Ⰰ ㄀⤀㬀ഀഀ
        var letters = Str(string)[split](E),਍            猀栀椀昀琀 㴀 　Ⰰഀഀ
            notfirst = 0,਍            瀀愀琀栀 㴀 䔀Ⰰഀഀ
            scale;਍        刀⸀椀猀⠀昀漀渀琀Ⰰ ∀猀琀爀椀渀最∀⤀ ☀☀ ⠀昀漀渀琀 㴀 琀栀椀猀⸀最攀琀䘀漀渀琀⠀昀漀渀琀⤀⤀㬀ഀഀ
        if (font) {਍            猀挀愀氀攀 㴀 ⠀猀椀稀攀 簀簀 ㄀㘀⤀ ⼀ 昀漀渀琀⸀昀愀挀攀嬀∀甀渀椀琀猀ⴀ瀀攀爀ⴀ攀洀∀崀㬀ഀഀ
            var bb = font.face.bbox[split](separator),਍                琀漀瀀 㴀 ⬀戀戀嬀　崀Ⰰഀഀ
                lineHeight = bb[3] - bb[1],਍                猀栀椀昀琀礀 㴀 　Ⰰഀഀ
                height = +bb[1] + (origin == "baseline" ? lineHeight + (+font.face.descent) : lineHeight / 2);਍            昀漀爀 ⠀瘀愀爀 椀 㴀 　Ⰰ 椀椀 㴀 氀攀琀琀攀爀猀⸀氀攀渀最琀栀㬀 椀 㰀 椀椀㬀 椀⬀⬀⤀ 笀ഀഀ
                if (letters[i] == "\n") {਍                    猀栀椀昀琀 㴀 　㬀ഀഀ
                    curr = 0;਍                    渀漀琀昀椀爀猀琀 㴀 　㬀ഀഀ
                    shifty += lineHeight * line_spacing;਍                紀 攀氀猀攀 笀ഀഀ
                    var prev = notfirst && font.glyphs[letters[i - 1]] || {},਍                        挀甀爀爀 㴀 昀漀渀琀⸀最氀礀瀀栀猀嬀氀攀琀琀攀爀猀嬀椀崀崀㬀ഀഀ
                    shift += notfirst ? (prev.w || font.w) + (prev.k && prev.k[letters[i]] || 0) + (font.w * letter_spacing) : 0;਍                    渀漀琀昀椀爀猀琀 㴀 ㄀㬀ഀഀ
                }਍                椀昀 ⠀挀甀爀爀 ☀☀ 挀甀爀爀⸀搀⤀ 笀ഀഀ
                    path += R.transformPath(curr.d, ["t", shift * scale, shifty * scale, "s", scale, scale, top, height, "t", (x - top) / scale, (y - height) / scale]);਍                紀ഀഀ
            }਍        紀ഀഀ
        return this.path(path).attr({਍            昀椀氀氀㨀 ∀⌀　　　∀Ⰰഀഀ
            stroke: "none"਍        紀⤀㬀ഀഀ
    };਍ഀഀ
    /*\਍     ⨀ 倀愀瀀攀爀⸀愀搀搀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Imports elements in JSON array in format `{type: type, <attributes>}`਍     ⨀⨀ഀഀ
     > Parameters਍     ⨀⨀ഀഀ
     - json (array)਍     㴀 ⠀漀戀樀攀挀琀⤀ 爀攀猀甀氀琀椀渀最 猀攀琀 漀昀 椀洀瀀漀爀琀攀搀 攀氀攀洀攀渀琀猀ഀഀ
     > Usage਍     簀 瀀愀瀀攀爀⸀愀搀搀⠀嬀ഀഀ
     |     {਍     簀         琀礀瀀攀㨀 ∀挀椀爀挀氀攀∀Ⰰഀഀ
     |         cx: 10,਍     簀         挀礀㨀 ㄀　Ⰰഀഀ
     |         r: 5਍     簀     紀Ⰰഀഀ
     |     {਍     簀         琀礀瀀攀㨀 ∀爀攀挀琀∀Ⰰഀഀ
     |         x: 10,਍     簀         礀㨀 ㄀　Ⰰഀഀ
     |         width: 10,਍     簀         栀攀椀最栀琀㨀 ㄀　Ⰰഀഀ
     |         fill: "#fc0"਍     簀     紀ഀഀ
     | ]);਍    尀⨀⼀ഀഀ
    paperproto.add = function (json) {਍        椀昀 ⠀刀⸀椀猀⠀樀猀漀渀Ⰰ ∀愀爀爀愀礀∀⤀⤀ 笀ഀഀ
            var res = this.set(),਍                椀 㴀 　Ⰰഀഀ
                ii = json.length,਍                樀㬀ഀഀ
            for (; i < ii; i++) {਍                樀 㴀 樀猀漀渀嬀椀崀 簀簀 笀紀㬀ഀഀ
                elements[has](j.type) && res.push(this[j.type]().attr(j));਍            紀ഀഀ
        }਍        爀攀琀甀爀渀 爀攀猀㬀ഀഀ
    };਍ഀഀ
    /*\਍     ⨀ 刀愀瀀栀愀攀氀⸀昀漀爀洀愀琀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Simple format function. Replaces construction of type “`{<number>}`” to the corresponding argument.਍     ⨀⨀ഀഀ
     > Parameters਍     ⨀⨀ഀഀ
     - token (string) string to format਍     ⴀ ☀†⠀猀琀爀椀渀最⤀ 爀攀猀琀 漀昀 愀爀最甀洀攀渀琀猀 眀椀氀氀 戀攀 琀爀攀愀琀攀搀 愀猀 瀀愀爀愀洀攀琀攀爀猀 昀漀爀 爀攀瀀氀愀挀攀洀攀渀琀ഀഀ
     = (string) formated string਍     㸀 唀猀愀最攀ഀഀ
     | var x = 10,਍     簀     礀 㴀 ㈀　Ⰰഀഀ
     |     width = 40,਍     簀     栀攀椀最栀琀 㴀 㔀　㬀ഀഀ
     | // this will draw a rectangular shape equivalent to "M10,20h40v50h-40z"਍     簀 瀀愀瀀攀爀⸀瀀愀琀栀⠀刀愀瀀栀愀攀氀⸀昀漀爀洀愀琀⠀∀䴀笀　紀Ⰰ笀㄀紀栀笀㈀紀瘀笀㌀紀栀笀㐀紀稀∀Ⰰ 砀Ⰰ 礀Ⰰ 眀椀搀琀栀Ⰰ 栀攀椀最栀琀Ⰰ ⴀ眀椀搀琀栀⤀⤀㬀ഀഀ
    \*/਍    刀⸀昀漀爀洀愀琀 㴀 昀甀渀挀琀椀漀渀 ⠀琀漀欀攀渀Ⰰ 瀀愀爀愀洀猀⤀ 笀ഀഀ
        var args = R.is(params, array) ? [0][concat](params) : arguments;਍        琀漀欀攀渀 ☀☀ 刀⸀椀猀⠀琀漀欀攀渀Ⰰ 猀琀爀椀渀最⤀ ☀☀ 愀爀最猀⸀氀攀渀最琀栀 ⴀ ㄀ ☀☀ ⠀琀漀欀攀渀 㴀 琀漀欀攀渀⸀爀攀瀀氀愀挀攀⠀昀漀爀洀愀琀爀最Ⰰ 昀甀渀挀琀椀漀渀 ⠀猀琀爀Ⰰ 椀⤀ 笀ഀഀ
            return args[++i] == null ? E : args[i];਍        紀⤀⤀㬀ഀഀ
        return token || E;਍    紀㬀ഀഀ
    /*\਍     ⨀ 刀愀瀀栀愀攀氀⸀昀甀氀氀昀椀氀氀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * A little bit more advanced format function than @Raphael.format. Replaces construction of type “`{<name>}`” to the corresponding argument.਍     ⨀⨀ഀഀ
     > Parameters਍     ⨀⨀ഀഀ
     - token (string) string to format਍     ⴀ 樀猀漀渀 ⠀漀戀樀攀挀琀⤀ 漀戀樀攀挀琀 眀栀椀挀栀 瀀爀漀瀀攀爀琀椀攀猀 眀椀氀氀 戀攀 甀猀攀搀 愀猀 愀 爀攀瀀氀愀挀攀洀攀渀琀ഀഀ
     = (string) formated string਍     㸀 唀猀愀最攀ഀഀ
     | // this will draw a rectangular shape equivalent to "M10,20h40v50h-40z"਍     簀 瀀愀瀀攀爀⸀瀀愀琀栀⠀刀愀瀀栀愀攀氀⸀昀甀氀氀昀椀氀氀⠀∀䴀笀砀紀Ⰰ笀礀紀栀笀搀椀洀⸀眀椀搀琀栀紀瘀笀搀椀洀⸀栀攀椀最栀琀紀栀笀搀椀洀嬀✀渀攀最愀琀椀瘀攀 眀椀搀琀栀✀崀紀稀∀Ⰰ 笀ഀഀ
     |     x: 10,਍     簀     礀㨀 ㈀　Ⰰഀഀ
     |     dim: {਍     簀         眀椀搀琀栀㨀 㐀　Ⰰഀഀ
     |         height: 50,਍     簀         ∀渀攀最愀琀椀瘀攀 眀椀搀琀栀∀㨀 ⴀ㐀　ഀഀ
     |     }਍     簀 紀⤀⤀㬀ഀഀ
    \*/਍    刀⸀昀甀氀氀昀椀氀氀 㴀 ⠀昀甀渀挀琀椀漀渀 ⠀⤀ 笀ഀഀ
        var tokenRegex = /\{([^\}]+)\}/g,਍            漀戀樀一漀琀愀琀椀漀渀刀攀最攀砀 㴀 ⼀⠀㼀㨀⠀㼀㨀帀簀尀⸀⤀⠀⸀⬀㼀⤀⠀㼀㴀尀嬀簀尀⸀簀␀簀尀⠀⤀簀尀嬀⠀✀簀∀⤀⠀⸀⬀㼀⤀尀㈀尀崀⤀⠀尀⠀尀⤀⤀㼀⼀最Ⰰ ⼀⼀ 洀愀琀挀栀攀猀 ⸀砀砀砀砀砀 漀爀 嬀∀砀砀砀砀砀∀崀 琀漀 爀甀渀 漀瘀攀爀 漀戀樀攀挀琀 瀀爀漀瀀攀爀琀椀攀猀ഀഀ
            replacer = function (all, key, obj) {਍                瘀愀爀 爀攀猀 㴀 漀戀樀㬀ഀഀ
                key.replace(objNotationRegex, function (all, name, quote, quotedName, isFunc) {਍                    渀愀洀攀 㴀 渀愀洀攀 簀簀 焀甀漀琀攀搀一愀洀攀㬀ഀഀ
                    if (res) {਍                        椀昀 ⠀渀愀洀攀 椀渀 爀攀猀⤀ 笀ഀഀ
                            res = res[name];਍                        紀ഀഀ
                        typeof res == "function" && isFunc && (res = res());਍                    紀ഀഀ
                });਍                爀攀猀 㴀 ⠀爀攀猀 㴀㴀 渀甀氀氀 簀簀 爀攀猀 㴀㴀 漀戀樀 㼀 愀氀氀 㨀 爀攀猀⤀ ⬀ ∀∀㬀ഀഀ
                return res;਍            紀㬀ഀഀ
        return function (str, obj) {਍            爀攀琀甀爀渀 匀琀爀椀渀最⠀猀琀爀⤀⸀爀攀瀀氀愀挀攀⠀琀漀欀攀渀刀攀最攀砀Ⰰ 昀甀渀挀琀椀漀渀 ⠀愀氀氀Ⰰ 欀攀礀⤀ 笀ഀഀ
                return replacer(all, key, obj);਍            紀⤀㬀ഀഀ
        };਍    紀⤀⠀⤀㬀ഀഀ
    /*\਍     ⨀ 刀愀瀀栀愀攀氀⸀渀椀渀樀愀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * If you want to leave no trace of Raphaël (Well, Raphaël creates only one global variable `Raphael`, but anyway.) You can use `ninja` method.਍     ⨀ 䈀攀眀愀爀攀Ⰰ 琀栀愀琀 椀渀 琀栀椀猀 挀愀猀攀 瀀氀甀最椀渀猀 挀漀甀氀搀 猀琀漀瀀 眀漀爀欀椀渀最Ⰰ 戀攀挀愀甀猀攀 琀栀攀礀 愀爀攀 搀攀瀀攀渀搀椀渀最 漀渀 最氀漀戀愀氀 瘀愀爀椀愀戀氀攀 攀砀椀猀琀愀渀挀攀⸀ഀഀ
     **਍     㴀 ⠀漀戀樀攀挀琀⤀ 刀愀瀀栀愀攀氀 漀戀樀攀挀琀ഀഀ
     > Usage਍     簀 ⠀昀甀渀挀琀椀漀渀 ⠀氀漀挀愀氀开爀愀瀀栀愀攀氀⤀ 笀ഀഀ
     |     var paper = local_raphael(10, 10, 320, 200);਍     簀     ☀ഠഀ
     | })(Raphael.ninja());਍    尀⨀⼀ഀഀ
    R.ninja = function () {਍        漀氀搀刀愀瀀栀愀攀氀⸀眀愀猀 㼀 ⠀最⸀眀椀渀⸀刀愀瀀栀愀攀氀 㴀 漀氀搀刀愀瀀栀愀攀氀⸀椀猀⤀ 㨀 搀攀氀攀琀攀 刀愀瀀栀愀攀氀㬀ഀഀ
        return R;਍    紀㬀ഀഀ
    /*\਍     ⨀ 刀愀瀀栀愀攀氀⸀猀琀ഀഀ
     [ property (object) ]਍     ⨀⨀ഀഀ
     * You can add your own method to elements and sets. It is wise to add a set method for each element method਍     ⨀ 礀漀甀 愀搀搀攀搀Ⰰ 猀漀 礀漀甀 眀椀氀氀 戀攀 愀戀氀攀 琀漀 挀愀氀氀 琀栀攀 猀愀洀攀 洀攀琀栀漀搀 漀渀 猀攀琀猀 琀漀漀⸀ഀഀ
     **਍     ⨀ 匀攀攀 愀氀猀漀 䀀刀愀瀀栀愀攀氀⸀攀氀⸀ഀഀ
     > Usage਍     簀 刀愀瀀栀愀攀氀⸀攀氀⸀爀攀搀 㴀 昀甀渀挀琀椀漀渀 ⠀⤀ 笀ഀഀ
     |     this.attr({fill: "#f00"});਍     簀 紀㬀ഀഀ
     | Raphael.st.red = function () {਍     簀     琀栀椀猀⸀昀漀爀䔀愀挀栀⠀昀甀渀挀琀椀漀渀 ⠀攀氀⤀ 笀ഀഀ
     |         el.red();਍     簀     紀⤀㬀ഀഀ
     | };਍     簀 ⼀⼀ 琀栀攀渀 甀猀攀 椀琀ഀഀ
     | paper.set(paper.circle(100, 100, 20), paper.circle(110, 100, 20)).red();਍    尀⨀⼀ഀഀ
    R.st = setproto;਍ഀഀ
    eve.on("raphael.DOMload", function () {਍        氀漀愀搀攀搀 㴀 琀爀甀攀㬀ഀഀ
    });਍ഀഀ
    // Firefox <3.6 fix: http://webreflection.blogspot.com/2009/11/195-chars-to-help-lazy-loading.html਍    ⠀昀甀渀挀琀椀漀渀 ⠀搀漀挀Ⰰ 氀漀愀搀攀搀Ⰰ 昀⤀ 笀ഀഀ
        if (doc.readyState == null && doc.addEventListener){਍            搀漀挀⸀愀搀搀䔀瘀攀渀琀䰀椀猀琀攀渀攀爀⠀氀漀愀搀攀搀Ⰰ 昀 㴀 昀甀渀挀琀椀漀渀 ⠀⤀ 笀ഀഀ
                doc.removeEventListener(loaded, f, false);਍                搀漀挀⸀爀攀愀搀礀匀琀愀琀攀 㴀 ∀挀漀洀瀀氀攀琀攀∀㬀ഀഀ
            }, false);਍            搀漀挀⸀爀攀愀搀礀匀琀愀琀攀 㴀 ∀氀漀愀搀椀渀最∀㬀ഀഀ
        }਍        昀甀渀挀琀椀漀渀 椀猀䰀漀愀搀攀搀⠀⤀ 笀ഀഀ
            (/in/).test(doc.readyState) ? setTimeout(isLoaded, 9) : R.eve("raphael.DOMload");਍        紀ഀഀ
        isLoaded();਍    紀⤀⠀搀漀挀甀洀攀渀琀Ⰰ ∀䐀伀䴀䌀漀渀琀攀渀琀䰀漀愀搀攀搀∀⤀㬀ഀഀ
਍⼀⼀ ఀ%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%ဥ‥尀尀ഀഀ
// │ Raphaël - JavaScript Vector Library                                 │ \\਍⼀⼀ ᰀ%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%␥‥尀尀ഀഀ
// │ SVG Module                                                          │ \\਍⼀⼀ ᰀ%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%␥‥尀尀ഀഀ
// │ Copyright (c) 2008-2011 Dmitry Baranovskiy (http://raphaeljs.com)   │ \\਍⼀⼀ Ȁ‥䌀漀瀀礀爀椀最栀琀 ⠀挀⤀ ㈀　　㠀ⴀ㈀　㄀㄀ 匀攀渀挀栀愀 䰀愀戀猀 ⠀栀琀琀瀀㨀⼀⼀猀攀渀挀栀愀⸀挀漀洀⤀             Ȁ‥尀尀ഀഀ
// │ Licensed under the MIT (http://raphaeljs.com/license.html) license. │ \\਍⼀⼀ ᐀%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%ᠥ‥尀尀ഀഀ
਍⠀昀甀渀挀琀椀漀渀⠀⤀笀ഀഀ
    if (!R.svg) {਍        爀攀琀甀爀渀㬀ഀഀ
    }਍    瘀愀爀 栀愀猀 㴀 ∀栀愀猀伀眀渀倀爀漀瀀攀爀琀礀∀Ⰰഀഀ
        Str = String,਍        琀漀䘀氀漀愀琀 㴀 瀀愀爀猀攀䘀氀漀愀琀Ⰰഀഀ
        toInt = parseInt,਍        洀愀琀栀 㴀 䴀愀琀栀Ⰰഀഀ
        mmax = math.max,਍        愀戀猀 㴀 洀愀琀栀⸀愀戀猀Ⰰഀഀ
        pow = math.pow,਍        猀攀瀀愀爀愀琀漀爀 㴀 ⼀嬀Ⰰ 崀⬀⼀Ⰰഀഀ
        eve = R.eve,਍        䔀 㴀 ∀∀Ⰰഀഀ
        S = " ";਍    瘀愀爀 砀氀椀渀欀 㴀 ∀栀琀琀瀀㨀⼀⼀眀眀眀⸀眀㌀⸀漀爀最⼀㄀㤀㤀㤀⼀砀氀椀渀欀∀Ⰰഀഀ
        markers = {਍            戀氀漀挀欀㨀 ∀䴀㔀Ⰰ　 　Ⰰ㈀⸀㔀 㔀Ⰰ㔀稀∀Ⰰഀഀ
            classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",਍            搀椀愀洀漀渀搀㨀 ∀䴀㈀⸀㔀Ⰰ　 㔀Ⰰ㈀⸀㔀 ㈀⸀㔀Ⰰ㔀 　Ⰰ㈀⸀㔀稀∀Ⰰഀഀ
            open: "M6,1 1,3.5 6,6",਍            漀瘀愀氀㨀 ∀䴀㈀⸀㔀Ⰰ　䄀㈀⸀㔀Ⰰ㈀⸀㔀Ⰰ　Ⰰ　Ⰰ㄀Ⰰ㈀⸀㔀Ⰰ㔀 ㈀⸀㔀Ⰰ㈀⸀㔀Ⰰ　Ⰰ　Ⰰ㄀Ⰰ㈀⸀㔀Ⰰ　稀∀ഀഀ
        },਍        洀愀爀欀攀爀䌀漀甀渀琀攀爀 㴀 笀紀㬀ഀഀ
    R.toString = function () {਍        爀攀琀甀爀渀  ∀夀漀甀爀 戀爀漀眀猀攀爀 猀甀瀀瀀漀爀琀猀 匀嘀䜀⸀尀渀夀漀甀 愀爀攀 爀甀渀渀椀渀最 刀愀瀀栀愀尀砀攀戀氀 ∀ ⬀ 琀栀椀猀⸀瘀攀爀猀椀漀渀㬀ഀഀ
    };਍    瘀愀爀 ␀ 㴀 昀甀渀挀琀椀漀渀 ⠀攀氀Ⰰ 愀琀琀爀⤀ 笀ഀഀ
        if (attr) {਍            椀昀 ⠀琀礀瀀攀漀昀 攀氀 㴀㴀 ∀猀琀爀椀渀最∀⤀ 笀ഀഀ
                el = $(el);਍            紀ഀഀ
            for (var key in attr) if (attr[has](key)) {਍                椀昀 ⠀欀攀礀⸀猀甀戀猀琀爀椀渀最⠀　Ⰰ 㘀⤀ 㴀㴀 ∀砀氀椀渀欀㨀∀⤀ 笀ഀഀ
                    el.setAttributeNS(xlink, key.substring(6), Str(attr[key]));਍                紀 攀氀猀攀 笀ഀഀ
                    el.setAttribute(key, Str(attr[key]));਍                紀ഀഀ
            }਍        紀 攀氀猀攀 笀ഀഀ
            el = R._g.doc.createElementNS("http://www.w3.org/2000/svg", el);਍            攀氀⸀猀琀礀氀攀 ☀☀ ⠀攀氀⸀猀琀礀氀攀⸀眀攀戀欀椀琀吀愀瀀䠀椀最栀氀椀最栀琀䌀漀氀漀爀 㴀 ∀爀最戀愀⠀　Ⰰ　Ⰰ　Ⰰ　⤀∀⤀㬀ഀഀ
        }਍        爀攀琀甀爀渀 攀氀㬀ഀഀ
    },਍    愀搀搀䜀爀愀搀椀攀渀琀䘀椀氀氀 㴀 昀甀渀挀琀椀漀渀 ⠀攀氀攀洀攀渀琀Ⰰ 最爀愀搀椀攀渀琀⤀ 笀ഀഀ
        var type = "linear",਍            椀搀 㴀 攀氀攀洀攀渀琀⸀椀搀 ⬀ 最爀愀搀椀攀渀琀Ⰰഀഀ
            fx = .5, fy = .5,਍            漀 㴀 攀氀攀洀攀渀琀⸀渀漀搀攀Ⰰഀഀ
            SVG = element.paper,਍            猀 㴀 漀⸀猀琀礀氀攀Ⰰഀഀ
            el = R._g.doc.getElementById(id);਍        椀昀 ⠀℀攀氀⤀ 笀ഀഀ
            gradient = Str(gradient).replace(R._radial_gradient, function (all, _fx, _fy) {਍                琀礀瀀攀 㴀 ∀爀愀搀椀愀氀∀㬀ഀഀ
                if (_fx && _fy) {਍                    昀砀 㴀 琀漀䘀氀漀愀琀⠀开昀砀⤀㬀ഀഀ
                    fy = toFloat(_fy);਍                    瘀愀爀 搀椀爀 㴀 ⠀⠀昀礀 㸀 ⸀㔀⤀ ⨀ ㈀ ⴀ ㄀⤀㬀ഀഀ
                    pow(fx - .5, 2) + pow(fy - .5, 2) > .25 &&਍                        ⠀昀礀 㴀 洀愀琀栀⸀猀焀爀琀⠀⸀㈀㔀 ⴀ 瀀漀眀⠀昀砀 ⴀ ⸀㔀Ⰰ ㈀⤀⤀ ⨀ 搀椀爀 ⬀ ⸀㔀⤀ ☀☀ഀഀ
                        fy != .5 &&਍                        ⠀昀礀 㴀 昀礀⸀琀漀䘀椀砀攀搀⠀㔀⤀ ⴀ ㄀攀ⴀ㔀 ⨀ 搀椀爀⤀㬀ഀഀ
                }਍                爀攀琀甀爀渀 䔀㬀ഀഀ
            });਍            最爀愀搀椀攀渀琀 㴀 最爀愀搀椀攀渀琀⸀猀瀀氀椀琀⠀⼀尀猀⨀尀ⴀ尀猀⨀⼀⤀㬀ഀഀ
            if (type == "linear") {਍                瘀愀爀 愀渀最氀攀 㴀 最爀愀搀椀攀渀琀⸀猀栀椀昀琀⠀⤀㬀ഀഀ
                angle = -toFloat(angle);਍                椀昀 ⠀椀猀一愀一⠀愀渀最氀攀⤀⤀ 笀ഀഀ
                    return null;਍                紀ഀഀ
                var vector = [0, 0, math.cos(R.rad(angle)), math.sin(R.rad(angle))],਍                    洀愀砀 㴀 ㄀ ⼀ ⠀洀洀愀砀⠀愀戀猀⠀瘀攀挀琀漀爀嬀㈀崀⤀Ⰰ 愀戀猀⠀瘀攀挀琀漀爀嬀㌀崀⤀⤀ 簀簀 ㄀⤀㬀ഀഀ
                vector[2] *= max;਍                瘀攀挀琀漀爀嬀㌀崀 ⨀㴀 洀愀砀㬀ഀഀ
                if (vector[2] < 0) {਍                    瘀攀挀琀漀爀嬀　崀 㴀 ⴀ瘀攀挀琀漀爀嬀㈀崀㬀ഀഀ
                    vector[2] = 0;਍                紀ഀഀ
                if (vector[3] < 0) {਍                    瘀攀挀琀漀爀嬀㄀崀 㴀 ⴀ瘀攀挀琀漀爀嬀㌀崀㬀ഀഀ
                    vector[3] = 0;਍                紀ഀഀ
            }਍            瘀愀爀 搀漀琀猀 㴀 刀⸀开瀀愀爀猀攀䐀漀琀猀⠀最爀愀搀椀攀渀琀⤀㬀ഀഀ
            if (!dots) {਍                爀攀琀甀爀渀 渀甀氀氀㬀ഀഀ
            }਍            椀搀 㴀 椀搀⸀爀攀瀀氀愀挀攀⠀⼀嬀尀⠀尀⤀尀猀Ⰰ尀砀戀　⌀崀⼀最Ⰰ ∀开∀⤀㬀ഀഀ
਍            椀昀 ⠀攀氀攀洀攀渀琀⸀最爀愀搀椀攀渀琀 ☀☀ 椀搀 ℀㴀 攀氀攀洀攀渀琀⸀最爀愀搀椀攀渀琀⸀椀搀⤀ 笀ഀഀ
                SVG.defs.removeChild(element.gradient);਍                搀攀氀攀琀攀 攀氀攀洀攀渀琀⸀最爀愀搀椀攀渀琀㬀ഀഀ
            }਍ഀഀ
            if (!element.gradient) {਍                攀氀 㴀 ␀⠀琀礀瀀攀 ⬀ ∀䜀爀愀搀椀攀渀琀∀Ⰰ 笀椀搀㨀 椀搀紀⤀㬀ഀഀ
                element.gradient = el;਍                ␀⠀攀氀Ⰰ 琀礀瀀攀 㴀㴀 ∀爀愀搀椀愀氀∀ 㼀 笀ഀഀ
                    fx: fx,਍                    昀礀㨀 昀礀ഀഀ
                } : {਍                    砀㄀㨀 瘀攀挀琀漀爀嬀　崀Ⰰഀഀ
                    y1: vector[1],਍                    砀㈀㨀 瘀攀挀琀漀爀嬀㈀崀Ⰰഀഀ
                    y2: vector[3],਍                    最爀愀搀椀攀渀琀吀爀愀渀猀昀漀爀洀㨀 攀氀攀洀攀渀琀⸀洀愀琀爀椀砀⸀椀渀瘀攀爀琀⠀⤀ഀഀ
                });਍                匀嘀䜀⸀搀攀昀猀⸀愀瀀瀀攀渀搀䌀栀椀氀搀⠀攀氀⤀㬀ഀഀ
                for (var i = 0, ii = dots.length; i < ii; i++) {਍                    攀氀⸀愀瀀瀀攀渀搀䌀栀椀氀搀⠀␀⠀∀猀琀漀瀀∀Ⰰ 笀ഀഀ
                        offset: dots[i].offset ? dots[i].offset : i ? "100%" : "0%",਍                        ∀猀琀漀瀀ⴀ挀漀氀漀爀∀㨀 搀漀琀猀嬀椀崀⸀挀漀氀漀爀 簀簀 ∀⌀昀昀昀∀ഀഀ
                    }));਍                紀ഀഀ
            }਍        紀ഀഀ
        $(o, {਍            昀椀氀氀㨀 ∀甀爀氀⠀✀∀ ⬀ 搀漀挀甀洀攀渀琀⸀氀漀挀愀琀椀漀渀 ⬀ ∀⌀∀ ⬀ 椀搀 ⬀ ∀✀⤀∀Ⰰഀഀ
            opacity: 1,਍            ∀昀椀氀氀ⴀ漀瀀愀挀椀琀礀∀㨀 ㄀ഀഀ
        });਍        猀⸀昀椀氀氀 㴀 䔀㬀ഀഀ
        s.opacity = 1;਍        猀⸀昀椀氀氀伀瀀愀挀椀琀礀 㴀 ㄀㬀ഀഀ
        return 1;਍    紀Ⰰഀഀ
    updatePosition = function (o) {਍        瘀愀爀 戀戀漀砀 㴀 漀⸀最攀琀䈀䈀漀砀⠀㄀⤀㬀ഀഀ
        $(o.pattern, {patternTransform: o.matrix.invert() + " translate(" + bbox.x + "," + bbox.y + ")"});਍    紀Ⰰഀഀ
    addArrow = function (o, value, isEnd) {਍        椀昀 ⠀漀⸀琀礀瀀攀 㴀㴀 ∀瀀愀琀栀∀⤀ 笀ഀഀ
            var values = Str(value).toLowerCase().split("-"),਍                瀀 㴀 漀⸀瀀愀瀀攀爀Ⰰഀഀ
                se = isEnd ? "end" : "start",਍                渀漀搀攀 㴀 漀⸀渀漀搀攀Ⰰഀഀ
                attrs = o.attrs,਍                猀琀爀漀欀攀 㴀 愀琀琀爀猀嬀∀猀琀爀漀欀攀ⴀ眀椀搀琀栀∀崀Ⰰഀഀ
                i = values.length,਍                琀礀瀀攀 㴀 ∀挀氀愀猀猀椀挀∀Ⰰഀഀ
                from,਍                琀漀Ⰰഀഀ
                dx,਍                爀攀昀堀Ⰰഀഀ
                attr,਍                眀 㴀 ㌀Ⰰഀഀ
                h = 3,਍                琀 㴀 㔀㬀ഀഀ
            while (i--) {਍                猀眀椀琀挀栀 ⠀瘀愀氀甀攀猀嬀椀崀⤀ 笀ഀഀ
                    case "block":਍                    挀愀猀攀 ∀挀氀愀猀猀椀挀∀㨀ഀഀ
                    case "oval":਍                    挀愀猀攀 ∀搀椀愀洀漀渀搀∀㨀ഀഀ
                    case "open":਍                    挀愀猀攀 ∀渀漀渀攀∀㨀ഀഀ
                        type = values[i];਍                        戀爀攀愀欀㬀ഀഀ
                    case "wide": h = 5; break;਍                    挀愀猀攀 ∀渀愀爀爀漀眀∀㨀 栀 㴀 ㈀㬀 戀爀攀愀欀㬀ഀഀ
                    case "long": w = 5; break;਍                    挀愀猀攀 ∀猀栀漀爀琀∀㨀 眀 㴀 ㈀㬀 戀爀攀愀欀㬀ഀഀ
                }਍            紀ഀഀ
            if (type == "open") {਍                眀 ⬀㴀 ㈀㬀ഀഀ
                h += 2;਍                琀 ⬀㴀 ㈀㬀ഀഀ
                dx = 1;਍                爀攀昀堀 㴀 椀猀䔀渀搀 㼀 㐀 㨀 ㄀㬀ഀഀ
                attr = {਍                    昀椀氀氀㨀 ∀渀漀渀攀∀Ⰰഀഀ
                    stroke: attrs.stroke਍                紀㬀ഀഀ
            } else {਍                爀攀昀堀 㴀 搀砀 㴀 眀 ⼀ ㈀㬀ഀഀ
                attr = {਍                    昀椀氀氀㨀 愀琀琀爀猀⸀猀琀爀漀欀攀Ⰰഀഀ
                    stroke: "none"਍                紀㬀ഀഀ
            }਍            椀昀 ⠀漀⸀开⸀愀爀爀漀眀猀⤀ 笀ഀഀ
                if (isEnd) {਍                    漀⸀开⸀愀爀爀漀眀猀⸀攀渀搀倀愀琀栀 ☀☀ 洀愀爀欀攀爀䌀漀甀渀琀攀爀嬀漀⸀开⸀愀爀爀漀眀猀⸀攀渀搀倀愀琀栀崀ⴀⴀ㬀ഀഀ
                    o._.arrows.endMarker && markerCounter[o._.arrows.endMarker]--;਍                紀 攀氀猀攀 笀ഀഀ
                    o._.arrows.startPath && markerCounter[o._.arrows.startPath]--;਍                    漀⸀开⸀愀爀爀漀眀猀⸀猀琀愀爀琀䴀愀爀欀攀爀 ☀☀ 洀愀爀欀攀爀䌀漀甀渀琀攀爀嬀漀⸀开⸀愀爀爀漀眀猀⸀猀琀愀爀琀䴀愀爀欀攀爀崀ⴀⴀ㬀ഀഀ
                }਍            紀 攀氀猀攀 笀ഀഀ
                o._.arrows = {};਍            紀ഀഀ
            if (type != "none") {਍                瘀愀爀 瀀愀琀栀䤀搀 㴀 ∀爀愀瀀栀愀攀氀ⴀ洀愀爀欀攀爀ⴀ∀ ⬀ 琀礀瀀攀Ⰰഀഀ
                    markerId = "raphael-marker-" + se + type + w + h + "-obj" + o.id;਍                椀昀 ⠀℀刀⸀开最⸀搀漀挀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀瀀愀琀栀䤀搀⤀⤀ 笀ഀഀ
                    p.defs.appendChild($($("path"), {਍                        ∀猀琀爀漀欀攀ⴀ氀椀渀攀挀愀瀀∀㨀 ∀爀漀甀渀搀∀Ⰰഀഀ
                        d: markers[type],਍                        椀搀㨀 瀀愀琀栀䤀搀ഀഀ
                    }));਍                    洀愀爀欀攀爀䌀漀甀渀琀攀爀嬀瀀愀琀栀䤀搀崀 㴀 ㄀㬀ഀഀ
                } else {਍                    洀愀爀欀攀爀䌀漀甀渀琀攀爀嬀瀀愀琀栀䤀搀崀⬀⬀㬀ഀഀ
                }਍                瘀愀爀 洀愀爀欀攀爀 㴀 刀⸀开最⸀搀漀挀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀洀愀爀欀攀爀䤀搀⤀Ⰰഀഀ
                    use;਍                椀昀 ⠀℀洀愀爀欀攀爀⤀ 笀ഀഀ
                    marker = $($("marker"), {਍                        椀搀㨀 洀愀爀欀攀爀䤀搀Ⰰഀഀ
                        markerHeight: h,਍                        洀愀爀欀攀爀圀椀搀琀栀㨀 眀Ⰰഀഀ
                        orient: "auto",਍                        爀攀昀堀㨀 爀攀昀堀Ⰰഀഀ
                        refY: h / 2਍                    紀⤀㬀ഀഀ
                    use = $($("use"), {਍                        ∀砀氀椀渀欀㨀栀爀攀昀∀㨀 ∀⌀∀ ⬀ 瀀愀琀栀䤀搀Ⰰഀഀ
                        transform: (isEnd ? "rotate(180 " + w / 2 + " " + h / 2 + ") " : E) + "scale(" + w / t + "," + h / t + ")",਍                        ∀猀琀爀漀欀攀ⴀ眀椀搀琀栀∀㨀 ⠀㄀ ⼀ ⠀⠀眀 ⼀ 琀 ⬀ 栀 ⼀ 琀⤀ ⼀ ㈀⤀⤀⸀琀漀䘀椀砀攀搀⠀㐀⤀ഀഀ
                    });਍                    洀愀爀欀攀爀⸀愀瀀瀀攀渀搀䌀栀椀氀搀⠀甀猀攀⤀㬀ഀഀ
                    p.defs.appendChild(marker);਍                    洀愀爀欀攀爀䌀漀甀渀琀攀爀嬀洀愀爀欀攀爀䤀搀崀 㴀 ㄀㬀ഀഀ
                } else {਍                    洀愀爀欀攀爀䌀漀甀渀琀攀爀嬀洀愀爀欀攀爀䤀搀崀⬀⬀㬀ഀഀ
                    use = marker.getElementsByTagName("use")[0];਍                紀ഀഀ
                $(use, attr);਍                瘀愀爀 搀攀氀琀愀 㴀 搀砀 ⨀ ⠀琀礀瀀攀 ℀㴀 ∀搀椀愀洀漀渀搀∀ ☀☀ 琀礀瀀攀 ℀㴀 ∀漀瘀愀氀∀⤀㬀ഀഀ
                if (isEnd) {਍                    昀爀漀洀 㴀 漀⸀开⸀愀爀爀漀眀猀⸀猀琀愀爀琀搀砀 ⨀ 猀琀爀漀欀攀 簀簀 　㬀ഀഀ
                    to = R.getTotalLength(attrs.path) - delta * stroke;਍                紀 攀氀猀攀 笀ഀഀ
                    from = delta * stroke;਍                    琀漀 㴀 刀⸀最攀琀吀漀琀愀氀䰀攀渀最琀栀⠀愀琀琀爀猀⸀瀀愀琀栀⤀ ⴀ ⠀漀⸀开⸀愀爀爀漀眀猀⸀攀渀搀搀砀 ⨀ 猀琀爀漀欀攀 簀簀 　⤀㬀ഀഀ
                }਍                愀琀琀爀 㴀 笀紀㬀ഀഀ
                attr["marker-" + se] = "url(#" + markerId + ")";਍                椀昀 ⠀琀漀 簀簀 昀爀漀洀⤀ 笀ഀഀ
                    attr.d = R.getSubpath(attrs.path, from, to);਍                紀ഀഀ
                $(node, attr);਍                漀⸀开⸀愀爀爀漀眀猀嬀猀攀 ⬀ ∀倀愀琀栀∀崀 㴀 瀀愀琀栀䤀搀㬀ഀഀ
                o._.arrows[se + "Marker"] = markerId;਍                漀⸀开⸀愀爀爀漀眀猀嬀猀攀 ⬀ ∀搀砀∀崀 㴀 搀攀氀琀愀㬀ഀഀ
                o._.arrows[se + "Type"] = type;਍                漀⸀开⸀愀爀爀漀眀猀嬀猀攀 ⬀ ∀匀琀爀椀渀最∀崀 㴀 瘀愀氀甀攀㬀ഀഀ
            } else {਍                椀昀 ⠀椀猀䔀渀搀⤀ 笀ഀഀ
                    from = o._.arrows.startdx * stroke || 0;਍                    琀漀 㴀 刀⸀最攀琀吀漀琀愀氀䰀攀渀最琀栀⠀愀琀琀爀猀⸀瀀愀琀栀⤀ ⴀ 昀爀漀洀㬀ഀഀ
                } else {਍                    昀爀漀洀 㴀 　㬀ഀഀ
                    to = R.getTotalLength(attrs.path) - (o._.arrows.enddx * stroke || 0);਍                紀ഀഀ
                o._.arrows[se + "Path"] && $(node, {d: R.getSubpath(attrs.path, from, to)});਍                搀攀氀攀琀攀 漀⸀开⸀愀爀爀漀眀猀嬀猀攀 ⬀ ∀倀愀琀栀∀崀㬀ഀഀ
                delete o._.arrows[se + "Marker"];਍                搀攀氀攀琀攀 漀⸀开⸀愀爀爀漀眀猀嬀猀攀 ⬀ ∀搀砀∀崀㬀ഀഀ
                delete o._.arrows[se + "Type"];਍                搀攀氀攀琀攀 漀⸀开⸀愀爀爀漀眀猀嬀猀攀 ⬀ ∀匀琀爀椀渀最∀崀㬀ഀഀ
            }਍            昀漀爀 ⠀愀琀琀爀 椀渀 洀愀爀欀攀爀䌀漀甀渀琀攀爀⤀ 椀昀 ⠀洀愀爀欀攀爀䌀漀甀渀琀攀爀嬀栀愀猀崀⠀愀琀琀爀⤀ ☀☀ ℀洀愀爀欀攀爀䌀漀甀渀琀攀爀嬀愀琀琀爀崀⤀ 笀ഀഀ
                var item = R._g.doc.getElementById(attr);਍                椀琀攀洀 ☀☀ 椀琀攀洀⸀瀀愀爀攀渀琀一漀搀攀⸀爀攀洀漀瘀攀䌀栀椀氀搀⠀椀琀攀洀⤀㬀ഀഀ
            }਍        紀ഀഀ
    },਍    搀愀猀栀愀爀爀愀礀 㴀 笀ഀഀ
        "-": [3, 1],਍        ∀⸀∀㨀 嬀㄀Ⰰ ㄀崀Ⰰഀഀ
        "-.": [3, 1, 1, 1],਍        ∀ⴀ⸀⸀∀㨀 嬀㌀Ⰰ ㄀Ⰰ ㄀Ⰰ ㄀Ⰰ ㄀Ⰰ ㄀崀Ⰰഀഀ
        ". ": [1, 3],਍        ∀ⴀ ∀㨀 嬀㐀Ⰰ ㌀崀Ⰰഀഀ
        "--": [8, 3],਍        ∀ⴀ ⸀∀㨀 嬀㐀Ⰰ ㌀Ⰰ ㄀Ⰰ ㌀崀Ⰰഀഀ
        "--.": [8, 3, 1, 3],਍        ∀ⴀⴀ⸀⸀∀㨀 嬀㠀Ⰰ ㌀Ⰰ ㄀Ⰰ ㌀Ⰰ ㄀Ⰰ ㌀崀ഀഀ
    },਍    愀搀搀䐀愀猀栀攀猀 㴀 昀甀渀挀琀椀漀渀 ⠀漀Ⰰ 瘀愀氀甀攀Ⰰ 瀀愀爀愀洀猀⤀ 笀ഀഀ
        value = dasharray[Str(value).toLowerCase()];਍        椀昀 ⠀瘀愀氀甀攀⤀ 笀ഀഀ
            var width = o.attrs["stroke-width"] || "1",਍                戀甀琀琀 㴀 笀爀漀甀渀搀㨀 眀椀搀琀栀Ⰰ 猀焀甀愀爀攀㨀 眀椀搀琀栀Ⰰ 戀甀琀琀㨀 　紀嬀漀⸀愀琀琀爀猀嬀∀猀琀爀漀欀攀ⴀ氀椀渀攀挀愀瀀∀崀 簀簀 瀀愀爀愀洀猀嬀∀猀琀爀漀欀攀ⴀ氀椀渀攀挀愀瀀∀崀崀 簀簀 　Ⰰഀഀ
                dashes = [],਍                椀 㴀 瘀愀氀甀攀⸀氀攀渀最琀栀㬀ഀഀ
            while (i--) {਍                搀愀猀栀攀猀嬀椀崀 㴀 瘀愀氀甀攀嬀椀崀 ⨀ 眀椀搀琀栀 ⬀ ⠀⠀椀 ─ ㈀⤀ 㼀 ㄀ 㨀 ⴀ㄀⤀ ⨀ 戀甀琀琀㬀ഀഀ
            }਍            ␀⠀漀⸀渀漀搀攀Ⰰ 笀∀猀琀爀漀欀攀ⴀ搀愀猀栀愀爀爀愀礀∀㨀 搀愀猀栀攀猀⸀樀漀椀渀⠀∀Ⰰ∀⤀紀⤀㬀ഀഀ
        }਍        攀氀猀攀 笀ഀഀ
          $(o.node, {"stroke-dasharray": "none"});਍        紀ഀഀ
    },਍    猀攀琀䘀椀氀氀䄀渀搀匀琀爀漀欀攀 㴀 昀甀渀挀琀椀漀渀 ⠀漀Ⰰ 瀀愀爀愀洀猀⤀ 笀ഀഀ
        var node = o.node,਍            愀琀琀爀猀 㴀 漀⸀愀琀琀爀猀Ⰰഀഀ
            vis = node.style.visibility;਍        渀漀搀攀⸀猀琀礀氀攀⸀瘀椀猀椀戀椀氀椀琀礀 㴀 ∀栀椀搀搀攀渀∀㬀ഀഀ
        for (var att in params) {਍            椀昀 ⠀瀀愀爀愀洀猀嬀栀愀猀崀⠀愀琀琀⤀⤀ 笀ഀഀ
                if (!R._availableAttrs[has](att)) {਍                    挀漀渀琀椀渀甀攀㬀ഀഀ
                }਍                瘀愀爀 瘀愀氀甀攀 㴀 瀀愀爀愀洀猀嬀愀琀琀崀㬀ഀഀ
                attrs[att] = value;਍                猀眀椀琀挀栀 ⠀愀琀琀⤀ 笀ഀഀ
                    case "blur":਍                        漀⸀戀氀甀爀⠀瘀愀氀甀攀⤀㬀ഀഀ
                        break;਍                    挀愀猀攀 ∀琀椀琀氀攀∀㨀ഀഀ
                        var title = node.getElementsByTagName("title");਍ഀഀ
                        // Use the existing <title>.਍                        椀昀 ⠀琀椀琀氀攀⸀氀攀渀最琀栀 ☀☀ ⠀琀椀琀氀攀 㴀 琀椀琀氀攀嬀　崀⤀⤀ 笀ഀഀ
                          title.firstChild.nodeValue = value;਍                        紀 攀氀猀攀 笀ഀഀ
                          title = $("title");਍                          瘀愀爀 瘀愀氀 㴀 刀⸀开最⸀搀漀挀⸀挀爀攀愀琀攀吀攀砀琀一漀搀攀⠀瘀愀氀甀攀⤀㬀ഀഀ
                          title.appendChild(val);਍                          渀漀搀攀⸀愀瀀瀀攀渀搀䌀栀椀氀搀⠀琀椀琀氀攀⤀㬀ഀഀ
                        }਍                        戀爀攀愀欀㬀ഀഀ
                    case "href":਍                    挀愀猀攀 ∀琀愀爀最攀琀∀㨀ഀഀ
                        var pn = node.parentNode;਍                        椀昀 ⠀瀀渀⸀琀愀最一愀洀攀⸀琀漀䰀漀眀攀爀䌀愀猀攀⠀⤀ ℀㴀 ∀愀∀⤀ 笀ഀഀ
                            var hl = $("a");਍                            瀀渀⸀椀渀猀攀爀琀䈀攀昀漀爀攀⠀栀氀Ⰰ 渀漀搀攀⤀㬀ഀഀ
                            hl.appendChild(node);਍                            瀀渀 㴀 栀氀㬀ഀഀ
                        }਍                        椀昀 ⠀愀琀琀 㴀㴀 ∀琀愀爀最攀琀∀⤀ 笀ഀഀ
                            pn.setAttributeNS(xlink, "show", value == "blank" ? "new" : value);਍                        紀 攀氀猀攀 笀ഀഀ
                            pn.setAttributeNS(xlink, att, value);਍                        紀ഀഀ
                        break;਍                    挀愀猀攀 ∀挀甀爀猀漀爀∀㨀ഀഀ
                        node.style.cursor = value;਍                        戀爀攀愀欀㬀ഀഀ
                    case "transform":਍                        漀⸀琀爀愀渀猀昀漀爀洀⠀瘀愀氀甀攀⤀㬀ഀഀ
                        break;਍                    挀愀猀攀 ∀愀爀爀漀眀ⴀ猀琀愀爀琀∀㨀ഀഀ
                        addArrow(o, value);਍                        戀爀攀愀欀㬀ഀഀ
                    case "arrow-end":਍                        愀搀搀䄀爀爀漀眀⠀漀Ⰰ 瘀愀氀甀攀Ⰰ ㄀⤀㬀ഀഀ
                        break;਍                    挀愀猀攀 ∀挀氀椀瀀ⴀ爀攀挀琀∀㨀ഀഀ
                        var rect = Str(value).split(separator);਍                        椀昀 ⠀爀攀挀琀⸀氀攀渀最琀栀 㴀㴀 㐀⤀ 笀ഀഀ
                            o.clip && o.clip.parentNode.parentNode.removeChild(o.clip.parentNode);਍                            瘀愀爀 攀氀 㴀 ␀⠀∀挀氀椀瀀倀愀琀栀∀⤀Ⰰഀഀ
                                rc = $("rect");਍                            攀氀⸀椀搀 㴀 刀⸀挀爀攀愀琀攀唀唀䤀䐀⠀⤀㬀ഀഀ
                            $(rc, {਍                                砀㨀 爀攀挀琀嬀　崀Ⰰഀഀ
                                y: rect[1],਍                                眀椀搀琀栀㨀 爀攀挀琀嬀㈀崀Ⰰഀഀ
                                height: rect[3]਍                            紀⤀㬀ഀഀ
                            el.appendChild(rc);਍                            漀⸀瀀愀瀀攀爀⸀搀攀昀猀⸀愀瀀瀀攀渀搀䌀栀椀氀搀⠀攀氀⤀㬀ഀഀ
                            $(node, {"clip-path": "url(#" + el.id + ")"});਍                            漀⸀挀氀椀瀀 㴀 爀挀㬀ഀഀ
                        }਍                        椀昀 ⠀℀瘀愀氀甀攀⤀ 笀ഀഀ
                            var path = node.getAttribute("clip-path");਍                            椀昀 ⠀瀀愀琀栀⤀ 笀ഀഀ
                                var clip = R._g.doc.getElementById(path.replace(/(^url\(#|\)$)/g, E));਍                                挀氀椀瀀 ☀☀ 挀氀椀瀀⸀瀀愀爀攀渀琀一漀搀攀⸀爀攀洀漀瘀攀䌀栀椀氀搀⠀挀氀椀瀀⤀㬀ഀഀ
                                $(node, {"clip-path": E});਍                                搀攀氀攀琀攀 漀⸀挀氀椀瀀㬀ഀഀ
                            }਍                        紀ഀഀ
                    break;਍                    挀愀猀攀 ∀瀀愀琀栀∀㨀ഀഀ
                        if (o.type == "path") {਍                            ␀⠀渀漀搀攀Ⰰ 笀搀㨀 瘀愀氀甀攀 㼀 愀琀琀爀猀⸀瀀愀琀栀 㴀 刀⸀开瀀愀琀栀吀漀䄀戀猀漀氀甀琀攀⠀瘀愀氀甀攀⤀ 㨀 ∀䴀　Ⰰ　∀紀⤀㬀ഀഀ
                            o._.dirty = 1;਍                            椀昀 ⠀漀⸀开⸀愀爀爀漀眀猀⤀ 笀ഀഀ
                                "startString" in o._.arrows && addArrow(o, o._.arrows.startString);਍                                ∀攀渀搀匀琀爀椀渀最∀ 椀渀 漀⸀开⸀愀爀爀漀眀猀 ☀☀ 愀搀搀䄀爀爀漀眀⠀漀Ⰰ 漀⸀开⸀愀爀爀漀眀猀⸀攀渀搀匀琀爀椀渀最Ⰰ ㄀⤀㬀ഀഀ
                            }਍                        紀ഀഀ
                        break;਍                    挀愀猀攀 ∀眀椀搀琀栀∀㨀ഀഀ
                        node.setAttribute(att, value);਍                        漀⸀开⸀搀椀爀琀礀 㴀 ㄀㬀ഀഀ
                        if (attrs.fx) {਍                            愀琀琀 㴀 ∀砀∀㬀ഀഀ
                            value = attrs.x;਍                        紀 攀氀猀攀 笀ഀഀ
                            break;਍                        紀ഀഀ
                    case "x":਍                        椀昀 ⠀愀琀琀爀猀⸀昀砀⤀ 笀ഀഀ
                            value = -attrs.x - (attrs.width || 0);਍                        紀ഀഀ
                    case "rx":਍                        椀昀 ⠀愀琀琀 㴀㴀 ∀爀砀∀ ☀☀ 漀⸀琀礀瀀攀 㴀㴀 ∀爀攀挀琀∀⤀ 笀ഀഀ
                            break;਍                        紀ഀഀ
                    case "cx":਍                        渀漀搀攀⸀猀攀琀䄀琀琀爀椀戀甀琀攀⠀愀琀琀Ⰰ 瘀愀氀甀攀⤀㬀ഀഀ
                        o.pattern && updatePosition(o);਍                        漀⸀开⸀搀椀爀琀礀 㴀 ㄀㬀ഀഀ
                        break;਍                    挀愀猀攀 ∀栀攀椀最栀琀∀㨀ഀഀ
                        node.setAttribute(att, value);਍                        漀⸀开⸀搀椀爀琀礀 㴀 ㄀㬀ഀഀ
                        if (attrs.fy) {਍                            愀琀琀 㴀 ∀礀∀㬀ഀഀ
                            value = attrs.y;਍                        紀 攀氀猀攀 笀ഀഀ
                            break;਍                        紀ഀഀ
                    case "y":਍                        椀昀 ⠀愀琀琀爀猀⸀昀礀⤀ 笀ഀഀ
                            value = -attrs.y - (attrs.height || 0);਍                        紀ഀഀ
                    case "ry":਍                        椀昀 ⠀愀琀琀 㴀㴀 ∀爀礀∀ ☀☀ 漀⸀琀礀瀀攀 㴀㴀 ∀爀攀挀琀∀⤀ 笀ഀഀ
                            break;਍                        紀ഀഀ
                    case "cy":਍                        渀漀搀攀⸀猀攀琀䄀琀琀爀椀戀甀琀攀⠀愀琀琀Ⰰ 瘀愀氀甀攀⤀㬀ഀഀ
                        o.pattern && updatePosition(o);਍                        漀⸀开⸀搀椀爀琀礀 㴀 ㄀㬀ഀഀ
                        break;਍                    挀愀猀攀 ∀爀∀㨀ഀഀ
                        if (o.type == "rect") {਍                            ␀⠀渀漀搀攀Ⰰ 笀爀砀㨀 瘀愀氀甀攀Ⰰ 爀礀㨀 瘀愀氀甀攀紀⤀㬀ഀഀ
                        } else {਍                            渀漀搀攀⸀猀攀琀䄀琀琀爀椀戀甀琀攀⠀愀琀琀Ⰰ 瘀愀氀甀攀⤀㬀ഀഀ
                        }਍                        漀⸀开⸀搀椀爀琀礀 㴀 ㄀㬀ഀഀ
                        break;਍                    挀愀猀攀 ∀猀爀挀∀㨀ഀഀ
                        if (o.type == "image") {਍                            渀漀搀攀⸀猀攀琀䄀琀琀爀椀戀甀琀攀一匀⠀砀氀椀渀欀Ⰰ ∀栀爀攀昀∀Ⰰ 瘀愀氀甀攀⤀㬀ഀഀ
                        }਍                        戀爀攀愀欀㬀ഀഀ
                    case "stroke-width":਍                        椀昀 ⠀漀⸀开⸀猀砀 ℀㴀 ㄀ 簀簀 漀⸀开⸀猀礀 ℀㴀 ㄀⤀ 笀ഀഀ
                            value /= mmax(abs(o._.sx), abs(o._.sy)) || 1;਍                        紀ഀഀ
                        node.setAttribute(att, value);਍                        椀昀 ⠀愀琀琀爀猀嬀∀猀琀爀漀欀攀ⴀ搀愀猀栀愀爀爀愀礀∀崀⤀ 笀ഀഀ
                            addDashes(o, attrs["stroke-dasharray"], params);਍                        紀ഀഀ
                        if (o._.arrows) {਍                            ∀猀琀愀爀琀匀琀爀椀渀最∀ 椀渀 漀⸀开⸀愀爀爀漀眀猀 ☀☀ 愀搀搀䄀爀爀漀眀⠀漀Ⰰ 漀⸀开⸀愀爀爀漀眀猀⸀猀琀愀爀琀匀琀爀椀渀最⤀㬀ഀഀ
                            "endString" in o._.arrows && addArrow(o, o._.arrows.endString, 1);਍                        紀ഀഀ
                        break;਍                    挀愀猀攀 ∀猀琀爀漀欀攀ⴀ搀愀猀栀愀爀爀愀礀∀㨀ഀഀ
                        addDashes(o, value, params);਍                        戀爀攀愀欀㬀ഀഀ
                    case "fill":਍                        瘀愀爀 椀猀唀刀䰀 㴀 匀琀爀⠀瘀愀氀甀攀⤀⸀洀愀琀挀栀⠀刀⸀开䤀匀唀刀䰀⤀㬀ഀഀ
                        if (isURL) {਍                            攀氀 㴀 ␀⠀∀瀀愀琀琀攀爀渀∀⤀㬀ഀഀ
                            var ig = $("image");਍                            攀氀⸀椀搀 㴀 刀⸀挀爀攀愀琀攀唀唀䤀䐀⠀⤀㬀ഀഀ
                            $(el, {x: 0, y: 0, patternUnits: "userSpaceOnUse", height: 1, width: 1});਍                            ␀⠀椀最Ⰰ 笀砀㨀 　Ⰰ 礀㨀 　Ⰰ ∀砀氀椀渀欀㨀栀爀攀昀∀㨀 椀猀唀刀䰀嬀㄀崀紀⤀㬀ഀഀ
                            el.appendChild(ig);਍ഀഀ
                            (function (el) {਍                                刀⸀开瀀爀攀氀漀愀搀⠀椀猀唀刀䰀嬀㄀崀Ⰰ 昀甀渀挀琀椀漀渀 ⠀⤀ 笀ഀഀ
                                    var w = this.offsetWidth,਍                                        栀 㴀 琀栀椀猀⸀漀昀昀猀攀琀䠀攀椀最栀琀㬀ഀഀ
                                    $(el, {width: w, height: h});਍                                    ␀⠀椀最Ⰰ 笀眀椀搀琀栀㨀 眀Ⰰ 栀攀椀最栀琀㨀 栀紀⤀㬀ഀഀ
                                });਍                            紀⤀⠀攀氀⤀㬀ഀഀ
                            o.paper.defs.appendChild(el);਍                            ␀⠀渀漀搀攀Ⰰ 笀昀椀氀氀㨀 ∀甀爀氀⠀⌀∀ ⬀ 攀氀⸀椀搀 ⬀ ∀⤀∀紀⤀㬀ഀഀ
                            o.pattern = el;਍                            漀⸀瀀愀琀琀攀爀渀 ☀☀ 甀瀀搀愀琀攀倀漀猀椀琀椀漀渀⠀漀⤀㬀ഀഀ
                            break;਍                        紀ഀഀ
                        var clr = R.getRGB(value);਍                        椀昀 ⠀℀挀氀爀⸀攀爀爀漀爀⤀ 笀ഀഀ
                            delete params.gradient;਍                            搀攀氀攀琀攀 愀琀琀爀猀⸀最爀愀搀椀攀渀琀㬀ഀഀ
                            !R.is(attrs.opacity, "undefined") &&਍                                刀⸀椀猀⠀瀀愀爀愀洀猀⸀漀瀀愀挀椀琀礀Ⰰ ∀甀渀搀攀昀椀渀攀搀∀⤀ ☀☀ഀഀ
                                $(node, {opacity: attrs.opacity});਍                            ℀刀⸀椀猀⠀愀琀琀爀猀嬀∀昀椀氀氀ⴀ漀瀀愀挀椀琀礀∀崀Ⰰ ∀甀渀搀攀昀椀渀攀搀∀⤀ ☀☀ഀഀ
                                R.is(params["fill-opacity"], "undefined") &&਍                                ␀⠀渀漀搀攀Ⰰ 笀∀昀椀氀氀ⴀ漀瀀愀挀椀琀礀∀㨀 愀琀琀爀猀嬀∀昀椀氀氀ⴀ漀瀀愀挀椀琀礀∀崀紀⤀㬀ഀഀ
                        } else if ((o.type == "circle" || o.type == "ellipse" || Str(value).charAt() != "r") && addGradientFill(o, value)) {਍                            椀昀 ⠀∀漀瀀愀挀椀琀礀∀ 椀渀 愀琀琀爀猀 簀簀 ∀昀椀氀氀ⴀ漀瀀愀挀椀琀礀∀ 椀渀 愀琀琀爀猀⤀ 笀ഀഀ
                                var gradient = R._g.doc.getElementById(node.getAttribute("fill").replace(/^url\(#|\)$/g, E));਍                                椀昀 ⠀最爀愀搀椀攀渀琀⤀ 笀ഀഀ
                                    var stops = gradient.getElementsByTagName("stop");਍                                    ␀⠀猀琀漀瀀猀嬀猀琀漀瀀猀⸀氀攀渀最琀栀 ⴀ ㄀崀Ⰰ 笀∀猀琀漀瀀ⴀ漀瀀愀挀椀琀礀∀㨀 ⠀∀漀瀀愀挀椀琀礀∀ 椀渀 愀琀琀爀猀 㼀 愀琀琀爀猀⸀漀瀀愀挀椀琀礀 㨀 ㄀⤀ ⨀ ⠀∀昀椀氀氀ⴀ漀瀀愀挀椀琀礀∀ 椀渀 愀琀琀爀猀 㼀 愀琀琀爀猀嬀∀昀椀氀氀ⴀ漀瀀愀挀椀琀礀∀崀 㨀 ㄀⤀紀⤀㬀ഀഀ
                                }਍                            紀ഀഀ
                            attrs.gradient = value;਍                            愀琀琀爀猀⸀昀椀氀氀 㴀 ∀渀漀渀攀∀㬀ഀഀ
                            break;਍                        紀ഀഀ
                        clr[has]("opacity") && $(node, {"fill-opacity": clr.opacity > 1 ? clr.opacity / 100 : clr.opacity});਍                    挀愀猀攀 ∀猀琀爀漀欀攀∀㨀ഀഀ
                        clr = R.getRGB(value);਍                        渀漀搀攀⸀猀攀琀䄀琀琀爀椀戀甀琀攀⠀愀琀琀Ⰰ 挀氀爀⸀栀攀砀⤀㬀ഀഀ
                        att == "stroke" && clr[has]("opacity") && $(node, {"stroke-opacity": clr.opacity > 1 ? clr.opacity / 100 : clr.opacity});਍                        椀昀 ⠀愀琀琀 㴀㴀 ∀猀琀爀漀欀攀∀ ☀☀ 漀⸀开⸀愀爀爀漀眀猀⤀ 笀ഀഀ
                            "startString" in o._.arrows && addArrow(o, o._.arrows.startString);਍                            ∀攀渀搀匀琀爀椀渀最∀ 椀渀 漀⸀开⸀愀爀爀漀眀猀 ☀☀ 愀搀搀䄀爀爀漀眀⠀漀Ⰰ 漀⸀开⸀愀爀爀漀眀猀⸀攀渀搀匀琀爀椀渀最Ⰰ ㄀⤀㬀ഀഀ
                        }਍                        戀爀攀愀欀㬀ഀഀ
                    case "gradient":਍                        ⠀漀⸀琀礀瀀攀 㴀㴀 ∀挀椀爀挀氀攀∀ 簀簀 漀⸀琀礀瀀攀 㴀㴀 ∀攀氀氀椀瀀猀攀∀ 簀簀 匀琀爀⠀瘀愀氀甀攀⤀⸀挀栀愀爀䄀琀⠀⤀ ℀㴀 ∀爀∀⤀ ☀☀ 愀搀搀䜀爀愀搀椀攀渀琀䘀椀氀氀⠀漀Ⰰ 瘀愀氀甀攀⤀㬀ഀഀ
                        break;਍                    挀愀猀攀 ∀漀瀀愀挀椀琀礀∀㨀ഀഀ
                        if (attrs.gradient && !attrs[has]("stroke-opacity")) {਍                            ␀⠀渀漀搀攀Ⰰ 笀∀猀琀爀漀欀攀ⴀ漀瀀愀挀椀琀礀∀㨀 瘀愀氀甀攀 㸀 ㄀ 㼀 瘀愀氀甀攀 ⼀ ㄀　　 㨀 瘀愀氀甀攀紀⤀㬀ഀഀ
                        }਍                        ⼀⼀ 昀愀氀氀ഀഀ
                    case "fill-opacity":਍                        椀昀 ⠀愀琀琀爀猀⸀最爀愀搀椀攀渀琀⤀ 笀ഀഀ
                            gradient = R._g.doc.getElementById(node.getAttribute("fill").replace(/^url\(#|\)$/g, E));਍                            椀昀 ⠀最爀愀搀椀攀渀琀⤀ 笀ഀഀ
                                stops = gradient.getElementsByTagName("stop");਍                                ␀⠀猀琀漀瀀猀嬀猀琀漀瀀猀⸀氀攀渀最琀栀 ⴀ ㄀崀Ⰰ 笀∀猀琀漀瀀ⴀ漀瀀愀挀椀琀礀∀㨀 瘀愀氀甀攀紀⤀㬀ഀഀ
                            }਍                            戀爀攀愀欀㬀ഀഀ
                        }਍                    搀攀昀愀甀氀琀㨀ഀഀ
                        att == "font-size" && (value = toInt(value, 10) + "px");਍                        瘀愀爀 挀猀猀爀甀氀攀 㴀 愀琀琀⸀爀攀瀀氀愀挀攀⠀⼀⠀尀ⴀ⸀⤀⼀最Ⰰ 昀甀渀挀琀椀漀渀 ⠀眀⤀ 笀ഀഀ
                            return w.substring(1).toUpperCase();਍                        紀⤀㬀ഀഀ
                        node.style[cssrule] = value;਍                        漀⸀开⸀搀椀爀琀礀 㴀 ㄀㬀ഀഀ
                        node.setAttribute(att, value);਍                        戀爀攀愀欀㬀ഀഀ
                }਍            紀ഀഀ
        }਍ഀഀ
        tuneText(o, params);਍        渀漀搀攀⸀猀琀礀氀攀⸀瘀椀猀椀戀椀氀椀琀礀 㴀 瘀椀猀㬀ഀഀ
    },਍    氀攀愀搀椀渀最 㴀 ㄀⸀㈀Ⰰഀഀ
    tuneText = function (el, params) {਍        椀昀 ⠀攀氀⸀琀礀瀀攀 ℀㴀 ∀琀攀砀琀∀ 簀簀 ℀⠀瀀愀爀愀洀猀嬀栀愀猀崀⠀∀琀攀砀琀∀⤀ 簀簀 瀀愀爀愀洀猀嬀栀愀猀崀⠀∀昀漀渀琀∀⤀ 簀簀 瀀愀爀愀洀猀嬀栀愀猀崀⠀∀昀漀渀琀ⴀ猀椀稀攀∀⤀ 簀簀 瀀愀爀愀洀猀嬀栀愀猀崀⠀∀砀∀⤀ 簀簀 瀀愀爀愀洀猀嬀栀愀猀崀⠀∀礀∀⤀⤀⤀ 笀ഀഀ
            return;਍        紀ഀഀ
        var a = el.attrs,਍            渀漀搀攀 㴀 攀氀⸀渀漀搀攀Ⰰഀഀ
            fontSize = node.firstChild ? toInt(R._g.doc.defaultView.getComputedStyle(node.firstChild, E).getPropertyValue("font-size"), 10) : 10;਍ഀഀ
        if (params[has]("text")) {਍            愀⸀琀攀砀琀 㴀 瀀愀爀愀洀猀⸀琀攀砀琀㬀ഀഀ
            while (node.firstChild) {਍                渀漀搀攀⸀爀攀洀漀瘀攀䌀栀椀氀搀⠀渀漀搀攀⸀昀椀爀猀琀䌀栀椀氀搀⤀㬀ഀഀ
            }਍            瘀愀爀 琀攀砀琀猀 㴀 匀琀爀⠀瀀愀爀愀洀猀⸀琀攀砀琀⤀⸀猀瀀氀椀琀⠀∀尀渀∀⤀Ⰰഀഀ
                tspans = [],਍                琀猀瀀愀渀㬀ഀഀ
            for (var i = 0, ii = texts.length; i < ii; i++) {਍                琀猀瀀愀渀 㴀 ␀⠀∀琀猀瀀愀渀∀⤀㬀ഀഀ
                i && $(tspan, {dy: fontSize * leading, x: a.x});਍                琀猀瀀愀渀⸀愀瀀瀀攀渀搀䌀栀椀氀搀⠀刀⸀开最⸀搀漀挀⸀挀爀攀愀琀攀吀攀砀琀一漀搀攀⠀琀攀砀琀猀嬀椀崀⤀⤀㬀ഀഀ
                node.appendChild(tspan);਍                琀猀瀀愀渀猀嬀椀崀 㴀 琀猀瀀愀渀㬀ഀഀ
            }਍        紀 攀氀猀攀 笀ഀഀ
            tspans = node.getElementsByTagName("tspan");਍            昀漀爀 ⠀椀 㴀 　Ⰰ 椀椀 㴀 琀猀瀀愀渀猀⸀氀攀渀最琀栀㬀 椀 㰀 椀椀㬀 椀⬀⬀⤀ 椀昀 ⠀椀⤀ 笀ഀഀ
                $(tspans[i], {dy: fontSize * leading, x: a.x});਍            紀 攀氀猀攀 笀ഀഀ
                $(tspans[0], {dy: 0});਍            紀ഀഀ
        }਍        ␀⠀渀漀搀攀Ⰰ 笀砀㨀 愀⸀砀Ⰰ 礀㨀 愀⸀礀紀⤀㬀ഀഀ
        el._.dirty = 1;਍        瘀愀爀 戀戀 㴀 攀氀⸀开最攀琀䈀䈀漀砀⠀⤀Ⰰഀഀ
            dif = a.y - (bb.y + bb.height / 2);਍        搀椀昀 ☀☀ 刀⸀椀猀⠀搀椀昀Ⰰ ∀昀椀渀椀琀攀∀⤀ ☀☀ ␀⠀琀猀瀀愀渀猀嬀　崀Ⰰ 笀搀礀㨀 搀椀昀紀⤀㬀ഀഀ
    },਍    最攀琀刀攀愀氀一漀搀攀 㴀 昀甀渀挀琀椀漀渀 ⠀渀漀搀攀⤀ 笀ഀഀ
        if (node.parentNode && node.parentNode.tagName.toLowerCase() === "a") {਍            爀攀琀甀爀渀 渀漀搀攀⸀瀀愀爀攀渀琀一漀搀攀㬀ഀഀ
        } else {਍            爀攀琀甀爀渀 渀漀搀攀㬀ഀഀ
        }਍    紀Ⰰഀഀ
    Element = function (node, svg) {਍        瘀愀爀 堀 㴀 　Ⰰഀഀ
            Y = 0;਍        ⼀⨀尀ഀഀ
         * Element.node਍         嬀 瀀爀漀瀀攀爀琀礀 ⠀漀戀樀攀挀琀⤀ 崀ഀഀ
         **਍         ⨀ 䜀椀瘀攀猀 礀漀甀 愀 爀攀昀攀爀攀渀挀攀 琀漀 琀栀攀 䐀伀䴀 漀戀樀攀挀琀Ⰰ 猀漀 礀漀甀 挀愀渀 愀猀猀椀最渀 攀瘀攀渀琀 栀愀渀搀氀攀爀猀 漀爀 樀甀猀琀 洀攀猀猀 愀爀漀甀渀搀⸀ഀഀ
         **਍         ⨀ 一漀琀攀㨀 䐀漀渀ᤀ琠 洀攀猀猀 眀椀琀栀 椀琀⸀ഀഀ
         > Usage਍         簀 ⼀⼀ 搀爀愀眀 愀 挀椀爀挀氀攀 愀琀 挀漀漀爀搀椀渀愀琀攀 ㄀　Ⰰ㄀　 眀椀琀栀 爀愀搀椀甀猀 漀昀 ㄀　ഀഀ
         | var c = paper.circle(10, 10, 10);਍         簀 挀⸀渀漀搀攀⸀漀渀挀氀椀挀欀 㴀 昀甀渀挀琀椀漀渀 ⠀⤀ 笀ഀഀ
         |     c.attr("fill", "red");਍         簀 紀㬀ഀഀ
        \*/਍        琀栀椀猀嬀　崀 㴀 琀栀椀猀⸀渀漀搀攀 㴀 渀漀搀攀㬀ഀഀ
        /*\਍         ⨀ 䔀氀攀洀攀渀琀⸀爀愀瀀栀愀攀氀ഀഀ
         [ property (object) ]਍         ⨀⨀ഀഀ
         * Internal reference to @Raphael object. In case it is not available.਍         㸀 唀猀愀最攀ഀഀ
         | Raphael.el.red = function () {਍         簀     瘀愀爀 栀猀戀 㴀 琀栀椀猀⸀瀀愀瀀攀爀⸀爀愀瀀栀愀攀氀⸀爀最戀㈀栀猀戀⠀琀栀椀猀⸀愀琀琀爀⠀∀昀椀氀氀∀⤀⤀㬀ഀഀ
         |     hsb.h = 1;਍         簀     琀栀椀猀⸀愀琀琀爀⠀笀昀椀氀氀㨀 琀栀椀猀⸀瀀愀瀀攀爀⸀爀愀瀀栀愀攀氀⸀栀猀戀㈀爀最戀⠀栀猀戀⤀⸀栀攀砀紀⤀㬀ഀഀ
         | }਍        尀⨀⼀ഀഀ
        node.raphael = true;਍        ⼀⨀尀ഀഀ
         * Element.id਍         嬀 瀀爀漀瀀攀爀琀礀 ⠀渀甀洀戀攀爀⤀ 崀ഀഀ
         **਍         ⨀ 唀渀椀焀甀攀 椀搀 漀昀 琀栀攀 攀氀攀洀攀渀琀⸀ 䔀猀瀀攀挀椀愀氀氀礀 甀猀攀昀甀氀 眀栀攀渀 礀漀甀 眀愀渀琀 琀漀 氀椀猀琀攀渀 琀漀 攀瘀攀渀琀猀 漀昀 琀栀攀 攀氀攀洀攀渀琀Ⰰഀഀ
         * because all events are fired in format `<module>.<action>.<id>`. Also useful for @Paper.getById method.਍        尀⨀⼀ഀഀ
        this.id = R._oid++;਍        渀漀搀攀⸀爀愀瀀栀愀攀氀椀搀 㴀 琀栀椀猀⸀椀搀㬀ഀഀ
        this.matrix = R.matrix();਍        琀栀椀猀⸀爀攀愀氀倀愀琀栀 㴀 渀甀氀氀㬀ഀഀ
        /*\਍         ⨀ 䔀氀攀洀攀渀琀⸀瀀愀瀀攀爀ഀഀ
         [ property (object) ]਍         ⨀⨀ഀഀ
         * Internal reference to “paper” where object drawn. Mainly for use in plugins and element extensions.਍         㸀 唀猀愀最攀ഀഀ
         | Raphael.el.cross = function () {਍         簀     琀栀椀猀⸀愀琀琀爀⠀笀昀椀氀氀㨀 ∀爀攀搀∀紀⤀㬀ഀഀ
         |     this.paper.path("M10,10L50,50M50,10L10,50")਍         簀         ⸀愀琀琀爀⠀笀猀琀爀漀欀攀㨀 ∀爀攀搀∀紀⤀㬀ഀഀ
         | }਍        尀⨀⼀ഀഀ
        this.paper = svg;਍        琀栀椀猀⸀愀琀琀爀猀 㴀 琀栀椀猀⸀愀琀琀爀猀 簀簀 笀紀㬀ഀഀ
        this._ = {਍            琀爀愀渀猀昀漀爀洀㨀 嬀崀Ⰰഀഀ
            sx: 1,਍            猀礀㨀 ㄀Ⰰഀഀ
            deg: 0,਍            搀砀㨀 　Ⰰഀഀ
            dy: 0,਍            搀椀爀琀礀㨀 ㄀ഀഀ
        };਍        ℀猀瘀最⸀戀漀琀琀漀洀 ☀☀ ⠀猀瘀最⸀戀漀琀琀漀洀 㴀 琀栀椀猀⤀㬀ഀഀ
        /*\਍         ⨀ 䔀氀攀洀攀渀琀⸀瀀爀攀瘀ഀഀ
         [ property (object) ]਍         ⨀⨀ഀഀ
         * Reference to the previous element in the hierarchy.਍        尀⨀⼀ഀഀ
        this.prev = svg.top;਍        猀瘀最⸀琀漀瀀 ☀☀ ⠀猀瘀最⸀琀漀瀀⸀渀攀砀琀 㴀 琀栀椀猀⤀㬀ഀഀ
        svg.top = this;਍        ⼀⨀尀ഀഀ
         * Element.next਍         嬀 瀀爀漀瀀攀爀琀礀 ⠀漀戀樀攀挀琀⤀ 崀ഀഀ
         **਍         ⨀ 刀攀昀攀爀攀渀挀攀 琀漀 琀栀攀 渀攀砀琀 攀氀攀洀攀渀琀 椀渀 琀栀攀 栀椀攀爀愀爀挀栀礀⸀ഀഀ
        \*/਍        琀栀椀猀⸀渀攀砀琀 㴀 渀甀氀氀㬀ഀഀ
    },਍    攀氀瀀爀漀琀漀 㴀 刀⸀攀氀㬀ഀഀ
਍    䔀氀攀洀攀渀琀⸀瀀爀漀琀漀琀礀瀀攀 㴀 攀氀瀀爀漀琀漀㬀ഀഀ
    elproto.constructor = Element;਍ഀഀ
    R._engine.path = function (pathString, SVG) {਍        瘀愀爀 攀氀 㴀 ␀⠀∀瀀愀琀栀∀⤀㬀ഀഀ
        SVG.canvas && SVG.canvas.appendChild(el);਍        瘀愀爀 瀀 㴀 渀攀眀 䔀氀攀洀攀渀琀⠀攀氀Ⰰ 匀嘀䜀⤀㬀ഀഀ
        p.type = "path";਍        猀攀琀䘀椀氀氀䄀渀搀匀琀爀漀欀攀⠀瀀Ⰰ 笀ഀഀ
            fill: "none",਍            猀琀爀漀欀攀㨀 ∀⌀　　　∀Ⰰഀഀ
            path: pathString਍        紀⤀㬀ഀഀ
        return p;਍    紀㬀ഀഀ
    /*\਍     ⨀ 䔀氀攀洀攀渀琀⸀爀漀琀愀琀攀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Deprecated! Use @Element.transform instead.਍     ⨀ 䄀搀搀猀 爀漀琀愀琀椀漀渀 戀礀 最椀瘀攀渀 愀渀最氀攀 愀爀漀甀渀搀 最椀瘀攀渀 瀀漀椀渀琀 琀漀 琀栀攀 氀椀猀琀 漀昀ഀഀ
     * transformations of the element.਍     㸀 倀愀爀愀洀攀琀攀爀猀ഀഀ
     - deg (number) angle in degrees਍     ⴀ 挀砀 ⠀渀甀洀戀攀爀⤀ ⌀漀瀀琀椀漀渀愀氀 砀 挀漀漀爀搀椀渀愀琀攀 漀昀 琀栀攀 挀攀渀琀爀攀 漀昀 爀漀琀愀琀椀漀渀ഀഀ
     - cy (number) #optional y coordinate of the centre of rotation਍     ⨀ 䤀昀 挀砀 ☀ 挀礀 愀爀攀渀ᤀ琠 猀瀀攀挀椀昀椀攀搀 挀攀渀琀爀攀 漀昀 琀栀攀 猀栀愀瀀攀 椀猀 甀猀攀搀 愀猀 愀 瀀漀椀渀琀 漀昀 爀漀琀愀琀椀漀渀⸀ഀഀ
     = (object) @Element਍    尀⨀⼀ഀഀ
    elproto.rotate = function (deg, cx, cy) {਍        椀昀 ⠀琀栀椀猀⸀爀攀洀漀瘀攀搀⤀ 笀ഀഀ
            return this;਍        紀ഀഀ
        deg = Str(deg).split(separator);਍        椀昀 ⠀搀攀最⸀氀攀渀最琀栀 ⴀ ㄀⤀ 笀ഀഀ
            cx = toFloat(deg[1]);਍            挀礀 㴀 琀漀䘀氀漀愀琀⠀搀攀最嬀㈀崀⤀㬀ഀഀ
        }਍        搀攀最 㴀 琀漀䘀氀漀愀琀⠀搀攀最嬀　崀⤀㬀ഀഀ
        (cy == null) && (cx = cy);਍        椀昀 ⠀挀砀 㴀㴀 渀甀氀氀 簀簀 挀礀 㴀㴀 渀甀氀氀⤀ 笀ഀഀ
            var bbox = this.getBBox(1);਍            挀砀 㴀 戀戀漀砀⸀砀 ⬀ 戀戀漀砀⸀眀椀搀琀栀 ⼀ ㈀㬀ഀഀ
            cy = bbox.y + bbox.height / 2;਍        紀ഀഀ
        this.transform(this._.transform.concat([["r", deg, cx, cy]]));਍        爀攀琀甀爀渀 琀栀椀猀㬀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * Element.scale਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 䐀攀瀀爀攀挀愀琀攀搀℀ 唀猀攀 䀀䔀氀攀洀攀渀琀⸀琀爀愀渀猀昀漀爀洀 椀渀猀琀攀愀搀⸀ഀഀ
     * Adds scale by given amount relative to given point to the list of਍     ⨀ 琀爀愀渀猀昀漀爀洀愀琀椀漀渀猀 漀昀 琀栀攀 攀氀攀洀攀渀琀⸀ഀഀ
     > Parameters਍     ⴀ 猀砀 ⠀渀甀洀戀攀爀⤀ 栀漀爀椀猀漀渀琀愀氀 猀挀愀氀攀 愀洀漀甀渀琀ഀഀ
     - sy (number) vertical scale amount਍     ⴀ 挀砀 ⠀渀甀洀戀攀爀⤀ ⌀漀瀀琀椀漀渀愀氀 砀 挀漀漀爀搀椀渀愀琀攀 漀昀 琀栀攀 挀攀渀琀爀攀 漀昀 猀挀愀氀攀ഀഀ
     - cy (number) #optional y coordinate of the centre of scale਍     ⨀ 䤀昀 挀砀 ☀ 挀礀 愀爀攀渀ᤀ琠 猀瀀攀挀椀昀椀攀搀 挀攀渀琀爀攀 漀昀 琀栀攀 猀栀愀瀀攀 椀猀 甀猀攀搀 椀渀猀琀攀愀搀⸀ഀഀ
     = (object) @Element਍    尀⨀⼀ഀഀ
    elproto.scale = function (sx, sy, cx, cy) {਍        椀昀 ⠀琀栀椀猀⸀爀攀洀漀瘀攀搀⤀ 笀ഀഀ
            return this;਍        紀ഀഀ
        sx = Str(sx).split(separator);਍        椀昀 ⠀猀砀⸀氀攀渀最琀栀 ⴀ ㄀⤀ 笀ഀഀ
            sy = toFloat(sx[1]);਍            挀砀 㴀 琀漀䘀氀漀愀琀⠀猀砀嬀㈀崀⤀㬀ഀഀ
            cy = toFloat(sx[3]);਍        紀ഀഀ
        sx = toFloat(sx[0]);਍        ⠀猀礀 㴀㴀 渀甀氀氀⤀ ☀☀ ⠀猀礀 㴀 猀砀⤀㬀ഀഀ
        (cy == null) && (cx = cy);਍        椀昀 ⠀挀砀 㴀㴀 渀甀氀氀 簀簀 挀礀 㴀㴀 渀甀氀氀⤀ 笀ഀഀ
            var bbox = this.getBBox(1);਍        紀ഀഀ
        cx = cx == null ? bbox.x + bbox.width / 2 : cx;਍        挀礀 㴀 挀礀 㴀㴀 渀甀氀氀 㼀 戀戀漀砀⸀礀 ⬀ 戀戀漀砀⸀栀攀椀最栀琀 ⼀ ㈀ 㨀 挀礀㬀ഀഀ
        this.transform(this._.transform.concat([["s", sx, sy, cx, cy]]));਍        爀攀琀甀爀渀 琀栀椀猀㬀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * Element.translate਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 䐀攀瀀爀攀挀愀琀攀搀℀ 唀猀攀 䀀䔀氀攀洀攀渀琀⸀琀爀愀渀猀昀漀爀洀 椀渀猀琀攀愀搀⸀ഀഀ
     * Adds translation by given amount to the list of transformations of the element.਍     㸀 倀愀爀愀洀攀琀攀爀猀ഀഀ
     - dx (number) horisontal shift਍     ⴀ 搀礀 ⠀渀甀洀戀攀爀⤀ 瘀攀爀琀椀挀愀氀 猀栀椀昀琀ഀഀ
     = (object) @Element਍    尀⨀⼀ഀഀ
    elproto.translate = function (dx, dy) {਍        椀昀 ⠀琀栀椀猀⸀爀攀洀漀瘀攀搀⤀ 笀ഀഀ
            return this;਍        紀ഀഀ
        dx = Str(dx).split(separator);਍        椀昀 ⠀搀砀⸀氀攀渀最琀栀 ⴀ ㄀⤀ 笀ഀഀ
            dy = toFloat(dx[1]);਍        紀ഀഀ
        dx = toFloat(dx[0]) || 0;਍        搀礀 㴀 ⬀搀礀 簀簀 　㬀ഀഀ
        this.transform(this._.transform.concat([["t", dx, dy]]));਍        爀攀琀甀爀渀 琀栀椀猀㬀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * Element.transform਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 䄀搀搀猀 琀爀愀渀猀昀漀爀洀愀琀椀漀渀 琀漀 琀栀攀 攀氀攀洀攀渀琀 眀栀椀挀栀 椀猀 猀攀瀀愀爀愀琀攀 琀漀 漀琀栀攀爀 愀琀琀爀椀戀甀琀攀猀Ⰰഀഀ
     * i.e. translation doesn’t change `x` or `y` of the rectange. The format਍     ⨀ 漀昀 琀爀愀渀猀昀漀爀洀愀琀椀漀渀 猀琀爀椀渀最 椀猀 猀椀洀椀氀愀爀 琀漀 琀栀攀 瀀愀琀栀 猀琀爀椀渀最 猀礀渀琀愀砀㨀ഀഀ
     | "t100,100r30,100,100s2,2,100,100r45s1.5"਍     ⨀ 䔀愀挀栀 氀攀琀琀攀爀 椀猀 愀 挀漀洀洀愀渀搀⸀ 吀栀攀爀攀 愀爀攀 昀漀甀爀 挀漀洀洀愀渀搀猀㨀 怀琀怀 椀猀 昀漀爀 琀爀愀渀猀氀愀琀攀Ⰰ 怀爀怀 椀猀 昀漀爀 爀漀琀愀琀攀Ⰰ 怀猀怀 椀猀 昀漀爀ഀഀ
     * scale and `m` is for matrix.਍     ⨀ഀഀ
     * There are also alternative “absolute” translation, rotation and scale: `T`, `R` and `S`. They will not take previous transformation into account. For example, `...T100,0` will always move element 100 px horisontally, while `...t100,0` could move it vertically if there is `r90` before. Just compare results of `r90t100,0` and `r90T100,0`.਍     ⨀ഀഀ
     * So, the example line above could be read like “translate by 100, 100; rotate 30° around 100, 100; scale twice around 100, 100;਍     ⨀ 爀漀琀愀琀攀 㐀㔀뀀 愀爀漀甀渀搀 挀攀渀琀爀攀㬀 猀挀愀氀攀 ㄀⸀㔀 琀椀洀攀猀 爀攀氀愀琀椀瘀攀 琀漀 挀攀渀琀爀攀ᴀ⸠ 䄀猀 礀漀甀 挀愀渀 猀攀攀 爀漀琀愀琀攀 愀渀搀 猀挀愀氀攀 挀漀洀洀愀渀搀猀 栀愀瘀攀 漀爀椀最椀渀ഀഀ
     * coordinates as optional parameters, the default is the centre point of the element.਍     ⨀ 䴀愀琀爀椀砀 愀挀挀攀瀀琀猀 猀椀砀 瀀愀爀愀洀攀琀攀爀猀⸀ഀഀ
     > Usage਍     簀 瘀愀爀 攀氀 㴀 瀀愀瀀攀爀⸀爀攀挀琀⠀㄀　Ⰰ ㈀　Ⰰ ㌀　　Ⰰ ㈀　　⤀㬀ഀഀ
     | // translate 100, 100, rotate 45°, translate -100, 0਍     簀 攀氀⸀琀爀愀渀猀昀漀爀洀⠀∀琀㄀　　Ⰰ㄀　　爀㐀㔀琀ⴀ㄀　　Ⰰ　∀⤀㬀ഀഀ
     | // if you want you can append or prepend transformations਍     簀 攀氀⸀琀爀愀渀猀昀漀爀洀⠀∀⸀⸀⸀琀㔀　Ⰰ㔀　∀⤀㬀ഀഀ
     | el.transform("s2...");਍     簀 ⼀⼀ 漀爀 攀瘀攀渀 眀爀愀瀀ഀഀ
     | el.transform("t50,50...t-50-50");਍     簀 ⼀⼀ 琀漀 爀攀猀攀琀 琀爀愀渀猀昀漀爀洀愀琀椀漀渀 挀愀氀氀 洀攀琀栀漀搀 眀椀琀栀 攀洀瀀琀礀 猀琀爀椀渀最ഀഀ
     | el.transform("");਍     簀 ⼀⼀ 琀漀 最攀琀 挀甀爀爀攀渀琀 瘀愀氀甀攀 挀愀氀氀 椀琀 眀椀琀栀漀甀琀 瀀愀爀愀洀攀琀攀爀猀ഀഀ
     | console.log(el.transform());਍     㸀 倀愀爀愀洀攀琀攀爀猀ഀഀ
     - tstr (string) #optional transformation string਍     ⨀ 䤀昀 琀猀琀爀 椀猀渀ᤀ琠 猀瀀攀挀椀昀椀攀搀ഀഀ
     = (string) current transformation string਍     ⨀ 攀氀猀攀ഀഀ
     = (object) @Element਍    尀⨀⼀ഀഀ
    elproto.transform = function (tstr) {਍        瘀愀爀 开 㴀 琀栀椀猀⸀开㬀ഀഀ
        if (tstr == null) {਍            爀攀琀甀爀渀 开⸀琀爀愀渀猀昀漀爀洀㬀ഀഀ
        }਍        刀⸀开攀砀琀爀愀挀琀吀爀愀渀猀昀漀爀洀⠀琀栀椀猀Ⰰ 琀猀琀爀⤀㬀ഀഀ
਍        琀栀椀猀⸀挀氀椀瀀 ☀☀ ␀⠀琀栀椀猀⸀挀氀椀瀀Ⰰ 笀琀爀愀渀猀昀漀爀洀㨀 琀栀椀猀⸀洀愀琀爀椀砀⸀椀渀瘀攀爀琀⠀⤀紀⤀㬀ഀഀ
        this.pattern && updatePosition(this);਍        琀栀椀猀⸀渀漀搀攀 ☀☀ ␀⠀琀栀椀猀⸀渀漀搀攀Ⰰ 笀琀爀愀渀猀昀漀爀洀㨀 琀栀椀猀⸀洀愀琀爀椀砀紀⤀㬀ഀഀ
਍        椀昀 ⠀开⸀猀砀 ℀㴀 ㄀ 簀簀 开⸀猀礀 ℀㴀 ㄀⤀ 笀ഀഀ
            var sw = this.attrs[has]("stroke-width") ? this.attrs["stroke-width"] : 1;਍            琀栀椀猀⸀愀琀琀爀⠀笀∀猀琀爀漀欀攀ⴀ眀椀搀琀栀∀㨀 猀眀紀⤀㬀ഀഀ
        }਍ഀഀ
        return this;਍    紀㬀ഀഀ
    /*\਍     ⨀ 䔀氀攀洀攀渀琀⸀栀椀搀攀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Makes element invisible. See @Element.show.਍     㴀 ⠀漀戀樀攀挀琀⤀ 䀀䔀氀攀洀攀渀琀ഀഀ
    \*/਍    攀氀瀀爀漀琀漀⸀栀椀搀攀 㴀 昀甀渀挀琀椀漀渀 ⠀⤀ 笀ഀഀ
        if(!this.removed) this.node.style.display = "none";਍        爀攀琀甀爀渀 琀栀椀猀㬀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * Element.show਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 䴀愀欀攀猀 攀氀攀洀攀渀琀 瘀椀猀椀戀氀攀⸀ 匀攀攀 䀀䔀氀攀洀攀渀琀⸀栀椀搀攀⸀ഀഀ
     = (object) @Element਍    尀⨀⼀ഀഀ
    elproto.show = function () {਍        椀昀⠀℀琀栀椀猀⸀爀攀洀漀瘀攀搀⤀ 琀栀椀猀⸀渀漀搀攀⸀猀琀礀氀攀⸀搀椀猀瀀氀愀礀 㴀 ∀∀㬀ഀഀ
        return this;਍    紀㬀ഀഀ
    /*\਍     ⨀ 䔀氀攀洀攀渀琀⸀爀攀洀漀瘀攀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Removes element from the paper.਍    尀⨀⼀ഀഀ
    elproto.remove = function () {਍        瘀愀爀 渀漀搀攀 㴀 最攀琀刀攀愀氀一漀搀攀⠀琀栀椀猀⸀渀漀搀攀⤀㬀ഀഀ
        if (this.removed || !node.parentNode) {਍            爀攀琀甀爀渀㬀ഀഀ
        }਍        瘀愀爀 瀀愀瀀攀爀 㴀 琀栀椀猀⸀瀀愀瀀攀爀㬀ഀഀ
        paper.__set__ && paper.__set__.exclude(this);਍        攀瘀攀⸀甀渀戀椀渀搀⠀∀爀愀瀀栀愀攀氀⸀⨀⸀⨀⸀∀ ⬀ 琀栀椀猀⸀椀搀⤀㬀ഀഀ
        if (this.gradient) {਍            瀀愀瀀攀爀⸀搀攀昀猀⸀爀攀洀漀瘀攀䌀栀椀氀搀⠀琀栀椀猀⸀最爀愀搀椀攀渀琀⤀㬀ഀഀ
        }਍        刀⸀开琀攀愀爀⠀琀栀椀猀Ⰰ 瀀愀瀀攀爀⤀㬀ഀഀ
਍        渀漀搀攀⸀瀀愀爀攀渀琀一漀搀攀⸀爀攀洀漀瘀攀䌀栀椀氀搀⠀渀漀搀攀⤀㬀ഀഀ
਍        ⼀⼀ 刀攀洀漀瘀攀 挀甀猀琀漀洀 搀愀琀愀 昀漀爀 攀氀攀洀攀渀琀ഀഀ
        this.removeData();਍ഀഀ
        for (var i in this) {਍            琀栀椀猀嬀椀崀 㴀 琀礀瀀攀漀昀 琀栀椀猀嬀椀崀 㴀㴀 ∀昀甀渀挀琀椀漀渀∀ 㼀 刀⸀开爀攀洀漀瘀攀搀䘀愀挀琀漀爀礀⠀椀⤀ 㨀 渀甀氀氀㬀ഀഀ
        }਍        琀栀椀猀⸀爀攀洀漀瘀攀搀 㴀 琀爀甀攀㬀ഀഀ
    };਍    攀氀瀀爀漀琀漀⸀开最攀琀䈀䈀漀砀 㴀 昀甀渀挀琀椀漀渀 ⠀⤀ 笀ഀഀ
        if (this.node.style.display == "none") {਍            琀栀椀猀⸀猀栀漀眀⠀⤀㬀ഀഀ
            var hide = true;਍        紀ഀഀ
        var canvasHidden = false,਍            挀漀渀琀愀椀渀攀爀匀琀礀氀攀㬀ഀഀ
        if (this.paper.canvas.parentElement) {਍          挀漀渀琀愀椀渀攀爀匀琀礀氀攀 㴀 琀栀椀猀⸀瀀愀瀀攀爀⸀挀愀渀瘀愀猀⸀瀀愀爀攀渀琀䔀氀攀洀攀渀琀⸀猀琀礀氀攀㬀ഀഀ
        } //IE10+ can't find parentElement਍        攀氀猀攀 椀昀 ⠀琀栀椀猀⸀瀀愀瀀攀爀⸀挀愀渀瘀愀猀⸀瀀愀爀攀渀琀一漀搀攀⤀ 笀ഀഀ
          containerStyle = this.paper.canvas.parentNode.style;਍        紀ഀഀ
਍        椀昀⠀挀漀渀琀愀椀渀攀爀匀琀礀氀攀 ☀☀ 挀漀渀琀愀椀渀攀爀匀琀礀氀攀⸀搀椀猀瀀氀愀礀 㴀㴀 ∀渀漀渀攀∀⤀ 笀ഀഀ
          canvasHidden = true;਍          挀漀渀琀愀椀渀攀爀匀琀礀氀攀⸀搀椀猀瀀氀愀礀 㴀 ∀∀㬀ഀഀ
        }਍        瘀愀爀 戀戀漀砀 㴀 笀紀㬀ഀഀ
        try {਍            戀戀漀砀 㴀 琀栀椀猀⸀渀漀搀攀⸀最攀琀䈀䈀漀砀⠀⤀㬀ഀഀ
        } catch(e) {਍            ⼀⼀ 䘀椀爀攀昀漀砀 ㌀⸀　⸀砀Ⰰ ㈀㔀⸀　⸀㄀ ⠀瀀爀漀戀愀戀氀礀 洀漀爀攀 瘀攀爀猀椀漀渀猀 愀昀昀攀挀琀攀搀⤀ 瀀氀愀礀 戀愀搀氀礀 栀攀爀攀 ⴀ 瀀漀猀猀椀戀氀攀 昀椀砀ഀഀ
            bbox = {਍                砀㨀 琀栀椀猀⸀渀漀搀攀⸀挀氀椀攀渀琀䰀攀昀琀Ⰰഀഀ
                y: this.node.clientTop,਍                眀椀搀琀栀㨀 琀栀椀猀⸀渀漀搀攀⸀挀氀椀攀渀琀圀椀搀琀栀Ⰰഀഀ
                height: this.node.clientHeight਍            紀ഀഀ
        } finally {਍            戀戀漀砀 㴀 戀戀漀砀 簀簀 笀紀㬀ഀഀ
            if(canvasHidden){਍              挀漀渀琀愀椀渀攀爀匀琀礀氀攀⸀搀椀猀瀀氀愀礀 㴀 ∀渀漀渀攀∀㬀ഀഀ
            }਍        紀ഀഀ
        hide && this.hide();਍        爀攀琀甀爀渀 戀戀漀砀㬀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * Element.attr਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 匀攀琀猀 琀栀攀 愀琀琀爀椀戀甀琀攀猀 漀昀 琀栀攀 攀氀攀洀攀渀琀⸀ഀഀ
     > Parameters਍     ⴀ 愀琀琀爀一愀洀攀 ⠀猀琀爀椀渀最⤀ 愀琀琀爀椀戀甀琀攀ᤀ猠 渀愀洀攀ഀഀ
     - value (string) value਍     ⨀ 漀爀ഀഀ
     - params (object) object of name/value pairs਍     ⨀ 漀爀ഀഀ
     - attrName (string) attribute’s name਍     ⨀ 漀爀ഀഀ
     - attrNames (array) in this case method returns array of current values for given attribute names਍     㴀 ⠀漀戀樀攀挀琀⤀ 䀀䔀氀攀洀攀渀琀 椀昀 愀琀琀爀猀一愀洀攀 ☀ 瘀愀氀甀攀 漀爀 瀀愀爀愀洀猀 愀爀攀 瀀愀猀猀攀搀 椀渀⸀ഀഀ
     = (...) value of the attribute if only attrsName is passed in.਍     㴀 ⠀愀爀爀愀礀⤀ 愀爀爀愀礀 漀昀 瘀愀氀甀攀猀 漀昀 琀栀攀 愀琀琀爀椀戀甀琀攀 椀昀 愀琀琀爀猀一愀洀攀猀 椀猀 瀀愀猀猀攀搀 椀渀⸀ഀഀ
     = (object) object of attributes if nothing is passed in.਍     㸀 倀漀猀猀椀戀氀攀 瀀愀爀愀洀攀琀攀爀猀ഀഀ
     # <p>Please refer to the <a href="http://www.w3.org/TR/SVG/" title="The W3C Recommendation for the SVG language describes these properties in detail.">SVG specification</a> for an explanation of these parameters.</p>਍     漀 愀爀爀漀眀ⴀ攀渀搀 ⠀猀琀爀椀渀最⤀ 愀爀爀漀眀栀攀愀搀 漀渀 琀栀攀 攀渀搀 漀昀 琀栀攀 瀀愀琀栀⸀ 吀栀攀 昀漀爀洀愀琀 昀漀爀 猀琀爀椀渀最 椀猀 怀㰀琀礀瀀攀㸀嬀ⴀ㰀眀椀搀琀栀㸀嬀ⴀ㰀氀攀渀最琀栀㸀崀崀怀⸀ 倀漀猀猀椀戀氀攀 琀礀瀀攀猀㨀 怀挀氀愀猀猀椀挀怀Ⰰ 怀戀氀漀挀欀怀Ⰰ 怀漀瀀攀渀怀Ⰰ 怀漀瘀愀氀怀Ⰰ 怀搀椀愀洀漀渀搀怀Ⰰ 怀渀漀渀攀怀Ⰰ 眀椀搀琀栀㨀 怀眀椀搀攀怀Ⰰ 怀渀愀爀爀漀眀怀Ⰰ 怀洀攀搀椀甀洀怀Ⰰ 氀攀渀最琀栀㨀 怀氀漀渀最怀Ⰰ 怀猀栀漀爀琀怀Ⰰ 怀洀椀搀椀甀洀怀⸀ഀഀ
     o clip-rect (string) comma or space separated values: x, y, width and height਍     漀 挀甀爀猀漀爀 ⠀猀琀爀椀渀最⤀ 䌀匀匀 琀礀瀀攀 漀昀 琀栀攀 挀甀爀猀漀爀ഀഀ
     o cx (number) the x-axis coordinate of the center of the circle, or ellipse਍     漀 挀礀 ⠀渀甀洀戀攀爀⤀ 琀栀攀 礀ⴀ愀砀椀猀 挀漀漀爀搀椀渀愀琀攀 漀昀 琀栀攀 挀攀渀琀攀爀 漀昀 琀栀攀 挀椀爀挀氀攀Ⰰ 漀爀 攀氀氀椀瀀猀攀ഀഀ
     o fill (string) colour, gradient or image਍     漀 昀椀氀氀ⴀ漀瀀愀挀椀琀礀 ⠀渀甀洀戀攀爀⤀ഀഀ
     o font (string)਍     漀 昀漀渀琀ⴀ昀愀洀椀氀礀 ⠀猀琀爀椀渀最⤀ഀഀ
     o font-size (number) font size in pixels਍     漀 昀漀渀琀ⴀ眀攀椀最栀琀 ⠀猀琀爀椀渀最⤀ഀഀ
     o height (number)਍     漀 栀爀攀昀 ⠀猀琀爀椀渀最⤀ 唀刀䰀Ⰰ 椀昀 猀瀀攀挀椀昀椀攀搀 攀氀攀洀攀渀琀 戀攀栀愀瘀攀猀 愀猀 栀礀瀀攀爀氀椀渀欀ഀഀ
     o opacity (number)਍     漀 瀀愀琀栀 ⠀猀琀爀椀渀最⤀ 匀嘀䜀 瀀愀琀栀 猀琀爀椀渀最 昀漀爀洀愀琀ഀഀ
     o r (number) radius of the circle, ellipse or rounded corner on the rect਍     漀 爀砀 ⠀渀甀洀戀攀爀⤀ 栀漀爀椀猀漀渀琀愀氀 爀愀搀椀甀猀 漀昀 琀栀攀 攀氀氀椀瀀猀攀ഀഀ
     o ry (number) vertical radius of the ellipse਍     漀 猀爀挀 ⠀猀琀爀椀渀最⤀ 椀洀愀最攀 唀刀䰀Ⰰ 漀渀氀礀 眀漀爀欀猀 昀漀爀 䀀䔀氀攀洀攀渀琀⸀椀洀愀最攀 攀氀攀洀攀渀琀ഀഀ
     o stroke (string) stroke colour਍     漀 猀琀爀漀欀攀ⴀ搀愀猀栀愀爀爀愀礀 ⠀猀琀爀椀渀最⤀ 嬀ᰀᴠⰠ ᰀ渠漀渀攀ᴀⰠ ᰀ怠ⴀ怀ᴀⰠ ᰀ怠⸀怀ᴀⰠ ᰀ怠ⴀ⸀怀ᴀⰠ ᰀ怠ⴀ⸀⸀怀ᴀⰠ ᰀ怠⸀ 怀ᴀⰠ ᰀ怠ⴀ 怀ᴀⰠ ᰀ怠ⴀⴀ怀ᴀⰠ ᰀ怠ⴀ ⸀怀ᴀⰠ ᰀ怠ⴀⴀ⸀怀ᴀⰠ ᰀ怠ⴀⴀ⸀⸀怀ᴀ崠ഀഀ
     o stroke-linecap (string) [“`butt`”, “`square`”, “`round`”]਍     漀 猀琀爀漀欀攀ⴀ氀椀渀攀樀漀椀渀 ⠀猀琀爀椀渀最⤀ 嬀ᰀ怠戀攀瘀攀氀怀ᴀⰠ ᰀ怠爀漀甀渀搀怀ᴀⰠ ᰀ怠洀椀琀攀爀怀ᴀ崠ഀഀ
     o stroke-miterlimit (number)਍     漀 猀琀爀漀欀攀ⴀ漀瀀愀挀椀琀礀 ⠀渀甀洀戀攀爀⤀ഀഀ
     o stroke-width (number) stroke width in pixels, default is '1'਍     漀 琀愀爀最攀琀 ⠀猀琀爀椀渀最⤀ 甀猀攀搀 眀椀琀栀 栀爀攀昀ഀഀ
     o text (string) contents of the text element. Use `\n` for multiline text਍     漀 琀攀砀琀ⴀ愀渀挀栀漀爀 ⠀猀琀爀椀渀最⤀ 嬀ᰀ怠猀琀愀爀琀怀ᴀⰠ ᰀ怠洀椀搀搀氀攀怀ᴀⰠ ᰀ怠攀渀搀怀ᴀ崠Ⰰ 搀攀昀愀甀氀琀 椀猀 ᰀ怠洀椀搀搀氀攀怀ᴀഠഀ
     o title (string) will create tooltip with a given text਍     漀 琀爀愀渀猀昀漀爀洀 ⠀猀琀爀椀渀最⤀ 猀攀攀 䀀䔀氀攀洀攀渀琀⸀琀爀愀渀猀昀漀爀洀ഀഀ
     o width (number)਍     漀 砀 ⠀渀甀洀戀攀爀⤀ഀഀ
     o y (number)਍     㸀 䜀爀愀搀椀攀渀琀猀ഀഀ
     * Linear gradient format: “`‹angle›-‹colour›[-‹colour›[:‹offset›]]*-‹colour›`”, example: “`90-#fff-#000`” – 90°਍     ⨀ 最爀愀搀椀攀渀琀 昀爀漀洀 眀栀椀琀攀 琀漀 戀氀愀挀欀 漀爀 ᰀ怠　ⴀ⌀昀昀昀ⴀ⌀昀　　㨀㈀　ⴀ⌀　　　怀ᴀ†ጀ†　뀀 最爀愀搀椀攀渀琀 昀爀漀洀 眀栀椀琀攀 瘀椀愀 爀攀搀 ⠀愀琀 ㈀　─⤀ 琀漀 戀氀愀挀欀⸀ഀഀ
     *਍     ⨀ 爀愀搀椀愀氀 最爀愀搀椀攀渀琀㨀 ᰀ怠爀嬀⠀㤀映砀㨀Ⱐ 㤀映礀㨀⤠崀㤀挠漀氀漀甀爀㨀嬠ⴀ㤀挠漀氀漀甀爀㨀嬠㨀㤀漠昀昀猀攀琀㨀崠崀⨀ⴀ㤀挠漀氀漀甀爀㨀怠ᴀⰠ 攀砀愀洀瀀氀攀㨀 ᰀ怠爀⌀昀昀昀ⴀ⌀　　　怀ᴀ†ጀഠഀ
     * gradient from white to black or “`r(0.25, 0.75)#fff-#000`” – gradient from white to black with focus point਍     ⨀ 愀琀 　⸀㈀㔀Ⰰ 　⸀㜀㔀⸀ 䘀漀挀甀猀 瀀漀椀渀琀 挀漀漀爀搀椀渀愀琀攀猀 愀爀攀 椀渀 　⸀⸀㄀ 爀愀渀最攀⸀ 刀愀搀椀愀氀 最爀愀搀椀攀渀琀猀 挀愀渀 漀渀氀礀 戀攀 愀瀀瀀氀椀攀搀 琀漀 挀椀爀挀氀攀猀 愀渀搀 攀氀氀椀瀀猀攀猀⸀ഀഀ
     > Path String਍     ⌀ 㰀瀀㸀倀氀攀愀猀攀 爀攀昀攀爀 琀漀 㰀愀 栀爀攀昀㴀∀栀琀琀瀀㨀⼀⼀眀眀眀⸀眀㌀⸀漀爀最⼀吀刀⼀匀嘀䜀⼀瀀愀琀栀猀⸀栀琀洀氀⌀倀愀琀栀䐀愀琀愀∀ 琀椀琀氀攀㴀∀䐀攀琀愀椀氀猀 漀昀 愀 瀀愀琀栀ᤀ猠 搀愀琀愀 愀琀琀爀椀戀甀琀攀ᤀ猠 昀漀爀洀愀琀 愀爀攀 搀攀猀挀爀椀戀攀搀 椀渀 琀栀攀 匀嘀䜀 猀瀀攀挀椀昀椀挀愀琀椀漀渀⸀∀㸀匀嘀䜀 搀漀挀甀洀攀渀琀愀琀椀漀渀 爀攀最愀爀搀椀渀最 瀀愀琀栀 猀琀爀椀渀最㰀⼀愀㸀⸀ 刀愀瀀栀愀氀 昀甀氀氀礀 猀甀瀀瀀漀爀琀猀 椀琀⸀㰀⼀瀀㸀ഀഀ
     > Colour Parsing਍     ⌀ 㰀甀氀㸀ഀഀ
     #     <li>Colour name (“<code>red</code>”, “<code>green</code>”, “<code>cornflowerblue</code>”, etc)</li>਍     ⌀     㰀氀椀㸀⌀∀∠∠†᐀†猀栀漀爀琀攀渀攀搀 䠀吀䴀䰀 挀漀氀漀甀爀㨀 ⠀ᰀ㰠挀漀搀攀㸀⌀　　　㰀⼀挀漀搀攀㸀ᴀⰠ ᰀ㰠挀漀搀攀㸀⌀昀挀　㰀⼀挀漀搀攀㸀ᴀⰠ 攀琀挀⤀㰀⼀氀椀㸀ഀഀ
     #     <li>#•••••• — full length HTML colour: (“<code>#000000</code>”, “<code>#bd2300</code>”)</li>਍     ⌀     㰀氀椀㸀爀最戀⠀∀∠∠Ⱐ ∀∠∠Ⱐ ∀∠∠⤠ ᐀†爀攀搀Ⰰ 最爀攀攀渀 愀渀搀 戀氀甀攀 挀栀愀渀渀攀氀猀ᤀ†瘀愀氀甀攀猀㨀 ⠀ᰀ㰠挀漀搀攀㸀爀最戀⠀㈀　　Ⰰ☀渀戀猀瀀㬀㄀　　Ⰰ☀渀戀猀瀀㬀　⤀㰀⼀挀漀搀攀㸀ᴀ⤠㰀⼀氀椀㸀ഀഀ
     #     <li>rgb(•••%, •••%, •••%) — same as above, but in %: (“<code>rgb(100%,&nbsp;175%,&nbsp;0%)</code>”)</li>਍     ⌀     㰀氀椀㸀爀最戀愀⠀∀∠∠Ⱐ ∀∠∠Ⱐ ∀∠∠Ⱐ ∀∠∠⤠ ᐀†爀攀搀Ⰰ 最爀攀攀渀 愀渀搀 戀氀甀攀 挀栀愀渀渀攀氀猀ᤀ†瘀愀氀甀攀猀㨀 ⠀ᰀ㰠挀漀搀攀㸀爀最戀愀⠀㈀　　Ⰰ☀渀戀猀瀀㬀㄀　　Ⰰ☀渀戀猀瀀㬀　Ⰰ ⸀㔀⤀㰀⼀挀漀搀攀㸀ᴀ⤠㰀⼀氀椀㸀ഀഀ
     #     <li>rgba(•••%, •••%, •••%, •••%) — same as above, but in %: (“<code>rgba(100%,&nbsp;175%,&nbsp;0%, 50%)</code>”)</li>਍     ⌀     㰀氀椀㸀栀猀戀⠀∀∠∠Ⱐ ∀∠∠Ⱐ ∀∠∠⤠ ᐀†栀甀攀Ⰰ 猀愀琀甀爀愀琀椀漀渀 愀渀搀 戀爀椀最栀琀渀攀猀猀 瘀愀氀甀攀猀㨀 ⠀ᰀ㰠挀漀搀攀㸀栀猀戀⠀　⸀㔀Ⰰ☀渀戀猀瀀㬀　⸀㈀㔀Ⰰ☀渀戀猀瀀㬀㄀⤀㰀⼀挀漀搀攀㸀ᴀ⤠㰀⼀氀椀㸀ഀഀ
     #     <li>hsb(•••%, •••%, •••%) — same as above, but in %</li>਍     ⌀     㰀氀椀㸀栀猀戀愀⠀∀∠∠Ⱐ ∀∠∠Ⱐ ∀∠∠Ⱐ ∀∠∠⤠ ᐀†猀愀洀攀 愀猀 愀戀漀瘀攀Ⰰ 戀甀琀 眀椀琀栀 漀瀀愀挀椀琀礀㰀⼀氀椀㸀ഀഀ
     #     <li>hsl(•••, •••, •••) — almost the same as hsb, see <a href="http://en.wikipedia.org/wiki/HSL_and_HSV" title="HSL and HSV - Wikipedia, the free encyclopedia">Wikipedia page</a></li>਍     ⌀     㰀氀椀㸀栀猀氀⠀∀∠∠┠Ⰰ ∀∠∠┠Ⰰ ∀∠∠┠⤀ ᐀†猀愀洀攀 愀猀 愀戀漀瘀攀Ⰰ 戀甀琀 椀渀 ─㰀⼀氀椀㸀ഀഀ
     #     <li>hsla(•••, •••, •••, •••) — same as above, but with opacity</li>਍     ⌀     㰀氀椀㸀伀瀀琀椀漀渀愀氀氀礀 昀漀爀 栀猀戀 愀渀搀 栀猀氀 礀漀甀 挀漀甀氀搀 猀瀀攀挀椀昀礀 栀甀攀 愀猀 愀 搀攀最爀攀攀㨀 ᰀ㰠挀漀搀攀㸀栀猀氀⠀㈀㐀　搀攀最Ⰰ☀渀戀猀瀀㬀㄀Ⰰ☀渀戀猀瀀㬀⸀㔀⤀㰀⼀挀漀搀攀㸀ᴀ†漀爀Ⰰ 椀昀 礀漀甀 眀愀渀琀 琀漀 最漀 昀愀渀挀礀Ⰰ ᰀ㰠挀漀搀攀㸀栀猀氀⠀㈀㐀　뀀Ⰰ☀渀戀猀瀀㬀㄀Ⰰ☀渀戀猀瀀㬀⸀㔀⤀㰀⼀挀漀搀攀㸀ᴀ㰠⼀氀椀㸀ഀഀ
     # </ul>਍    尀⨀⼀ഀഀ
    elproto.attr = function (name, value) {਍        椀昀 ⠀琀栀椀猀⸀爀攀洀漀瘀攀搀⤀ 笀ഀഀ
            return this;਍        紀ഀഀ
        if (name == null) {਍            瘀愀爀 爀攀猀 㴀 笀紀㬀ഀഀ
            for (var a in this.attrs) if (this.attrs[has](a)) {਍                爀攀猀嬀愀崀 㴀 琀栀椀猀⸀愀琀琀爀猀嬀愀崀㬀ഀഀ
            }਍            爀攀猀⸀最爀愀搀椀攀渀琀 ☀☀ 爀攀猀⸀昀椀氀氀 㴀㴀 ∀渀漀渀攀∀ ☀☀ ⠀爀攀猀⸀昀椀氀氀 㴀 爀攀猀⸀最爀愀搀椀攀渀琀⤀ ☀☀ 搀攀氀攀琀攀 爀攀猀⸀最爀愀搀椀攀渀琀㬀ഀഀ
            res.transform = this._.transform;਍            爀攀琀甀爀渀 爀攀猀㬀ഀഀ
        }਍        椀昀 ⠀瘀愀氀甀攀 㴀㴀 渀甀氀氀 ☀☀ 刀⸀椀猀⠀渀愀洀攀Ⰰ ∀猀琀爀椀渀最∀⤀⤀ 笀ഀഀ
            if (name == "fill" && this.attrs.fill == "none" && this.attrs.gradient) {਍                爀攀琀甀爀渀 琀栀椀猀⸀愀琀琀爀猀⸀最爀愀搀椀攀渀琀㬀ഀഀ
            }਍            椀昀 ⠀渀愀洀攀 㴀㴀 ∀琀爀愀渀猀昀漀爀洀∀⤀ 笀ഀഀ
                return this._.transform;਍            紀ഀഀ
            var names = name.split(separator),਍                漀甀琀 㴀 笀紀㬀ഀഀ
            for (var i = 0, ii = names.length; i < ii; i++) {਍                渀愀洀攀 㴀 渀愀洀攀猀嬀椀崀㬀ഀഀ
                if (name in this.attrs) {਍                    漀甀琀嬀渀愀洀攀崀 㴀 琀栀椀猀⸀愀琀琀爀猀嬀渀愀洀攀崀㬀ഀഀ
                } else if (R.is(this.paper.customAttributes[name], "function")) {਍                    漀甀琀嬀渀愀洀攀崀 㴀 琀栀椀猀⸀瀀愀瀀攀爀⸀挀甀猀琀漀洀䄀琀琀爀椀戀甀琀攀猀嬀渀愀洀攀崀⸀搀攀昀㬀ഀഀ
                } else {਍                    漀甀琀嬀渀愀洀攀崀 㴀 刀⸀开愀瘀愀椀氀愀戀氀攀䄀琀琀爀猀嬀渀愀洀攀崀㬀ഀഀ
                }਍            紀ഀഀ
            return ii - 1 ? out : out[names[0]];਍        紀ഀഀ
        if (value == null && R.is(name, "array")) {਍            漀甀琀 㴀 笀紀㬀ഀഀ
            for (i = 0, ii = name.length; i < ii; i++) {਍                漀甀琀嬀渀愀洀攀嬀椀崀崀 㴀 琀栀椀猀⸀愀琀琀爀⠀渀愀洀攀嬀椀崀⤀㬀ഀഀ
            }਍            爀攀琀甀爀渀 漀甀琀㬀ഀഀ
        }਍        椀昀 ⠀瘀愀氀甀攀 ℀㴀 渀甀氀氀⤀ 笀ഀഀ
            var params = {};਍            瀀愀爀愀洀猀嬀渀愀洀攀崀 㴀 瘀愀氀甀攀㬀ഀഀ
        } else if (name != null && R.is(name, "object")) {਍            瀀愀爀愀洀猀 㴀 渀愀洀攀㬀ഀഀ
        }਍        昀漀爀 ⠀瘀愀爀 欀攀礀 椀渀 瀀愀爀愀洀猀⤀ 笀ഀഀ
            eve("raphael.attr." + key + "." + this.id, this, params[key]);਍        紀ഀഀ
        for (key in this.paper.customAttributes) if (this.paper.customAttributes[has](key) && params[has](key) && R.is(this.paper.customAttributes[key], "function")) {਍            瘀愀爀 瀀愀爀 㴀 琀栀椀猀⸀瀀愀瀀攀爀⸀挀甀猀琀漀洀䄀琀琀爀椀戀甀琀攀猀嬀欀攀礀崀⸀愀瀀瀀氀礀⠀琀栀椀猀Ⰰ 嬀崀⸀挀漀渀挀愀琀⠀瀀愀爀愀洀猀嬀欀攀礀崀⤀⤀㬀ഀഀ
            this.attrs[key] = params[key];਍            昀漀爀 ⠀瘀愀爀 猀甀戀欀攀礀 椀渀 瀀愀爀⤀ 椀昀 ⠀瀀愀爀嬀栀愀猀崀⠀猀甀戀欀攀礀⤀⤀ 笀ഀഀ
                params[subkey] = par[subkey];਍            紀ഀഀ
        }਍        猀攀琀䘀椀氀氀䄀渀搀匀琀爀漀欀攀⠀琀栀椀猀Ⰰ 瀀愀爀愀洀猀⤀㬀ഀഀ
        return this;਍    紀㬀ഀഀ
    /*\਍     ⨀ 䔀氀攀洀攀渀琀⸀琀漀䘀爀漀渀琀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Moves the element so it is the closest to the viewer’s eyes, on top of other elements.਍     㴀 ⠀漀戀樀攀挀琀⤀ 䀀䔀氀攀洀攀渀琀ഀഀ
    \*/਍    攀氀瀀爀漀琀漀⸀琀漀䘀爀漀渀琀 㴀 昀甀渀挀琀椀漀渀 ⠀⤀ 笀ഀഀ
        if (this.removed) {਍            爀攀琀甀爀渀 琀栀椀猀㬀ഀഀ
        }਍        瘀愀爀 渀漀搀攀 㴀 最攀琀刀攀愀氀一漀搀攀⠀琀栀椀猀⸀渀漀搀攀⤀㬀ഀഀ
        node.parentNode.appendChild(node);਍        瘀愀爀 猀瘀最 㴀 琀栀椀猀⸀瀀愀瀀攀爀㬀ഀഀ
        svg.top != this && R._tofront(this, svg);਍        爀攀琀甀爀渀 琀栀椀猀㬀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * Element.toBack਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 䴀漀瘀攀猀 琀栀攀 攀氀攀洀攀渀琀 猀漀 椀琀 椀猀 琀栀攀 昀甀爀琀栀攀猀琀 昀爀漀洀 琀栀攀 瘀椀攀眀攀爀ᤀ猠 攀礀攀猀Ⰰ 戀攀栀椀渀搀 漀琀栀攀爀 攀氀攀洀攀渀琀猀⸀ഀഀ
     = (object) @Element਍    尀⨀⼀ഀഀ
    elproto.toBack = function () {਍        椀昀 ⠀琀栀椀猀⸀爀攀洀漀瘀攀搀⤀ 笀ഀഀ
            return this;਍        紀ഀഀ
        var node = getRealNode(this.node);਍        瘀愀爀 瀀愀爀攀渀琀一漀搀攀 㴀 渀漀搀攀⸀瀀愀爀攀渀琀一漀搀攀㬀ഀഀ
        parentNode.insertBefore(node, parentNode.firstChild);਍        刀⸀开琀漀戀愀挀欀⠀琀栀椀猀Ⰰ 琀栀椀猀⸀瀀愀瀀攀爀⤀㬀ഀഀ
        var svg = this.paper;਍        爀攀琀甀爀渀 琀栀椀猀㬀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * Element.insertAfter਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 䤀渀猀攀爀琀猀 挀甀爀爀攀渀琀 漀戀樀攀挀琀 愀昀琀攀爀 琀栀攀 最椀瘀攀渀 漀渀攀⸀ഀഀ
     = (object) @Element਍    尀⨀⼀ഀഀ
    elproto.insertAfter = function (element) {਍        椀昀 ⠀琀栀椀猀⸀爀攀洀漀瘀攀搀 簀簀 ℀攀氀攀洀攀渀琀⤀ 笀ഀഀ
            return this;਍        紀ഀഀ
਍        瘀愀爀 渀漀搀攀 㴀 最攀琀刀攀愀氀一漀搀攀⠀琀栀椀猀⸀渀漀搀攀⤀㬀ഀഀ
        var afterNode = getRealNode(element.node || element[element.length - 1].node);਍        椀昀 ⠀愀昀琀攀爀一漀搀攀⸀渀攀砀琀匀椀戀氀椀渀最⤀ 笀ഀഀ
            afterNode.parentNode.insertBefore(node, afterNode.nextSibling);਍        紀 攀氀猀攀 笀ഀഀ
            afterNode.parentNode.appendChild(node);਍        紀ഀഀ
        R._insertafter(this, element, this.paper);਍        爀攀琀甀爀渀 琀栀椀猀㬀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * Element.insertBefore਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 䤀渀猀攀爀琀猀 挀甀爀爀攀渀琀 漀戀樀攀挀琀 戀攀昀漀爀攀 琀栀攀 最椀瘀攀渀 漀渀攀⸀ഀഀ
     = (object) @Element਍    尀⨀⼀ഀഀ
    elproto.insertBefore = function (element) {਍        椀昀 ⠀琀栀椀猀⸀爀攀洀漀瘀攀搀 簀簀 ℀攀氀攀洀攀渀琀⤀ 笀ഀഀ
            return this;਍        紀ഀഀ
਍        瘀愀爀 渀漀搀攀 㴀 最攀琀刀攀愀氀一漀搀攀⠀琀栀椀猀⸀渀漀搀攀⤀㬀ഀഀ
        var beforeNode = getRealNode(element.node || element[0].node);਍        戀攀昀漀爀攀一漀搀攀⸀瀀愀爀攀渀琀一漀搀攀⸀椀渀猀攀爀琀䈀攀昀漀爀攀⠀渀漀搀攀Ⰰ 戀攀昀漀爀攀一漀搀攀⤀㬀ഀഀ
        R._insertbefore(this, element, this.paper);਍        爀攀琀甀爀渀 琀栀椀猀㬀ഀഀ
    };਍    攀氀瀀爀漀琀漀⸀戀氀甀爀 㴀 昀甀渀挀琀椀漀渀 ⠀猀椀稀攀⤀ 笀ഀഀ
        // Experimental. No Safari support. Use it on your own risk.਍        瘀愀爀 琀 㴀 琀栀椀猀㬀ഀഀ
        if (+size !== 0) {਍            瘀愀爀 昀氀琀爀 㴀 ␀⠀∀昀椀氀琀攀爀∀⤀Ⰰഀഀ
                blur = $("feGaussianBlur");਍            琀⸀愀琀琀爀猀⸀戀氀甀爀 㴀 猀椀稀攀㬀ഀഀ
            fltr.id = R.createUUID();਍            ␀⠀戀氀甀爀Ⰰ 笀猀琀搀䐀攀瘀椀愀琀椀漀渀㨀 ⬀猀椀稀攀 簀簀 ㄀⸀㔀紀⤀㬀ഀഀ
            fltr.appendChild(blur);਍            琀⸀瀀愀瀀攀爀⸀搀攀昀猀⸀愀瀀瀀攀渀搀䌀栀椀氀搀⠀昀氀琀爀⤀㬀ഀഀ
            t._blur = fltr;਍            ␀⠀琀⸀渀漀搀攀Ⰰ 笀昀椀氀琀攀爀㨀 ∀甀爀氀⠀⌀∀ ⬀ 昀氀琀爀⸀椀搀 ⬀ ∀⤀∀紀⤀㬀ഀഀ
        } else {਍            椀昀 ⠀琀⸀开戀氀甀爀⤀ 笀ഀഀ
                t._blur.parentNode.removeChild(t._blur);਍                搀攀氀攀琀攀 琀⸀开戀氀甀爀㬀ഀഀ
                delete t.attrs.blur;਍            紀ഀഀ
            t.node.removeAttribute("filter");਍        紀ഀഀ
        return t;਍    紀㬀ഀഀ
    R._engine.circle = function (svg, x, y, r) {਍        瘀愀爀 攀氀 㴀 ␀⠀∀挀椀爀挀氀攀∀⤀㬀ഀഀ
        svg.canvas && svg.canvas.appendChild(el);਍        瘀愀爀 爀攀猀 㴀 渀攀眀 䔀氀攀洀攀渀琀⠀攀氀Ⰰ 猀瘀最⤀㬀ഀഀ
        res.attrs = {cx: x, cy: y, r: r, fill: "none", stroke: "#000"};਍        爀攀猀⸀琀礀瀀攀 㴀 ∀挀椀爀挀氀攀∀㬀ഀഀ
        $(el, res.attrs);਍        爀攀琀甀爀渀 爀攀猀㬀ഀഀ
    };਍    刀⸀开攀渀最椀渀攀⸀爀攀挀琀 㴀 昀甀渀挀琀椀漀渀 ⠀猀瘀最Ⰰ 砀Ⰰ 礀Ⰰ 眀Ⰰ 栀Ⰰ 爀⤀ 笀ഀഀ
        var el = $("rect");਍        猀瘀最⸀挀愀渀瘀愀猀 ☀☀ 猀瘀最⸀挀愀渀瘀愀猀⸀愀瀀瀀攀渀搀䌀栀椀氀搀⠀攀氀⤀㬀ഀഀ
        var res = new Element(el, svg);਍        爀攀猀⸀愀琀琀爀猀 㴀 笀砀㨀 砀Ⰰ 礀㨀 礀Ⰰ 眀椀搀琀栀㨀 眀Ⰰ 栀攀椀最栀琀㨀 栀Ⰰ 爀砀㨀 爀 簀簀 　Ⰰ 爀礀㨀 爀 簀簀 　Ⰰ 昀椀氀氀㨀 ∀渀漀渀攀∀Ⰰ 猀琀爀漀欀攀㨀 ∀⌀　　　∀紀㬀ഀഀ
        res.type = "rect";਍        ␀⠀攀氀Ⰰ 爀攀猀⸀愀琀琀爀猀⤀㬀ഀഀ
        return res;਍    紀㬀ഀഀ
    R._engine.ellipse = function (svg, x, y, rx, ry) {਍        瘀愀爀 攀氀 㴀 ␀⠀∀攀氀氀椀瀀猀攀∀⤀㬀ഀഀ
        svg.canvas && svg.canvas.appendChild(el);਍        瘀愀爀 爀攀猀 㴀 渀攀眀 䔀氀攀洀攀渀琀⠀攀氀Ⰰ 猀瘀最⤀㬀ഀഀ
        res.attrs = {cx: x, cy: y, rx: rx, ry: ry, fill: "none", stroke: "#000"};਍        爀攀猀⸀琀礀瀀攀 㴀 ∀攀氀氀椀瀀猀攀∀㬀ഀഀ
        $(el, res.attrs);਍        爀攀琀甀爀渀 爀攀猀㬀ഀഀ
    };਍    刀⸀开攀渀最椀渀攀⸀椀洀愀最攀 㴀 昀甀渀挀琀椀漀渀 ⠀猀瘀最Ⰰ 猀爀挀Ⰰ 砀Ⰰ 礀Ⰰ 眀Ⰰ 栀⤀ 笀ഀഀ
        var el = $("image");਍        ␀⠀攀氀Ⰰ 笀砀㨀 砀Ⰰ 礀㨀 礀Ⰰ 眀椀搀琀栀㨀 眀Ⰰ 栀攀椀最栀琀㨀 栀Ⰰ 瀀爀攀猀攀爀瘀攀䄀猀瀀攀挀琀刀愀琀椀漀㨀 ∀渀漀渀攀∀紀⤀㬀ഀഀ
        el.setAttributeNS(xlink, "href", src);਍        猀瘀最⸀挀愀渀瘀愀猀 ☀☀ 猀瘀最⸀挀愀渀瘀愀猀⸀愀瀀瀀攀渀搀䌀栀椀氀搀⠀攀氀⤀㬀ഀഀ
        var res = new Element(el, svg);਍        爀攀猀⸀愀琀琀爀猀 㴀 笀砀㨀 砀Ⰰ 礀㨀 礀Ⰰ 眀椀搀琀栀㨀 眀Ⰰ 栀攀椀最栀琀㨀 栀Ⰰ 猀爀挀㨀 猀爀挀紀㬀ഀഀ
        res.type = "image";਍        爀攀琀甀爀渀 爀攀猀㬀ഀഀ
    };਍    刀⸀开攀渀最椀渀攀⸀琀攀砀琀 㴀 昀甀渀挀琀椀漀渀 ⠀猀瘀最Ⰰ 砀Ⰰ 礀Ⰰ 琀攀砀琀⤀ 笀ഀഀ
        var el = $("text");਍        猀瘀最⸀挀愀渀瘀愀猀 ☀☀ 猀瘀最⸀挀愀渀瘀愀猀⸀愀瀀瀀攀渀搀䌀栀椀氀搀⠀攀氀⤀㬀ഀഀ
        var res = new Element(el, svg);਍        爀攀猀⸀愀琀琀爀猀 㴀 笀ഀഀ
            x: x,਍            礀㨀 礀Ⰰഀഀ
            "text-anchor": "middle",਍            琀攀砀琀㨀 琀攀砀琀Ⰰഀഀ
            "font-family": R._availableAttrs["font-family"],਍            ∀昀漀渀琀ⴀ猀椀稀攀∀㨀 刀⸀开愀瘀愀椀氀愀戀氀攀䄀琀琀爀猀嬀∀昀漀渀琀ⴀ猀椀稀攀∀崀Ⰰഀഀ
            stroke: "none",਍            昀椀氀氀㨀 ∀⌀　　　∀ഀഀ
        };਍        爀攀猀⸀琀礀瀀攀 㴀 ∀琀攀砀琀∀㬀ഀഀ
        setFillAndStroke(res, res.attrs);਍        爀攀琀甀爀渀 爀攀猀㬀ഀഀ
    };਍    刀⸀开攀渀最椀渀攀⸀猀攀琀匀椀稀攀 㴀 昀甀渀挀琀椀漀渀 ⠀眀椀搀琀栀Ⰰ 栀攀椀最栀琀⤀ 笀ഀഀ
        this.width = width || this.width;਍        琀栀椀猀⸀栀攀椀最栀琀 㴀 栀攀椀最栀琀 簀簀 琀栀椀猀⸀栀攀椀最栀琀㬀ഀഀ
        this.canvas.setAttribute("width", this.width);਍        琀栀椀猀⸀挀愀渀瘀愀猀⸀猀攀琀䄀琀琀爀椀戀甀琀攀⠀∀栀攀椀最栀琀∀Ⰰ 琀栀椀猀⸀栀攀椀最栀琀⤀㬀ഀഀ
        if (this._viewBox) {਍            琀栀椀猀⸀猀攀琀嘀椀攀眀䈀漀砀⸀愀瀀瀀氀礀⠀琀栀椀猀Ⰰ 琀栀椀猀⸀开瘀椀攀眀䈀漀砀⤀㬀ഀഀ
        }਍        爀攀琀甀爀渀 琀栀椀猀㬀ഀഀ
    };਍    刀⸀开攀渀最椀渀攀⸀挀爀攀愀琀攀 㴀 昀甀渀挀琀椀漀渀 ⠀⤀ 笀ഀഀ
        var con = R._getContainer.apply(0, arguments),਍            挀漀渀琀愀椀渀攀爀 㴀 挀漀渀 ☀☀ 挀漀渀⸀挀漀渀琀愀椀渀攀爀Ⰰഀഀ
            x = con.x,਍            礀 㴀 挀漀渀⸀礀Ⰰഀഀ
            width = con.width,਍            栀攀椀最栀琀 㴀 挀漀渀⸀栀攀椀最栀琀㬀ഀഀ
        if (!container) {਍            琀栀爀漀眀 渀攀眀 䔀爀爀漀爀⠀∀匀嘀䜀 挀漀渀琀愀椀渀攀爀 渀漀琀 昀漀甀渀搀⸀∀⤀㬀ഀഀ
        }਍        瘀愀爀 挀渀瘀猀 㴀 ␀⠀∀猀瘀最∀⤀Ⰰഀഀ
            css = "overflow:hidden;",਍            椀猀䘀氀漀愀琀椀渀最㬀ഀഀ
        x = x || 0;਍        礀 㴀 礀 簀簀 　㬀ഀഀ
        width = width || 512;਍        栀攀椀最栀琀 㴀 栀攀椀最栀琀 簀簀 ㌀㐀㈀㬀ഀഀ
        $(cnvs, {਍            栀攀椀最栀琀㨀 栀攀椀最栀琀Ⰰഀഀ
            version: 1.1,਍            眀椀搀琀栀㨀 眀椀搀琀栀Ⰰഀഀ
            xmlns: "http://www.w3.org/2000/svg",਍            ∀砀洀氀渀猀㨀砀氀椀渀欀∀㨀 ∀栀琀琀瀀㨀⼀⼀眀眀眀⸀眀㌀⸀漀爀最⼀㄀㤀㤀㤀⼀砀氀椀渀欀∀ഀഀ
        });਍        椀昀 ⠀挀漀渀琀愀椀渀攀爀 㴀㴀 ㄀⤀ 笀ഀഀ
            cnvs.style.cssText = css + "position:absolute;left:" + x + "px;top:" + y + "px";਍            刀⸀开最⸀搀漀挀⸀戀漀搀礀⸀愀瀀瀀攀渀搀䌀栀椀氀搀⠀挀渀瘀猀⤀㬀ഀഀ
            isFloating = 1;਍        紀 攀氀猀攀 笀ഀഀ
            cnvs.style.cssText = css + "position:relative";਍            椀昀 ⠀挀漀渀琀愀椀渀攀爀⸀昀椀爀猀琀䌀栀椀氀搀⤀ 笀ഀഀ
                container.insertBefore(cnvs, container.firstChild);਍            紀 攀氀猀攀 笀ഀഀ
                container.appendChild(cnvs);਍            紀ഀഀ
        }਍        挀漀渀琀愀椀渀攀爀 㴀 渀攀眀 刀⸀开倀愀瀀攀爀㬀ഀഀ
        container.width = width;਍        挀漀渀琀愀椀渀攀爀⸀栀攀椀最栀琀 㴀 栀攀椀最栀琀㬀ഀഀ
        container.canvas = cnvs;਍        挀漀渀琀愀椀渀攀爀⸀挀氀攀愀爀⠀⤀㬀ഀഀ
        container._left = container._top = 0;਍        椀猀䘀氀漀愀琀椀渀最 ☀☀ ⠀挀漀渀琀愀椀渀攀爀⸀爀攀渀搀攀爀昀椀砀 㴀 昀甀渀挀琀椀漀渀 ⠀⤀ 笀紀⤀㬀ഀഀ
        container.renderfix();਍        爀攀琀甀爀渀 挀漀渀琀愀椀渀攀爀㬀ഀഀ
    };਍    刀⸀开攀渀最椀渀攀⸀猀攀琀嘀椀攀眀䈀漀砀 㴀 昀甀渀挀琀椀漀渀 ⠀砀Ⰰ 礀Ⰰ 眀Ⰰ 栀Ⰰ 昀椀琀⤀ 笀ഀഀ
        eve("raphael.setViewBox", this, this._viewBox, [x, y, w, h, fit]);਍        瘀愀爀 瀀愀瀀攀爀匀椀稀攀 㴀 琀栀椀猀⸀最攀琀匀椀稀攀⠀⤀Ⰰഀഀ
            size = mmax(w / paperSize.width, h / paperSize.height),਍            琀漀瀀 㴀 琀栀椀猀⸀琀漀瀀Ⰰഀഀ
            aspectRatio = fit ? "xMidYMid meet" : "xMinYMin",਍            瘀戀Ⰰഀഀ
            sw;਍        椀昀 ⠀砀 㴀㴀 渀甀氀氀⤀ 笀ഀഀ
            if (this._vbSize) {਍                猀椀稀攀 㴀 ㄀㬀ഀഀ
            }਍            搀攀氀攀琀攀 琀栀椀猀⸀开瘀戀匀椀稀攀㬀ഀഀ
            vb = "0 0 " + this.width + S + this.height;਍        紀 攀氀猀攀 笀ഀഀ
            this._vbSize = size;਍            瘀戀 㴀 砀 ⬀ 匀 ⬀ 礀 ⬀ 匀 ⬀ 眀 ⬀ 匀 ⬀ 栀㬀ഀഀ
        }਍        ␀⠀琀栀椀猀⸀挀愀渀瘀愀猀Ⰰ 笀ഀഀ
            viewBox: vb,਍            瀀爀攀猀攀爀瘀攀䄀猀瀀攀挀琀刀愀琀椀漀㨀 愀猀瀀攀挀琀刀愀琀椀漀ഀഀ
        });਍        眀栀椀氀攀 ⠀猀椀稀攀 ☀☀ 琀漀瀀⤀ 笀ഀഀ
            sw = "stroke-width" in top.attrs ? top.attrs["stroke-width"] : 1;਍            琀漀瀀⸀愀琀琀爀⠀笀∀猀琀爀漀欀攀ⴀ眀椀搀琀栀∀㨀 猀眀紀⤀㬀ഀഀ
            top._.dirty = 1;਍            琀漀瀀⸀开⸀搀椀爀琀礀吀 㴀 ㄀㬀ഀഀ
            top = top.prev;਍        紀ഀഀ
        this._viewBox = [x, y, w, h, !!fit];਍        爀攀琀甀爀渀 琀栀椀猀㬀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * Paper.renderfix਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 䘀椀砀攀猀 琀栀攀 椀猀猀甀攀 漀昀 䘀椀爀攀昀漀砀 愀渀搀 䤀䔀㤀 爀攀最愀爀搀椀渀最 猀甀戀瀀椀砀攀氀 爀攀渀搀攀爀椀渀最⸀ 䤀昀 瀀愀瀀攀爀 椀猀 搀攀瀀攀渀搀愀渀琀ഀഀ
     * on other elements after reflow it could shift half pixel which cause for lines to lost their crispness.਍     ⨀ 吀栀椀猀 洀攀琀栀漀搀 昀椀砀攀猀 琀栀攀 椀猀猀甀攀⸀ഀഀ
     **਍       匀瀀攀挀椀愀氀 琀栀愀渀欀猀 琀漀 䴀愀爀椀甀猀稀 一漀眀愀欀 ⠀栀琀琀瀀㨀⼀⼀眀眀眀⸀洀攀搀椀欀漀漀⸀挀漀洀⼀⤀ 昀漀爀 琀栀椀猀 洀攀琀栀漀搀⸀ഀഀ
    \*/਍    刀⸀瀀爀漀琀漀琀礀瀀攀⸀爀攀渀搀攀爀昀椀砀 㴀 昀甀渀挀琀椀漀渀 ⠀⤀ 笀ഀഀ
        var cnvs = this.canvas,਍            猀 㴀 挀渀瘀猀⸀猀琀礀氀攀Ⰰഀഀ
            pos;਍        琀爀礀 笀ഀഀ
            pos = cnvs.getScreenCTM() || cnvs.createSVGMatrix();਍        紀 挀愀琀挀栀 ⠀攀⤀ 笀ഀഀ
            pos = cnvs.createSVGMatrix();਍        紀ഀഀ
        var left = -pos.e % 1,਍            琀漀瀀 㴀 ⴀ瀀漀猀⸀昀 ─ ㄀㬀ഀഀ
        if (left || top) {਍            椀昀 ⠀氀攀昀琀⤀ 笀ഀഀ
                this._left = (this._left + left) % 1;਍                猀⸀氀攀昀琀 㴀 琀栀椀猀⸀开氀攀昀琀 ⬀ ∀瀀砀∀㬀ഀഀ
            }਍            椀昀 ⠀琀漀瀀⤀ 笀ഀഀ
                this._top = (this._top + top) % 1;਍                猀⸀琀漀瀀 㴀 琀栀椀猀⸀开琀漀瀀 ⬀ ∀瀀砀∀㬀ഀഀ
            }਍        紀ഀഀ
    };਍    ⼀⨀尀ഀഀ
     * Paper.clear਍     嬀 洀攀琀栀漀搀 崀ഀഀ
     **਍     ⨀ 䌀氀攀愀爀猀 琀栀攀 瀀愀瀀攀爀Ⰰ 椀⸀攀⸀ 爀攀洀漀瘀攀猀 愀氀氀 琀栀攀 攀氀攀洀攀渀琀猀⸀ഀഀ
    \*/਍    刀⸀瀀爀漀琀漀琀礀瀀攀⸀挀氀攀愀爀 㴀 昀甀渀挀琀椀漀渀 ⠀⤀ 笀ഀഀ
        R.eve("raphael.clear", this);਍        瘀愀爀 挀 㴀 琀栀椀猀⸀挀愀渀瘀愀猀㬀ഀഀ
        while (c.firstChild) {਍            挀⸀爀攀洀漀瘀攀䌀栀椀氀搀⠀挀⸀昀椀爀猀琀䌀栀椀氀搀⤀㬀ഀഀ
        }਍        琀栀椀猀⸀戀漀琀琀漀洀 㴀 琀栀椀猀⸀琀漀瀀 㴀 渀甀氀氀㬀ഀഀ
        (this.desc = $("desc")).appendChild(R._g.doc.createTextNode("Created with Rapha\xebl " + R.version));਍        挀⸀愀瀀瀀攀渀搀䌀栀椀氀搀⠀琀栀椀猀⸀搀攀猀挀⤀㬀ഀഀ
        c.appendChild(this.defs = $("defs"));਍    紀㬀ഀഀ
    /*\਍     ⨀ 倀愀瀀攀爀⸀爀攀洀漀瘀攀ഀഀ
     [ method ]਍     ⨀⨀ഀഀ
     * Removes the paper from the DOM.਍    尀⨀⼀ഀഀ
    R.prototype.remove = function () {਍        攀瘀攀⠀∀爀愀瀀栀愀攀氀⸀爀攀洀漀瘀攀∀Ⰰ 琀栀椀猀⤀㬀ഀഀ
        this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);਍        昀漀爀 ⠀瘀愀爀 椀 椀渀 琀栀椀猀⤀ 笀ഀഀ
            this[i] = typeof this[i] == "function" ? R._removedFactory(i) : null;਍        紀ഀഀ
    };਍    瘀愀爀 猀攀琀瀀爀漀琀漀 㴀 刀⸀猀琀㬀ഀഀ
    for (var method in elproto) if (elproto[has](method) && !setproto[has](method)) {਍        猀攀琀瀀爀漀琀漀嬀洀攀琀栀漀搀崀 㴀 ⠀昀甀渀挀琀椀漀渀 ⠀洀攀琀栀漀搀渀愀洀攀⤀ 笀ഀഀ
            return function () {਍                瘀愀爀 愀爀最 㴀 愀爀最甀洀攀渀琀猀㬀ഀഀ
                return this.forEach(function (el) {਍                    攀氀嬀洀攀琀栀漀搀渀愀洀攀崀⸀愀瀀瀀氀礀⠀攀氀Ⰰ 愀爀最⤀㬀ഀഀ
                });਍            紀㬀ഀഀ
        })(method);਍    紀ഀഀ
})();਍ഀഀ
// ┌─────────────────────────────────────────────────────────────────────┐ \\਍⼀⼀ Ȁ‥刀愀瀀栀愀氀 ⴀ 䨀愀瘀愀匀挀爀椀瀀琀 嘀攀挀琀漀爀 䰀椀戀爀愀爀礀                                 Ȁ‥尀尀ഀഀ
// ├─────────────────────────────────────────────────────────────────────┤ \\਍⼀⼀ Ȁ‥嘀䴀䰀 䴀漀搀甀氀攀                                                          Ȁ‥尀尀ഀഀ
// ├─────────────────────────────────────────────────────────────────────┤ \\਍⼀⼀ Ȁ‥䌀漀瀀礀爀椀最栀琀 ⠀挀⤀ ㈀　　㠀ⴀ㈀　㄀㄀ 䐀洀椀琀爀礀 䈀愀爀愀渀漀瘀猀欀椀礀 ⠀栀琀琀瀀㨀⼀⼀爀愀瀀栀愀攀氀樀猀⸀挀漀洀⤀   Ȁ‥尀尀ഀഀ
// │ Copyright (c) 2008-2011 Sencha Labs (http://sencha.com)             │ \\਍⼀⼀ Ȁ‥䰀椀挀攀渀猀攀搀 甀渀搀攀爀 琀栀攀 䴀䤀吀 ⠀栀琀琀瀀㨀⼀⼀爀愀瀀栀愀攀氀樀猀⸀挀漀洀⼀氀椀挀攀渀猀攀⸀栀琀洀氀⤀ 氀椀挀攀渀猀攀⸀ Ȁ‥尀尀ഀഀ
// └─────────────────────────────────────────────────────────────────────┘ \\਍ഀഀ
(function(){਍    椀昀 ⠀℀刀⸀瘀洀氀⤀ 笀ഀഀ
        return;਍    紀ഀഀ
    var has = "hasOwnProperty",਍        匀琀爀 㴀 匀琀爀椀渀最Ⰰഀഀ
        toFloat = parseFloat,਍        洀愀琀栀 㴀 䴀愀琀栀Ⰰഀഀ
        round = math.round,਍        洀洀愀砀 㴀 洀愀琀栀⸀洀愀砀Ⰰഀഀ
        mmin = math.min,਍        愀戀猀 㴀 洀愀琀栀⸀愀戀猀Ⰰഀഀ
        fillString = "fill",਍        猀攀瀀愀爀愀琀漀爀 㴀 ⼀嬀Ⰰ 崀⬀⼀Ⰰഀഀ
        eve = R.eve,਍        洀猀 㴀 ∀ 瀀爀漀最椀搀㨀䐀堀䤀洀愀最攀吀爀愀渀猀昀漀爀洀⸀䴀椀挀爀漀猀漀昀琀∀Ⰰഀഀ
        S = " ",਍        䔀 㴀 ∀∀Ⰰഀഀ
        map = {M: "m", L: "l", C: "c", Z: "x", m: "t", l: "r", c: "v", z: "x"},਍        戀椀琀攀猀 㴀 ⼀⠀嬀挀氀洀稀崀⤀Ⰰ㼀⠀嬀帀挀氀洀稀崀⨀⤀⼀最椀Ⰰഀഀ
        blurregexp = / progid:\S+Blur\([^\)]+\)/g,਍        瘀愀氀 㴀 ⼀ⴀ㼀嬀帀Ⰰ尀猀ⴀ崀⬀⼀最Ⰰഀഀ
        cssDot = "position:absolute;left:0;top:0;width:1px;height:1px;behavior:url(#default#VML)",਍        稀漀漀洀 㴀 ㈀㄀㘀　　Ⰰഀഀ
        pathTypes = {path: 1, rect: 1, image: 1},਍        漀瘀愀氀吀礀瀀攀猀 㴀 笀挀椀爀挀氀攀㨀 ㄀Ⰰ 攀氀氀椀瀀猀攀㨀 ㄀紀Ⰰഀഀ
        path2vml = function (path) {਍            瘀愀爀 琀漀琀愀氀 㴀  ⼀嬀愀栀焀猀琀瘀崀⼀椀最Ⰰഀഀ
                command = R._pathToAbsolute;਍            匀琀爀⠀瀀愀琀栀⤀⸀洀愀琀挀栀⠀琀漀琀愀氀⤀ ☀☀ ⠀挀漀洀洀愀渀搀 㴀 刀⸀开瀀愀琀栀㈀挀甀爀瘀攀⤀㬀ഀഀ
            total = /[clmz]/g;਍            椀昀 ⠀挀漀洀洀愀渀搀 㴀㴀 刀⸀开瀀愀琀栀吀漀䄀戀猀漀氀甀琀攀 ☀☀ ℀匀琀爀⠀瀀愀琀栀⤀⸀洀愀琀挀栀⠀琀漀琀愀氀⤀⤀ 笀ഀഀ
                var res = Str(path).replace(bites, function (all, command, args) {਍                    瘀愀爀 瘀愀氀猀 㴀 嬀崀Ⰰഀഀ
                        isMove = command.toLowerCase() == "m",਍                        爀攀猀 㴀 洀愀瀀嬀挀漀洀洀愀渀搀崀㬀ഀഀ
                    args.replace(val, function (value) {਍                        椀昀 ⠀椀猀䴀漀瘀攀 ☀☀ 瘀愀氀猀⸀氀攀渀最琀栀 㴀㴀 ㈀⤀ 笀ഀഀ
                            res += vals + map[command == "m" ? "l" : "L"];਍                            瘀愀氀猀 㴀 嬀崀㬀ഀഀ
                        }਍                        瘀愀氀猀⸀瀀甀猀栀⠀爀漀甀渀搀⠀瘀愀氀甀攀 ⨀ 稀漀漀洀⤀⤀㬀ഀഀ
                    });਍                    爀攀琀甀爀渀 爀攀猀 ⬀ 瘀愀氀猀㬀ഀഀ
                });਍                爀攀琀甀爀渀 爀攀猀㬀ഀഀ
            }਍            瘀愀爀 瀀愀 㴀 挀漀洀洀愀渀搀⠀瀀愀琀栀⤀Ⰰ 瀀Ⰰ 爀㬀ഀഀ
            res = [];਍            昀漀爀 ⠀瘀愀爀 椀 㴀 　Ⰰ 椀椀 㴀 瀀愀⸀氀攀渀最琀栀㬀 椀 㰀 椀椀㬀 椀⬀⬀⤀ 笀ഀഀ
                p = pa[i];਍                爀 㴀 瀀愀嬀椀崀嬀　崀⸀琀漀䰀漀眀攀爀䌀愀猀攀⠀⤀㬀ഀഀ
                r == "z" && (r = "x");਍                昀漀爀 ⠀瘀愀爀 樀 㴀 ㄀Ⰰ 樀樀 㴀 瀀⸀氀攀渀最琀栀㬀 樀 㰀 樀樀㬀 樀⬀⬀⤀ 笀ഀഀ
                    r += round(p[j] * zoom) + (j != jj - 1 ? "," : E);਍                紀ഀഀ
                res.push(r);਍            紀ഀഀ
            return res.join(S);਍        紀Ⰰഀഀ
        compensation = function (deg, dx, dy) {਍            瘀愀爀 洀 㴀 刀⸀洀愀琀爀椀砀⠀⤀㬀ഀഀ
            m.rotate(-deg, .5, .5);਍            爀攀琀甀爀渀 笀ഀഀ
                dx: m.x(dx, dy),਍                搀礀㨀 洀⸀礀⠀搀砀Ⰰ 搀礀⤀ഀഀ
            };਍        紀Ⰰഀഀ
        setCoords = function (p, sx, sy, dx, dy, deg) {਍            瘀愀爀 开 㴀 瀀⸀开Ⰰഀഀ
                m = p.matrix,਍                昀椀氀氀瀀漀猀 㴀 开⸀昀椀氀氀瀀漀猀Ⰰഀഀ
                o = p.node,਍                猀 㴀 漀⸀猀琀礀氀攀Ⰰഀഀ
                y = 1,਍                昀氀椀瀀 㴀 ∀∀Ⰰഀഀ
                dxdy,਍                欀砀 㴀 稀漀漀洀 ⼀ 猀砀Ⰰഀഀ
                ky = zoom / sy;਍            猀⸀瘀椀猀椀戀椀氀椀琀礀 㴀 ∀栀椀搀搀攀渀∀㬀ഀഀ
            if (!sx || !sy) {਍                爀攀琀甀爀渀㬀ഀഀ
            }਍            漀⸀挀漀漀爀搀猀椀稀攀 㴀 愀戀猀⠀欀砀⤀ ⬀ 匀 ⬀ 愀戀猀⠀欀礀⤀㬀ഀഀ
            s.rotation = deg * (sx * sy < 0 ? -1 : 1);਍            椀昀 ⠀搀攀最⤀ 笀ഀഀ
                var c = compensation(deg, dx, dy);਍                搀砀 㴀 挀⸀搀砀㬀ഀഀ
                dy = c.dy;਍            紀ഀഀ
            sx < 0 && (flip += "x");਍            猀礀 㰀 　 ☀☀ ⠀昀氀椀瀀 ⬀㴀 ∀ 礀∀⤀ ☀☀ ⠀礀 㴀 ⴀ㄀⤀㬀ഀഀ
            s.flip = flip;਍            漀⸀挀漀漀爀搀漀爀椀最椀渀 㴀 ⠀搀砀 ⨀ ⴀ欀砀⤀ ⬀ 匀 ⬀ ⠀搀礀 ⨀ ⴀ欀礀⤀㬀ഀഀ
            if (fillpos || _.fillsize) {਍                瘀愀爀 昀椀氀氀 㴀 漀⸀最攀琀䔀氀攀洀攀渀琀猀䈀礀吀愀最一愀洀攀⠀昀椀氀氀匀琀爀椀渀最⤀㬀ഀഀ
                fill = fill && fill[0];਍                漀⸀爀攀洀漀瘀攀䌀栀椀氀搀⠀昀椀氀氀⤀㬀ഀഀ
                if (fillpos) {਍                    挀 㴀 挀漀洀瀀攀渀猀愀琀椀漀渀⠀搀攀最Ⰰ 洀⸀砀⠀昀椀氀氀瀀漀猀嬀　崀Ⰰ 昀椀氀氀瀀漀猀嬀㄀崀⤀Ⰰ 洀⸀礀⠀昀椀氀氀瀀漀猀嬀　崀Ⰰ 昀椀氀氀瀀漀猀嬀㄀崀⤀⤀㬀ഀഀ
                    fill.position = c.dx * y + S + c.dy * y;਍                紀ഀഀ
                if (_.fillsize) {਍                    昀椀氀氀⸀猀椀稀攀 㴀 开⸀昀椀氀氀猀椀稀攀嬀　崀 ⨀ 愀戀猀⠀猀砀⤀ ⬀ 匀 ⬀ 开⸀昀椀氀氀猀椀稀攀嬀㄀崀 ⨀ 愀戀猀⠀猀礀⤀㬀ഀഀ
                }਍                漀⸀愀瀀瀀攀渀搀䌀栀椀氀搀⠀昀椀氀氀⤀㬀ഀഀ
            }਍            猀⸀瘀椀猀椀戀椀氀椀琀礀 㴀 ∀瘀椀猀椀戀氀攀∀㬀ഀഀ
        };਍    刀⸀琀漀匀琀爀椀渀最 㴀 昀甀渀挀琀椀漀渀 ⠀⤀ 笀ഀഀ
        return  "Your browser doesn\u2019t support SVG. Falling down to VML.\nYou are running Rapha\xebl " + this.version;਍    紀㬀ഀഀ
    var addArrow = function (o, value, isEnd) {਍        瘀愀爀 瘀愀氀甀攀猀 㴀 匀琀爀⠀瘀愀氀甀攀⤀⸀琀漀䰀漀眀攀爀䌀愀猀攀⠀⤀⸀猀瀀氀椀琀⠀∀ⴀ∀⤀Ⰰഀഀ
            se = isEnd ? "end" : "start",਍            椀 㴀 瘀愀氀甀攀猀⸀氀攀渀最琀栀Ⰰഀഀ
            type = "classic",਍            眀 㴀 ∀洀攀搀椀甀洀∀Ⰰഀഀ
            h = "medium";਍        眀栀椀氀攀 ⠀椀ⴀⴀ⤀ 笀ഀഀ
            switch (values[i]) {਍                挀愀猀攀 ∀戀氀漀挀欀∀㨀ഀഀ
                case "classic":਍                挀愀猀攀 ∀漀瘀愀氀∀㨀ഀഀ
                case "diamond":਍                挀愀猀攀 ∀漀瀀攀渀∀㨀ഀഀ
                case "none":਍                    琀礀瀀攀 㴀 瘀愀氀甀攀猀嬀椀崀㬀ഀഀ
                    break;਍                挀愀猀攀 ∀眀椀搀攀∀㨀ഀഀ
                case "narrow": h = values[i]; break;਍                挀愀猀攀 ∀氀漀渀最∀㨀ഀഀ
                case "short": w = values[i]; break;਍            紀ഀഀ
        }਍        瘀愀爀 猀琀爀漀欀攀 㴀 漀⸀渀漀搀攀⸀最攀琀䔀氀攀洀攀渀琀猀䈀礀吀愀最一愀洀攀⠀∀猀琀爀漀欀攀∀⤀嬀　崀㬀ഀഀ
        stroke[se + "arrow"] = type;਍        猀琀爀漀欀攀嬀猀攀 ⬀ ∀愀爀爀漀眀氀攀渀最琀栀∀崀 㴀 眀㬀ഀഀ
        stroke[se + "arrowwidth"] = h;਍    紀Ⰰഀഀ
    setFillAndStroke = function (o, params) {਍        ⼀⼀ 漀⸀瀀愀瀀攀爀⸀挀愀渀瘀愀猀⸀猀琀礀氀攀⸀搀椀猀瀀氀愀礀 㴀 ∀渀漀渀攀∀㬀ഀഀ
        o.attrs = o.attrs || {};਍        瘀愀爀 渀漀搀攀 㴀 漀⸀渀漀搀攀Ⰰഀഀ
            a = o.attrs,਍            猀 㴀 渀漀搀攀⸀猀琀礀氀攀Ⰰഀഀ
            xy,਍            渀攀眀瀀愀琀栀 㴀 瀀愀琀栀吀礀瀀攀猀嬀漀⸀琀礀瀀攀崀 ☀☀ ⠀瀀愀爀愀洀猀⸀砀 ℀㴀 愀⸀砀 簀簀 瀀愀爀愀洀猀⸀礀 ℀㴀 愀⸀礀 簀簀 瀀愀爀愀洀猀⸀眀椀搀琀栀 ℀㴀 愀⸀眀椀搀琀栀 簀簀 瀀愀爀愀洀猀⸀栀攀椀最栀琀 ℀㴀 愀⸀栀攀椀最栀琀 簀簀 瀀愀爀愀洀猀⸀挀砀 ℀㴀 愀⸀挀砀 簀簀 瀀愀爀愀洀猀⸀挀礀 ℀㴀 愀⸀挀礀 簀簀 瀀愀爀愀洀猀⸀爀砀 ℀㴀 愀⸀爀砀 簀簀 瀀愀爀愀洀猀⸀爀礀 ℀㴀 愀⸀爀礀 簀簀 瀀愀爀愀洀猀⸀爀 ℀㴀 愀⸀爀⤀Ⰰഀഀ
            isOval = ovalTypes[o.type] && (a.cx != params.cx || a.cy != params.cy || a.r != params.r || a.rx != params.rx || a.ry != params.ry),਍            爀攀猀 㴀 漀㬀ഀഀ
਍ഀഀ
        for (var par in params) if (params[has](par)) {਍            愀嬀瀀愀爀崀 㴀 瀀愀爀愀洀猀嬀瀀愀爀崀㬀ഀഀ
        }਍        椀昀 ⠀渀攀眀瀀愀琀栀⤀ 笀ഀഀ
            a.path = R._getPath[o.type](o);਍            漀⸀开⸀搀椀爀琀礀 㴀 ㄀㬀ഀഀ
        }਍        瀀愀爀愀洀猀⸀栀爀攀昀 ☀☀ ⠀渀漀搀攀⸀栀爀攀昀 㴀 瀀愀爀愀洀猀⸀栀爀攀昀⤀㬀ഀഀ
        params.title && (node.title = params.title);਍        瀀愀爀愀洀猀⸀琀愀爀最攀琀 ☀☀ ⠀渀漀搀攀⸀琀愀爀最攀琀 㴀 瀀愀爀愀洀猀⸀琀愀爀最攀琀⤀㬀ഀഀ
        params.cursor && (s.cursor = params.cursor);਍        ∀戀氀甀爀∀ 椀渀 瀀愀爀愀洀猀 ☀☀ 漀⸀戀氀甀爀⠀瀀愀爀愀洀猀⸀戀氀甀爀⤀㬀ഀഀ
        if (params.path && o.type == "path" || newpath) {਍            渀漀搀攀⸀瀀愀琀栀 㴀 瀀愀琀栀㈀瘀洀氀⠀縀匀琀爀⠀愀⸀瀀愀琀栀⤀⸀琀漀䰀漀眀攀爀䌀愀猀攀⠀⤀⸀椀渀搀攀砀伀昀⠀∀爀∀⤀ 㼀 刀⸀开瀀愀琀栀吀漀䄀戀猀漀氀甀琀攀⠀愀⸀瀀愀琀栀⤀ 㨀 愀⸀瀀愀琀栀⤀㬀ഀഀ
            o._.dirty = 1;਍            椀昀 ⠀漀⸀琀礀瀀攀 㴀㴀 ∀椀洀愀最攀∀⤀ 笀ഀഀ
                o._.fillpos = [a.x, a.y];਍                漀⸀开⸀昀椀氀氀猀椀稀攀 㴀 嬀愀⸀眀椀搀琀栀Ⰰ 愀⸀栀攀椀最栀琀崀㬀ഀഀ
                setCoords(o, 1, 1, 0, 0, 0);਍            紀ഀഀ
        }਍        ∀琀爀愀渀猀昀漀爀洀∀ 椀渀 瀀愀爀愀洀猀 ☀☀ 漀⸀琀爀愀渀猀昀漀爀洀⠀瀀愀爀愀洀猀⸀琀爀愀渀猀昀漀爀洀⤀㬀ഀഀ
        if (isOval) {਍            瘀愀爀 挀砀 㴀 ⬀愀⸀挀砀Ⰰഀഀ
                cy = +a.cy,਍                爀砀 㴀 ⬀愀⸀爀砀 簀簀 ⬀愀⸀爀 簀簀 　Ⰰഀഀ
                ry = +a.ry || +a.r || 0;਍            渀漀搀攀⸀瀀愀琀栀 㴀 刀⸀昀漀爀洀愀琀⠀∀愀爀笀　紀Ⰰ笀㄀紀Ⰰ笀㈀紀Ⰰ笀㌀紀Ⰰ笀㐀紀Ⰰ笀㄀紀Ⰰ笀㐀紀Ⰰ笀㄀紀砀∀Ⰰ 爀漀甀渀搀⠀⠀挀砀 ⴀ 爀砀⤀ ⨀ 稀漀漀洀⤀Ⰰ 爀漀甀渀搀⠀⠀挀礀 ⴀ 爀礀⤀ ⨀ 稀漀漀洀⤀Ⰰ 爀漀甀渀搀⠀⠀挀砀 ⬀ 爀砀⤀ ⨀ 稀漀漀洀⤀Ⰰ 爀漀甀渀搀⠀⠀挀礀 ⬀ 爀礀⤀ ⨀ 稀漀漀洀⤀Ⰰ 爀漀甀渀搀⠀挀砀 ⨀ 稀漀漀洀⤀⤀㬀ഀഀ
            o._.dirty = 1;਍        紀ഀഀ
        if ("clip-rect" in params) {਍            瘀愀爀 爀攀挀琀 㴀 匀琀爀⠀瀀愀爀愀洀猀嬀∀挀氀椀瀀ⴀ爀攀挀琀∀崀⤀⸀猀瀀氀椀琀⠀猀攀瀀愀爀愀琀漀爀⤀㬀ഀഀ
            if (rect.length == 4) {਍                爀攀挀琀嬀㈀崀 㴀 ⬀爀攀挀琀嬀㈀崀 ⬀ ⠀⬀爀攀挀琀嬀　崀⤀㬀ഀഀ
                rect[3] = +rect[3] + (+rect[1]);਍                瘀愀爀 搀椀瘀 㴀 渀漀搀攀⸀挀氀椀瀀刀攀挀琀 簀簀 刀⸀开最⸀搀漀挀⸀挀爀攀愀琀攀䔀氀攀洀攀渀琀⠀∀搀椀瘀∀⤀Ⰰഀഀ
                    dstyle = div.style;਍                搀猀琀礀氀攀⸀挀氀椀瀀 㴀 刀⸀昀漀爀洀愀琀⠀∀爀攀挀琀⠀笀㄀紀瀀砀 笀㈀紀瀀砀 笀㌀紀瀀砀 笀　紀瀀砀⤀∀Ⰰ 爀攀挀琀⤀㬀ഀഀ
                if (!node.clipRect) {਍                    搀猀琀礀氀攀⸀瀀漀猀椀琀椀漀渀 㴀 ∀愀戀猀漀氀甀琀攀∀㬀ഀഀ
                    dstyle.top = 0;਍                    搀猀琀礀氀攀⸀氀攀昀琀 㴀 　㬀ഀഀ
                    dstyle.width = o.paper.width + "px";਍                    搀猀琀礀氀攀⸀栀攀椀最栀琀 㴀 漀⸀瀀愀瀀攀爀⸀栀攀椀最栀琀 ⬀ ∀瀀砀∀㬀ഀഀ
                    node.parentNode.insertBefore(div, node);਍                    搀椀瘀⸀愀瀀瀀攀渀搀䌀栀椀氀搀⠀渀漀搀攀⤀㬀ഀഀ
                    node.clipRect = div;਍                紀ഀഀ
            }਍            椀昀 ⠀℀瀀愀爀愀洀猀嬀∀挀氀椀瀀ⴀ爀攀挀琀∀崀⤀ 笀ഀഀ
                node.clipRect && (node.clipRect.style.clip = "auto");਍            紀ഀഀ
        }਍        椀昀 ⠀漀⸀琀攀砀琀瀀愀琀栀⤀ 笀ഀഀ
            var textpathStyle = o.textpath.style;਍            瀀愀爀愀洀猀⸀昀漀渀琀 ☀☀ ⠀琀攀砀琀瀀愀琀栀匀琀礀氀攀⸀昀漀渀琀 㴀 瀀愀爀愀洀猀⸀昀漀渀琀⤀㬀ഀഀ
            params["font-family"] && (textpathStyle.fontFamily = '"' + params["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, E) + '"');਍            瀀愀爀愀洀猀嬀∀昀漀渀琀ⴀ猀椀稀攀∀崀 ☀☀ ⠀琀攀砀琀瀀愀琀栀匀琀礀氀攀⸀昀漀渀琀匀椀稀攀 㴀 瀀愀爀愀洀猀嬀∀昀漀渀琀ⴀ猀椀稀攀∀崀⤀㬀ഀഀ
            params["font-weight"] && (textpathStyle.fontWeight = params["font-weight"]);਍            瀀愀爀愀洀猀嬀∀昀漀渀琀ⴀ猀琀礀氀攀∀崀 ☀☀ ⠀琀攀砀琀瀀愀琀栀匀琀礀氀攀⸀昀漀渀琀匀琀礀氀攀 㴀 瀀愀爀愀洀猀嬀∀昀漀渀琀ⴀ猀琀礀氀攀∀崀⤀㬀ഀഀ
        }਍        椀昀 ⠀∀愀爀爀漀眀ⴀ猀琀愀爀琀∀ 椀渀 瀀愀爀愀洀猀⤀ 笀ഀഀ
            addArrow(res, params["arrow-start"]);਍        紀ഀഀ
        if ("arrow-end" in params) {਍            愀搀搀䄀爀爀漀眀⠀爀攀猀Ⰰ 瀀愀爀愀洀猀嬀∀愀爀爀漀眀ⴀ攀渀搀∀崀Ⰰ ㄀⤀㬀ഀഀ
        }਍        椀昀 ⠀瀀愀爀愀洀猀⸀漀瀀愀挀椀琀礀 ℀㴀 渀甀氀氀 簀簀 ഀഀ
            params["stroke-width"] != null ||਍            瀀愀爀愀洀猀⸀昀椀氀氀 ℀㴀 渀甀氀氀 簀簀ഀഀ
            params.src != null ||਍            瀀愀爀愀洀猀⸀猀琀爀漀欀攀 ℀㴀 渀甀氀氀 簀簀ഀഀ
            params["stroke-width"] != null ||਍            瀀愀爀愀洀猀嬀∀猀琀爀漀欀攀ⴀ漀瀀愀挀椀琀礀∀崀 ℀㴀 渀甀氀氀 簀簀ഀഀ
            params["fill-opacity"] != null ||਍            瀀愀爀愀洀猀嬀∀猀琀爀漀欀攀ⴀ搀愀猀栀愀爀爀愀礀∀崀 ℀㴀 渀甀氀氀 簀簀ഀഀ
            params["stroke-miterlimit"] != null ||਍            瀀愀爀愀洀猀嬀∀猀琀爀漀欀攀ⴀ氀椀渀攀樀漀椀渀∀崀 ℀㴀 渀甀氀氀 簀簀ഀഀ
            params["stroke-linecap"] != null) {਍            瘀愀爀 昀椀氀氀 㴀 渀漀搀攀⸀最攀琀䔀氀攀洀攀渀琀猀䈀礀吀愀最一愀洀攀⠀昀椀氀氀匀琀爀椀渀最⤀Ⰰഀഀ
                newfill = false;਍            昀椀氀氀 㴀 昀椀氀氀 ☀☀ 昀椀氀氀嬀　崀㬀ഀഀ
            !fill && (newfill = fill = createNode(fillString));਍            椀昀 ⠀漀⸀琀礀瀀攀 㴀㴀 ∀椀洀愀最攀∀ ☀☀ 瀀愀爀愀洀猀⸀猀爀挀⤀ 笀ഀഀ
                fill.src = params.src;਍            紀ഀഀ
            params.fill && (fill.on = true);਍            椀昀 ⠀昀椀氀氀⸀漀渀 㴀㴀 渀甀氀氀 簀簀 瀀愀爀愀洀猀⸀昀椀氀氀 㴀㴀 ∀渀漀渀攀∀ 簀簀 瀀愀爀愀洀猀⸀昀椀氀氀 㴀㴀㴀 渀甀氀氀⤀ 笀ഀഀ
                fill.on = false;਍            紀ഀഀ
            if (fill.on && params.fill) {਍                瘀愀爀 椀猀唀刀䰀 㴀 匀琀爀⠀瀀愀爀愀洀猀⸀昀椀氀氀⤀⸀洀愀琀挀栀⠀刀⸀开䤀匀唀刀䰀⤀㬀ഀഀ
                if (isURL) {਍                    昀椀氀氀⸀瀀愀爀攀渀琀一漀搀攀 㴀㴀 渀漀搀攀 ☀☀ 渀漀搀攀⸀爀攀洀漀瘀攀䌀栀椀氀搀⠀昀椀氀氀⤀㬀ഀഀ
                    fill.rotate = true;਍                    昀椀氀氀⸀猀爀挀 㴀 椀猀唀刀䰀嬀㄀崀㬀ഀഀ
                    fill.type = "tile";਍                    瘀愀爀 戀戀漀砀 㴀 漀⸀最攀琀䈀䈀漀砀⠀㄀⤀㬀ഀഀ
                    fill.position = bbox.x + S + bbox.y;਍                    漀⸀开⸀昀椀氀氀瀀漀猀 㴀 嬀戀戀漀砀⸀砀Ⰰ 戀戀漀砀⸀礀崀㬀ഀഀ
਍                    刀⸀开瀀爀攀氀漀愀搀⠀椀猀唀刀䰀嬀㄀崀Ⰰ 昀甀渀挀琀椀漀渀 ⠀⤀ 笀ഀഀ
                        o._.fillsize = [this.offsetWidth, this.offsetHeight];਍                    紀⤀㬀ഀഀ
                } else {਍                    昀椀氀氀⸀挀漀氀漀爀 㴀 刀⸀最攀琀刀䜀䈀⠀瀀愀爀愀洀猀⸀昀椀氀氀⤀⸀栀攀砀㬀ഀഀ
                    fill.src = E;਍                    昀椀氀氀⸀琀礀瀀攀 㴀 ∀猀漀氀椀搀∀㬀ഀഀ
                    if (R.getRGB(params.fill).error && (res.type in {circle: 1, ellipse: 1} || Str(params.fill).charAt() != "r") && addGradientFill(res, params.fill, fill)) {਍                        愀⸀昀椀氀氀 㴀 ∀渀漀渀攀∀㬀ഀഀ
                        a.gradient = params.fill;਍                        昀椀氀氀⸀爀漀琀愀琀攀 㴀 昀愀氀猀攀㬀ഀഀ
                    }਍                紀ഀഀ
            }਍            椀昀 ⠀∀昀椀氀氀ⴀ漀瀀愀挀椀琀礀∀ 椀渀 瀀愀爀愀洀猀 簀簀 ∀漀瀀愀挀椀琀礀∀ 椀渀 瀀愀爀愀洀猀⤀ 笀ഀഀ
                var opacity = ((+a["fill-opacity"] + 1 || 2) - 1) * ((+a.opacity + 1 || 2) - 1) * ((+R.getRGB(params.fill).o + 1 || 2) - 1);਍                漀瀀愀挀椀琀礀 㴀 洀洀椀渀⠀洀洀愀砀⠀漀瀀愀挀椀琀礀Ⰰ 　⤀Ⰰ ㄀⤀㬀ഀഀ
                fill.opacity = opacity;਍                椀昀 ⠀昀椀氀氀⸀猀爀挀⤀ 笀ഀഀ
                    fill.color = "none";਍                紀ഀഀ
            }਍            渀漀搀攀⸀愀瀀瀀攀渀搀䌀栀椀氀搀⠀昀椀氀氀⤀㬀ഀഀ
            var stroke = (node.getElementsByTagName("stroke") && node.getElementsByTagName("stroke")[0]),਍            渀攀眀猀琀爀漀欀攀 㴀 昀愀氀猀攀㬀ഀഀ
            !stroke && (newstroke = stroke = createNode("stroke"));਍            椀昀 ⠀⠀瀀愀爀愀洀猀⸀猀琀爀漀欀攀 ☀☀ 瀀愀爀愀洀猀⸀猀琀爀漀欀攀 ℀㴀 ∀渀漀渀攀∀⤀ 簀簀ഀഀ
                params["stroke-width"] ||਍                瀀愀爀愀洀猀嬀∀猀琀爀漀欀攀ⴀ漀瀀愀挀椀琀礀∀崀 ℀㴀 渀甀氀氀 簀簀ഀഀ
                params["stroke-dasharray"] ||਍                瀀愀爀愀洀猀嬀∀猀琀爀漀欀攀ⴀ洀椀琀攀爀氀椀洀椀琀∀崀 簀簀ഀഀ
                params["stroke-linejoin"] ||਍                瀀愀爀愀洀猀嬀∀猀琀爀漀欀攀ⴀ氀椀渀攀挀愀瀀∀崀⤀ 笀ഀഀ
                stroke.on = true;਍            紀ഀഀ
            (params.stroke == "none" || params.stroke === null || stroke.on == null || params.stroke == 0 || params["stroke-width"] == 0) && (stroke.on = false);਍            瘀愀爀 猀琀爀漀欀攀䌀漀氀漀爀 㴀 刀⸀最攀琀刀䜀䈀⠀瀀愀爀愀洀猀⸀猀琀爀漀欀攀⤀㬀ഀഀ
            stroke.on && params.stroke && (stroke.color = strokeColor.hex);਍            漀瀀愀挀椀琀礀 㴀 ⠀⠀⬀愀嬀∀猀琀爀漀欀攀ⴀ漀瀀愀挀椀琀礀∀崀 ⬀ ㄀ 簀簀 ㈀⤀ ⴀ ㄀⤀ ⨀ ⠀⠀⬀愀⸀漀瀀愀挀椀琀礀 ⬀ ㄀ 簀簀 ㈀⤀ ⴀ ㄀⤀ ⨀ ⠀⠀⬀猀琀爀漀欀攀䌀漀氀漀爀⸀漀 ⬀ ㄀ 簀簀 ㈀⤀ ⴀ ㄀⤀㬀ഀഀ
            var width = (toFloat(params["stroke-width"]) || 1) * .75;਍            漀瀀愀挀椀琀礀 㴀 洀洀椀渀⠀洀洀愀砀⠀漀瀀愀挀椀琀礀Ⰰ 　⤀Ⰰ ㄀⤀㬀ഀഀ
            params["stroke-width"] == null && (width = a["stroke-width"]);਍            瀀愀爀愀洀猀嬀∀猀琀爀漀欀攀ⴀ眀椀搀琀栀∀崀 ☀☀ ⠀猀琀爀漀欀攀⸀眀攀椀最栀琀 㴀 眀椀搀琀栀⤀㬀ഀഀ
            width && width < 1 && (opacity *= width) && (stroke.weight = 1);਍            猀琀爀漀欀攀⸀漀瀀愀挀椀琀礀 㴀 漀瀀愀挀椀琀礀㬀ഀഀ
        ਍            瀀愀爀愀洀猀嬀∀猀琀爀漀欀攀ⴀ氀椀渀攀樀漀椀渀∀崀 ☀☀ ⠀猀琀爀漀欀攀⸀樀漀椀渀猀琀礀氀攀 㴀 瀀愀爀愀洀猀嬀∀猀琀爀漀欀攀ⴀ氀椀渀攀樀漀椀渀∀崀 簀簀 ∀洀椀琀攀爀∀⤀㬀ഀഀ
            stroke.miterlimit = params["stroke-miterlimit"] || 8;਍            瀀愀爀愀洀猀嬀∀猀琀爀漀欀攀ⴀ氀椀渀攀挀愀瀀∀崀 ☀☀ ⠀猀琀爀漀欀攀⸀攀渀搀挀愀瀀 㴀 瀀愀爀愀洀猀嬀∀猀琀爀漀欀攀ⴀ氀椀渀攀挀愀瀀∀崀 㴀㴀 ∀戀甀琀琀∀ 㼀 ∀昀氀愀琀∀ 㨀 瀀愀爀愀洀猀嬀∀猀琀爀漀欀攀ⴀ氀椀渀攀挀愀瀀∀崀 㴀㴀 ∀猀焀甀愀爀攀∀ 㼀 ∀猀焀甀愀爀攀∀ 㨀 ∀爀漀甀渀搀∀⤀㬀ഀഀ
            if ("stroke-dasharray" in params) {਍                瘀愀爀 搀愀猀栀愀爀爀愀礀 㴀 笀ഀഀ
                    "-": "shortdash",਍                    ∀⸀∀㨀 ∀猀栀漀爀琀搀漀琀∀Ⰰഀഀ
                    "-.": "shortdashdot",਍                    ∀ⴀ⸀⸀∀㨀 ∀猀栀漀爀琀搀愀猀栀搀漀琀搀漀琀∀Ⰰഀഀ
                    ". ": "dot",਍                    ∀ⴀ ∀㨀 ∀搀愀猀栀∀Ⰰഀഀ
                    "--": "longdash",਍                    ∀ⴀ ⸀∀㨀 ∀搀愀猀栀搀漀琀∀Ⰰഀഀ
                    "--.": "longdashdot",਍                    ∀ⴀⴀ⸀⸀∀㨀 ∀氀漀渀最搀愀猀栀搀漀琀搀漀琀∀ഀഀ
                };਍                猀琀爀漀欀攀⸀搀愀猀栀猀琀礀氀攀 㴀 搀愀猀栀愀爀爀愀礀嬀栀愀猀崀⠀瀀愀爀愀洀猀嬀∀猀琀爀漀欀攀ⴀ搀愀猀栀愀爀爀愀礀∀崀⤀ 㼀 搀愀猀栀愀爀爀愀礀嬀瀀愀爀愀洀猀嬀∀猀琀爀漀欀攀ⴀ搀愀猀栀愀爀爀愀礀∀崀崀 㨀 䔀㬀ഀഀ
            }਍            渀攀眀猀琀爀漀欀攀 ☀☀ 渀漀搀攀⸀愀瀀瀀攀渀搀䌀栀椀氀搀⠀猀琀爀漀欀攀⤀㬀ഀഀ
        }਍        椀昀 ⠀爀攀猀⸀琀礀瀀攀 㴀㴀 ∀琀攀砀琀∀⤀ 笀ഀഀ
            res.paper.canvas.style.display = E;਍            瘀愀爀 猀瀀愀渀 㴀 爀攀猀⸀瀀愀瀀攀爀⸀猀瀀愀渀Ⰰഀഀ
                m = 100,਍                昀漀渀琀匀椀稀攀 㴀 愀⸀昀漀渀琀 ☀☀ 愀⸀昀漀渀琀⸀洀愀琀挀栀⠀⼀尀搀⬀⠀㼀㨀尀⸀尀搀⨀⤀㼀⠀㼀㴀瀀砀⤀⼀⤀㬀ഀഀ
            s = span.style;਍            愀⸀昀漀渀琀 ☀☀ ⠀猀⸀昀漀渀琀 㴀 愀⸀昀漀渀琀⤀㬀ഀഀ
            a["font-family"] && (s.fontFamily = a["font-family"]);਍            愀嬀∀昀漀渀琀ⴀ眀攀椀最栀琀∀崀 ☀☀ ⠀猀⸀昀漀渀琀圀攀椀最栀琀 㴀 愀嬀∀昀漀渀琀ⴀ眀攀椀最栀琀∀崀⤀㬀ഀഀ
            a["font-style"] && (s.fontStyle = a["font-style"]);਍            昀漀渀琀匀椀稀攀 㴀 琀漀䘀氀漀愀琀⠀愀嬀∀昀漀渀琀ⴀ猀椀稀攀∀崀 簀簀 昀漀渀琀匀椀稀攀 ☀☀ 昀漀渀琀匀椀稀攀嬀　崀⤀ 簀簀 ㄀　㬀ഀഀ
            s.fontSize = fontSize * m + "px";਍            爀攀猀⸀琀攀砀琀瀀愀琀栀⸀猀琀爀椀渀最 ☀☀ ⠀猀瀀愀渀⸀椀渀渀攀爀䠀吀䴀䰀 㴀 匀琀爀⠀爀攀猀⸀琀攀砀琀瀀愀琀栀⸀猀琀爀椀渀最⤀⸀爀攀瀀氀愀挀攀⠀⼀㰀⼀最Ⰰ ∀☀⌀㘀　㬀∀⤀⸀爀攀瀀氀愀挀攀⠀⼀☀⼀最Ⰰ ∀☀⌀㌀㠀㬀∀⤀⸀爀攀瀀氀愀挀攀⠀⼀尀渀⼀最Ⰰ ∀㰀戀爀㸀∀⤀⤀㬀ഀഀ
            var brect = span.getBoundingClientRect();਍            爀攀猀⸀圀 㴀 愀⸀眀 㴀 ⠀戀爀攀挀琀⸀爀椀最栀琀 ⴀ 戀爀攀挀琀⸀氀攀昀琀⤀ ⼀ 洀㬀ഀഀ
            res.H = a.h = (brect.bottom - brect.top) / m;਍            ⼀⼀ 爀攀猀⸀瀀愀瀀攀爀⸀挀愀渀瘀愀猀⸀猀琀礀氀攀⸀搀椀猀瀀氀愀礀 㴀 ∀渀漀渀攀∀㬀ഀഀ
            res.X = a.x;਍            爀攀猀⸀夀 㴀 愀⸀礀 ⬀ 爀攀猀⸀䠀 ⼀ ㈀㬀ഀഀ
਍            ⠀∀砀∀ 椀渀 瀀愀爀愀洀猀 簀簀 ∀礀∀ 椀渀 瀀愀爀愀洀猀⤀ ☀☀ ⠀爀攀猀⸀瀀愀琀栀⸀瘀 㴀 刀⸀昀漀爀洀愀琀⠀∀洀笀　紀Ⰰ笀㄀紀氀笀㈀紀Ⰰ笀㄀紀∀Ⰰ 爀漀甀渀搀⠀愀⸀砀 ⨀ 稀漀漀洀⤀Ⰰ 爀漀甀渀搀⠀愀⸀礀 ⨀ 稀漀漀洀⤀Ⰰ 爀漀甀渀搀⠀愀⸀砀 ⨀ 稀漀漀洀⤀ ⬀ ㄀⤀⤀㬀ഀഀ
            var dirtyattrs = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"];਍            昀漀爀 ⠀瘀愀爀 搀 㴀 　Ⰰ 搀搀 㴀 搀椀爀琀礀愀琀琀爀猀⸀氀攀渀最琀栀㬀 搀 㰀 搀搀㬀 搀⬀⬀⤀ 椀昀 ⠀搀椀爀琀礀愀琀琀爀猀嬀搀崀 椀渀 瀀愀爀愀洀猀⤀ 笀ഀഀ
                res._.dirty = 1;਍                戀爀攀愀欀㬀ഀഀ
            }਍        ഀഀ
            // text-anchor emulation਍            猀眀椀琀挀栀 ⠀愀嬀∀琀攀砀琀ⴀ愀渀挀栀漀爀∀崀⤀ 笀ഀഀ
                case "start":਍                    爀攀猀⸀琀攀砀琀瀀愀琀栀⸀猀琀礀氀攀嬀∀瘀ⴀ琀攀砀琀ⴀ愀氀椀最渀∀崀 㴀 ∀氀攀昀琀∀㬀ഀഀ
                    res.bbx = res.W / 2;਍                戀爀攀愀欀㬀ഀഀ
                case "end":਍                    爀攀猀⸀琀攀砀琀瀀愀琀栀⸀猀琀礀氀攀嬀∀瘀ⴀ琀攀砀琀ⴀ愀氀椀最渀∀崀 㴀 ∀爀椀最栀琀∀㬀ഀഀ
                    res.bbx = -res.W / 2;਍                戀爀攀愀欀㬀ഀഀ
                default:਍                    爀攀猀⸀琀攀砀琀瀀愀琀栀⸀猀琀礀氀攀嬀∀瘀ⴀ琀攀砀琀ⴀ愀氀椀最渀∀崀 㴀 ∀挀攀渀琀攀爀∀㬀ഀഀ
                    res.bbx = 0;਍                戀爀攀愀欀㬀ഀഀ
            }਍            爀攀猀⸀琀攀砀琀瀀愀琀栀⸀猀琀礀氀攀嬀∀瘀ⴀ琀攀砀琀ⴀ欀攀爀渀∀崀 㴀 琀爀甀攀㬀ഀഀ
        }਍        ⼀⼀ 爀攀猀⸀瀀愀瀀攀爀⸀挀愀渀瘀愀猀⸀猀琀礀氀攀⸀搀椀猀瀀氀愀礀 㴀 䔀㬀ഀഀ
    },਍    愀搀搀䜀爀愀搀椀攀渀琀䘀椀氀氀 㴀 昀甀渀挀琀椀漀渀 ⠀漀Ⰰ 最爀愀搀椀攀渀琀Ⰰ 昀椀氀氀⤀ 笀ഀഀ
        o.attrs = o.attrs || {};਍        瘀愀爀 愀琀琀爀猀 㴀 漀⸀愀琀琀爀猀Ⰰഀഀ
            pow = Math.pow,਍            漀瀀愀挀椀琀礀Ⰰഀഀ
            oindex,਍            琀礀瀀攀 㴀 ∀氀椀渀攀愀爀∀Ⰰഀഀ
            fxfy = ".5 .5";਍        漀⸀愀琀琀爀猀⸀最爀愀搀椀攀渀琀 㴀 最爀愀搀椀攀渀琀㬀ഀഀ
        gradient = Str(gradient).replace(R._radial_gradient, function (all, fx, fy) {਍            琀礀瀀攀 㴀 ∀爀愀搀椀愀氀∀㬀ഀഀ
            if (fx && fy) {਍                昀砀 㴀 琀漀䘀氀漀愀琀⠀昀砀⤀㬀ഀഀ
                fy = toFloat(fy);਍                瀀漀眀⠀昀砀 ⴀ ⸀㔀Ⰰ ㈀⤀ ⬀ 瀀漀眀⠀昀礀 ⴀ ⸀㔀Ⰰ ㈀⤀ 㸀 ⸀㈀㔀 ☀☀ ⠀昀礀 㴀 洀愀琀栀⸀猀焀爀琀⠀⸀㈀㔀 ⴀ 瀀漀眀⠀昀砀 ⴀ ⸀㔀Ⰰ ㈀⤀⤀ ⨀ ⠀⠀昀礀 㸀 ⸀㔀⤀ ⨀ ㈀ ⴀ ㄀⤀ ⬀ ⸀㔀⤀㬀ഀഀ
                fxfy = fx + S + fy;਍            紀ഀഀ
            return E;਍        紀⤀㬀ഀഀ
        gradient = gradient.split(/\s*\-\s*/);਍        椀昀 ⠀琀礀瀀攀 㴀㴀 ∀氀椀渀攀愀爀∀⤀ 笀ഀഀ
            var angle = gradient.shift();਍            愀渀最氀攀 㴀 ⴀ琀漀䘀氀漀愀琀⠀愀渀最氀攀⤀㬀ഀഀ
            if (isNaN(angle)) {਍                爀攀琀甀爀渀 渀甀氀氀㬀ഀഀ
            }਍        紀ഀഀ
        var dots = R._parseDots(gradient);਍        椀昀 ⠀℀搀漀琀猀⤀ 笀ഀഀ
            return null;਍        紀ഀഀ
        o = o.shape || o.node;਍        椀昀 ⠀搀漀琀猀⸀氀攀渀最琀栀⤀ 笀ഀഀ
            o.removeChild(fill);਍            昀椀氀氀⸀漀渀 㴀 琀爀甀攀㬀ഀഀ
            fill.method = "none";਍            昀椀氀氀⸀挀漀氀漀爀 㴀 搀漀琀猀嬀　崀⸀挀漀氀漀爀㬀ഀഀ
            fill.color2 = dots[dots.length - 1].color;਍            瘀愀爀 挀氀爀猀 㴀 嬀崀㬀ഀഀ
            for (var i = 0, ii = dots.length; i < ii; i++) {਍                搀漀琀猀嬀椀崀⸀漀昀昀猀攀琀 ☀☀ 挀氀爀猀⸀瀀甀猀栀⠀搀漀琀猀嬀椀崀⸀漀昀昀猀攀琀 ⬀ 匀 ⬀ 搀漀琀猀嬀椀崀⸀挀漀氀漀爀⤀㬀ഀഀ
            }਍            昀椀氀氀⸀挀漀氀漀爀猀 㴀 挀氀爀猀⸀氀攀渀最琀栀 㼀 挀氀爀猀⸀樀漀椀渀⠀⤀ 㨀 ∀　─ ∀ ⬀ 昀椀氀氀⸀挀漀氀漀爀㬀ഀഀ
            if (type == "radial") {਍                昀椀氀氀⸀琀礀瀀攀 㴀 ∀最爀愀搀椀攀渀琀吀椀琀氀攀∀㬀ഀഀ
                fill.focus = "100%";਍                昀椀氀氀⸀昀漀挀甀猀猀椀稀攀 㴀 ∀　 　∀㬀ഀഀ
                fill.focusposition = fxfy;਍                昀椀氀氀⸀愀渀最氀攀 㴀 　㬀ഀഀ
            } else {਍                ⼀⼀ 昀椀氀氀⸀爀漀琀愀琀攀㴀 琀爀甀攀㬀ഀഀ
                fill.type = "gradient";਍                昀椀氀氀⸀愀渀最氀攀 㴀 ⠀㈀㜀　 ⴀ 愀渀最氀攀⤀ ─ ㌀㘀　㬀ഀഀ
            }਍            漀⸀愀瀀瀀攀渀搀䌀栀椀氀搀⠀昀椀氀氀⤀㬀ഀഀ
        }਍        爀攀琀甀爀渀 ㄀㬀ഀഀ
    },਍    䔀氀攀洀攀渀琀 㴀 昀甀渀挀琀椀漀渀 ⠀渀漀搀攀Ⰰ 瘀洀氀⤀ 笀ഀഀ
        this[0] = this.node = node;਍        渀漀搀攀⸀爀愀瀀栀愀攀氀 㴀 琀爀甀攀㬀ഀഀ
        this.id = R._oid++;਍        渀漀搀攀⸀爀愀瀀栀愀攀氀椀搀 㴀 琀栀椀猀⸀椀搀㬀ഀഀ
        this.X = 0;਍        琀栀椀猀⸀夀 㴀 　㬀ഀഀ
        this.attrs = {};਍        琀栀椀猀⸀瀀愀瀀攀爀 㴀 瘀洀氀㬀ഀഀ
        this.matrix = R.matrix();਍        琀栀椀猀⸀开 㴀 笀ഀഀ
            transform: [],਍            猀砀㨀 ㄀Ⰰഀഀ
            sy: 1,਍            搀砀㨀 　Ⰰഀഀ
            dy: 0,਍            搀攀最㨀 　Ⰰഀഀ
            dirty: 1,਍            搀椀爀琀礀吀㨀 ㄀ഀഀ
        };਍        ℀瘀洀氀⸀戀漀琀琀漀洀 ☀☀ ⠀瘀洀氀⸀戀漀琀琀漀洀 㴀 琀栀椀猀⤀㬀ഀഀ
        this.prev = vml.top;਍        瘀洀氀⸀琀漀瀀 ☀☀ ⠀瘀洀氀⸀琀漀瀀⸀渀攀砀琀 㴀 琀栀椀猀⤀㬀ഀഀ
        vml.top = this;਍        琀栀椀猀⸀渀攀砀琀 㴀 渀甀氀氀㬀ഀഀ
    };਍    瘀愀爀 攀氀瀀爀漀琀漀 㴀 刀⸀攀氀㬀ഀഀ
਍    䔀氀攀洀攀渀琀⸀瀀爀漀琀漀琀礀瀀攀 㴀 攀氀瀀爀漀琀漀㬀ഀഀ
    elproto.constructor = Element;਍    攀氀瀀爀漀琀漀⸀琀爀愀渀猀昀漀爀洀 㴀 昀甀渀挀琀椀漀渀 ⠀琀猀琀爀⤀ 笀ഀഀ
        if (tstr == null) {਍            爀攀琀甀爀渀 琀栀椀猀⸀开⸀琀爀愀渀猀昀漀爀洀㬀ഀഀ
        }਍        瘀愀爀 瘀戀猀 㴀 琀栀椀猀⸀瀀愀瀀攀爀⸀开瘀椀攀眀䈀漀砀匀栀椀昀琀Ⰰഀഀ
            vbt = vbs ? "s" + [vbs.scale, vbs.scale] + "-1-1t" + [vbs.dx, vbs.dy] : E,਍            漀氀搀琀㬀ഀഀ
        if (vbs) {਍            漀氀搀琀 㴀 琀猀琀爀 㴀 匀琀爀⠀琀猀琀爀⤀⸀爀攀瀀氀愀挀攀⠀⼀尀⸀笀㌀紀簀尀甀㈀　㈀㘀⼀最Ⰰ 琀栀椀猀⸀开⸀琀爀愀渀猀昀漀爀洀 簀簀 䔀⤀㬀ഀഀ
        }਍        刀⸀开攀砀琀爀愀挀琀吀爀愀渀猀昀漀爀洀⠀琀栀椀猀Ⰰ 瘀戀琀 ⬀ 琀猀琀爀⤀㬀ഀഀ
        var matrix = this.matrix.clone(),਍            猀欀攀眀 㴀 琀栀椀猀⸀猀欀攀眀Ⰰഀഀ
            o = this.node,਍            猀瀀氀椀琀Ⰰഀഀ
            isGrad = ~Str(this.attrs.fill).indexOf("-"),਍            椀猀倀愀琀琀 㴀 ℀匀琀爀⠀琀栀椀猀⸀愀琀琀爀猀⸀昀椀氀氀⤀⸀椀渀搀攀砀伀昀⠀∀甀爀氀⠀∀⤀㬀ഀഀ
        matrix.translate(1, 1);਍        椀昀 ⠀椀猀倀愀琀琀 簀簀 椀猀䜀爀愀搀 簀簀 琀栀椀猀⸀琀礀瀀攀 㴀㴀 ∀椀洀愀最攀∀⤀ 笀ഀഀ
            skew.matrix = "1 0 0 1";਍            猀欀攀眀⸀漀昀昀猀攀琀 㴀 ∀　 　∀㬀ഀഀ
            split = matrix.split();਍            椀昀 ⠀⠀椀猀䜀爀愀搀 ☀☀ 猀瀀氀椀琀⸀渀漀刀漀琀愀琀椀漀渀⤀ 簀簀 ℀猀瀀氀椀琀⸀椀猀匀椀洀瀀氀攀⤀ 笀ഀഀ
                o.style.filter = matrix.toFilter();਍                瘀愀爀 戀戀 㴀 琀栀椀猀⸀最攀琀䈀䈀漀砀⠀⤀Ⰰഀഀ
                    bbt = this.getBBox(1),਍                    搀砀 㴀 戀戀⸀砀 ⴀ 戀戀琀⸀砀Ⰰഀഀ
                    dy = bb.y - bbt.y;਍                漀⸀挀漀漀爀搀漀爀椀最椀渀 㴀 ⠀搀砀 ⨀ ⴀ稀漀漀洀⤀ ⬀ 匀 ⬀ ⠀搀礀 ⨀ ⴀ稀漀漀洀⤀㬀ഀഀ
                setCoords(this, 1, 1, dx, dy, 0);਍            紀 攀氀猀攀 笀ഀഀ
                o.style.filter = E;਍                猀攀琀䌀漀漀爀搀猀⠀琀栀椀猀Ⰰ 猀瀀氀椀琀⸀猀挀愀氀攀砀Ⰰ 猀瀀氀椀琀⸀猀挀愀氀攀礀Ⰰ 猀瀀氀椀琀⸀搀砀Ⰰ 猀瀀氀椀琀⸀搀礀Ⰰ 猀瀀氀椀琀⸀爀漀琀愀琀攀⤀㬀ഀഀ
            }਍        紀 攀氀猀攀 笀ഀഀ
            o.style.filter = E;਍            猀欀攀眀⸀洀愀琀爀椀砀 㴀 匀琀爀⠀洀愀琀爀椀砀⤀㬀ഀഀ
            skew.offset = matrix.offset();਍        紀ഀഀ
        if (oldt !== null) { // empty string value is true as well਍            琀栀椀猀⸀开⸀琀爀愀渀猀昀漀爀洀 㴀 漀氀搀琀㬀ഀഀ
            R._extractTransform(this, oldt);਍        紀ഀഀ
        return this;਍    紀㬀ഀഀ
    elproto.rotate = function (deg, cx, cy) {਍        椀昀 ⠀琀栀椀猀⸀爀攀洀漀瘀攀搀⤀ 笀ഀഀ
            return this;਍        紀ഀഀ
        if (deg == null) {਍            爀攀琀甀爀渀㬀ഀഀ
        }਍        搀攀最 㴀 匀琀爀⠀搀攀最⤀⸀猀瀀氀椀琀⠀猀攀瀀愀爀愀琀漀爀⤀㬀ഀഀ
        if (deg.length - 1) {਍            挀砀 㴀 琀漀䘀氀漀愀琀⠀搀攀最嬀㄀崀⤀㬀ഀഀ
            cy = toFloat(deg[2]);਍        紀ഀഀ
        deg = toFloat(deg[0]);਍        ⠀挀礀 㴀㴀 渀甀氀氀⤀ ☀☀ ⠀挀砀 㴀 挀礀⤀㬀ഀഀ
        if (cx == null || cy == null) {਍            瘀愀爀 戀戀漀砀 㴀 琀栀椀猀⸀最攀琀䈀䈀漀砀⠀㄀⤀㬀ഀഀ
            cx = bbox.x + bbox.width / 2;਍            挀礀 㴀 戀戀漀砀⸀礀 ⬀ 戀戀漀砀⸀栀攀椀最栀琀 ⼀ ㈀㬀ഀഀ
        }਍        琀栀椀猀⸀开⸀搀椀爀琀礀吀 㴀 ㄀㬀ഀഀ
        this.transform(this._.transform.concat([["r", deg, cx, cy]]));਍        爀攀琀甀爀渀 琀栀椀猀㬀ഀഀ
    };਍    攀氀瀀爀漀琀漀⸀琀爀愀渀猀氀愀琀攀 㴀 昀甀渀挀琀椀漀渀 ⠀搀砀Ⰰ 搀礀⤀ 笀ഀഀ
        if (this.removed) {਍            爀攀琀甀爀渀 琀栀椀猀㬀ഀഀ
        }਍        搀砀 㴀 匀琀爀⠀搀砀⤀⸀猀瀀氀椀琀⠀猀攀瀀愀爀愀琀漀爀⤀㬀ഀഀ
        if (dx.length - 1) {਍            搀礀 㴀 琀漀䘀氀漀愀琀⠀搀砀嬀㄀崀⤀㬀ഀഀ
        }਍        搀砀 㴀 琀漀䘀氀漀愀琀⠀搀砀嬀　崀⤀ 簀簀 　㬀ഀഀ
        dy = +dy || 0;਍        椀昀 ⠀琀栀椀猀⸀开⸀戀戀漀砀⤀ 笀ഀഀ
            this._.bbox.x += dx;਍            琀栀椀猀⸀开⸀戀戀漀砀⸀礀 ⬀㴀 搀礀㬀ഀഀ
        }਍        琀栀椀猀⸀琀爀愀渀猀昀漀爀洀⠀琀栀椀猀⸀开⸀琀爀愀渀猀昀漀爀洀⸀挀漀渀挀愀琀⠀嬀嬀∀琀∀Ⰰ 搀砀Ⰰ 搀礀崀崀⤀⤀㬀ഀഀ
        return this;਍    紀㬀ഀഀ
    elproto.scale = function (sx, sy, cx, cy) {਍        椀昀 ⠀琀栀椀猀⸀爀攀洀漀瘀攀搀⤀ 笀ഀഀ
            return this;਍        紀ഀഀ
        sx = Str(sx).split(separator);਍        椀昀 ⠀猀砀⸀氀攀渀最琀栀 ⴀ ㄀⤀ 笀ഀഀ
            sy = toFloat(sx[1]);਍            挀砀 㴀 琀漀䘀氀漀愀琀⠀猀砀嬀㈀崀⤀㬀ഀഀ
            cy = toFloat(sx[3]);਍            椀猀一愀一⠀挀砀⤀ ☀☀ ⠀挀砀 㴀 渀甀氀氀⤀㬀ഀഀ
            isNaN(cy) && (cy = null);਍        紀ഀഀ
        sx = toFloat(sx[0]);਍        ⠀猀礀 㴀㴀 渀甀氀氀⤀ ☀☀ ⠀猀礀 㴀 猀砀⤀㬀ഀഀ
        (cy == null) && (cx = cy);਍        椀昀 ⠀挀砀 㴀㴀 渀甀氀氀 簀簀 挀礀 㴀㴀 渀甀氀氀⤀ 笀ഀഀ
            var bbox = this.getBBox(1);਍        紀ഀഀ
        cx = cx == null ? bbox.x + bbox.width / 2 : cx;਍        挀礀 㴀 挀礀 㴀㴀 渀甀氀氀 㼀 戀戀漀砀⸀礀 ⬀ 戀戀漀砀⸀栀攀椀最栀琀 ⼀ ㈀ 㨀 挀礀㬀ഀഀ
    ਍        琀栀椀猀⸀琀爀愀渀猀昀漀爀洀⠀琀栀椀猀⸀开⸀琀爀愀渀猀昀漀爀洀⸀挀漀渀挀愀琀⠀嬀嬀∀猀∀Ⰰ 猀砀Ⰰ 猀礀Ⰰ 挀砀Ⰰ 挀礀崀崀⤀⤀㬀ഀഀ
        this._.dirtyT = 1;਍        爀攀琀甀爀渀 琀栀椀猀㬀ഀഀ
    };਍    攀氀瀀爀漀琀漀⸀栀椀搀攀 㴀 昀甀渀挀琀椀漀渀 ⠀⤀ 笀ഀഀ
        !this.removed && (this.node.style.display = "none");਍        爀攀琀甀爀渀 琀栀椀猀㬀ഀഀ
    };਍    攀氀瀀爀漀琀漀⸀猀栀漀眀 㴀 昀甀渀挀琀椀漀渀 ⠀⤀ 笀ഀഀ
        !this.removed && (this.node.style.display = E);਍        爀攀琀甀爀渀 琀栀椀猀㬀ഀഀ
    };਍    ⼀⼀ 一攀攀搀攀搀 琀漀 昀椀砀 琀栀攀 瘀洀氀 猀攀琀嘀椀攀眀䈀漀砀 椀猀猀甀攀猀ഀഀ
    elproto.auxGetBBox = R.el.getBBox;਍    攀氀瀀爀漀琀漀⸀最攀琀䈀䈀漀砀 㴀 昀甀渀挀琀椀漀渀⠀⤀笀ഀഀ
      var b = this.auxGetBBox();਍      椀昀 ⠀琀栀椀猀⸀瀀愀瀀攀爀 ☀☀ 琀栀椀猀⸀瀀愀瀀攀爀⸀开瘀椀攀眀䈀漀砀匀栀椀昀琀⤀ഀഀ
      {਍        瘀愀爀 挀 㴀 笀紀㬀ഀഀ
        var z = 1/this.paper._viewBoxShift.scale;਍        挀⸀砀 㴀 戀⸀砀 ⴀ 琀栀椀猀⸀瀀愀瀀攀爀⸀开瘀椀攀眀䈀漀砀匀栀椀昀琀⸀搀砀㬀ഀഀ
        c.x *= z;਍        挀⸀礀 㴀 戀⸀礀 ⴀ 琀栀椀猀⸀瀀愀瀀攀爀⸀开瘀椀攀眀䈀漀砀匀栀椀昀琀⸀搀礀㬀ഀഀ
        c.y *= z;਍        挀⸀眀椀搀琀栀  㴀 戀⸀眀椀搀琀栀  ⨀ 稀㬀ഀഀ
        c.height = b.height * z;਍        挀⸀砀㈀ 㴀 挀⸀砀 ⬀ 挀⸀眀椀搀琀栀㬀ഀഀ
        c.y2 = c.y + c.height;਍        爀攀琀甀爀渀 挀㬀ഀഀ
      }਍      爀攀琀甀爀渀 戀㬀ഀഀ
    };਍    攀氀瀀爀漀琀漀⸀开最攀琀䈀䈀漀砀 㴀 昀甀渀挀琀椀漀渀 ⠀⤀ 笀ഀഀ
        if (this.removed) {਍            爀攀琀甀爀渀 笀紀㬀ഀഀ
        }਍        爀攀琀甀爀渀 笀ഀഀ
            x: this.X + (this.bbx || 0) - this.W / 2,਍            礀㨀 琀栀椀猀⸀夀 ⴀ 琀栀椀猀⸀䠀Ⰰഀഀ
            width: this.W,਍            栀攀椀最栀琀㨀 琀栀椀猀⸀䠀ഀഀ
        };਍    紀㬀ഀഀ
    elproto.remove = function () {਍        椀昀 ⠀琀栀椀猀⸀爀攀洀漀瘀攀搀 簀簀 ℀琀栀椀猀⸀渀漀搀攀⸀瀀愀爀攀渀琀一漀搀攀⤀ 笀ഀഀ
            return;਍        紀ഀഀ
        this.paper.__set__ && this.paper.__set__.exclude(this);਍        刀⸀攀瘀攀⸀甀渀戀椀渀搀⠀∀爀愀瀀栀愀攀氀⸀⨀⸀⨀⸀∀ ⬀ 琀栀椀猀⸀椀搀⤀㬀ഀഀ
        R._tear(this, this.paper);਍        琀栀椀猀⸀渀漀搀攀⸀瀀愀爀攀渀琀一漀搀攀⸀爀攀洀漀瘀攀䌀栀椀氀搀⠀琀栀椀猀⸀渀漀搀攀⤀㬀ഀഀ
        this.shape && this.shape.parentNode.removeChild(this.shape);਍        昀漀爀 ⠀瘀愀爀 椀 椀渀 琀栀椀猀⤀ 笀ഀഀ
            this[i] = typeof this[i] == "function" ? R._removedFactory(i) : null;਍        紀ഀഀ
        this.removed = true;਍    紀㬀ഀഀ
    elproto.attr = function (name, value) {਍        椀昀 ⠀琀栀椀猀⸀爀攀洀漀瘀攀搀⤀ 笀ഀഀ
            return this;਍        紀ഀഀ
        if (name == null) {਍            瘀愀爀 爀攀猀 㴀 笀紀㬀ഀഀ
            for (var a in this.attrs) if (this.attrs[has](a)) {਍                爀攀猀嬀愀崀 㴀 琀栀椀猀⸀愀琀琀爀猀嬀愀崀㬀ഀഀ
            }਍            爀攀猀⸀最爀愀搀椀攀渀琀 ☀☀ 爀攀猀⸀昀椀氀氀 㴀㴀 ∀渀漀渀攀∀ ☀☀ ⠀爀攀猀⸀昀椀氀氀 㴀 爀攀猀⸀最爀愀搀椀攀渀琀⤀ ☀☀ 搀攀氀攀琀攀 爀攀猀⸀最爀愀搀椀攀渀琀㬀ഀഀ
            res.transform = this._.transform;਍            爀攀琀甀爀渀 爀攀猀㬀ഀഀ
        }਍        椀昀 ⠀瘀愀氀甀攀 㴀㴀 渀甀氀氀 ☀☀ 刀⸀椀猀⠀渀愀洀攀Ⰰ ∀猀琀爀椀渀最∀⤀⤀ 笀ഀഀ
            if (name == fillString && this.attrs.fill == "none" && this.attrs.gradient) {਍                爀攀琀甀爀渀 琀栀椀猀⸀愀琀琀爀猀⸀最爀愀搀椀攀渀琀㬀ഀഀ
            }਍            瘀愀爀 渀愀洀攀猀 㴀 渀愀洀攀⸀猀瀀氀椀琀⠀猀攀瀀愀爀愀琀漀爀⤀Ⰰഀഀ
                out = {};਍            昀漀爀 ⠀瘀愀爀 椀 㴀 　Ⰰ 椀椀 㴀 渀愀洀攀猀⸀氀攀渀最琀栀㬀 椀 㰀 椀椀㬀 椀⬀⬀⤀ 笀ഀഀ
                name = names[i];਍                椀昀 ⠀渀愀洀攀 椀渀 琀栀椀猀⸀愀琀琀爀猀⤀ 笀ഀഀ
                    out[name] = this.attrs[name];਍                紀 攀氀猀攀 椀昀 ⠀刀⸀椀猀⠀琀栀椀猀⸀瀀愀瀀攀爀⸀挀甀猀琀漀洀䄀琀琀爀椀戀甀琀攀猀嬀渀愀洀攀崀Ⰰ ∀昀甀渀挀琀椀漀渀∀⤀⤀ 笀ഀഀ
                    out[name] = this.paper.customAttributes[name].def;਍                紀 攀氀猀攀 笀ഀഀ
                    out[name] = R._availableAttrs[name];਍                紀ഀഀ
            }਍            爀攀琀甀爀渀 椀椀 ⴀ ㄀ 㼀 漀甀琀 㨀 漀甀琀嬀渀愀洀攀猀嬀　崀崀㬀ഀഀ
        }਍        椀昀 ⠀琀栀椀猀⸀愀琀琀爀猀 ☀☀ 瘀愀氀甀攀 㴀㴀 渀甀氀氀 ☀☀ 刀⸀椀猀⠀渀愀洀攀Ⰰ ∀愀爀爀愀礀∀⤀⤀ 笀ഀഀ
            out = {};਍            昀漀爀 ⠀椀 㴀 　Ⰰ 椀椀 㴀 渀愀洀攀⸀氀攀渀最琀栀㬀 椀 㰀 椀椀㬀 椀⬀⬀⤀ 笀ഀഀ
                out[name[i]] = this.attr(name[i]);਍            紀ഀഀ
            return out;਍        紀ഀഀ
        var params;਍        椀昀 ⠀瘀愀氀甀攀 ℀㴀 渀甀氀氀⤀ 笀ഀഀ
            params = {};਍            瀀愀爀愀洀猀嬀渀愀洀攀崀 㴀 瘀愀氀甀攀㬀ഀഀ
        }਍        瘀愀氀甀攀 㴀㴀 渀甀氀氀 ☀☀ 刀⸀椀猀⠀渀愀洀攀Ⰰ ∀漀戀樀攀挀琀∀⤀ ☀☀ ⠀瀀愀爀愀洀猀 㴀 渀愀洀攀⤀㬀ഀഀ
        for (var key in params) {਍            攀瘀攀⠀∀爀愀瀀栀愀攀氀⸀愀琀琀爀⸀∀ ⬀ 欀攀礀 ⬀ ∀⸀∀ ⬀ 琀栀椀猀⸀椀搀Ⰰ 琀栀椀猀Ⰰ 瀀愀爀愀洀猀嬀欀攀礀崀⤀㬀ഀഀ
        }਍        椀昀 ⠀瀀愀爀愀洀猀⤀ 笀ഀഀ
            for (key in this.paper.customAttributes) if (this.paper.customAttributes[has](key) && params[has](key) && R.is(this.paper.customAttributes[key], "function")) {਍                瘀愀爀 瀀愀爀 㴀 琀栀椀猀⸀瀀愀瀀攀爀⸀挀甀猀琀漀洀䄀琀琀爀椀戀甀琀攀猀嬀欀攀礀崀⸀愀瀀瀀氀礀⠀琀栀椀猀Ⰰ 嬀崀⸀挀漀渀挀愀琀⠀瀀愀爀愀洀猀嬀欀攀礀崀⤀⤀㬀ഀഀ
                this.attrs[key] = params[key];਍                昀漀爀 ⠀瘀愀爀 猀甀戀欀攀礀 椀渀 瀀愀爀⤀ 椀昀 ⠀瀀愀爀嬀栀愀猀崀⠀猀甀戀欀攀礀⤀⤀ 笀ഀഀ
                    params[subkey] = par[subkey];਍                紀ഀഀ
            }਍            ⼀⼀ 琀栀椀猀⸀瀀愀瀀攀爀⸀挀愀渀瘀愀猀⸀猀琀礀氀攀⸀搀椀猀瀀氀愀礀 㴀 ∀渀漀渀攀∀㬀ഀഀ
            if (params.text && this.type == "text") {਍                琀栀椀猀⸀琀攀砀琀瀀愀琀栀⸀猀琀爀椀渀最 㴀 瀀愀爀愀洀猀⸀琀攀砀琀㬀ഀഀ
            }਍            猀攀琀䘀椀氀氀䄀渀搀匀琀爀漀欀攀⠀琀栀椀猀Ⰰ 瀀愀爀愀洀猀⤀㬀ഀഀ
            // this.paper.canvas.style.display = E;਍        紀ഀഀ
        return this;਍    紀㬀ഀഀ
    elproto.toFront = function () {਍        ℀琀栀椀猀⸀爀攀洀漀瘀攀搀 ☀☀ 琀栀椀猀⸀渀漀搀攀⸀瀀愀爀攀渀琀一漀搀攀⸀愀瀀瀀攀渀搀䌀栀椀氀搀⠀琀栀椀猀⸀渀漀搀攀⤀㬀ഀഀ
        this.paper && this.paper.top != this && R._tofront(this, this.paper);਍        爀攀琀甀爀渀 琀栀椀猀㬀ഀഀ
    };਍    攀氀瀀爀漀琀漀⸀琀漀䈀愀挀欀 㴀 昀甀渀挀琀椀漀渀 ⠀⤀ 笀ഀഀ
        if (this.removed) {਍            爀攀琀甀爀渀 琀栀椀猀㬀ഀഀ
        }਍        椀昀 ⠀琀栀椀猀⸀渀漀搀攀⸀瀀愀爀攀渀琀一漀搀攀⸀昀椀爀猀琀䌀栀椀氀搀 ℀㴀 琀栀椀猀⸀渀漀搀攀⤀ 笀ഀഀ
            this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild);਍            刀⸀开琀漀戀愀挀欀⠀琀栀椀猀Ⰰ 琀栀椀猀⸀瀀愀瀀攀爀⤀㬀ഀഀ
        }਍        爀攀琀甀爀渀 琀栀椀猀㬀ഀഀ
    };਍    攀氀瀀爀漀琀漀⸀椀渀猀攀爀琀䄀昀琀攀爀 㴀 昀甀渀挀琀椀漀渀 ⠀攀氀攀洀攀渀琀⤀ 笀ഀഀ
        if (this.removed) {਍            爀攀琀甀爀渀 琀栀椀猀㬀ഀഀ
        }਍        椀昀 ⠀攀氀攀洀攀渀琀⸀挀漀渀猀琀爀甀挀琀漀爀 㴀㴀 刀⸀猀琀⸀挀漀渀猀琀爀甀挀琀漀爀⤀ 笀ഀഀ
            element = element[element.length - 1];਍        紀ഀഀ
        if (element.node.nextSibling) {਍            攀氀攀洀攀渀琀⸀渀漀搀攀⸀瀀愀爀攀渀琀一漀搀攀⸀椀渀猀攀爀琀䈀攀昀漀爀攀⠀琀栀椀猀⸀渀漀搀攀Ⰰ 攀氀攀洀攀渀琀⸀渀漀搀攀⸀渀攀砀琀匀椀戀氀椀渀最⤀㬀ഀഀ
        } else {਍            攀氀攀洀攀渀琀⸀渀漀搀攀⸀瀀愀爀攀渀琀一漀搀攀⸀愀瀀瀀攀渀搀䌀栀椀氀搀⠀琀栀椀猀⸀渀漀搀攀⤀㬀ഀഀ
        }਍        刀⸀开椀渀猀攀爀琀愀昀琀攀爀⠀琀栀椀猀Ⰰ 攀氀攀洀攀渀琀Ⰰ 琀栀椀猀⸀瀀愀瀀攀爀⤀㬀ഀഀ
        return this;਍    紀㬀ഀഀ
    elproto.insertBefore = function (element) {਍        椀昀 ⠀琀栀椀猀⸀爀攀洀漀瘀攀搀⤀ 笀ഀഀ
            return this;਍        紀ഀഀ
        if (element.constructor == R.st.constructor) {਍            攀氀攀洀攀渀琀 㴀 攀氀攀洀攀渀琀嬀　崀㬀ഀഀ
        }਍        攀氀攀洀攀渀琀⸀渀漀搀攀⸀瀀愀爀攀渀琀一漀搀攀⸀椀渀猀攀爀琀䈀攀昀漀爀攀⠀琀栀椀猀⸀渀漀搀攀Ⰰ 攀氀攀洀攀渀琀⸀渀漀搀攀⤀㬀ഀഀ
        R._insertbefore(this, element, this.paper);਍        爀攀琀甀爀渀 琀栀椀猀㬀ഀഀ
    };਍    攀氀瀀爀漀琀漀⸀戀氀甀爀 㴀 昀甀渀挀琀椀漀渀 ⠀猀椀稀攀⤀ 笀ഀഀ
        var s = this.node.runtimeStyle,਍            昀 㴀 猀⸀昀椀氀琀攀爀㬀ഀഀ
        f = f.replace(blurregexp, E);਍        椀昀 ⠀⬀猀椀稀攀 ℀㴀㴀 　⤀ 笀ഀഀ
            this.attrs.blur = size;਍            猀⸀昀椀氀琀攀爀 㴀 昀 ⬀ 匀 ⬀ 洀猀 ⬀ ∀⸀䈀氀甀爀⠀瀀椀砀攀氀爀愀搀椀甀猀㴀∀ ⬀ ⠀⬀猀椀稀攀 簀簀 ㄀⸀㔀⤀ ⬀ ∀⤀∀㬀ഀഀ
            s.margin = R.format("-{0}px 0 0 -{0}px", round(+size || 1.5));਍        紀 攀氀猀攀 笀ഀഀ
            s.filter = f;਍            猀⸀洀愀爀最椀渀 㴀 　㬀ഀഀ
            delete this.attrs.blur;਍        紀ഀഀ
        return this;਍    紀㬀ഀഀ
਍    刀⸀开攀渀最椀渀攀⸀瀀愀琀栀 㴀 昀甀渀挀琀椀漀渀 ⠀瀀愀琀栀匀琀爀椀渀最Ⰰ 瘀洀氀⤀ 笀ഀഀ
        var el = createNode("shape");਍        攀氀⸀猀琀礀氀攀⸀挀猀猀吀攀砀琀 㴀 挀猀猀䐀漀琀㬀ഀഀ
        el.coordsize = zoom + S + zoom;਍        攀氀⸀挀漀漀爀搀漀爀椀最椀渀 㴀 瘀洀氀⸀挀漀漀爀搀漀爀椀最椀渀㬀ഀഀ
        var p = new Element(el, vml),਍            愀琀琀爀 㴀 笀昀椀氀氀㨀 ∀渀漀渀攀∀Ⰰ 猀琀爀漀欀攀㨀 ∀⌀　　　∀紀㬀ഀഀ
        pathString && (attr.path = pathString);਍        瀀⸀琀礀瀀攀 㴀 ∀瀀愀琀栀∀㬀ഀഀ
        p.path = [];਍        瀀⸀倀愀琀栀 㴀 䔀㬀ഀഀ
        setFillAndStroke(p, attr);਍        瘀洀氀⸀挀愀渀瘀愀猀⸀愀瀀瀀攀渀搀䌀栀椀氀搀⠀攀氀⤀㬀ഀഀ
        var skew = createNode("skew");਍        猀欀攀眀⸀漀渀 㴀 琀爀甀攀㬀ഀഀ
        el.appendChild(skew);਍        瀀⸀猀欀攀眀 㴀 猀欀攀眀㬀ഀഀ
        p.transform(E);਍        爀攀琀甀爀渀 瀀㬀ഀഀ
    };਍    刀⸀开攀渀最椀渀攀⸀爀攀挀琀 㴀 昀甀渀挀琀椀漀渀 ⠀瘀洀氀Ⰰ 砀Ⰰ 礀Ⰰ 眀Ⰰ 栀Ⰰ 爀⤀ 笀ഀഀ
        var path = R._rectPath(x, y, w, h, r),਍            爀攀猀 㴀 瘀洀氀⸀瀀愀琀栀⠀瀀愀琀栀⤀Ⰰഀഀ
            a = res.attrs;਍        爀攀猀⸀堀 㴀 愀⸀砀 㴀 砀㬀ഀഀ
        res.Y = a.y = y;਍        爀攀猀⸀圀 㴀 愀⸀眀椀搀琀栀 㴀 眀㬀ഀഀ
        res.H = a.height = h;਍        愀⸀爀 㴀 爀㬀ഀഀ
        a.path = path;਍        爀攀猀⸀琀礀瀀攀 㴀 ∀爀攀挀琀∀㬀ഀഀ
        return res;਍    紀㬀ഀഀ
    R._engine.ellipse = function (vml, x, y, rx, ry) {਍        瘀愀爀 爀攀猀 㴀 瘀洀氀⸀瀀愀琀栀⠀⤀Ⰰഀഀ
            a = res.attrs;਍        爀攀猀⸀堀 㴀 砀 ⴀ 爀砀㬀ഀഀ
        res.Y = y - ry;਍        爀攀猀⸀圀 㴀 爀砀 ⨀ ㈀㬀ഀഀ
        res.H = ry * 2;਍        爀攀猀⸀琀礀瀀攀 㴀 ∀攀氀氀椀瀀猀攀∀㬀ഀഀ
        setFillAndStroke(res, {਍            挀砀㨀 砀Ⰰഀഀ
            cy: y,਍            爀砀㨀 爀砀Ⰰഀഀ
            ry: ry਍        紀⤀㬀ഀഀ
        return res;਍    紀㬀ഀഀ
    R._engine.circle = function (vml, x, y, r) {਍        瘀愀爀 爀攀猀 㴀 瘀洀氀⸀瀀愀琀栀⠀⤀Ⰰഀഀ
            a = res.attrs;਍        爀攀猀⸀堀 㴀 砀 ⴀ 爀㬀ഀഀ
        res.Y = y - r;਍        爀攀猀⸀圀 㴀 爀攀猀⸀䠀 㴀 爀 ⨀ ㈀㬀ഀഀ
        res.type = "circle";਍        猀攀琀䘀椀氀氀䄀渀搀匀琀爀漀欀攀⠀爀攀猀Ⰰ 笀ഀഀ
            cx: x,਍            挀礀㨀 礀Ⰰഀഀ
            r: r਍        紀⤀㬀ഀഀ
        return res;਍    紀㬀ഀഀ
    R._engine.image = function (vml, src, x, y, w, h) {਍        瘀愀爀 瀀愀琀栀 㴀 刀⸀开爀攀挀琀倀愀琀栀⠀砀Ⰰ 礀Ⰰ 眀Ⰰ 栀⤀Ⰰഀഀ
            res = vml.path(path).attr({stroke: "none"}),਍            愀 㴀 爀攀猀⸀愀琀琀爀猀Ⰰഀഀ
            node = res.node,਍            昀椀氀氀 㴀 渀漀搀攀⸀最攀琀䔀氀攀洀攀渀琀猀䈀礀吀愀最一愀洀攀⠀昀椀氀氀匀琀爀椀渀最⤀嬀　崀㬀ഀഀ
        a.src = src;਍        爀攀猀⸀堀 㴀 愀⸀砀 㴀 砀㬀ഀഀ
        res.Y = a.y = y;਍        爀攀猀⸀圀 㴀 愀⸀眀椀搀琀栀 㴀 眀㬀ഀഀ
        res.H = a.height = h;਍        愀⸀瀀愀琀栀 㴀 瀀愀琀栀㬀ഀഀ
        res.type = "image";਍        昀椀氀氀⸀瀀愀爀攀渀琀一漀搀攀 㴀㴀 渀漀搀攀 ☀☀ 渀漀搀攀⸀爀攀洀漀瘀攀䌀栀椀氀搀⠀昀椀氀氀⤀㬀ഀഀ
        fill.rotate = true;਍        昀椀氀氀⸀猀爀挀 㴀 猀爀挀㬀ഀഀ
        fill.type = "tile";਍        爀攀猀⸀开⸀昀椀氀氀瀀漀猀 㴀 嬀砀Ⰰ 礀崀㬀ഀഀ
        res._.fillsize = [w, h];਍        渀漀搀攀⸀愀瀀瀀攀渀搀䌀栀椀氀搀⠀昀椀氀氀⤀㬀ഀഀ
        setCoords(res, 1, 1, 0, 0, 0);਍        爀攀琀甀爀渀 爀攀猀㬀ഀഀ
    };਍    刀⸀开攀渀最椀渀攀⸀琀攀砀琀 㴀 昀甀渀挀琀椀漀渀 ⠀瘀洀氀Ⰰ 砀Ⰰ 礀Ⰰ 琀攀砀琀⤀ 笀ഀഀ
        var el = createNode("shape"),਍            瀀愀琀栀 㴀 挀爀攀愀琀攀一漀搀攀⠀∀瀀愀琀栀∀⤀Ⰰഀഀ
            o = createNode("textpath");਍        砀 㴀 砀 簀簀 　㬀ഀഀ
        y = y || 0;਍        琀攀砀琀 㴀 琀攀砀琀 簀簀 ∀∀㬀ഀഀ
        path.v = R.format("m{0},{1}l{2},{1}", round(x * zoom), round(y * zoom), round(x * zoom) + 1);਍        瀀愀琀栀⸀琀攀砀琀瀀愀琀栀漀欀 㴀 琀爀甀攀㬀ഀഀ
        o.string = Str(text);਍        漀⸀漀渀 㴀 琀爀甀攀㬀ഀഀ
        el.style.cssText = cssDot;਍        攀氀⸀挀漀漀爀搀猀椀稀攀 㴀 稀漀漀洀 ⬀ 匀 ⬀ 稀漀漀洀㬀ഀഀ
        el.coordorigin = "0 0";਍        瘀愀爀 瀀 㴀 渀攀眀 䔀氀攀洀攀渀琀⠀攀氀Ⰰ 瘀洀氀⤀Ⰰഀഀ
            attr = {਍                昀椀氀氀㨀 ∀⌀　　　∀Ⰰഀഀ
                stroke: "none",਍                昀漀渀琀㨀 刀⸀开愀瘀愀椀氀愀戀氀攀䄀琀琀爀猀⸀昀漀渀琀Ⰰഀഀ
                text: text਍            紀㬀ഀഀ
        p.shape = el;਍        瀀⸀瀀愀琀栀 㴀 瀀愀琀栀㬀ഀഀ
        p.textpath = o;਍        瀀⸀琀礀瀀攀 㴀 ∀琀攀砀琀∀㬀ഀഀ
        p.attrs.text = Str(text);਍        瀀⸀愀琀琀爀猀⸀砀 㴀 砀㬀ഀഀ
        p.attrs.y = y;਍        瀀⸀愀琀琀爀猀⸀眀 㴀 ㄀㬀ഀഀ
        p.attrs.h = 1;਍        猀攀琀䘀椀氀氀䄀渀搀匀琀爀漀欀攀⠀瀀Ⰰ 愀琀琀爀⤀㬀ഀഀ
        el.appendChild(o);਍        攀氀⸀愀瀀瀀攀渀搀䌀栀椀氀搀⠀瀀愀琀栀⤀㬀ഀഀ
        vml.canvas.appendChild(el);਍        瘀愀爀 猀欀攀眀 㴀 挀爀攀愀琀攀一漀搀攀⠀∀猀欀攀眀∀⤀㬀ഀഀ
        skew.on = true;਍        攀氀⸀愀瀀瀀攀渀搀䌀栀椀氀搀⠀猀欀攀眀⤀㬀ഀഀ
        p.skew = skew;਍        瀀⸀琀爀愀渀猀昀漀爀洀⠀䔀⤀㬀ഀഀ
        return p;਍    紀㬀ഀഀ
    R._engine.setSize = function (width, height) {਍        瘀愀爀 挀猀 㴀 琀栀椀猀⸀挀愀渀瘀愀猀⸀猀琀礀氀攀㬀ഀഀ
        this.width = width;਍        琀栀椀猀⸀栀攀椀最栀琀 㴀 栀攀椀最栀琀㬀ഀഀ
        width == +width && (width += "px");਍        栀攀椀最栀琀 㴀㴀 ⬀栀攀椀最栀琀 ☀☀ ⠀栀攀椀最栀琀 ⬀㴀 ∀瀀砀∀⤀㬀ഀഀ
        cs.width = width;਍        挀猀⸀栀攀椀最栀琀 㴀 栀攀椀最栀琀㬀ഀഀ
        cs.clip = "rect(0 " + width + " " + height + " 0)";਍        椀昀 ⠀琀栀椀猀⸀开瘀椀攀眀䈀漀砀⤀ 笀ഀഀ
            R._engine.setViewBox.apply(this, this._viewBox);਍        紀ഀഀ
        return this;਍    紀㬀ഀഀ
    R._engine.setViewBox = function (x, y, w, h, fit) {਍        刀⸀攀瘀攀⠀∀爀愀瀀栀愀攀氀⸀猀攀琀嘀椀攀眀䈀漀砀∀Ⰰ 琀栀椀猀Ⰰ 琀栀椀猀⸀开瘀椀攀眀䈀漀砀Ⰰ 嬀砀Ⰰ 礀Ⰰ 眀Ⰰ 栀Ⰰ 昀椀琀崀⤀㬀ഀഀ
        var paperSize = this.getSize(),਍            眀椀搀琀栀 㴀 瀀愀瀀攀爀匀椀稀攀⸀眀椀搀琀栀Ⰰഀഀ
            height = paperSize.height,਍            䠀Ⰰ 圀㬀ഀഀ
        if (fit) {਍            䠀 㴀 栀攀椀最栀琀 ⼀ 栀㬀ഀഀ
            W = width / w;਍            椀昀 ⠀眀 ⨀ 䠀 㰀 眀椀搀琀栀⤀ 笀ഀഀ
                x -= (width - w * H) / 2 / H;਍            紀ഀഀ
            if (h * W < height) {਍                礀 ⴀ㴀 ⠀栀攀椀最栀琀 ⴀ 栀 ⨀ 圀⤀ ⼀ ㈀ ⼀ 圀㬀ഀഀ
            }਍        紀ഀഀ
        this._viewBox = [x, y, w, h, !!fit];਍        琀栀椀猀⸀开瘀椀攀眀䈀漀砀匀栀椀昀琀 㴀 笀ഀഀ
            dx: -x,਍            搀礀㨀 ⴀ礀Ⰰഀഀ
            scale: paperSize਍        紀㬀ഀഀ
        this.forEach(function (el) {਍            攀氀⸀琀爀愀渀猀昀漀爀洀⠀∀⸀⸀⸀∀⤀㬀ഀഀ
        });਍        爀攀琀甀爀渀 琀栀椀猀㬀ഀഀ
    };਍    瘀愀爀 挀爀攀愀琀攀一漀搀攀㬀ഀഀ
    R._engine.initWin = function (win) {਍            瘀愀爀 搀漀挀 㴀 眀椀渀⸀搀漀挀甀洀攀渀琀㬀ഀഀ
            if (doc.styleSheets.length < 31) {਍                搀漀挀⸀挀爀攀愀琀攀匀琀礀氀攀匀栀攀攀琀⠀⤀⸀愀搀搀刀甀氀攀⠀∀⸀爀瘀洀氀∀Ⰰ ∀戀攀栀愀瘀椀漀爀㨀甀爀氀⠀⌀搀攀昀愀甀氀琀⌀嘀䴀䰀⤀∀⤀㬀ഀഀ
            } else {਍                ⼀⼀ 渀漀 洀漀爀攀 爀漀漀洀Ⰰ 愀搀搀 琀漀 琀栀攀 攀砀椀猀琀椀渀最 漀渀攀ഀഀ
                // http://msdn.microsoft.com/en-us/library/ms531194%28VS.85%29.aspx਍                搀漀挀⸀猀琀礀氀攀匀栀攀攀琀猀嬀　崀⸀愀搀搀刀甀氀攀⠀∀⸀爀瘀洀氀∀Ⰰ ∀戀攀栀愀瘀椀漀爀㨀甀爀氀⠀⌀搀攀昀愀甀氀琀⌀嘀䴀䰀⤀∀⤀㬀ഀഀ
            }਍            琀爀礀 笀ഀഀ
                !doc.namespaces.rvml && doc.namespaces.add("rvml", "urn:schemas-microsoft-com:vml");਍                挀爀攀愀琀攀一漀搀攀 㴀 昀甀渀挀琀椀漀渀 ⠀琀愀最一愀洀攀⤀ 笀ഀഀ
                    return doc.createElement('<rvml:' + tagName + ' class="rvml">');਍                紀㬀ഀഀ
            } catch (e) {਍                挀爀攀愀琀攀一漀搀攀 㴀 昀甀渀挀琀椀漀渀 ⠀琀愀最一愀洀攀⤀ 笀ഀഀ
                    return doc.createElement('<' + tagName + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">');਍                紀㬀ഀഀ
            }਍        紀㬀ഀഀ
    R._engine.initWin(R._g.win);਍    刀⸀开攀渀最椀渀攀⸀挀爀攀愀琀攀 㴀 昀甀渀挀琀椀漀渀 ⠀⤀ 笀ഀഀ
        var con = R._getContainer.apply(0, arguments),਍            挀漀渀琀愀椀渀攀爀 㴀 挀漀渀⸀挀漀渀琀愀椀渀攀爀Ⰰഀഀ
            height = con.height,਍            猀Ⰰഀഀ
            width = con.width,਍            砀 㴀 挀漀渀⸀砀Ⰰഀഀ
            y = con.y;਍        椀昀 ⠀℀挀漀渀琀愀椀渀攀爀⤀ 笀ഀഀ
            throw new Error("VML container not found.");਍        紀ഀഀ
        var res = new R._Paper,਍            挀 㴀 爀攀猀⸀挀愀渀瘀愀猀 㴀 刀⸀开最⸀搀漀挀⸀挀爀攀愀琀攀䔀氀攀洀攀渀琀⠀∀搀椀瘀∀⤀Ⰰഀഀ
            cs = c.style;਍        砀 㴀 砀 簀簀 　㬀ഀഀ
        y = y || 0;਍        眀椀搀琀栀 㴀 眀椀搀琀栀 簀簀 㔀㄀㈀㬀ഀഀ
        height = height || 342;਍        爀攀猀⸀眀椀搀琀栀 㴀 眀椀搀琀栀㬀ഀഀ
        res.height = height;਍        眀椀搀琀栀 㴀㴀 ⬀眀椀搀琀栀 ☀☀ ⠀眀椀搀琀栀 ⬀㴀 ∀瀀砀∀⤀㬀ഀഀ
        height == +height && (height += "px");਍        爀攀猀⸀挀漀漀爀搀猀椀稀攀 㴀 稀漀漀洀 ⨀ ㄀攀㌀ ⬀ 匀 ⬀ 稀漀漀洀 ⨀ ㄀攀㌀㬀ഀഀ
        res.coordorigin = "0 0";਍        爀攀猀⸀猀瀀愀渀 㴀 刀⸀开最⸀搀漀挀⸀挀爀攀愀琀攀䔀氀攀洀攀渀琀⠀∀猀瀀愀渀∀⤀㬀ഀഀ
        res.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;";਍        挀⸀愀瀀瀀攀渀搀䌀栀椀氀搀⠀爀攀猀⸀猀瀀愀渀⤀㬀ഀഀ
        cs.cssText = R.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", width, height);਍        椀昀 ⠀挀漀渀琀愀椀渀攀爀 㴀㴀 ㄀⤀ 笀ഀഀ
            R._g.doc.body.appendChild(c);਍            挀猀⸀氀攀昀琀 㴀 砀 ⬀ ∀瀀砀∀㬀ഀഀ
            cs.top = y + "px";਍            挀猀⸀瀀漀猀椀琀椀漀渀 㴀 ∀愀戀猀漀氀甀琀攀∀㬀ഀഀ
        } else {਍            椀昀 ⠀挀漀渀琀愀椀渀攀爀⸀昀椀爀猀琀䌀栀椀氀搀⤀ 笀ഀഀ
                container.insertBefore(c, container.firstChild);਍            紀 攀氀猀攀 笀ഀഀ
                container.appendChild(c);਍            紀ഀഀ
        }਍        爀攀猀⸀爀攀渀搀攀爀昀椀砀 㴀 昀甀渀挀琀椀漀渀 ⠀⤀ 笀紀㬀ഀഀ
        return res;਍    紀㬀ഀഀ
    R.prototype.clear = function () {਍        刀⸀攀瘀攀⠀∀爀愀瀀栀愀攀氀⸀挀氀攀愀爀∀Ⰰ 琀栀椀猀⤀㬀ഀഀ
        this.canvas.innerHTML = E;਍        琀栀椀猀⸀猀瀀愀渀 㴀 刀⸀开最⸀搀漀挀⸀挀爀攀愀琀攀䔀氀攀洀攀渀琀⠀∀猀瀀愀渀∀⤀㬀ഀഀ
        this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;";਍        琀栀椀猀⸀挀愀渀瘀愀猀⸀愀瀀瀀攀渀搀䌀栀椀氀搀⠀琀栀椀猀⸀猀瀀愀渀⤀㬀ഀഀ
        this.bottom = this.top = null;਍    紀㬀ഀഀ
    R.prototype.remove = function () {਍        刀⸀攀瘀攀⠀∀爀愀瀀栀愀攀氀⸀爀攀洀漀瘀攀∀Ⰰ 琀栀椀猀⤀㬀ഀഀ
        this.canvas.parentNode.removeChild(this.canvas);਍        昀漀爀 ⠀瘀愀爀 椀 椀渀 琀栀椀猀⤀ 笀ഀഀ
            this[i] = typeof this[i] == "function" ? R._removedFactory(i) : null;਍        紀ഀഀ
        return true;਍    紀㬀ഀഀ
਍    瘀愀爀 猀攀琀瀀爀漀琀漀 㴀 刀⸀猀琀㬀ഀഀ
    for (var method in elproto) if (elproto[has](method) && !setproto[has](method)) {਍        猀攀琀瀀爀漀琀漀嬀洀攀琀栀漀搀崀 㴀 ⠀昀甀渀挀琀椀漀渀 ⠀洀攀琀栀漀搀渀愀洀攀⤀ 笀ഀഀ
            return function () {਍                瘀愀爀 愀爀最 㴀 愀爀最甀洀攀渀琀猀㬀ഀഀ
                return this.forEach(function (el) {਍                    攀氀嬀洀攀琀栀漀搀渀愀洀攀崀⸀愀瀀瀀氀礀⠀攀氀Ⰰ 愀爀最⤀㬀ഀഀ
                });਍            紀㬀ഀഀ
        })(method);਍    紀ഀഀ
})();਍ഀഀ
    // EXPOSE਍    ⼀⼀ 匀嘀䜀 愀渀搀 嘀䴀䰀 愀爀攀 愀瀀瀀攀渀搀攀搀 樀甀猀琀 戀攀昀漀爀攀 琀栀攀 䔀堀倀伀匀䔀 氀椀渀攀ഀഀ
    // Even with AMD, Raphael should be defined globally਍    漀氀搀刀愀瀀栀愀攀氀⸀眀愀猀 㼀 ⠀最⸀眀椀渀⸀刀愀瀀栀愀攀氀 㴀 刀⤀ 㨀 ⠀刀愀瀀栀愀攀氀 㴀 刀⤀㬀ഀഀ
਍    椀昀⠀琀礀瀀攀漀昀 攀砀瀀漀爀琀猀 㴀㴀 ∀漀戀樀攀挀琀∀⤀笀ഀഀ
        module.exports = R;਍    紀ഀഀ
    return R;਍紀⤀⤀㬀�