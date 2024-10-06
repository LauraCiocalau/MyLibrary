import {
  isPlatformBrowser
} from "./chunk-KE6WLKQ6.js";
import {
  AfterRenderPhase,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  Injectable,
  InjectionToken,
  IterableDiffers,
  NgZone,
  PLATFORM_ID,
  Renderer2,
  TemplateRef,
  ViewContainerRef,
  afterNextRender,
  computed,
  contentChild,
  contentChildren,
  effect,
  inject,
  input,
  output,
  setClassMetadata,
  signal,
  untracked,
  viewChild,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵqueryAdvance,
  ɵɵviewQuerySignal
} from "./chunk-DBC6KPJP.js";
import "./chunk-TFMRLFGK.js";
import {
  defer,
  fromEvent,
  merge
} from "./chunk-5X3OOUUX.js";
import {
  EMPTY,
  Observable,
  Subject,
  debounceTime,
  filter,
  interval,
  map,
  shareReplay,
  startWith,
  switchMap,
  takeUntil,
  timer
} from "./chunk-KQP4K3F6.js";
import "./chunk-3OV72XIM.js";

// node_modules/@ngu/carousel/fesm2022/ngu-carousel.mjs
var _c0 = ["ngucarousel"];
var _c1 = ["nguItemsContainer"];
var _c2 = ["touchContainer"];
var _c3 = [[["", "NguCarouselPrev", ""]], [["", "NguCarouselNext", ""]], [["", "NguCarouselPoint", ""]]];
var _c4 = ["[NguCarouselPrev]", "[NguCarouselNext]", "[NguCarouselPoint]"];
var _c5 = ["*"];
var NguCarouselStore = class {
  constructor(touch = new Touch(), vertical = new Vertical(), interval2, transform = new Transfrom(), button, visibleItems, deviceType, type = "fixed", token = "", items = 0, load = 0, deviceWidth = 0, carouselWidth = 0, itemWidth = 0, slideItems = 0, itemWidthPer = 0, itemLength = 0, currentSlide = 0, easing = "cubic-bezier(0, 0, 0.2, 1)", speed = 200, loop = false, dexVal = 0, touchTransform = 0, isEnd = false, isFirst = signal(true), isLast = signal(false), RTL = false, point = true, velocity = 1) {
    this.touch = touch;
    this.vertical = vertical;
    this.interval = interval2;
    this.transform = transform;
    this.button = button;
    this.visibleItems = visibleItems;
    this.deviceType = deviceType;
    this.type = type;
    this.token = token;
    this.items = items;
    this.load = load;
    this.deviceWidth = deviceWidth;
    this.carouselWidth = carouselWidth;
    this.itemWidth = itemWidth;
    this.slideItems = slideItems;
    this.itemWidthPer = itemWidthPer;
    this.itemLength = itemLength;
    this.currentSlide = currentSlide;
    this.easing = easing;
    this.speed = speed;
    this.loop = loop;
    this.dexVal = dexVal;
    this.touchTransform = touchTransform;
    this.isEnd = isEnd;
    this.isFirst = isFirst;
    this.isLast = isLast;
    this.RTL = RTL;
    this.point = point;
    this.velocity = velocity;
  }
};
var Vertical = class {
};
var Touch = class {
};
var Transfrom = class {
  constructor(xs = 0, sm = 0, md = 0, lg = 0, all = 0) {
    this.xs = xs;
    this.sm = sm;
    this.md = md;
    this.lg = lg;
    this.all = all;
    this.xl = 0;
  }
};
var Breakpoints = class {
  constructor(sm = 768, md = 992, lg = 1200, xl = 1200) {
    this.sm = sm;
    this.md = md;
    this.lg = lg;
    this.xl = xl;
  }
};
var NguCarouselConfig = class {
};
var NguCarouselOutletContext = class {
  constructor(data) {
    this.$implicit = data;
  }
};
var IS_BROWSER = new InjectionToken("IS_BROWSER", {
  providedIn: "root",
  factory: () => isPlatformBrowser(inject(PLATFORM_ID))
});
var _NguCarouselItemDirective = class _NguCarouselItemDirective {
};
_NguCarouselItemDirective.ɵfac = function NguCarouselItemDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NguCarouselItemDirective)();
};
_NguCarouselItemDirective.ɵdir = ɵɵdefineDirective({
  type: _NguCarouselItemDirective,
  selectors: [["", "NguCarouselItem", ""]],
  standalone: true
});
var NguCarouselItemDirective = _NguCarouselItemDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NguCarouselItemDirective, [{
    type: Directive,
    args: [{
      selector: "[NguCarouselItem]",
      standalone: true
    }]
  }], null, null);
})();
var _NguCarouselNextDirective = class _NguCarouselNextDirective {
};
_NguCarouselNextDirective.ɵfac = function NguCarouselNextDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NguCarouselNextDirective)();
};
_NguCarouselNextDirective.ɵdir = ɵɵdefineDirective({
  type: _NguCarouselNextDirective,
  selectors: [["", "NguCarouselNext", ""]],
  standalone: true
});
var NguCarouselNextDirective = _NguCarouselNextDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NguCarouselNextDirective, [{
    type: Directive,
    args: [{
      selector: "[NguCarouselNext]",
      standalone: true
    }]
  }], null, null);
})();
var _NguCarouselPrevDirective = class _NguCarouselPrevDirective {
};
_NguCarouselPrevDirective.ɵfac = function NguCarouselPrevDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NguCarouselPrevDirective)();
};
_NguCarouselPrevDirective.ɵdir = ɵɵdefineDirective({
  type: _NguCarouselPrevDirective,
  selectors: [["", "NguCarouselPrev", ""]],
  standalone: true
});
var NguCarouselPrevDirective = _NguCarouselPrevDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NguCarouselPrevDirective, [{
    type: Directive,
    args: [{
      selector: "[NguCarouselPrev]",
      standalone: true
    }]
  }], null, null);
})();
var _NguCarouselPointDirective = class _NguCarouselPointDirective {
};
_NguCarouselPointDirective.ɵfac = function NguCarouselPointDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NguCarouselPointDirective)();
};
_NguCarouselPointDirective.ɵdir = ɵɵdefineDirective({
  type: _NguCarouselPointDirective,
  selectors: [["", "NguCarouselPoint", ""]],
  standalone: true
});
var NguCarouselPointDirective = _NguCarouselPointDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NguCarouselPointDirective, [{
    type: Directive,
    args: [{
      selector: "[NguCarouselPoint]",
      standalone: true
    }]
  }], null, null);
})();
var _NguCarouselDefDirective = class _NguCarouselDefDirective {
  constructor() {
    this.template = inject(TemplateRef);
  }
};
_NguCarouselDefDirective.ɵfac = function NguCarouselDefDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NguCarouselDefDirective)();
};
_NguCarouselDefDirective.ɵdir = ɵɵdefineDirective({
  type: _NguCarouselDefDirective,
  selectors: [["", "nguCarouselDef", ""]],
  standalone: true
});
var NguCarouselDefDirective = _NguCarouselDefDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NguCarouselDefDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[nguCarouselDef]",
      standalone: true
    }]
  }], null, null);
})();
var _NguCarouselOutlet = class _NguCarouselOutlet {
  constructor() {
    this.viewContainer = inject(ViewContainerRef);
  }
};
_NguCarouselOutlet.ɵfac = function NguCarouselOutlet_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NguCarouselOutlet)();
};
_NguCarouselOutlet.ɵdir = ɵɵdefineDirective({
  type: _NguCarouselOutlet,
  selectors: [["", "nguCarouselOutlet", ""]],
  standalone: true
});
var NguCarouselOutlet = _NguCarouselOutlet;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NguCarouselOutlet, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[nguCarouselOutlet]",
      standalone: true
    }]
  }], null, null);
})();
var _NguHammerLoader = class _NguHammerLoader {
  constructor() {
    this._hammer$ = defer(() => import("./hammerjs.js")).pipe(shareReplay({
      bufferSize: 1,
      refCount: true
    }));
  }
  load() {
    return this._hammer$;
  }
};
_NguHammerLoader.ɵfac = function NguHammerLoader_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NguHammerLoader)();
};
_NguHammerLoader.ɵprov = ɵɵdefineInjectable({
  token: _NguHammerLoader,
  factory: _NguHammerLoader.ɵfac,
  providedIn: "root"
});
var NguHammerLoader = _NguHammerLoader;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NguHammerLoader, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _NguCarouselHammerManager = class _NguCarouselHammerManager {
  constructor(_ngZone, _nguHammerLoader) {
    this._ngZone = _ngZone;
    this._nguHammerLoader = _nguHammerLoader;
    this._destroy$ = new Subject();
  }
  ngOnDestroy() {
    this._destroy$.next();
  }
  createHammer(element) {
    return this._nguHammerLoader.load().pipe(
      map(() => (
        // Note: The Hammer manager should be created outside of the Angular zone since it sets up
        //       `pointermove` event listener which triggers change detection every time the pointer is moved.
        this._ngZone.runOutsideAngular(() => new Hammer(element))
      )),
      // Note: the dynamic import is always a microtask which may run after the view is destroyed.
      //       `takeUntil` is used to prevent setting Hammer up if the view had been destroyed before
      //       the HammerJS is loaded.
      takeUntil(this._destroy$)
    );
  }
  on(hammer, event) {
    return fromEvent(hammer, event).pipe(
      // Note: We have to re-enter the Angular zone because Hammer would trigger events outside of the
      //       Angular zone (since we set it up with `runOutsideAngular`).
      enterNgZone(this._ngZone),
      takeUntil(this._destroy$)
    );
  }
};
_NguCarouselHammerManager.ɵfac = function NguCarouselHammerManager_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NguCarouselHammerManager)(ɵɵinject(NgZone), ɵɵinject(NguHammerLoader));
};
_NguCarouselHammerManager.ɵprov = ɵɵdefineInjectable({
  token: _NguCarouselHammerManager,
  factory: _NguCarouselHammerManager.ɵfac
});
var NguCarouselHammerManager = _NguCarouselHammerManager;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NguCarouselHammerManager, [{
    type: Injectable
  }], () => [{
    type: NgZone
  }, {
    type: NguHammerLoader
  }], null);
})();
function enterNgZone(ngZone) {
  return (source) => new Observable((subscriber) => source.subscribe({
    next: (value) => ngZone.run(() => subscriber.next(value)),
    error: (error) => ngZone.run(() => subscriber.error(error)),
    complete: () => ngZone.run(() => subscriber.complete())
  }));
}
var _NguWindowScrollListener = class _NguWindowScrollListener extends Subject {
  constructor() {
    super();
    this._destroy$ = new Subject();
    const isBrowser = inject(IS_BROWSER);
    const ngZone = inject(NgZone);
    if (isBrowser) {
      ngZone.runOutsideAngular(() => fromEvent(window, "scroll").pipe(takeUntil(this._destroy$)).subscribe(this));
    }
  }
  ngOnDestroy() {
    this._destroy$.next();
  }
};
_NguWindowScrollListener.ɵfac = function NguWindowScrollListener_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NguWindowScrollListener)();
};
_NguWindowScrollListener.ɵprov = ɵɵdefineInjectable({
  token: _NguWindowScrollListener,
  factory: _NguWindowScrollListener.ɵfac,
  providedIn: "root"
});
var NguWindowScrollListener = _NguWindowScrollListener;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NguWindowScrollListener, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var NG_DEV_MODE = typeof ngDevMode === "undefined" || ngDevMode;
var _NguCarousel = class _NguCarousel extends NguCarouselStore {
  constructor() {
    super();
    this._host = inject(ElementRef);
    this._renderer = inject(Renderer2);
    this._differs = inject(IterableDiffers);
    this._isBrowser = inject(IS_BROWSER);
    this._ngZone = inject(NgZone);
    this._nguWindowScrollListener = inject(NguWindowScrollListener);
    this._nguCarouselHammerManager = inject(NguCarouselHammerManager);
    this._cdr = inject(ChangeDetectorRef);
    this.activePoint = signal(0);
    this.pointNumbers = signal([]);
    this.inputs = input.required();
    this.carouselLoad = output();
    this.onMove = output();
    this._defDirectives = contentChildren(NguCarouselDefDirective);
    this._nodeOutlet = viewChild.required(NguCarouselOutlet);
    this.nextButton = contentChild(NguCarouselNextDirective, {
      read: ElementRef
    });
    this.prevButton = contentChild(NguCarouselPrevDirective, {
      read: ElementRef
    });
    this.carouselMain1 = viewChild.required("ngucarousel", {
      read: ElementRef
    });
    this._nguItemsContainer = viewChild.required("nguItemsContainer", {
      read: ElementRef
    });
    this._touchContainer = viewChild.required("touchContainer", {
      read: ElementRef
    });
    this._arrayChanges = null;
    this.dataSource = input.required({
      transform: (v) => v || []
    });
    this._intervalController$ = new Subject();
    this._hammer = null;
    this._withAnimation = true;
    this._destroy$ = new Subject();
    this.trackBy = input();
    this._trackByFn = computed(() => {
      const fn = this.trackBy();
      if (NG_DEV_MODE && fn != null && typeof fn !== "function" && console?.warn) {
        console.warn(`trackBy must be a function, but received ${JSON.stringify(fn)}.`);
      }
      return fn || ((index, item) => item);
    });
    this._dataDiffer = this._differs.find([]).create(this._trackByFn());
    afterNextRender(() => {
      this._inputValidation();
      this._carouselCssNode = this._createStyleElem();
      if (this._isBrowser) {
        this._carouselInterval();
        if (!this.vertical.enabled && this.inputs()?.touch) {
          this._setupHammer();
        }
        this._setupWindowResizeListener();
        this._onWindowScrolling();
      }
    }, {
      phase: AfterRenderPhase.EarlyRead
    });
    effect(() => {
      const _ = this._defDirectives();
      const data = this.dataSource();
      untracked(() => this._checkChanges(data));
    }, {
      allowSignalWrites: true
    });
    let preSub;
    effect(() => {
      preSub?.unsubscribe();
      const prevButton = this.prevButton();
      untracked(() => {
        if (prevButton) {
          preSub = fromEvent(prevButton.nativeElement, "click").pipe(takeUntil(this._destroy$)).subscribe(() => this._carouselScrollOne(0));
        }
      });
    });
    let nextSub;
    effect(() => {
      nextSub?.unsubscribe();
      const nextButton = this.nextButton();
      untracked(() => {
        if (nextButton) {
          nextSub = fromEvent(nextButton.nativeElement, "click").pipe(takeUntil(this._destroy$)).subscribe(() => this._carouselScrollOne(1));
        }
      });
    });
  }
  _checkChanges(data) {
    this._arrayChanges = this._dataDiffer.diff(data);
    if (this._arrayChanges) {
      this.renderNodeChanges(Array.from(data));
    }
  }
  renderNodeChanges(data) {
    if (!this._arrayChanges) return;
    this.isLast.set(this._pointIndex === this.currentSlide);
    const viewContainer = this._nodeOutlet().viewContainer;
    this._arrayChanges.forEachOperation((item, adjustedPreviousIndex, currentIndex) => {
      const node = this._getNodeDef(data[currentIndex], currentIndex);
      if (node?.template) {
        if (item.previousIndex == null) {
          const context = new NguCarouselOutletContext(data[currentIndex]);
          context.index = currentIndex;
          viewContainer.createEmbeddedView(node.template, context, currentIndex);
        } else if (currentIndex == null) {
          viewContainer.remove(adjustedPreviousIndex);
        } else {
          const view = viewContainer.get(adjustedPreviousIndex);
          viewContainer.move(view, currentIndex);
        }
      }
    });
    this._updateItemIndexContext();
    if (this._host.nativeElement) {
      this._storeCarouselData();
    }
  }
  /**
   * Updates the index-related context for each row to reflect any changes in the index of the rows,
   * e.g. first/last/even/odd.
   */
  _updateItemIndexContext() {
    const viewContainer = this._nodeOutlet().viewContainer;
    for (let renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
      const viewRef = viewContainer.get(renderIndex);
      const context = viewRef.context;
      context.count = count;
      context.first = renderIndex === 0;
      context.last = renderIndex === count - 1;
      context.even = renderIndex % 2 === 0;
      context.odd = !context.even;
      context.index = renderIndex;
    }
  }
  _getNodeDef(data, i) {
    if (this._defDirectives()?.length === 1) {
      return this._defDirectives()[0];
    }
    const nodeDef = (this._defDirectives() || []).find((def) => !!def.when?.(i, data));
    return nodeDef;
  }
  _inputValidation() {
    const inputs = this.inputs();
    inputs.gridBreakpoints = inputs.gridBreakpoints ? inputs.gridBreakpoints : new Breakpoints();
    if (inputs.grid.xl === void 0) {
      inputs.grid.xl = inputs.grid.lg;
    }
    this.type = inputs.grid.all !== 0 ? "fixed" : "responsive";
    this.loop = inputs.loop || false;
    inputs.easing = inputs.easing || "cubic-bezier(0, 0, 0.2, 1)";
    this.touch.active = inputs.touch || false;
    this.RTL = inputs.RTL ? true : false;
    this.interval = inputs.interval || void 0;
    this.velocity = typeof inputs.velocity === "number" ? inputs.velocity : this.velocity;
    if (inputs.vertical && inputs.vertical.enabled) {
      this.vertical.enabled = inputs.vertical.enabled;
      this.vertical.height = inputs.vertical.height;
    }
    this._directionSymbol = this.RTL ? "" : "-";
    this.point = inputs.point && typeof inputs.point.visible !== "undefined" ? inputs.point.visible : true;
    this._carouselSize();
  }
  ngOnDestroy() {
    this._hammer?.destroy();
    this._destroy$.next();
  }
  /** Get Touch input */
  _setupHammer() {
    this._nguCarouselHammerManager.createHammer(this._touchContainer().nativeElement).subscribe((hammer) => {
      this._hammer = hammer;
      hammer.get("pan").set({
        direction: Hammer.DIRECTION_HORIZONTAL
      });
      this._nguCarouselHammerManager.on(hammer, "panstart").subscribe(() => {
        this.carouselWidth = this._nguItemsContainer().nativeElement.offsetWidth;
        this.touchTransform = this.transform[this.deviceType];
        this.dexVal = 0;
        this._setStyle(this._nguItemsContainer().nativeElement, "transition", "");
      });
      if (this.vertical.enabled) {
        this._nguCarouselHammerManager.on(hammer, "panup").subscribe((ev) => {
          this._touchHandling("panleft", ev);
        });
        this._nguCarouselHammerManager.on(hammer, "pandown").subscribe((ev) => {
          this._touchHandling("panright", ev);
        });
      } else {
        this._nguCarouselHammerManager.on(hammer, "panleft").subscribe((ev) => {
          this._touchHandling("panleft", ev);
        });
        this._nguCarouselHammerManager.on(hammer, "panright").subscribe((ev) => {
          this._touchHandling("panright", ev);
        });
      }
      this._nguCarouselHammerManager.on(hammer, "panend pancancel").subscribe(({
        velocity
      }) => {
        if (Math.abs(velocity) >= this.velocity) {
          this.touch.velocity = velocity;
          let direc = 0;
          if (!this.RTL) {
            direc = this.touch.swipe === "panright" ? 0 : 1;
          } else {
            direc = this.touch.swipe === "panright" ? 1 : 0;
          }
          this._carouselScrollOne(direc);
        } else {
          this.dexVal = 0;
          this._setStyle(this._nguItemsContainer().nativeElement, "transition", "transform 324ms cubic-bezier(0, 0, 0.2, 1)");
          this._setStyle(this._nguItemsContainer().nativeElement, "transform", "");
        }
      });
      this._nguCarouselHammerManager.on(hammer, "hammer.input").subscribe(({
        srcEvent
      }) => {
        srcEvent.stopPropagation();
      });
    });
  }
  /** handle touch input */
  _touchHandling(e, ev) {
    if (ev.center.x === 0) {
      return;
    }
    ev = Math.abs(this.vertical.enabled ? ev.deltaY : ev.deltaX);
    let valt = ev - this.dexVal;
    valt = this.type === "responsive" ? Math.abs(ev - this.dexVal) / (this.vertical.enabled ? this.vertical.height : this.carouselWidth) * 100 : valt;
    this.dexVal = ev;
    this.touch.swipe = e;
    this._setTouchTransfrom(e, valt);
    this._setTransformFromTouch();
  }
  _setTouchTransfrom(e, valt) {
    const condition = this.RTL ? "panright" : "panleft";
    this.touchTransform = e === condition ? valt + this.touchTransform : this.touchTransform - valt;
  }
  _setTransformFromTouch() {
    if (this.touchTransform < 0) {
      this.touchTransform = 0;
    }
    const type = this.type === "responsive" ? "%" : "px";
    this._setStyle(this._nguItemsContainer().nativeElement, "transform", this.vertical.enabled ? `translate3d(0, ${this._directionSymbol}${this.touchTransform}${type}, 0)` : `translate3d(${this._directionSymbol}${this.touchTransform}${type}, 0, 0)`);
  }
  /** this fn used to disable the interval when it is not on the viewport */
  _onWindowScrolling() {
    const {
      offsetTop,
      offsetHeight
    } = this._host.nativeElement;
    const {
      scrollY: windowScrollY,
      innerHeight: windowInnerHeight
    } = window;
    const isCarouselOnScreen = offsetTop <= windowScrollY + windowInnerHeight - offsetHeight / 4 && offsetHeight + offsetHeight / 2 >= windowScrollY;
    if (isCarouselOnScreen) {
      this._intervalController$.next(1);
    } else {
      this._intervalController$.next(0);
    }
  }
  /** store data based on width of the screen for the carousel */
  _storeCarouselData() {
    const inputs = this.inputs();
    const breakpoints = this.inputs().gridBreakpoints;
    this.deviceWidth = this._isBrowser ? window.innerWidth : breakpoints?.xl;
    this.carouselWidth = this.carouselMain1().nativeElement.offsetWidth;
    if (this.type === "responsive") {
      this.deviceType = this.deviceWidth >= breakpoints?.xl ? "xl" : this.deviceWidth >= breakpoints?.lg ? "lg" : this.deviceWidth >= breakpoints?.md ? "md" : this.deviceWidth >= breakpoints?.sm ? "sm" : "xs";
      this.items = inputs.grid[this.deviceType];
      this.itemWidth = this.carouselWidth / this.items;
    } else {
      this.items = Math.trunc(this.carouselWidth / inputs.grid.all);
      this.itemWidth = inputs.grid.all;
      this.deviceType = "all";
    }
    this.slideItems = +(inputs.slide < this.items ? inputs.slide : this.items);
    this.load = inputs.load >= this.slideItems ? inputs.load : this.slideItems;
    this.speed = inputs.speed && inputs.speed > -1 ? inputs.speed : 400;
    this._carouselPoint();
  }
  /** Used to reset the carousel */
  reset(withoutAnimation) {
    withoutAnimation && (this._withAnimation = false);
    this._carouselCssNode.textContent = "";
    this.moveTo(0);
    this._carouselPoint();
  }
  /** Init carousel point */
  _carouselPoint() {
    const Nos = Array.from(this.dataSource()).length - (this.items - this.slideItems);
    this._pointIndex = Math.ceil(Nos / this.slideItems);
    const pointers = [];
    if (this._pointIndex > 1 || !this.inputs().point?.hideOnSingleSlide) {
      for (let i = 0; i < this._pointIndex; i++) {
        pointers.push(i);
      }
    }
    this.pointNumbers.set(pointers);
    this._carouselPointActiver();
    if (this._pointIndex <= 1) {
      this._btnBoolean(1, 1);
    } else {
      if (this.currentSlide === 0 && !this.loop) {
        this._btnBoolean(1, 0);
      } else {
        this._btnBoolean(0, 0);
      }
    }
  }
  /** change the active point in carousel */
  _carouselPointActiver() {
    const i = Math.ceil(this.currentSlide / this.slideItems);
    this.activePoint.set(i);
  }
  /** this function is used to scoll the carousel when point is clicked */
  moveTo(slide, withoutAnimation) {
    withoutAnimation && (this._withAnimation = false);
    if (this.activePoint() !== slide && slide < this._pointIndex) {
      let slideremains;
      const btns = this.currentSlide < slide ? 1 : 0;
      switch (slide) {
        case 0:
          this._btnBoolean(1, 0);
          slideremains = slide * this.slideItems;
          break;
        case this._pointIndex - 1:
          this._btnBoolean(0, 1);
          slideremains = Array.from(this.dataSource()).length - this.items;
          break;
        default:
          this._btnBoolean(0, 0);
          slideremains = slide * this.slideItems;
      }
      this._carouselScrollTwo(btns, slideremains, this.speed);
    }
  }
  /** set the style of the carousel based the inputs data */
  _carouselSize() {
    const inputs = this.inputs();
    this.token = this._generateID();
    let dism = "";
    this._styleid = `.${this.token} > .ngucarousel > .ngu-container > .ngu-touch-container > .ngucarousel-items`;
    if (inputs.custom === "banner") {
      this._renderer.addClass(this._host.nativeElement, "banner");
    }
    if (inputs.animation === "lazy") {
      dism += `${this._styleid} > .item {transition: transform .6s ease;}`;
    }
    const breakpoints = inputs.gridBreakpoints;
    let itemStyle = "";
    if (this.vertical.enabled) {
      const itemWidthXS = `${this._styleid} > .item {height: ${this.vertical.height / +inputs.grid.xs}px}`;
      const itemWidthSM = `${this._styleid} > .item {height: ${this.vertical.height / +inputs.grid.sm}px}`;
      const itemWidthMD = `${this._styleid} > .item {height: ${this.vertical.height / +inputs.grid.md}px}`;
      const itemWidthLG = `${this._styleid} > .item {height: ${this.vertical.height / +inputs.grid.lg}px}`;
      const itemWidthXL = `${this._styleid} > .item {height: ${this.vertical.height / +inputs.grid.xl}px}`;
      itemStyle = `@media (max-width:${breakpoints?.sm - 1}px){${itemWidthXS}}
                    @media (max-width:${breakpoints?.sm}px){${itemWidthSM}}
                    @media (min-width:${breakpoints?.md}px){${itemWidthMD}}
                    @media (min-width:${breakpoints?.lg}px){${itemWidthLG}}
                    @media (min-width:${breakpoints?.xl}px){${itemWidthXL}}`;
    } else if (this.type === "responsive") {
      const itemWidthXS = inputs.type === "mobile" ? `${this._styleid} .item {flex: 0 0 ${95 / +inputs.grid.xs}%; width: ${95 / +inputs.grid.xs}%;}` : `${this._styleid} .item {flex: 0 0 ${100 / +inputs.grid.xs}%; width: ${100 / +inputs.grid.xs}%;}`;
      const itemWidthSM = `${this._styleid} > .item {flex: 0 0 ${100 / +inputs.grid.sm}%; width: ${100 / +inputs.grid.sm}%}`;
      const itemWidthMD = `${this._styleid} > .item {flex: 0 0 ${100 / +inputs.grid.md}%; width: ${100 / +inputs.grid.md}%}`;
      const itemWidthLG = `${this._styleid} > .item {flex: 0 0 ${100 / +inputs.grid.lg}%; width: ${100 / +inputs.grid.lg}%}`;
      const itemWidthXL = `${this._styleid} > .item {flex: 0 0 ${100 / +inputs.grid.xl}%; width: ${100 / +inputs.grid.xl}%}`;
      itemStyle = `@media (max-width:${breakpoints?.sm - 1}px){${itemWidthXS}}
                    @media (min-width:${breakpoints?.sm}px){${itemWidthSM}}
                    @media (min-width:${breakpoints?.md}px){${itemWidthMD}}
                    @media (min-width:${breakpoints?.lg}px){${itemWidthLG}}
                    @media (min-width:${breakpoints?.xl}px){${itemWidthXL}}`;
    } else {
      itemStyle = `${this._styleid} .item {flex: 0 0 ${inputs.grid.all}px; width: ${inputs.grid.all}px;}`;
    }
    this._renderer.addClass(this._host.nativeElement, this.token);
    if (this.vertical.enabled) {
      this._renderer.addClass(this._nguItemsContainer().nativeElement, "nguvertical");
      this._renderer.setStyle(this.carouselMain1().nativeElement, "height", `${this.vertical.height}px`);
    }
    this.RTL && !this.vertical.enabled && this._renderer.addClass(this._host.nativeElement, "ngurtl");
    this._createStyleElem(`${dism} ${itemStyle}`);
    this._storeCarouselData();
  }
  /** logic to scroll the carousel step 1 */
  _carouselScrollOne(Btn) {
    let itemSpeed = this.speed;
    let currentSlide = 0;
    let touchMove = Math.ceil(this.dexVal / this.itemWidth);
    touchMove = isFinite(touchMove) ? touchMove : 0;
    this._setStyle(this._nguItemsContainer().nativeElement, "transform", "");
    if (this._pointIndex === 1) {
      return;
    } else if (Btn === 0 && (!this.loop && !this.isFirst() || this.loop)) {
      const currentSlideD = this.currentSlide - this.slideItems;
      const MoveSlide = currentSlideD + this.slideItems;
      this._btnBoolean(0, 1);
      if (this.currentSlide === 0) {
        currentSlide = Array.from(this.dataSource()).length - this.items;
        itemSpeed = 400;
        this._btnBoolean(0, 1);
      } else if (this.slideItems >= MoveSlide) {
        currentSlide = 0;
        this._btnBoolean(1, 0);
      } else {
        this._btnBoolean(0, 0);
        if (touchMove > this.slideItems) {
          currentSlide = this.currentSlide - touchMove;
          itemSpeed = 200;
        } else {
          currentSlide = this.currentSlide - this.slideItems;
        }
      }
      this._carouselScrollTwo(Btn, currentSlide, itemSpeed);
    } else if (Btn === 1 && (!this.loop && !this.isLast() || this.loop)) {
      if (Array.from(this.dataSource()).length <= this.currentSlide + this.items + this.slideItems && !this.isLast()) {
        currentSlide = Array.from(this.dataSource()).length - this.items;
        this._btnBoolean(0, 1);
      } else if (this.isLast()) {
        currentSlide = 0;
        itemSpeed = 400;
        this._btnBoolean(1, 0);
      } else {
        this._btnBoolean(0, 0);
        if (touchMove > this.slideItems) {
          currentSlide = this.currentSlide + this.slideItems + (touchMove - this.slideItems);
          itemSpeed = 200;
        } else {
          currentSlide = this.currentSlide + this.slideItems;
        }
      }
      this._carouselScrollTwo(Btn, currentSlide, itemSpeed);
    }
  }
  /** logic to scroll the carousel step 2 */
  _carouselScrollTwo(Btn, currentSlide, itemSpeed) {
    if (this.dexVal !== 0) {
      const val = Math.abs(this.touch.velocity);
      let somt = Math.floor(this.dexVal / val / this.dexVal * (this.deviceWidth - this.dexVal));
      somt = somt > itemSpeed ? itemSpeed : somt;
      itemSpeed = somt < 200 ? 200 : somt;
      this.dexVal = 0;
    }
    if (this._withAnimation) {
      this._setStyle(this._nguItemsContainer().nativeElement, "transition", `transform ${itemSpeed}ms ${this.inputs().easing}`);
      this.inputs().animation && this._carouselAnimator(Btn, currentSlide + 1, currentSlide + this.items, itemSpeed, Math.abs(this.currentSlide - currentSlide));
    } else {
      this._setStyle(this._nguItemsContainer().nativeElement, "transition", ``);
    }
    this.itemLength = Array.from(this.dataSource()).length;
    this._transformStyle(currentSlide);
    this.currentSlide = currentSlide;
    this.onMove.emit(this);
    this._carouselPointActiver();
    this._carouselLoadTrigger();
    this._withAnimation = true;
  }
  /** boolean function for making isFirst and isLast */
  _btnBoolean(first, last) {
    this.isFirst.set(!!first);
    this.isLast.set(!!last);
  }
  _transformString(grid, slide) {
    let collect = "";
    collect += `${this._styleid} { transform: translate3d(`;
    if (this.vertical.enabled) {
      this.transform[grid] = this.vertical.height / this.inputs().grid[grid] * slide;
      collect += `0, -${this.transform[grid]}px, 0`;
    } else {
      this.transform[grid] = 100 / this.inputs().grid[grid] * slide;
      collect += `${this._directionSymbol}${this.transform[grid]}%, 0, 0`;
    }
    collect += `); }`;
    return collect;
  }
  /** set the transform style to scroll the carousel  */
  _transformStyle(slide) {
    let slideCss = "";
    if (this.type === "responsive") {
      const breakpoints = this.inputs().gridBreakpoints;
      slideCss = `@media (max-width: ${breakpoints?.sm - 1}px) {${this._transformString("xs", slide)}}
      @media (min-width: ${breakpoints?.sm}px) {${this._transformString("sm", slide)} }
      @media (min-width: ${breakpoints?.md}px) {${this._transformString("md", slide)} }
      @media (min-width: ${breakpoints?.lg}px) {${this._transformString("lg", slide)} }
      @media (min-width: ${breakpoints?.xl}px) {${this._transformString("xl", slide)} }`;
    } else {
      this.transform.all = this.inputs().grid.all * slide;
      slideCss = `${this._styleid} { transform: translate3d(${this._directionSymbol}${this.transform.all}px, 0, 0);`;
    }
    this._carouselCssNode.textContent = slideCss;
  }
  /** this will trigger the carousel to load the items */
  _carouselLoadTrigger() {
    if (typeof this.inputs().load === "number") {
      Array.from(this.dataSource()).length - this.load <= this.currentSlide + this.items && this.carouselLoad.emit(this.currentSlide);
    }
  }
  /** generate Class for each carousel to set specific style */
  _generateID() {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 6; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return `ngucarousel${text}`;
  }
  /** handle the auto slide */
  _carouselInterval() {
    const container = this.carouselMain1().nativeElement;
    if (this.interval && this.loop) {
      this._nguWindowScrollListener.pipe(
        // Note: do not use `debounceTime` since it may flush queued actions within the Angular zone.
        switchMap(() => timer(600)),
        takeUntil(this._destroy$)
      ).subscribe(() => {
        this._ngZone.run(() => this._onWindowScrolling());
      });
      const mapToZero = map(() => 0);
      const mapToOne = map(() => 1);
      const play$ = fromEvent(container, "mouseleave").pipe(mapToOne);
      const pause$ = fromEvent(container, "mouseenter").pipe(mapToZero);
      const touchPlay$ = fromEvent(container, "touchstart").pipe(mapToOne);
      const touchPause$ = fromEvent(container, "touchend").pipe(mapToZero);
      const interval$ = interval(this.inputs().interval?.timing).pipe(mapToOne);
      const initialDelay = this.interval.initialDelay || 0;
      const carouselInterval$ = merge(play$, touchPlay$, pause$, touchPause$, this._intervalController$).pipe(startWith(1), switchMap((val) => {
        this._cdr.markForCheck();
        return val ? interval$ : EMPTY;
      }));
      timer(initialDelay).pipe(switchMap(() => carouselInterval$), takeUntil(this._destroy$)).subscribe(() => {
        this._carouselScrollOne(1);
      });
    }
  }
  /** animate the carousel items */
  _carouselAnimator(direction, start, end, speed, length) {
    const viewContainer = this._nodeOutlet().viewContainer;
    let val = length < 5 ? length : 5;
    val = val === 1 ? 3 : val;
    const collectedIndexes = [];
    if (direction === 1) {
      for (let i = start - 1; i < end; i++) {
        collectedIndexes.push(i);
        val = val * 2;
        const viewRef = viewContainer.get(i);
        const context = viewRef.context;
        context.animate = {
          value: true,
          params: {
            distance: val
          }
        };
      }
    } else {
      for (let i = end - 1; i >= start - 1; i--) {
        collectedIndexes.push(i);
        val = val * 2;
        const viewRef = viewContainer.get(i);
        const context = viewRef.context;
        context.animate = {
          value: true,
          params: {
            distance: -val
          }
        };
      }
    }
    timer(speed * 0.7).pipe(takeUntil(this._destroy$)).subscribe(() => this._removeAnimations(collectedIndexes));
  }
  _removeAnimations(collectedIndexes) {
    const viewContainer = this._nodeOutlet().viewContainer;
    collectedIndexes.forEach((i) => {
      const viewRef = viewContainer.get(i);
      const context = viewRef.context;
      context.animate = {
        value: false,
        params: {
          distance: 0
        }
      };
    });
    this._cdr.markForCheck();
  }
  /** Short form for setElementStyle */
  _setStyle(el, prop, val) {
    this._renderer.setStyle(el, prop, val);
  }
  /** For generating style tag */
  _createStyleElem(datas) {
    const styleItem = this._renderer.createElement("style");
    if (datas) {
      const styleText = this._renderer.createText(datas);
      this._renderer.appendChild(styleItem, styleText);
    }
    this._renderer.appendChild(this._host.nativeElement, styleItem);
    return styleItem;
  }
  _setupWindowResizeListener() {
    this._ngZone.runOutsideAngular(() => fromEvent(window, "resize").pipe(debounceTime(500), filter(() => this.deviceWidth !== window.outerWidth), takeUntil(this._destroy$)).subscribe(() => {
      this._setStyle(this._nguItemsContainer().nativeElement, "transition", ``);
      this._ngZone.run(() => {
        this._storeCarouselData();
      });
    }));
  }
};
_NguCarousel.ɵfac = function NguCarousel_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NguCarousel)();
};
_NguCarousel.ɵcmp = ɵɵdefineComponent({
  type: _NguCarousel,
  selectors: [["ngu-carousel"]],
  contentQueries: function NguCarousel_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuerySignal(dirIndex, ctx._defDirectives, NguCarouselDefDirective, 4);
      ɵɵcontentQuerySignal(dirIndex, ctx.nextButton, NguCarouselNextDirective, 5, ElementRef);
      ɵɵcontentQuerySignal(dirIndex, ctx.prevButton, NguCarouselPrevDirective, 5, ElementRef);
    }
    if (rf & 2) {
      ɵɵqueryAdvance(3);
    }
  },
  viewQuery: function NguCarousel_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuerySignal(ctx._nodeOutlet, NguCarouselOutlet, 5);
      ɵɵviewQuerySignal(ctx.carouselMain1, _c0, 5, ElementRef);
      ɵɵviewQuerySignal(ctx._nguItemsContainer, _c1, 5, ElementRef);
      ɵɵviewQuerySignal(ctx._touchContainer, _c2, 5, ElementRef);
    }
    if (rf & 2) {
      ɵɵqueryAdvance(4);
    }
  },
  inputs: {
    inputs: [1, "inputs"],
    dataSource: [1, "dataSource"],
    trackBy: [1, "trackBy"]
  },
  outputs: {
    carouselLoad: "carouselLoad",
    onMove: "onMove"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([NguCarouselHammerManager]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c4,
  decls: 12,
  vars: 0,
  consts: [["ngucarousel", ""], ["touchContainer", ""], ["nguItemsContainer", ""], [1, "ngucarousel"], [1, "ngu-container"], [1, "ngu-touch-container"], [1, "ngucarousel-items"], ["nguCarouselOutlet", ""], [1, "nguclearFix"]],
  template: function NguCarousel_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c3);
      ɵɵelementStart(0, "div", 3, 0);
      ɵɵprojection(2);
      ɵɵelementStart(3, "div", 4)(4, "div", 5, 1)(6, "div", 6, 2);
      ɵɵelementContainer(8, 7);
      ɵɵelementEnd()()();
      ɵɵelement(9, "div", 8);
      ɵɵprojection(10, 1);
      ɵɵelementEnd();
      ɵɵprojection(11, 2);
    }
  },
  dependencies: [NguCarouselOutlet],
  styles: ["[_nghost-%COMP%]{display:block;position:relative}.ngurtl[_nghost-%COMP%]{direction:rtl}.ngucarousel[_ngcontent-%COMP%]{position:relative;overflow:hidden;height:100%}.ngucarousel[_ngcontent-%COMP%]   .ngucarousel-items[_ngcontent-%COMP%]{position:relative;display:flex;height:100%}.ngu-container[_ngcontent-%COMP%]{overflow:hidden}.nguvertical[_ngcontent-%COMP%]{flex-direction:column}.banner[_ngcontent-%COMP%]   .ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]{position:absolute;width:100%;bottom:20px}.banner[_ngcontent-%COMP%]   .ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background:#ffffff8c}.banner[_ngcontent-%COMP%]   .ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{background:#fff}.banner[_ngcontent-%COMP%]   .ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{cursor:pointer}.ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]{list-style-type:none;text-align:center;padding:12px;margin:0;white-space:nowrap;overflow:auto;box-sizing:border-box}.ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;border-radius:50%;background:#0000008c;padding:4px;margin:0 4px;transition-timing-function:cubic-bezier(.17,.67,.83,.67);transition:.4s}.ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{background:#6b6b6b;transform:scale(1.8)}.ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{cursor:pointer}.nguclearFix[_ngcontent-%COMP%]{clear:both}"],
  changeDetection: 0
});
var NguCarousel = _NguCarousel;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NguCarousel, [{
    type: Component,
    args: [{
      selector: "ngu-carousel",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [NguCarouselHammerManager],
      imports: [NguCarouselOutlet],
      standalone: true,
      template: '<div #ngucarousel class="ngucarousel">\n  <ng-content select="[NguCarouselPrev]"></ng-content>\n  <div class="ngu-container">\n    <div #touchContainer class="ngu-touch-container">\n      <div #nguItemsContainer class="ngucarousel-items">\n        <ng-container nguCarouselOutlet></ng-container>\n      </div>\n    </div>\n  </div>\n  <div class="nguclearFix"></div>\n  <ng-content select="[NguCarouselNext]"></ng-content>\n</div>\n<ng-content select="[NguCarouselPoint]"></ng-content>\n',
      styles: [":host{display:block;position:relative}:host.ngurtl{direction:rtl}.ngucarousel{position:relative;overflow:hidden;height:100%}.ngucarousel .ngucarousel-items{position:relative;display:flex;height:100%}.ngu-container{overflow:hidden}.nguvertical{flex-direction:column}.banner .ngucarouselPointDefault .ngucarouselPoint{position:absolute;width:100%;bottom:20px}.banner .ngucarouselPointDefault .ngucarouselPoint li{background:#ffffff8c}.banner .ngucarouselPointDefault .ngucarouselPoint li.active{background:#fff}.banner .ngucarouselPointDefault .ngucarouselPoint li:hover{cursor:pointer}.ngucarouselPointDefault .ngucarouselPoint{list-style-type:none;text-align:center;padding:12px;margin:0;white-space:nowrap;overflow:auto;box-sizing:border-box}.ngucarouselPointDefault .ngucarouselPoint li{display:inline-block;border-radius:50%;background:#0000008c;padding:4px;margin:0 4px;transition-timing-function:cubic-bezier(.17,.67,.83,.67);transition:.4s}.ngucarouselPointDefault .ngucarouselPoint li.active{background:#6b6b6b;transform:scale(1.8)}.ngucarouselPointDefault .ngucarouselPoint li:hover{cursor:pointer}.nguclearFix{clear:both}\n"]
    }]
  }], () => [], null);
})();
var _NguItemComponent = class _NguItemComponent {
};
_NguItemComponent.ɵfac = function NguItemComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NguItemComponent)();
};
_NguItemComponent.ɵcmp = ɵɵdefineComponent({
  type: _NguItemComponent,
  selectors: [["ngu-item"]],
  hostAttrs: [1, "item"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c5,
  decls: 1,
  vars: 0,
  template: function NguItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var NguItemComponent = _NguItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NguItemComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "ngu-item",
      host: {
        class: "item"
      },
      template: "<ng-content></ng-content>\n"
    }]
  }], null, null);
})();
var _NguTileComponent = class _NguTileComponent {
};
_NguTileComponent.ɵfac = function NguTileComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NguTileComponent)();
};
_NguTileComponent.ɵcmp = ɵɵdefineComponent({
  type: _NguTileComponent,
  selectors: [["ngu-tile"]],
  hostAttrs: [1, "item"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c5,
  decls: 2,
  vars: 0,
  consts: [[1, "tile"]],
  template: function NguTileComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0);
      ɵɵprojection(1);
      ɵɵelementEnd();
    }
  },
  styles: ["[_nghost-%COMP%]{padding:10px;box-sizing:border-box}.tile[_ngcontent-%COMP%]{box-shadow:0 2px 5px #00000029,0 2px 10px #0000001f}"]
});
var NguTileComponent = _NguTileComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NguTileComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "ngu-tile",
      host: {
        class: "item"
      },
      template: '<div class="tile">\n  <ng-content></ng-content>\n</div>\n',
      styles: [":host{padding:10px;box-sizing:border-box}.tile{box-shadow:0 2px 5px #00000029,0 2px 10px #0000001f}\n"]
    }]
  }], null, null);
})();
export {
  NguCarousel,
  NguCarouselConfig,
  NguCarouselDefDirective,
  NguCarouselItemDirective,
  NguCarouselNextDirective,
  NguCarouselOutlet,
  NguCarouselPointDirective,
  NguCarouselPrevDirective,
  NguCarouselStore,
  NguItemComponent,
  NguTileComponent
};
//# sourceMappingURL=@ngu_carousel.js.map
