(this["webpackJsonpts-marketplace"]=this["webpackJsonpts-marketplace"]||[]).push([[0],{144:function(e,t,a){},158:function(e,t,a){e.exports=a.p+"static/media/logo.d54bca19.svg"},185:function(e,t,a){e.exports=a(393)},190:function(e,t,a){},191:function(e,t,a){},192:function(e,t,a){},193:function(e,t,a){},194:function(e,t,a){},199:function(e,t,a){},258:function(e,t,a){},259:function(e,t,a){},260:function(e,t,a){},261:function(e,t,a){},262:function(e,t,a){},263:function(e,t,a){},264:function(e,t,a){},265:function(e,t,a){},266:function(e,t,a){},267:function(e,t,a){},268:function(e,t,a){},269:function(e,t,a){},278:function(e,t,a){},279:function(e,t,a){},280:function(e,t,a){},281:function(e,t,a){},282:function(e,t,a){},298:function(e,t,a){},299:function(e,t,a){},300:function(e,t,a){},301:function(e,t,a){},302:function(e,t,a){},303:function(e,t,a){},304:function(e,t,a){},305:function(e,t,a){},306:function(e,t,a){},307:function(e,t,a){},310:function(e,t,a){},393:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"manageWishlist",(function(){return m})),a.d(n,"manageCart",(function(){return u})),a.d(n,"getProducts",(function(){return d})),a.d(n,"addCategories",(function(){return f})),a.d(n,"manageRoutes",(function(){return E})),a.d(n,"setFilteredItems",(function(){return _})),a.d(n,"setFilteredPrice",(function(){return p})),a.d(n,"setItemsPerPage",(function(){return b})),a.d(n,"setBrand",(function(){return g}));var r=a(1),c=a.n(r),l=a(15),i=a.n(l),s=(a(190),a(191),a(192),function(){return c.a.createElement("footer",{className:"footer"},"Copyright \xa9 2020. eLab WordPress Theme by StylemixThemes")}),o=(a(193),a(194),a(7)),m=function(e){return{type:"MANAGE_WISHLIST",wishList:e}},u=function(e){return{type:"MANAGE_CART",cartList:e}},d=function(e){return{type:"GET_PRODUCTS",products:e}},f=function(e,t){return{type:"GET_CATEGORIES",categories:e,selectedCategories:t}},E=function(e){return{type:"MANAGE_ROUTES",catalogRoutes:e}},_=function(e){return{type:"SET_FILTERED_ITEMS",filteredItems:e}},p=function(e){return{type:"SET_FILTERED_PRICE",filteredPrice:e}},b=function(e){return{type:"SET_ITEMS_PER_PAGE",itemsPerPage:e}},g=function(e){return{type:"SET_BRAND",brand:e}},v=a(57),N=a(158),h=a.n(N),O=a(11),j=a(8),y=(a(199),a(81)),k=a(50),w=a(6),C=y.a.Option,S=Object(k.f)((function(e){var t=e.products,a=e.history,n=Object(r.useState)(t),l=Object(j.a)(n,2),i=l[0],s=l[1],o=Object(r.useState)(""),m=Object(j.a)(o,2),u=m[0],d=m[1];return c.a.createElement("div",{className:"search"},c.a.createElement(y.a,{showSearch:!0,value:u,style:{border:"none"},placeholder:"Search ...",optionFilterProp:"children",onSearch:function(e){var a=t.filter((function(t){return t.title.toLowerCase().includes(e.toLowerCase())}));s(a),d(e)},onChange:function(e){a.push("/ts-marketplace/p/".concat(e)),d("")}},i.map((function(e){return c.a.createElement(C,{key:Object(w.a)(),value:e.id},e.title)}))))})),P=Object(o.b)((function(e){return e}),n)(S),R=Object(o.b)((function(e){return e}),n)((function(e){var t=e.wishList;return c.a.createElement("div",{className:"top"},c.a.createElement(O.b,{to:"/ts-marketplace/"},c.a.createElement("img",{src:h.a,alt:"logo"})),c.a.createElement(P,null),c.a.createElement("div",{className:"top__right"},c.a.createElement(O.b,{to:"./wishlist"},t.length>0?c.a.createElement(v.c,{className:"top__icon"}):c.a.createElement(v.d,{className:"top__icon"}))))})),T=(a(258),a(82)),L=a.n(T),I=a(126),x=a(13),A=(a(259),a(165)),F=a(18),M=Object(o.b)((function(e){return e}),n)((function(e){var t=e.categories,a=e.addCategories,n=e.getProducts,l=e.setBrand,i=e.manageRoutes;Object(r.useEffect)((function(){0===t.length&&o(),m()}),[t]);var s=function(e){var t=["All categories"];return e.forEach((function(e){t=[].concat(Object(x.a)(t),Object(x.a)(e.routes))})),t},o=function(){var e=Object(I.a)(L.a.mark((function e(){var t,n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://raw.githubusercontent.com/olegobiukh/other/master/api/ts-marketplace/categories.json");case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",a(n,s(n)));case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(I.a)(L.a.mark((function e(){var t,a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://raw.githubusercontent.com/olegobiukh/other/master/api/ts-marketplace/items.json");case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,e.abrupt("return",n(a));case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),u=Object(r.useState)(t.length>0?t[0].title:""),d=Object(j.a)(u,2),f=d[0],E=d[1],_=Object(r.useState)(!1),p=Object(j.a)(_,2),b=p[0],g=p[1],N=Object(r.useState)(t.length>0?t[0].title:""),h=Object(j.a)(N,2),y=h[0],k=h[1],C=Object(r.useState)(t.length>0?t[0].image:""),S=Object(j.a)(C,2),P=S[0],R=S[1],T=Object(r.useState)(t.length>0?t[0].routes:[]),M=Object(j.a)(T,2),$=M[0],G=M[1],B=Object(r.useState)(t.length>0?t[0].mainLink:""),D=Object(j.a)(B,2),W=D[0],q=D[1],V=function(e){l(""),g(e),t.forEach((function(e){e.mainLink===W&&i(e.routes)}))};return c.a.createElement("div",{className:"categories"},c.a.createElement("div",{className:"categories__title"},"Categories",b?c.a.createElement(v.b,{onClick:function(){return V(!1)},size:23,className:"categories__toggler"}):c.a.createElement(A.a,{onClick:function(){return V(!0)},className:"categories__toggler"})),b&&c.a.createElement("div",{className:"categories__container"},c.a.createElement("ul",{className:"categories__list"},t.length>0&&t.map((function(e,a){return c.a.createElement(O.b,{to:"/ts-marketplace/c/".concat(e.mainLink),className:"categories__item",onMouseOver:function(){return function(e){var a=t[e].routes,n=t[e].title,r=t[e].mainLink,c=t[e].hasOwnProperty("additionalTitle")?t[e].additionalTitle:t[e].title,l=t[e].hasOwnProperty("image")?t[e].image:null;G(a),q(r),E(n),k(c),R(l)}(a)},onClick:function(){return V(!1)},key:Object(w.a)()},c.a.createElement(F.a,null),e.icon,c.a.createElement("span",{className:"categories__name"},e.title))}))),$.length>0&&c.a.createElement("div",{className:"categories-addition"},c.a.createElement("div",{className:"categories-addition__top"},c.a.createElement("h3",{className:"categories-addition__title"},f),c.a.createElement("div",{className:"categories-addition__container"},c.a.createElement("ul",{className:"categories-addition__list"},$.map((function(e,t){return c.a.createElement(O.b,{key:Object(w.a)(),to:"/ts-marketplace/c/".concat(e),className:"categories-addition__item",onClick:function(){return V(!1)}},e)}))))),c.a.createElement(O.b,{to:"/ts-marketplace/c/".concat(W),onClick:function(){return V(!1)}},c.a.createElement("div",{className:"categories-addition__banner",style:{backgroundImage:"url(".concat(P,")")}},c.a.createElement("p",{className:"categories-addition__banner-text"},"Looking for more?"),c.a.createElement("h3",{className:"categories-addition__banner-title"},"Get $100 Voucher* ",c.a.createElement("br",null)," for",c.a.createElement("span",{className:"categories-addition__banner-title--normal"},y)))))))})),$=(a(260),Object(o.b)((function(e){return e}),n)((function(e){var t=e.cartList,a=t.length>0?t.reduce((function(e,t){return e+t.amount}),0):0,n=t.length>0?t.reduce((function(e,t){return e+(t.amount||1)*t.price}),0):0;return c.a.createElement("div",{className:"price"},c.a.createElement("div",{className:"price__icon"},c.a.createElement(O.b,{to:"/ts-marketplace/cart"},c.a.createElement(F.h,{size:20}),c.a.createElement("span",{className:"price__quantity"},a))),c.a.createElement("span",{className:"price__amount"},"$",n))}))),G=function(){return c.a.createElement("div",{className:"navigation"},c.a.createElement(M,null),c.a.createElement($,null))},B=function(){return c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"header__wrapper"},c.a.createElement(R,null),c.a.createElement(G,null)))},D=(a(261),a(262),a(263),function(e){var t=e.text,a=e.type,n=void 0===a?"default":a,r=e.handleClick;return c.a.createElement("button",{className:"custom-button ".concat("default"!==n?"custom-button--volumed":"custom-button--default"),onClick:r},t)}),W=Object(k.f)((function(e){var t=e.categories,a=e.history,n=Object(r.useState)(1),l=Object(j.a)(n,2),i=l[0],s=l[1],o=t.map((function(e){return c.a.createElement("li",{key:Object(w.a)(),className:"home-slider__point ".concat(e.order!==i?"home-slider__point--ball":"home-slider__point--number"),onClick:function(){return s(e.order)}},e.order===i&&e.order)})),m=t.find((function(e){return e.order===i}));return c.a.createElement("div",{className:"home-slider"},c.a.createElement("div",{className:"home-slider__container"},m&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"home-slider__left"},c.a.createElement("p",{className:"home-slider__text"},m&&m.title),c.a.createElement("h1",{className:"home-slider__title"},m&&m.description),c.a.createElement("div",{className:"home-slider__toolbar"},c.a.createElement(D,{text:"view all",type:"default",handleClick:function(){return e=m.routes[0],void a.push("/ts-marketplace/c/".concat(e));var e}}))),c.a.createElement("img",{src:m.slideImage,alt:m.title,className:"home-slider__image"})),c.a.createElement("ul",{className:"home-slider__points"},o)))})),q=Object(o.b)((function(e){return e}),n)(W),V=(a(264),function(e){var t=e.item,a=t.title,n=t.images,r=t.category,l=t.price,i=t.id;return c.a.createElement("article",{className:"scroll-slider__item-wrapper"},c.a.createElement("div",{className:"scroll-slider__item"},c.a.createElement("div",{className:"scroll-slider__top"},c.a.createElement("h3",{className:"scroll-slider__item-title"},r),c.a.createElement(O.b,{to:"./p/".concat(i),className:"scroll-slider__link"},"View all details ",c.a.createElement(v.a,null))),c.a.createElement("div",{className:"scroll-slider__bottom"},c.a.createElement(O.b,{to:"./p/".concat(i),className:"scroll-slider__link"},a),c.a.createElement("p",{className:"scroll-slider__pricing"},c.a.createElement("strong",{className:"scroll-slider__price"},"$",l))),c.a.createElement("img",{src:n[0],alt:a,className:"scroll-slider__image"})))}),U=function(e){var t=e.products,a=t?function(){for(var e=[];e.length<=10;){var a=Math.floor(Math.random()*(t.length-0+1))+0;e=[].concat(Object(x.a)(e),[t[a]])}return e}().filter((function(e){return e})):[],n=t?a.map((function(e){return c.a.createElement(V,{key:Object(w.a)(),item:e})})):null;return c.a.createElement("section",{className:"scroll-slider"},c.a.createElement("div",{className:"scroll-slider__wrapper"},c.a.createElement("h2",{className:"scroll-slider__title"},"Show weekly deals"),c.a.createElement("div",{className:"scroll-slider__container"},n)))},z=Object(o.b)((function(e){return e}),n)((function(e){var t=e.products;return c.a.createElement("div",null,c.a.createElement(q,null),t.length>1&&c.a.createElement(U,{products:t}))})),H=(a(144),Object(o.b)((function(e){return e}),n)((function(e){var t=e.wishList,a=e.products,n=e.manageWishlist,l=e.manageCart,i=e.cartList,s=a.filter((function(e){return Object.values(t).some((function(t){return t===e.id}))})),o=Object(r.useState)(s),m=Object(j.a)(o,2),u=m[0],d=m[1],f=function(e){var a=t.filter((function(t){return t!==e}));n(a);var r=u.filter((function(t){return t.id!==e}));d(r)},E=u.map((function(e){return c.a.createElement("div",{key:Object(w.a)(),className:"list__item"},c.a.createElement("div",{className:"list__box"},c.a.createElement("img",{src:e.images[0],alt:"item.title",className:"list__image"}),c.a.createElement("h2",{className:"list__title"},e.title)),c.a.createElement("div",{className:"list__box"},c.a.createElement("p",{className:"list__pricing"},c.a.createElement("strong",{className:"list__price"},"$",e.price)),c.a.createElement("button",{type:"button",className:"list__button",onClick:function(){return function(e,t){var a={id:e,price:t,amount:1},n=i.length>0&&i.some((function(t){return t.id===e}))?Object(x.a)(i).map((function(t){return t.id===e?a:t})):[].concat(Object(x.a)(i),[a]);l(n),f(e)}(e.id,e.price)}},"add to cart")),c.a.createElement(F.b,{className:"list__close",onClick:function(){return f(e.id)}}))})),_=["product","price","buy"].map((function(e){return c.a.createElement("h2",{key:Object(w.a)(),className:"wishlist__heading"},e)}));return c.a.createElement("main",{className:"list"},t.length>0?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"list__head"},c.a.createElement("span",null),_),c.a.createElement("div",{className:"list__body"},E)):c.a.createElement("strong",{className:"list__text"},"The wishlist has no items"))}))),J=(a(265),a(266),Object(k.f)((function(e){var t=e.match,a=e.categories,n=t.params.category,r=a.find((function(e){return e.routes.includes(n)||e.mainLink===n}));return c.a.createElement("div",{className:"category-banner",style:{backgroundImage:"url(".concat(r.image,")")}},c.a.createElement("p",{className:"category-banner__text"},"Looking for more?"),c.a.createElement("h1",{className:"category-banner__title"},"Get ",c.a.createElement("span",{className:"category-banner__title--blue"},"$100")," Voucher",c.a.createElement("span",{className:"category-banner__title--blue"},"*"),c.a.createElement("br",null),c.a.createElement("span",{className:"category-banner__title--thin"},r.title)))}))),K=(a(267),a(268),y.a.Option),X=Object(o.b)((function(e){return e}),n)((function(e){var t=e.setItemsPerPage,a=e.itemsPerPage;return c.a.createElement("section",{className:"category-container__filter"},c.a.createElement("div",{className:"category-container__filter-left"},c.a.createElement(y.a,{defaultValue:a,style:{width:120},onChange:function(e){return t(e)}},c.a.createElement(K,{value:5},"5"),c.a.createElement(K,{value:10},"10"),c.a.createElement(K,{value:15},"15"))))})),Q=a(398),Y=(a(269),function(e){var t=e.products,a=e.setBrand,n=t.map((function(e){return c.a.createElement("article",{key:Object(w.a)(),className:"catalog__item"},c.a.createElement("div",{className:"catalog__item-top"},c.a.createElement(O.b,{to:"./p/".concat(e.id),onClick:function(){return a("")}},c.a.createElement("img",{src:e.images[0],alt:e.title,className:"catalog__image"}))),c.a.createElement("div",{className:"catalog__item-bottom"},c.a.createElement(O.b,{to:"./p/".concat(e.id)},c.a.createElement("h3",{className:"catalog__title"},e.title)),c.a.createElement("span",{className:"catalog__price"},"$",e.price)))}));return c.a.createElement("section",{className:"catalog__items"},n)}),Z=Object(o.b)((function(e){return e}),n)((function(e){var t=e.products,a=e.catalogRoutes,n=e.filteredPrice,l=e.itemsPerPage,i=e.brand,s=e.setBrand,o=Object(r.useState)(1),m=Object(j.a)(o,2),u=m[0],d=m[1],f=a.length>0?t.filter((function(e){return a.some((function(t){return t===e.category}))})):t,E=""!==i?f.filter((function(e){return e.features.company===i})):f,_=n.length>0?E.filter((function(e){return e.price>=n[0]&&e.price<=n[1]})):E,p=u>1?(u-1)*l:0,b=u*l,g=_.filter((function(e,t){return t>=p&&t<=b-1}));return c.a.createElement("section",{className:"category-container"},t.length>0&&c.a.createElement(c.a.Fragment,null,c.a.createElement(X,null),c.a.createElement(Y,{products:g,setBrand:s}),c.a.createElement("div",{className:"pagination"},c.a.createElement(Q.a,{current:u,total:_.length,pageSize:l,onChange:function(e){return d(e)}}))))})),ee=(a(278),a(279),a(168)),te=Object(o.b)((function(e){return e}),n)((function(e){var t=e.categories,a=e.manageRoutes,n=e.setBrand,l=Object(r.useState)(100),i=Object(j.a)(l,2),s=i[0],o=i[1],m=function(e){a(e),n("")},u=t;return c.a.createElement("ul",{className:"filter-categories"},u.map((function(e){return c.a.createElement(r.Fragment,{key:Object(w.a)()},c.a.createElement("li",{className:"filter-categories__item"},c.a.createElement("div",{className:"filter-categories__left"},c.a.createElement(O.b,{to:"/ts-marketplace/c/".concat(e.mainLink),onClick:function(){return m(e.routes)},className:"filter-categories__link"},c.a.createElement(F.a,null),c.a.createElement("span",{className:"filter-categories__title"},e.title))),e.routes&&c.a.createElement(ee.a,{className:"filter-categories__plus",onClick:function(){return t=e.id,void o(t===s?100:t);var t}})),s===e.id&&e.routes&&e.routes.map((function(e){return c.a.createElement("li",{key:Object(w.a)(),className:"filter-categories__item filter-categories__item--sub"},c.a.createElement("div",{className:"filter-categories__item"},c.a.createElement(O.b,{to:"/ts-marketplace/c/".concat(e),onClick:function(){return m([e])},className:"filter-categories__link"},c.a.createElement(F.a,null),c.a.createElement("span",{className:"filter-categories__title"},e))))})))})))})),ae=(a(280),function(e){return c.a.createElement("section",{className:"categoryFilterItem"},c.a.createElement("h3",{className:"categoryFilterItem__title"},e.title),e.children)}),ne=(a(281),Object(o.b)((function(e){return e}),n)((function(e){var t=e.products,a=e.catalogRoutes,n=e.setBrand;return t.length>0&&1===a.length?c.a.createElement("ul",{className:"filter-brands"},function(){var e=a?t.filter((function(e){return a.some((function(t){return t===e.category}))})):t,n=[];return e.forEach((function(t){if(!n.some((function(e){return e.title===t.features.company}))){var a=e.filter((function(e){return e.features.company===t.features.company})),r={id:Object(w.a)(),title:t.features.company,amount:a.length};n=[].concat(Object(x.a)(n),[r])}})),n}().map((function(e){return c.a.createElement(r.Fragment,{key:Object(w.a)()},c.a.createElement("li",{className:"filter-brands__item"},c.a.createElement("div",{className:"filter-brands__item"},c.a.createElement(F.f,{className:"filter-brands__minus"}),c.a.createElement("p",{className:"filter-brands__title"},c.a.createElement("span",{className:"filter-brands__title-first",onClick:function(){return n(e.title)}},e.title),c.a.createElement("span",{className:"filter-brands__amount"},"(",e.amount,")")))))}))):null}))),re=(a(282),a(145),a(396)),ce=Object(o.b)((function(e){return e}),n)((function(e){var t=e.products,a=e.catalogRoutes,n=e.setFilteredPrice,l=function(){var e=a?t.filter((function(e){return a.some((function(t){return t===e.category}))})):t,n=[];return e.forEach((function(e){n.some((function(t){return t.price===e.price}))||(n=[].concat(Object(x.a)(n),[e.price]))})),n}(),i=l.length>0?Math.min.apply(Math,Object(x.a)(l)):0,s=l.length>0?Math.max.apply(Math,Object(x.a)(l)):100;Object(r.useEffect)((function(){d(i),p(s)}),[i,s]);var o=Object(r.useState)(i),m=Object(j.a)(o,2),u=m[0],d=m[1],f=Object(r.useState)(s),E=Object(j.a)(f,2),_=E[0],p=E[1],b=[u,_];return 1===a.length?c.a.createElement("div",{className:"filter-price"},c.a.createElement("div",{className:"filter-price__slider"},c.a.createElement(re.a,{range:!0,defaultValue:b,min:i,max:s,onChange:function(e){return function(e){d(e[0]),p(e[1]),n(b)}(e)}})),c.a.createElement("div",{className:"filter-price__bottom"},c.a.createElement("div",{className:"filter-price__text"},"Price:",c.a.createElement("span",{className:"filter-price__range"},"$",u," - $",_)))):null})),le=function(e){var t=e.catalogRoutes;return c.a.createElement("section",{className:"category-filter"},c.a.createElement(ae,{title:"Product categories"},c.a.createElement(te,null)),1===t.length&&c.a.createElement(c.a.Fragment,null,c.a.createElement(ae,{title:"Brands"},c.a.createElement(ne,null)),c.a.createElement(ae,{title:"Price"},c.a.createElement(ce,null))))},ie=Object(o.b)((function(e){return e}),n)((function(e){var t=e.products,a=e.catalogRoutes,n=e.categories;return c.a.createElement("div",{className:"catalog"},t.length>0&&c.a.createElement(c.a.Fragment,null,c.a.createElement(le,{products:t,catalogRoutes:a}),c.a.createElement("div",{className:"catalog__right"},c.a.createElement(J,{categories:n}),c.a.createElement(Z,null))))})),se=Object(o.b)((function(e){return e}),n)((function(e){var t=e.products,a=e.cartList,n=e.manageCart,l=a.map((function(e){var a=t.find((function(t){return t.id===e.id}));return a.amount=e.amount,a})),i=Object(r.useState)(l),s=Object(j.a)(i,2),o=s[0],m=s[1],u=o.map((function(e,t){return c.a.createElement("div",{key:Object(w.a)(),className:"list__item"},c.a.createElement("div",{className:"list__box"},c.a.createElement("img",{src:e.images[0],alt:"item.title",className:"list__image"}),c.a.createElement("h2",{className:"list__title"},e.title)),c.a.createElement("div",{className:"list__box"},c.a.createElement("p",{className:"list__pricing"},c.a.createElement("span",{className:"list__sale"},"$",e.price),c.a.createElement("strong",{className:"list__price"},"$",e.price*e.amount)),c.a.createElement("input",{type:"number",className:"list__input",value:e.amount,onChange:function(e){return function(e,t){var a=Object(x.a)(o);a[+t].amount=+e,n(a)}(e.target.value,t)}})),c.a.createElement(F.b,{className:"list__close",onClick:function(){return function(e){var t=o.filter((function(t){return t.id!==e})),r=a.filter((function(t){return t.id!==e}));n(r),m(t)}(e.id)}}))})),d=["product","price","buy"].map((function(e){return c.a.createElement("h2",{key:Object(w.a)(),className:"wishlist__heading"},e)}));return c.a.createElement("main",{className:"list"},a.length>0?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"list__head"},c.a.createElement("span",null),d),c.a.createElement("div",{className:"list__body"},u)):c.a.createElement("strong",{className:"list__text"},"The cart has no items"))})),oe=(a(298),a(299),a(300),function(e){var t=e.product,a=Object(r.useState)(0),n=Object(j.a)(a,2),l=n[0],i=n[1],s=t.images.map((function(e){return c.a.createElement("div",{key:Object(w.a)(),className:"product-slider__image",style:{backgroundImage:"url(".concat(e,")")}})})),o=t.images.map((function(e,t){return c.a.createElement("div",{key:Object(w.a)(),className:"product-slider__toolbar-box ".concat(l===t&&"product-slider__toolbar-box--active"),onClick:function(){return i(t)},style:{backgroundImage:"url(".concat(e,")")}})}));return c.a.createElement("div",{className:"product-slider"},c.a.createElement("div",{className:"product-slider__main-wrapper"},c.a.createElement("div",{className:"product-slider__main",style:{transform:"translateX(-".concat(300*l,"px)")}},s)),c.a.createElement("div",{className:"product-slider__toolbar"},o))}),me=(a(301),a(302),function(e){var t=e.title,a=e.features,n=Object.entries(a).map((function(e){var t=Object(j.a)(e,2),a=t[0],n=t[1];return c.a.createElement("li",{key:Object(w.a)(),className:"product-main__top-item"},a,": ",n)}));return c.a.createElement("div",{className:"product-main__top"},c.a.createElement("h2",{className:"product-main__top-title"},t),c.a.createElement("ul",{className:"product-main__top-list"},n))}),ue=(a(303),Object(o.b)((function(e){return e}),n)((function(e){var t=e.id,a=e.price,n=e.cartList,l=e.manageCart,i=Object(r.useState)(1),s=Object(j.a)(i,2),o=s[0],m=s[1];return c.a.createElement("div",{className:"product-main__cart"},c.a.createElement("span",{className:"product-main__cart-price"},"$",a*o),c.a.createElement("div",{className:"product-main__cart-right"},c.a.createElement("input",{type:"number",value:o,onChange:function(e){return m(+e.target.value)},className:"product-main__cart-input"}),c.a.createElement("button",{type:"button",className:"product-main__cart-button",onClick:function(){return function(){var e={id:t,price:a,amount:o},r=n.length>0&&n.some((function(e){return e.id===t}))?Object(x.a)(n).map((function(a){return a.id===t?e:a})):[].concat(Object(x.a)(n),[e]);l(r)}()}},"add to cart")))}))),de=(a(304),a(305),a(170)),fe=a(127),Ee=a(101),_e=Object(o.b)((function(e){return e}),n)((function(e){var t=e.id,a=e.manageWishlist,n=e.wishList,l=[{title:"Add to Wishlist",icon:c.a.createElement(F.d,null),func:function(){return function(){var e=Object.values(n).some((function(e){return e===t}))?n.filter((function(e){return e!==t})):[].concat(Object(x.a)(n),[t]);a(e)}()}},{title:"Share",icon:c.a.createElement(F.g,null),social:[{title:"facebook",url:"https://www.facebook.com/",icon:c.a.createElement(F.c,null)},{title:"instagram",url:"https://www.instagram.com/",icon:c.a.createElement(de.a,null)},{title:"twitter",url:"https://twitter.com/",icon:c.a.createElement(fe.b,null)},{title:"linkedin",url:"https://www.linkedin.com/",icon:c.a.createElement(F.e,null)},{title:"pinterest",url:"https://www.pinterest.com/",icon:c.a.createElement(fe.a,null)}]}],i=l.map((function(e){return c.a.createElement(r.Fragment,{key:Object(w.a)()},"Share"===e.title?c.a.createElement(Ee.a,{placement:"bottomRight",title:(t=e.social,c.a.createElement("ul",{className:"icons"},t&&t.map((function(e){return c.a.createElement("li",{key:Object(w.a)(),className:"icons__item"},c.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"icons__link"},e.icon))}))))},c.a.createElement("li",{className:"product-main__bottom-item"},c.a.createElement("span",{className:"product-main__bottom-icon"},e.icon),c.a.createElement("span",{className:"product-main__bottom-title"},e.title))):c.a.createElement("li",{className:"product-main__bottom-item",onClick:e.func},c.a.createElement("span",{className:"product-main__bottom-icon"},e.icon),c.a.createElement("span",{className:"product-main__bottom-title"},e.title)));var t}));return c.a.createElement("ul",{className:"product-main__bottom"},i)})),pe=function(e){var t=e.product;return c.a.createElement("div",{className:"product-main__right"},c.a.createElement(me,{title:t.title,features:t.features}),c.a.createElement(ue,{price:t.price,id:t.id}),c.a.createElement(_e,{id:t.id}))},be=function(e){var t=e.product;return c.a.createElement("div",{className:"product-main"},c.a.createElement(oe,{product:t}),c.a.createElement(pe,{product:t}))},ge=(a(306),a(395)),ve=(a(307),a(400)),Ne=function(e){var t=e.finalReviews,a=t.filter((function(e){return e.hasOwnProperty("rate")})),n=a.reduce((function(e,t){return e+t.rate}),0),r=a.length,l=Math.round(n/r);return c.a.createElement("div",{className:"reviews"},c.a.createElement("h3",{className:"reviews__title"},"Reviews ",c.a.createElement(ve.a,{disabled:!0,value:l})),c.a.createElement("div",{className:"reviews__container"},t.map((function(e){return c.a.createElement("article",{key:Object(w.a)(),className:"reviews__item"},c.a.createElement("h4",{className:"reviews__name"},e.name),c.a.createElement(ve.a,{disabled:!0,defaultValue:e.rate}),c.a.createElement("p",{className:"reviews__text"},e.review))}))))},he=a(25),Oe=(a(310),a(397)),je=a(394),ye=a(128),ke=Oe.a.TextArea,we={labelCol:{span:8},wrapperCol:{span:16}},Ce={required:"${label} is required!",types:{email:"${label} is not validate email!",number:"${label} is not a validate number!"},number:{range:"${label} must be between ${min} and ${max}"}},Se=function(e){var t=e.AddReview,a=je.a.useForm(),n=Object(j.a)(a,1)[0];return c.a.createElement(je.a,Object.assign({},we,{name:"nest-messages",form:n,onFinish:function(e){var a=Object(he.a)({},e.user,{id:Object(w.a)()});t(a),n.resetFields()},validateMessages:Ce}),c.a.createElement(je.a.Item,{name:["user","rate"],label:"Rate",rules:[{required:!0}]},c.a.createElement(ve.a,null)),c.a.createElement(je.a.Item,{name:["user","name"],label:"Name",rules:[{required:!0}]},c.a.createElement(Oe.a,null)),c.a.createElement(je.a.Item,{name:["user","email"],label:"Email",rules:[{type:"email"}]},c.a.createElement(Oe.a,null)),c.a.createElement(je.a.Item,{name:["user","review"],label:"Review",rules:[{required:!0}]},c.a.createElement(ke,null)),c.a.createElement(je.a.Item,{wrapperCol:Object(he.a)({},we.wrapperCol,{offset:8})},c.a.createElement(ye.a,{type:"primary",htmlType:"submit"},"Submit")))},Pe=ge.a.TabPane,Re=[{id:0,name:"Oleg",review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",rate:5},{id:1,name:"Oleg",review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",rate:3},{id:2,name:"Oleg",review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",rate:5}],Te=function(e){var t,a=e.product,n=Object(r.useState)(Re),l=Object(j.a)(n,2),i=l[0],s=l[1];return c.a.createElement("div",{className:"product-tabs"},c.a.createElement(ge.a,{defaultActiveKey:"1"},c.a.createElement(Pe,{tab:"Description",key:"1"},a&&a.description.map((function(e){return c.a.createElement("p",{key:Object(w.a)(),className:"tabs-text"},e)}))),c.a.createElement(Pe,{tab:"Main features",key:"2"},c.a.createElement("table",{className:"tabs__table"},c.a.createElement("tbody",null,a&&((t=a.features)?Object.keys(t).map((function(e){return c.a.createElement("tr",{key:Object(w.a)(),className:"tabs__tr"},c.a.createElement("td",{className:"tabs__td"},e),c.a.createElement("td",{className:"tabs__td"},t[e]))})):null)))),c.a.createElement(Pe,{tab:"Reviews",key:"3"},c.a.createElement(Se,{AddReview:function(e){var t=i.filter((function(e,t){return 2!==t})),a=[e].concat(Object(x.a)(t));s(a)}}),c.a.createElement(Ne,{finalReviews:i}))))},Le=[{url:"/ts-marketplace/",component:z},{url:"/ts-marketplace/c/:category",component:ie},{url:"/ts-marketplace/wishlist",component:H},{url:"/ts-marketplace/cart",component:se},{url:"/ts-marketplace/p/:id",component:Object(o.b)((function(e){return e}),n)((function(e){var t=e.products,a=e.match.params.id,n=t.find((function(e){return e.id===+a}));return c.a.createElement("main",{className:"product"},t.length>0&&c.a.createElement(c.a.Fragment,null,c.a.createElement(be,{product:n}),c.a.createElement(Te,{product:n})))}))}],Ie=function(){var e=Le.map((function(e){return c.a.createElement(k.a,{key:Object(w.a)(),exact:!0,path:e.url,component:e.component})}));return c.a.createElement("div",null,c.a.createElement(B,null),c.a.createElement(k.c,null,e),c.a.createElement(s,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var xe=a(93),Ae={categories:[],selectedCategories:[],products:[],wishList:[],compareList:[],cartList:[],catalogRoutes:[],filteredItems:[],filteredPrice:[],itemsPerPage:15,brand:""},Fe=Object(xe.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CATEGORIES":return Object(he.a)({},e,{categories:t.categories,selectedCategories:t.selectedCategories});case"GET_PRODUCTS":return Object(he.a)({},e,{products:t.products});case"MANAGE_CART":return Object(he.a)({},e,{cartList:t.cartList});case"MANAGE_WISHLIST":return Object(he.a)({},e,{wishList:t.wishList});case"MANAGE_COMPARELIST":return Object(he.a)({},e,{wishList:t.compareList});case"MANAGE_ROUTES":return Object(he.a)({},e,{catalogRoutes:t.catalogRoutes});case"SET_FILTERED_ITEMS":return Object(he.a)({},e,{filteredItems:t.filteredItems});case"SET_FILTERED_PRICE":return Object(he.a)({},e,{filteredPrice:t.filteredPrice});case"SET_ITEMS_PER_PAGE":return Object(he.a)({},e,{itemsPerPage:t.itemsPerPage});case"SET_BRAND":return Object(he.a)({},e,{brand:t.brand});default:return e}}));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(O.a,null,c.a.createElement(o.a,{store:Fe},c.a.createElement(Ie,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[185,1,2]]]);
//# sourceMappingURL=main.df785a8b.chunk.js.map