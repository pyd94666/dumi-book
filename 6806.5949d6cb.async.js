!(function(){"use strict";var at=(W,x,n)=>new Promise((A,E)=>{var h=i=>{try{g(n.next(i))}catch(m){E(m)}},a=i=>{try{g(n.throw(i))}catch(m){E(m)}},g=i=>i.done?A(i.value):Promise.resolve(i.value).then(h,a);g((n=n.apply(W,x)).next())});(self.webpackChunkdumi_book=self.webpackChunkdumi_book||[]).push([[6806],{77454:(function(W,x,n){n.d(x,{S:function(){return E}});var A=n(86827);function E(h,a){var g,i,m;h.accDescr&&((g=a.setAccDescription)==null||g.call(a,h.accDescr)),h.accTitle&&((i=a.setAccTitle)==null||i.call(a,h.accTitle)),h.title&&((m=a.setDiagramTitle)==null||m.call(a,h.title))}(0,A.K)(E,"populateCommonDb")}),76806:(function(W,x,n){n.d(x,{diagram:function(){return mt}});var A=n(77454),E=n(5637),h=n(31980),a=n(76385),g=n(53674),i=n(86827),m=n(78731),y=n(61872),j=a.UI.pie,I={sections:new Map,showData:!1,config:j},L=I.sections,B=I.showData,it=structuredClone(j),rt=(0,i.K)(()=>structuredClone(it),"getConfig"),nt=(0,i.K)(()=>{L=new Map,B=I.showData,(0,a.IU)()},"clear"),st=(0,i.K)(({label:t,value:s})=>{if(s<0)throw new Error(`"${t}" has invalid value: ${s}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);L.has(t)||(L.set(t,s),g.R.debug(`added new section: ${t}, with value: ${s}`))},"addSection"),ot=(0,i.K)(()=>L,"getSections"),lt=(0,i.K)(t=>{B=t},"setShowData"),ct=(0,i.K)(()=>B,"getShowData"),N={getConfig:rt,clear:nt,setDiagramTitle:a.ke,getDiagramTitle:a.ab,setAccTitle:a.SV,getAccTitle:a.iN,setAccDescription:a.EI,getAccDescription:a.m7,addSection:st,getSections:ot,setShowData:lt,getShowData:ct},ht=(0,i.K)((t,s)=>{(0,A.S)(t,s),s.setShowData(t.showData),t.sections.map(s.addSection)},"populateDb"),dt={parse:(0,i.K)(t=>at(null,null,function*(){const s=yield(0,m.qg)("pie",t);g.R.debug(s),ht(s,N)}),"parse")},gt=(0,i.K)(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieCircle.highlighted{
    scale: 1.05;
    opacity: 1;
  }
  .pieCircle.highlightedOnHover:hover{
    transition-duration: 250ms;
    scale: 1.05;
    opacity: 1;
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),ut=gt,_t=(0,i.K)(t=>{const s=[...t.values()].reduce((c,S)=>c+S,0),b=[...t.entries()].map(([c,S])=>({label:c,value:S})).filter(c=>c.value/s*100>=1);return(0,y.rLf)().value(c=>c.value).sort(null)(b)},"createPieArcs"),pt=(0,i.K)((t,s,b,Z)=>{var tt,et;g.R.debug(`rendering pie chart
`+t);const c=Z.db,S=(0,a.D7)(),v=(0,h.$t)(c.getConfig(),S.pie),Y=40,o=18,u=4,w=450,$=w,U=(0,E.D)(s),k=U.append("g");k.attr("transform","translate("+$/2+","+w/2+")");const{themeVariables:l}=S;let[O]=(0,h.I5)(l.pieOuterStrokeWidth);O!=null||(O=2);const vt=v.legendPosition,J=v.textPosition,Dt=v.donutHole>0&&v.donutHole<=.9?v.donutHole:0,D=Math.min($,w)/2-Y,Ct=(0,y.JLW)().innerRadius(Dt*D).outerRadius(D),Et=(0,y.JLW)().innerRadius(D*J).outerRadius(D*J),P=k.append("g");P.append("circle").attr("cx",0).attr("cy",0).attr("r",D+O/2).attr("class","pieOuterCircle");const R=c.getSections(),St=_t(R),Tt=[l.pie1,l.pie2,l.pie3,l.pie4,l.pie5,l.pie6,l.pie7,l.pie8,l.pie9,l.pie10,l.pie11,l.pie12];let z=0;R.forEach(e=>{z+=e});const V=St.filter(e=>(e.data.value/z*100).toFixed(0)!=="0"),F=(0,y.UMr)(Tt).domain([...R.keys()]);P.selectAll("mySlices").data(V).enter().append("path").attr("d",Ct).attr("fill",e=>F(e.data.label)).attr("class",e=>{let r="pieCircle";return v.highlightSlice==="hover"?r+=" highlightedOnHover":v.highlightSlice===e.data.label&&(r+=" highlighted"),r}),P.selectAll("mySlices").data(V).enter().append("text").text(e=>(e.data.value/z*100).toFixed(0)+"%").attr("transform",e=>"translate("+Et.centroid(e)+")").style("text-anchor","middle").attr("class","slice");const xt=k.append("text").text(c.getDiagramTitle()).attr("x",0).attr("y",-(w-50)/2).attr("class","pieTitleText"),M=[...R.entries()].map(([e,r])=>({label:e,value:r})),C=k.selectAll(".legend").data(M).enter().append("g").attr("class","legend");C.append("rect").attr("width",o).attr("height",o).style("fill",e=>F(e.label)).style("stroke",e=>F(e.label)),C.append("text").attr("x",o+u).attr("y",o-u).text(e=>c.getShowData()?`${e.label} [${e.value}]`:e.label);const T=Math.max(...C.selectAll("text").nodes().map(e=>{var r;return(r=e==null?void 0:e.getBoundingClientRect().width)!=null?r:0}));let K=w,H=$+Y;const d=o+u,G=M.length*d;switch(vt){case"center":C.attr("transform",(e,r)=>{const _=d*M.length/2,p=-T/2-(o+u),f=r*d-_;return"translate("+p+","+f+")"});break;case"top":K+=G,C.attr("transform",(e,r)=>{const _=D,p=-T/2-(o+u),f=r*d-_;return`translate(${p}, ${f})`}),P.attr("transform",()=>`translate(0, ${G+d})`);break;case"bottom":K+=G,C.attr("transform",(e,r)=>{const _=-D-d,p=-T/2-(o+u),f=r*d-_;return"translate("+p+","+f+")"});break;case"left":H+=o+u+T,C.attr("transform",(e,r)=>{const _=d*M.length/2,p=-D-(o+u),f=r*d-_;return"translate("+p+","+f+")"}),P.attr("transform",()=>`translate(${T+o+u}, 0)`);break;default:H+=o+u+T,C.attr("transform",(e,r)=>{const _=d*M.length/2,p=12*o,f=r*d-_;return"translate("+p+","+f+")"});break}const X=(et=(tt=xt.node())==null?void 0:tt.getBoundingClientRect().width)!=null?et:0,At=$/2-X/2,wt=$/2+X/2,Q=Math.min(0,At),q=Math.max(H,wt)-Q;U.attr("viewBox",`${Q} 0 ${q} ${K}`),(0,a.a$)(U,K,q,v.useMaxWidth)},"draw"),ft={draw:pt},mt={parser:dt,db:N,renderer:ft,styles:ut}})}]);
}());