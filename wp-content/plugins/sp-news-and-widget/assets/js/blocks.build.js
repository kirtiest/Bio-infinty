!function(e){function t(a){if(n[a])return n[a].exports;var l=n[a]={i:a,l:!1,exports:{}};return e[a].call(l.exports,l,l.exports,t),l.l=!0,l.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(1)},function(e,t,n){"use strict";var a=n(2),l=(n.n(a),n(3)),s=(n.n(l),n(4)),__=wp.i18n.__;(0,wp.blocks.registerBlockType)("wpnw/sp-news",{title:__("News Grid","sp-news-and-widget"),description:__("Display news post in a grid view with various layouts.","sp-news-and-widget"),icon:"feedback",category:"wpos_guten_block",keywords:[__("wpos"),__("sp news","sp-news-and-widget"),__("sp-news")],supports:{html:!1,multiple:!0},getEditWrapperProps:function(e){var t=e.align;if(["wide","full"].includes(t))return{"data-align":t,"data-block-type":"wpnw-grid"}},edit:s.a,save:function(){return null}})},function(e,t){},function(e,t){},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=wp.element,r=o.Component,p=o.Fragment,d=wp.components,w=d.PanelBody,m=d.Disabled,c=d.TextControl,u=d.ToggleControl,g=d.RangeControl,h=d.SelectControl,__=wp.i18n.__,f=(wp.data.select,wp.editor),b=f.InspectorControls,E=f.BlockControls,_=f.BlockAlignmentToolbar,k=function(e){function t(){a(this,t);var e=l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.state={isLoading:!1},e}return s(t,e),i(t,[{key:"ObjToString",value:function(e){var t=wp.blocks.getBlockAttributes("wpnw/sp-news"),n=["content_tail"],a="";for(var l in e)e.hasOwnProperty(l)&&"undefined"!==typeof e[l]&&e[l]!==t[l]&&(""!=jQuery.trim(e[l])||jQuery.inArray(l,n)>=0)&&(a+=l+'="'+e[l]+'" ');return a}},{key:"GetBooleanDropdown",value:function(){return[{value:"true",label:__("True","sp-news-and-widget")},{value:"false",label:__("False","sp-news-and-widget")}]}},{key:"GetDesigns",value:function(){return[{value:"design-1",label:__("Design 1","sp-news-and-widget")}]}},{key:"Getgridcolumns",value:function(){return[{value:"1",label:__("Grid 1","sp-news-and-widget")},{value:"2",label:__("Grid 2","sp-news-and-widget")},{value:"3",label:__("Grid 3","sp-news-and-widget")},{value:"4",label:__("Grid 4","sp-news-and-widget")},{value:"list",label:__("List","sp-news-and-widget")}]}},{key:"GetPaginationType",value:function(){return[{value:"numeric",label:__("Numeric","sp-news-and-widget")},{value:"prev-next",label:__("Previous - Next","sp-news-and-widget")}]}},{key:"GetLinkTargetDropdown",value:function(){return[{value:"self",label:__("Same Window","sp-news-and-widget")}]}},{key:"GetPostOrderby",value:function(){return[{value:"date",label:__("Post Date","sp-news-and-widget")},{value:"modified",label:__("Post Modified Date","sp-news-and-widget")},{value:"title",label:__("Post Title","sp-news-and-widget")},{value:"name",label:__("Post Slug","sp-news-and-widget")},{value:"ID",label:__("Post ID","sp-news-and-widget")},{value:"rand",label:__("Random","sp-news-and-widget")}]}},{key:"GetPostOrder",value:function(){return[{value:"desc",label:__("Descending","sp-news-and-widget")},{value:"asc",label:__("Ascending","sp-news-and-widget")}]}},{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e){var t=this.props.attributes.content_words_limit,n=wp.data.select("core/editor").getEditorSettings(),a=n.alignWide;e.attributes;(parseInt(t)<=0||isNaN(parseInt(t)))&&this.props.setAttributes({content_words_limit:20}),a||this.props.setAttributes({align:void 0})}},{key:"render",value:function(){var e=this.props,t=e.attributes,n=e.setAttributes,a=t.grid,l=t.show_date,s=t.show_category_name,i=t.show_content,o=t.show_full_content,r=t.content_words_limit,d=t.limit,f=t.orderby,k=t.order,v=t.category,y=t.pagination,P=t.pagination_type,C=t.align,N=(t.className,this.state.isLoading,wp.element.createElement(b,null,wp.element.createElement(w,{title:__("General Parameters","sp-news-and-widget")},wp.element.createElement(m,null,wp.element.createElement(h,{label:__("Design","sp-news-and-widget"),options:this.GetDesigns(),help:wp.element.createElement("span",{className:"wpos-hidden-opts-desc"},__("Choose design. Upgarade to ","sp-news-and-widget"),wp.element.createElement("a",{href:Wpnwf_Block.pro_link,target:"_blank"},__("Premium version ","sp-news-and-widget")),__("to get this option.","sp-news-and-widget"))})),wp.element.createElement(m,null,wp.element.createElement(c,{label:__("News Heading","sp-news-and-widget"),help:wp.element.createElement("span",{className:"wpos-hidden-opts-desc"},__("Enter news heading. Upgarade to ","sp-news-and-widget"),wp.element.createElement("a",{href:Wpnwf_Block.pro_link,target:"_blank"},__("Premium version ","sp-news-and-widget")),__("to get this option.","sp-news-and-widget"))})),wp.element.createElement(h,{label:__("Number of Columns","sp-news-and-widget"),value:a,options:this.Getgridcolumns(),onChange:function(e){return n({grid:e})}}),wp.element.createElement(m,null,wp.element.createElement(u,{label:__("Show Author","sp-news-and-widget"),help:wp.element.createElement("span",{className:"wpos-hidden-opts-desc"},__("Display post author. Upgarade to ","sp-news-and-widget"),wp.element.createElement("a",{href:Wpnwf_Block.pro_link,target:"_blank"},__("Premium version ","sp-news-and-widget")),__("to get this option.","sp-news-and-widget"))})),wp.element.createElement(u,{label:__("Show Date","sp-news-and-widget"),checked:!!l,onChange:function(){return n({show_date:!l})}}),wp.element.createElement(u,{label:__("Show Category Name","sp-news-and-widget"),checked:!!s,onChange:function(){return n({show_category_name:!s})}}),wp.element.createElement(u,{label:__("Show Content","sp-news-and-widget"),checked:!!i,onChange:function(){return n({show_content:!i})}}),i&&wp.element.createElement(u,{label:__("Show Full Content","sp-news-and-widget"),checked:!!o,onChange:function(){return n({show_full_content:!o})}}),i&&!o&&wp.element.createElement(g,{label:__("Content Words Limit","sp-news-and-widget"),value:r,onChange:function(e){return n({content_words_limit:e})},min:1,max:1e3,help:__("Enter content word limit.","sp-news-and-widget")}),wp.element.createElement(m,null,wp.element.createElement(c,{label:__("Content Tail","sp-news-and-widget"),help:wp.element.createElement("span",{className:"wpos-hidden-opts-desc"},__("Display dots after the post content as continue reading. Upgarade to ","sp-news-and-widget"),wp.element.createElement("a",{href:Wpnwf_Block.pro_link,target:"_blank"},__("Premium version ","sp-news-and-widget")),__("to get this option.","sp-news-and-widget"))})),wp.element.createElement(m,null,wp.element.createElement(h,{label:__("Read More","sp-news-and-widget"),options:this.GetBooleanDropdown(),help:wp.element.createElement("span",{className:"wpos-hidden-opts-desc"},__("Display read more. Upgarade to ","sp-news-and-widget"),wp.element.createElement("a",{href:Wpnwf_Block.pro_link,target:"_blank"},__("Premium version ","sp-news-and-widget")),__("to get this option.","sp-news-and-widget"))})),wp.element.createElement(m,null,wp.element.createElement(c,{label:__("Read More Text","sp-news-and-widget"),help:wp.element.createElement("span",{className:"wpos-hidden-opts-desc"},__("Enter read more text. Upgarade to ","sp-news-and-widget"),wp.element.createElement("a",{href:Wpnwf_Block.pro_link,target:"_blank"},__("Premium version ","sp-news-and-widget")),__("to get this option.","sp-news-and-widget"))})),wp.element.createElement(m,null,wp.element.createElement(h,{label:__("Link Behavior","sp-news-and-widget"),options:this.GetLinkTargetDropdown(),help:wp.element.createElement("span",{className:"wpos-hidden-opts-desc"},__("Choose link behaviour. Upgarade to ","sp-news-and-widget"),wp.element.createElement("a",{href:Wpnwf_Block.pro_link,target:"_blank"},__("Premium version ","sp-news-and-widget")),__("to get this option.","sp-news-and-widget"))})),wp.element.createElement(m,null,wp.element.createElement(g,{label:__("Image Height","sp-news-and-widget"),help:wp.element.createElement("span",{className:"wpos-hidden-opts-desc"},__("Control height of the featured image. You can enter any numeric number. e.g 500. Leave empty for default height. Upgarade to ","sp-news-and-widget"),wp.element.createElement("a",{href:Wpnwf_Block.pro_link,target:"_blank"},__("Premium version ","sp-news-and-widget")),__("to get this option.","sp-news-and-widget"))})),wp.element.createElement(m,null,wp.element.createElement(c,{label:__("Media Size","sp-news-and-widget"),help:wp.element.createElement("span",{className:"wpos-hidden-opts-desc"},__("Choose WordPress registered image size. e.g thumbnail, medium, large, full. Upgarade to ","sp-news-and-widget"),wp.element.createElement("a",{href:Wpnwf_Block.pro_link,target:"_blank"},__("Premium version ","sp-news-and-widget")),__("to get this option.","sp-news-and-widget"))})),wp.element.createElement(m,null,wp.element.createElement(h,{label:__("Image Fit","sp-news-and-widget"),options:this.GetBooleanDropdown(),help:wp.element.createElement("span",{className:"wpos-hidden-opts-desc"},__("Fill the news image in a whole container. Upgarade to ","sp-news-and-widget"),wp.element.createElement("a",{href:Wpnwf_Block.pro_link,target:"_blank"},__("Premium version ","sp-news-and-widget")),__("to get this option.","sp-news-and-widget"))}))),wp.element.createElement(w,{title:__("Query Parameters","sp-news-and-widget"),initialOpen:!1},wp.element.createElement(g,{label:__("Limit","sp-news-and-widget"),value:d,onChange:function(e){return n({limit:e})},min:-1,max:1e3,help:__("Enter number of news post to be displayed. Enter -1 to display all.","sp-news-and-widget")}),wp.element.createElement(h,{label:__("Order By","sp-news-and-widget"),value:f,options:this.GetPostOrderby(),onChange:function(e){return n({orderby:e})}}),wp.element.createElement(h,{label:__("Order","sp-news-and-widget"),value:k,options:this.GetPostOrder(),onChange:function(e){return n({order:e})}}),wp.element.createElement(c,{label:__("Display Specific Category","sp-news-and-widget"),value:v,onChange:function(e){return n({category:e})},help:wp.element.createElement("span",{title:__("You can pass multiple ids with comma seperated. You can find id at relevant category listing page.","sp-news-and-widget")},__("Enter category id to display categories wise.","sp-news-and-widget")," [?]")}),wp.element.createElement(m,null,wp.element.createElement(h,{label:__("Disply Child Category","sp-news-and-widget"),options:this.GetBooleanDropdown(),help:wp.element.createElement("span",{className:"wpos-hidden-opts-desc"},__("If you are using parent category then whether to display child category or not. Upgarade to ","sp-news-and-widget"),wp.element.createElement("a",{href:Wpnwf_Block.pro_link,target:"_blank"},__("Premium version ","sp-news-and-widget")),__("to get this option.","sp-news-and-widget"))})),wp.element.createElement(m,null,wp.element.createElement(c,{label:__("Exclude Category","sp-news-and-widget"),help:wp.element.createElement("span",{className:"wpos-hidden-opts-desc"},__("Exclude post category. Works only if `Category` field is empty. You can pass multiple ids with comma seperated. You can find id at relevant category listing page. Upgarade to ","sp-news-and-widget"),wp.element.createElement("a",{href:Wpnwf_Block.pro_link,target:"_blank"},__("Premium version ","sp-news-and-widget")),__("to get this option.","sp-news-and-widget"))})),wp.element.createElement(m,null,wp.element.createElement(c,{label:__("Display Specific Posts","sp-news-and-widget"),help:wp.element.createElement("span",{className:"wpos-hidden-opts-desc"},__("Enter id of the post which you want to display. You can pass multiple ids with comma seperated. You can find id at relevant post listing page. Upgarade to ","sp-news-and-widget"),wp.element.createElement("a",{href:Wpnwf_Block.pro_link,target:"_blank"},__("Premium version ","sp-news-and-widget")),__("to get this option.","sp-news-and-widget"))})),wp.element.createElement(m,null,wp.element.createElement(c,{label:__("Exclude Post","sp-news-and-widget"),help:wp.element.createElement("span",{className:"wpos-hidden-opts-desc"},__("Enter id of the post which you do not want to display. You can pass multiple ids with comma seperated. You can find id at relevant post listing page. Upgarade to ","sp-news-and-widget"),wp.element.createElement("a",{href:Wpnwf_Block.pro_link,target:"_blank"},__("Premium version ","sp-news-and-widget")),__("to get this option.","sp-news-and-widget"))})),wp.element.createElement(m,null,wp.element.createElement(c,{label:__("Include Author","sp-news-and-widget"),help:wp.element.createElement("span",{className:"wpos-hidden-opts-desc"},__("Enter author id to display posts of particular author. You can pass multiple ids with comma seperated. You can find id at users listing page. Upgarade to ","sp-news-and-widget"),wp.element.createElement("a",{href:Wpnwf_Block.pro_link,target:"_blank"},__("Premium version ","sp-news-and-widget")),__("to get this option.","sp-news-and-widget"))})),wp.element.createElement(m,null,wp.element.createElement(c,{label:__("Exclude Author","sp-news-and-widget"),help:wp.element.createElement("span",{className:"wpos-hidden-opts-desc"},__("Enter author id to hide post of particular author. Works only if `Include Author` field is empty. You can pass multiple ids with comma seperated. You can find id at relevant users listing page. Upgarade to ","sp-news-and-widget"),wp.element.createElement("a",{href:Wpnwf_Block.pro_link,target:"_blank"},__("Premium version ","sp-news-and-widget")),__("to get this option.","sp-news-and-widget"))})),-1!=d&&wp.element.createElement(h,{label:__("Pagination","sp-news-and-widget"),value:y,options:this.GetBooleanDropdown(),onChange:function(e){return n({pagination:e})}}),-1!=d&&"true"==y&&wp.element.createElement(h,{label:__("Pagination Type","sp-news-and-widget"),value:P,options:this.GetPaginationType(),onChange:function(e){return n({pagination_type:e})}}),wp.element.createElement(m,null,wp.element.createElement(g,{label:__("Query Offset","sp-news-and-widget"),min:0,help:wp.element.createElement("span",{className:"wpos-hidden-opts-desc"},__("Exclude number of posts from starting. e.g if you pass 5 then it will skip first five post. Note: This will not work with limit=-1. Upgarade to ","sp-news-and-widget"),wp.element.createElement("a",{href:Wpnwf_Block.pro_link,target:"_blank"},__("Premium version ","sp-news-and-widget")),__("to get this option.","sp-news-and-widget"))})))));return wp.element.createElement(p,null,N,wp.element.createElement(E,null,wp.element.createElement(_,{value:C,onChange:function(e){return n({align:e})},controls:["wide","full"]})),wp.element.createElement("div",{className:this.props.className},this.renderOutput()))}},{key:"renderOutput",value:function(){var e=this.props.attributes,t=this.ObjToString(e);t=t.trim();var n=t?"[sp_news "+t+"]":"[sp_news]";return wp.element.createElement("div",{className:"wpos-guten-shrt"},wp.element.createElement("div",{className:"wpos-guten-shrt-title"},wp.element.createElement("span",null,__("WP News and Scrolling Widgets - Grid","sp-news-and-widget"))),n,wp.element.createElement("div",{className:"wpos-guten-shrt-footer"},wp.element.createElement("span",null),__("Do you want to check demo of this plugin.","sp-news-and-widget")," ",wp.element.createElement("a",{href:Wpnwf_Block.free_demo_link,target:"_blank"},__("Click here","sp-news-and-widget"))),wp.element.createElement("div",{className:"wpos-guten-shrt-footer"},__("Do you also want to check premium version demo of this plugin.","sp-news-and-widget")," ",wp.element.createElement("a",{href:Wpnwf_Block.pro_demo_link,target:"_blank"},__("Click here","sp-news-and-widget"))))}}]),t}(r);t.a=k}]);