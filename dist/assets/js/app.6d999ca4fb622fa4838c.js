(()=>{"use strict";var t,e={225:(t,e,i)=>{i.r(e)},424:function(t,e,i){var s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const a=s(i(524)),l=s(i(932)),h=s(i(602));class n extends a.default{constructor(t,e){super(),this.root=t,this.params=e,this.panel=new h.default(e,t,this),this.slider=new l.default(t,e),this.initPanel(e,t)}initPanel(t,e){this.panel.initializeInputs(e),this.panel.initializeFormValues(t),this.panel.handleChangeFormValues()}}e.default=n},602:function(t,e,i){var s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const a=s(i(984)),l=s(i(687)),h=s(i(385));e.default=class{constructor(t,e,i){this.parent=i,this.params=t,this.root=e,this.minValueInput=null,this.maxValueInput=null,this.firstValueInput=null,this.secondValueInput=null,this.stepInput=null,this.isRange=null,this.isVertical=null,this.hasTips=null,this.hasFill=null,this.initializeFormValues=a.default.bind(this),this.initializeInputs=l.default.bind(this),this.handleChangeFormValues=h.default.bind(this)}}},183:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){const e=t.data.param,i=t.data.valueIndex,s=t.target.value;"value"===e?this.params[e][i]=+s:this.params[e]="direction"===e?t.target.checked?"vertical":"horizontal":s?+s:t.target.checked,this.parent.slider.presenter.init(this.params,"rebuild"),this.parent.panel.initializeFormValues(this.params)}},385:function(t,e,i){var s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const a=s(i(183));e.default=function(){this.minValueInput.on("change",{param:"min"},a.default.bind(this)),this.firstValueInput.on("change",{param:"value",valueIndex:0},a.default.bind(this)),this.secondValueInput.on("change",{param:"value",valueIndex:1},a.default.bind(this)),this.maxValueInput.on("change",{param:"max"},a.default.bind(this)),this.stepInput.on("change",{param:"step"},a.default.bind(this)),this.isRange.on("change",{param:"isRange"},a.default.bind(this)),this.isVertical.on("change",{param:"direction"},a.default.bind(this)),this.hasFill.on("change",{param:"hasFill"},a.default.bind(this)),this.hasTips.on("change",{param:"hasTips"},a.default.bind(this))}},984:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e,i,s,a,l,h,n,r,o,u;null===(e=this.minValueInput)||void 0===e||e.val(t.min),null===(i=this.maxValueInput)||void 0===i||i.val(t.max),t.isRange?(null===(s=this.firstValueInput)||void 0===s||s.val(Array.isArray(t.value)?t.value[0]:""),null===(a=this.secondValueInput)||void 0===a||a.val(Array.isArray(t.value)?t.value[1]:""),this.secondValueInput.prop("disabled",!1)):(null===(l=this.firstValueInput)||void 0===l||l.val(Array.isArray(t.value)?t.value[0]:t.value),this.secondValueInput.prop("disabled",!0),this.secondValueInput.val("")),null===(h=this.stepInput)||void 0===h||h.val(t.step),null===(n=this.isRange)||void 0===n||n.prop("checked",t.isRange),null===(r=this.isVertical)||void 0===r||r.prop("checked","vertical"===t.direction),null===(o=this.hasFill)||void 0===o||o.prop("checked",t.hasFill),null===(u=this.hasTips)||void 0===u||u.prop("checked",t.hasTips)}},687:(t,e,i)=>{var s=i(563);Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){const e=s(`${t}__panel`);this.minValueInput=e.find(".js-input__min-value"),this.maxValueInput=e.find(".js-input__max-value"),this.firstValueInput=e.find(".js-input__first-value"),this.secondValueInput=e.find(".js-input__second-value"),this.stepInput=e.find(".js-input__step"),this.isRange=e.find(".js-checkbox__is-range"),this.isVertical=e.find(".js-checkbox__vertical"),this.hasFill=e.find(".js-checkbox__fill"),this.hasTips=e.find(".js-checkbox__tips")}},787:function(t,e,i){var s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),i(225);const a=s(i(424));new a.default(".slider-1",{min:0,max:2,step:.5,value:[0,1],isRange:!1,direction:"horizontal",hasFill:!0,hasTips:!0,hasScale:!0,isDecimal:!0,decimalPlaces:1}),new a.default(".slider-2",{min:-6,max:6,step:3,value:[-3,3],isRange:!0,direction:"horizontal",hasFill:!0,hasTips:!0,hasScale:!0,isDecimal:!0,decimalPlaces:1}),new a.default(".slider-3",{min:-15e3,max:15e3,step:500,value:[-3e3,3e3],isRange:!0,direction:"horizontal",hasFill:!0,hasTips:!0,hasScale:!0,isDecimal:!1,decimalPlaces:1}),new a.default(".slider-4",{min:-100,max:100,step:10,value:[-50,10],isRange:!1,direction:"vertical",hasFill:!0,hasTips:!0,hasScale:!0,isDecimal:!1,decimalPlaces:1})},829:function(t,e,i){var s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const a=s(i(524));class l extends a.default{constructor(t,e){super(),this.root=t,this.stance=e,this.step=1,this.value=0,this.stepCount=0,this.stepPercent=0,this.offset=0,this.stepOffset=0,this.cursorOffset=0,this.isDecimal=!1,this.decimalPlaces=0}setStep(t,e){this.step=t,this.stepCount=(e.max-e.min)/t,this.stepPercent=100/this.stepCount}setValue(t){this.value=t}setStance(t){this.stance=t}setIsDecimal(t,e){this.isDecimal=t,this.decimalPlaces=e}setOffset(t){this.offset=(this.value-t.min)/((t.max-t.min)/100),this.offset>100&&(this.offset=100,this.value=t.max),this.offset<0&&(this.offset=0,this.value=t.min)}setStepOffset(){this.stepOffset=Math.round(this.cursorOffset/this.stepPercent)*this.stepPercent}setCursorOffset(t){this.cursorOffset=t}updateThumbValue(t,e,i){this.setCursorOffset(i),this.setStepOffset();const s=this.stepOffset/this.stepPercent*this.step+e.min;this.setValue(s),this.setOffset(e),this.notify("UpdateThumbPosition",this.value,this.offset,t)}getValue(){return this.value}getState(){return{step:this.step,stepCount:this.stepCount,stepPercent:this.stepPercent,value:this.value,offset:this.offset,stepOffset:this.stepOffset,isDecimal:this.isDecimal,decimalPlaces:this.decimalPlaces}}}e.default=l},610:function(t,e,i){var s=i(563),a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const l=a(i(524));class h extends l.default{constructor(t){super(),this.root=t,this.ends={min:1,max:100},this.size=200,this.isRange=!1,this.direction="horizontal",this.fillSize=0,this.fillOffset=0,this.hasFill=!0,this.hasTips=!0,this.hasScale=!0}setEnds({min:t,max:e}){this.ends={min:t,max:e}}setSize(t){this.size=t}setIsRange(t){this.isRange=t}setDirection(t){this.direction=t}setSupElements(t,e,i){this.hasScale=i,this.hasTips=e,this.hasFill=t}setFillSize(t){this.isRange?this.fillSize="horizontal"===t?parseInt(s(`${this.root} .slider__thumb-1`).css("left"))-parseInt(s(`${this.root} .slider__thumb-0`).css("left")):parseInt(s(`${this.root} .slider__thumb-0`).css("top"))-parseInt(s(`${this.root} .slider__thumb-1`).css("top")):this.fillSize=parseInt(s(`${this.root} .slider__thumb-0`).css("horizontal"===t?"left":"bottom"))+15}setFillOffset(t){this.isRange?this.fillOffset="horizontal"===t?parseInt(s(`${this.root} .slider__thumb-0`).css("left"),10):parseInt(s(`${this.root} .slider__thumb-1`).css("top"),10):this.fillOffset=0}updateTrackFill(t){this.setFillSize(t),this.setFillOffset(t),this.notify("UpdateTrackFillPosition",this.fillSize,this.fillOffset)}getState(){return{ends:this.ends,size:this.size,isRange:this.isRange,direction:this.direction,hasFill:this.hasFill,hasTips:this.hasTips,hasScale:this.hasScale}}getFillState(){return{fillSize:this.fillSize,fillOffset:this.fillOffset}}}e.default=h},524:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=class{constructor(t={}){this.subscribers=t}subscribe(t,e){const i=this.subscribers[t];i?i.push(e):this.subscribers[t]=[e]}unsubscribe(t,e){this.subscribers[t].filter((t=>e!=t))}notify(t,...e){this.subscribers[t].forEach((t=>{t(...e)}))}}},15:function(t,e,i){var s=i(563),a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const l=a(i(892)),h=a(i(610)),n=a(i(829)),r=a(i(294)),o=a(i(868));e.default=class{constructor(t,e){this.root=t,this.trackModel=new h.default(t),this.view=new l.default(t),this.thumbs=[],this.params=e,this.thumbStance=0,this.init(e,"init"),this.clearHTML=r.default.bind(this),this.removeListeners=o.default.bind(this)}init(t,e){"rebuild"===e&&(this.params=t,this.view.isRange=!1,this.removeListeners(),this.clearHTML(t.direction),this.thumbStance=0,this.thumbs=[]),s(document).ready((()=>{this.setTrackModelState(t).setTrackViewState()})),this.createSlider(t),this.subscribe(),this.addListeners(t.isRange)}setTrackModelState({min:t,max:e,isRange:i,direction:a,hasFill:l,hasTips:h,hasScale:n}){const r="horizontal"===a?s(this.root).width():s(this.root).height();return this.trackModel.setSize(r),this.trackModel.setEnds({min:t,max:e}),this.trackModel.setIsRange(i),this.trackModel.setDirection(a),this.trackModel.setSupElements(l,h,n),this}setTrackViewState(){return this.view.setState(this.trackModel.getState()),this}createSlider({isRange:t,step:e,value:i,min:a,max:l,direction:h,hasScale:n,hasTips:r,hasFill:o,isDecimal:u,decimalPlaces:c}){return s(this.root).addClass(`slider_${h}`),this.createTrackView(h),this.createScaleView(h,e,l,a,n),this.creteFillView(h,o),this.createThumb(this.thumbStance),this.setThumbModelState(this.thumbStance,e,Array.isArray(i)?i[0]:i,a,l,u,c),this.createThumbView(this.thumbStance),this.creteTipView(h,this.thumbStance,r),this.setThumbViewStateAndPlacement(h,this.thumbStance),this.setTipPlacement(h,this.thumbStance),t&&(this.thumbStance+=1,this.createThumb(this.thumbStance),this.setThumbModelState(this.thumbStance,e,Array.isArray(i)?i[1]:i,a,l,u,c),this.createThumbView(this.thumbStance),this.creteTipView(h,this.thumbStance,r),this.setThumbViewStateAndPlacement(h,this.thumbStance),this.setTipPlacement(h,this.thumbStance)),this.setTrackFillAndPlacement(h),this}setThumbModelState(t,e,i,s,a,l,h){return this.thumbs.forEach((t=>{t.setStep(e,{min:s,max:a})})),this.thumbs[t].setStance(t),this.thumbs[t].setValue(i),this.thumbs[t].setOffset({min:s,max:a}),this.thumbs[t].setIsDecimal(l,h),this}setThumbViewStateAndPlacement(t,e){const{step:i,stepCount:s,stepPercent:a,value:l,offset:h,isDecimal:n,decimalPlaces:r}=this.thumbs[e].getState();return this.view.thumbView.setStep(i,a,s),this.view.thumbView.setValue(l,e),this.view.thumbView.setOffset(h,e),this.view.thumbView.setIsDecimal(n,r),this.view.initialThumbPlacement(t,e),this}setTrackFillAndPlacement(t){s(document).ready((()=>{this.trackModel.setFillSize(t),this.trackModel.setFillOffset(t),this.view.setFillState(this.trackModel.getFillState()),this.view.initialFillPlacement(t)}))}setTipPlacement(t,e){this.view.initialTipPlacement(t,e)}createThumb(t){this.thumbs.push(new n.default(this.root,t))}createThumbView(t){this.view.thumbView.createThumb(t)}createTrackView(t){this.view.trackView.createTrack(t)}createScaleView(t,e,i,s,a){this.view.scaleView.createScale(t,a),this.view.scaleView.createScaleMarks(e,i,s,t)}creteFillView(t,e){this.view.fillView.createFill(t,e)}creteTipView(t,e,i){this.view.tipView.createTip(t,e,i)}addListeners(t){this.view.thumbView.dragThumb(0),this.view.trackView.clickTrack(),t&&this.view.thumbView.dragThumb(1)}updateTrackFillModelState(){this.trackModel.updateTrackFill(this.view.direction)}updateTrackFillPosition(t,e){this.view.fillView.setSize(t),this.view.fillView.setOffset(e)}updateThumbModelValue(t,e){this.thumbs[t].updateThumbValue(t,this.view.ends,e)}updateThumbPosition(t,e,i){this.view.thumbView.setOffset(e,i),this.view.thumbView.setValue(t,i)}subscribe(){this.view.thumbView.subscribe("UpdateThumbModelValue",this.updateThumbModelValue.bind(this)),this.view.trackView.subscribe("UpdateThumbModelValue",this.updateThumbModelValue.bind(this)),this.view.trackView.subscribe("UpdateTrackModelFill",this.updateTrackFillModelState.bind(this)),this.trackModel.subscribe("UpdateTrackFillPosition",this.updateTrackFillPosition.bind(this)),this.thumbs.forEach((t=>t.subscribe("UpdateThumbPosition",this.updateThumbPosition.bind(this))))}}},294:(t,e,i)=>{var s=i(563);Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){const e="horizontal"===t?"vertical":"horizontal";s(this.root).removeClass(`slider_${e}`),s(this.root).html("")}},868:(t,e,i)=>{var s=i(563);Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){s(this.root).off()}},932:function(t,e,i){var s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const a=s(i(15));e.default=class{constructor(t,e){this.root=t,this.params=e,this.presenter=new a.default(t,e)}}},892:function(t,e,i){var s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const a=s(i(746)),l=s(i(617)),h=s(i(524)),n=s(i(2)),r=s(i(336)),o=s(i(348)),u=s(i(755)),c=s(i(543)),d=s(i(347));class f extends h.default{constructor(t){super(),this.thumbView=new a.default(this),this.trackView=new l.default(this),this.scaleView=new n.default(this),this.fillView=new r.default(this),this.tipView=new c.default(this),this.root=t,this.ends={min:0,max:0},this.size=200,this.isRange=!1,this.direction="horizontal",this.hasFill=!0,this.hasTips=!0,this.hasScale=!0,this.initialThumbPlacement=o.default.bind(this),this.initialFillPlacement=u.default.bind(this),this.initialTipPlacement=d.default.bind(this)}setState({isRange:t,direction:e,ends:i,size:s,hasTips:a,hasScale:l,hasFill:h}){this.ends=i,this.size=s,this.isRange=t,this.direction=e,this.hasTips=a,this.hasFill=h,this.hasScale=l}setFillState({fillSize:t,fillOffset:e}){this.fillView.setSize(t),this.fillView.setOffset(e)}}e.default=f},336:function(t,e,i){var s=i(563),a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const l=a(i(524));class h extends l.default{constructor(t){super(),this.view=t,this.size=0,this.offset=0}createFill(t,e){e&&s(this.view.root).append(`<div class="slider__fill slider__fill_${t}"></div>`)}setSize(t){this.size=t}setOffset(t){this.offset=t}}e.default=h},2:function(t,e,i){var s=i(563),a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const l=a(i(25));e.default=class{constructor(t){this.view=t,this.createScaleMarks=l.default.bind(this)}createScale(t,e){e&&s(this.view.root).append(`<div class="slider__scale slider__scale_${t}"></div>`)}}},25:(t,e,i)=>{var s=i(563);Object.defineProperty(e,"__esModule",{value:!0});const a=i(396);e.default=function(t,e,i,l){const h="horizontal"===l?"left":"top";let n=0;const r=(0,a.prepareScaleData)(i,e,t);for(let t=0;t<r.length;t++){s(`${this.view.root} .slider__scale`).append(`<div class="slider__scale-mark slider__scale-mark_${l}" style="${h}:${n}px"></div>`);const e=s(`${this.view.root} .slider__scale`).children(".slider__scale-mark")[t];s(e).append(`<div class="slider__scale-number slider__scale-number_${l}" >${r[t]}</div>`),n+=400/(r.length-1)}}},396:(t,e)=>{function i(t,e){for(const i of e)if(t%i==0)return i;return i(t-1,e)}Object.defineProperty(e,"__esModule",{value:!0}),e.prepareScaleData=void 0,e.prepareScaleData=function(t,e,s){const a=Math.round((e-t)/s+1),l=a-1,h=i(l,[3,5,7,11]);let n=Math.max(Math.floor(l/h),1);n=n<15?Math.min(n,h):n;const r=[];for(let e=0;e<Math.ceil(a/n);e++)r.push(+(s*e*n+t).toFixed(1));return r}},746:function(t,e,i){var s=i(563),a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const l=a(i(524)),h=a(i(422));class n extends l.default{constructor(t){super(),this.view=t,this.step=0,this.stepPercent=0,this.stepCount=0,this.value=[],this.offset=[],this.isDecimal=!1,this.decimalPlaces=0}createThumb(t){s(this.view.root).append(`<div class="slider__thumb slider__thumb-${t}"></div>`)}setStep(t,e,i){this.step=t,this.stepPercent=e,this.stepCount=i}setValue(t,e){this.value[e]=t}setOffset(t,e){this.offset[e]=t}setIsDecimal(t,e){this.decimalPlaces=t?e:0}dragThumb(t){s(this.view.root).on("mousedown",`.slider__thumb-${t}`,(e=>{e.preventDefault(),e.stopPropagation(),s("body").on("mousemove",{thisThumb:this,stance:t},h.default)})),s("body").on("mouseup",(t=>{s("body").off("mousemove")})),s(this.view.root).on("mouseup",(t=>{s(this.view.root).off("mousemove")}))}}e.default=n},422:(t,e,i)=>{var s=i(563);Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){const{thisThumb:e,stance:i}=t.data;let a=e.offset,l=e.view.direction,h="horizontal"===l?"left":"top",n="horizontal"===l?"width":"height",r=(("horizontal"===l?t.pageX:t.pageY)-("horizontal"===l?s(e.view.root).position().left:s(e.view.root).position().top))/e.view.size*100;"vertical"===l&&(r=100-r),console.log(e.value),e.notify("UpdateThumbModelValue",i,r),0===i?a[0]+e.stepPercent>=a[1]&&(a[0]=a[1]-e.stepPercent,e.value[0]=e.value[1]-e.step):a[1]-e.stepPercent<=a[0]&&(a[1]=a[0]+e.stepPercent,e.value[1]=e.value[0]+e.step),s(`${e.view.root} .slider__thumb-${i}`).css({[h]:("horizontal"===l?a[i]:100-a[i])+"%"}),e.view.tipView.updateTipsPosition(i,h),e.view.trackView.notify("UpdateTrackModelFill"),e.view.isRange?s(`${e.view.root} .slider__fill_${l}`).css({[h]:e.view.fillView.offset+"px",[n]:e.view.fillView.size+"px"}):s(`${e.view.root} .slider__fill_${l}`).css({[n]:a[i]+"%"})}},543:function(t,e,i){var s=i(563),a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const l=a(i(106));e.default=class{constructor(t){this.view=t,this.updateTipsPosition=l.default.bind(this)}createTip(t,e,i){i&&s(this.view.root).append(`<div class="slider__tip slider__tip-${e} slider__tip_${t}"></div>`)}}},106:(t,e,i)=>{var s=i(563);Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){const i="horizontal"===this.view.direction?this.view.thumbView.offset[t]:100-this.view.thumbView.offset[t];s(`${this.view.root} .slider__tip-${t}`).css({[e]:i+"%"}),s(`${this.view.root} .slider__tip-${t}`).html(this.view.thumbView.value[t].toFixed(this.view.thumbView.decimalPlaces))}},617:function(t,e,i){var s=i(563),a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const l=a(i(50)),h=a(i(524));class n extends h.default{constructor(t){super(),this.view=t}createTrack(t){s(this.view.root).append(`<div class="slider__track slider__track_${t}"></div>`)}clickTrack(){s(this.view.root).on("mousedown",{thisTrack:this},l.default)}}e.default=n},50:(t,e,i)=>{var s=i(563);Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){const{thisTrack:e}=t.data;let i,a=e.view.thumbView.offset,l=e.view.direction,h="horizontal"===l?"left":"top",n="horizontal"===l?"width":"height",r=(("horizontal"===l?t.pageX:t.pageY)-("horizontal"===l?s(e.view.root).position().left:s(e.view.root).position().top))/e.view.size*100;"vertical"===l&&(r=100-r),i=r>a[1]&&e.view.isRange?1:0,e.notify("UpdateThumbModelValue",i,r),s(`${e.view.root} .slider__thumb-${i}`).css({[h]:("horizontal"===l?a[i]:100-a[i])+"%"}),e.view.tipView.updateTipsPosition(i,h),e.notify("UpdateTrackModelFill"),s(`${e.view.root} .slider__fill_${e.view.direction}`).css({[n]:e.view.fillView.size+"px"}),e.view.isRange&&s(`${e.view.root} .slider__fill_${e.view.direction}`).css({[h]:e.view.fillView.offset+"px"})}},755:(t,e,i)=>{var s=i(563);Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){let e="horizontal"===t?"left":"top",i="horizontal"===t?"width":"height";this.isRange?s(`${this.root} .slider__fill_${t}`).css({[e]:this.fillView.offset+"px",[i]:this.fillView.size+"px"}):s(`${this.root} .slider__fill_${t}`).css({[i]:this.thumbView.offset[0]+"%"})}},348:(t,e,i)=>{var s=i(563);Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){let i="horizontal"===t?"left":"top",a="horizontal"===t?this.thumbView.offset[e]:100-this.thumbView.offset[e];s(`${this.root} .slider__thumb-${e}`).css({[i]:a+"%"})}},347:(t,e,i)=>{var s=i(563);Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){let i="horizontal"===t?"left":"top",a="horizontal"===t?this.thumbView.offset[e]:100-this.thumbView.offset[e];s(`${this.root} .slider__tip-${e}`).css({[i]:a+"%"}),s(`${this.root} .slider__tip-${e}`).html(this.thumbView.value[e].toFixed(this.thumbView.decimalPlaces))}}},i={};function s(t){var a=i[t];if(void 0!==a)return a.exports;var l=i[t]={exports:{}};return e[t].call(l.exports,l,l.exports,s),l.exports}s.m=e,t=[],s.O=(e,i,a,l)=>{if(!i){var h=1/0;for(u=0;u<t.length;u++){for(var[i,a,l]=t[u],n=!0,r=0;r<i.length;r++)(!1&l||h>=l)&&Object.keys(s.O).every((t=>s.O[t](i[r])))?i.splice(r--,1):(n=!1,l<h&&(h=l));if(n){t.splice(u--,1);var o=a();void 0!==o&&(e=o)}}return e}l=l||0;for(var u=t.length;u>0&&t[u-1][2]>l;u--)t[u]=t[u-1];t[u]=[i,a,l]},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),s.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t={143:0};s.O.j=e=>0===t[e];var e=(e,i)=>{var a,l,[h,n,r]=i,o=0;if(h.some((e=>0!==t[e]))){for(a in n)s.o(n,a)&&(s.m[a]=n[a]);if(r)var u=r(s)}for(e&&e(i);o<h.length;o++)l=h[o],s.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return s.O(u)},i=self.webpackChunkmetalampsliderplugin=self.webpackChunkmetalampsliderplugin||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))})();var a=s.O(void 0,[216],(()=>s(787)));a=s.O(a)})();