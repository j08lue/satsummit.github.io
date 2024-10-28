"use strict";(self.webpackChunksatsummit_io=self.webpackChunksatsummit_io||[]).push([[8612],{8799:function(e,t,a){a.d(t,{DI:function(){return h},E4:function(){return E},WB:function(){return g}});var r=a(6540),n=a(5915),l=a(7500),c=a(6287),o=a(6272),i=a(8340),s=a(5712),m=a(8224),d=a(277),p=a(5740);const u=`url('${m.A}') calc(100% + 20rem) bottom / auto 16rem no-repeat`;function g(e){const{title:t,lead:a,parent:c,...o}=e;return r.createElement(h,o,r.createElement(n.s,{flexFlow:"column",gap:"4"},r.createElement(E,{title:t,parent:c}),a&&r.createElement(l.E,{textStyle:"lead.lg",maxW:"container.sm"},a)))}function h(e){return r.createElement(c.az,Object.assign({background:"primary.500",px:{base:"4",md:"8"},py:{base:"8",lg:"16"},position:"relative"},e.wrapperProps,{_after:{content:'""',position:"absolute",inset:0,background:u,zIndex:100,pointerEvents:"none",display:{base:"none",lg:"block"}}}),r.createElement(o.m,Object.assign({maxW:"container.xl",color:"white",display:"flex",alignItems:"center",p:"0"},e.innerProps),e.children))}function E(e){const{title:t,parent:a}=e,{edition:l,editionCId:o}=(0,p.dG)();return r.createElement(c.az,null,r.createElement(n.s,{alignItems:"center",gap:4},l&&r.createElement(i.D,{as:d.A,to:`/${o}`,color:"surface.500",size:"md"},l.name),a&&l&&r.createElement(s.c,{borderColor:"surface.300a",size:"xs",h:"4",orientation:"vertical"}),a&&r.createElement(i.D,{as:d.A,to:a.url,color:"surface.500",size:"md"},a.title)),r.createElement(i.D,{size:"4xl",as:"h1"},t))}},1344:function(e,t,a){a.r(t),a.d(t,{Head:function(){return A},default:function(){return f}});var r=a(6540),n=a(2532),l=a(6287),c=a(4084),o=a(8340),i=a(7500),s=a(6988),m=a(5915),d=a(5712),p=a(1856),u=a(5026),g=a(8661),h=a(277),E=a(4472),b=a(8799);function f(e){const{allPeople:t}=e.data,{editionCId:g}=e.pageContext,{main:f,other:A}=(0,r.useMemo)((()=>t.nodes.reduce(((e,t)=>("main"===t.group?e.main.push(t):e.other.push(t),e)),{main:[],other:[]})),[t.nodes]);return r.createElement(u.A,{pageProps:e},r.createElement(b.WB,{title:"Speakers",lead:"All the wonderful people presenting at SatSummit."}),r.createElement(p.d,{py:16},r.createElement(l.az,{gridColumn:"content-start / content-end"},r.createElement(c.s6,null,r.createElement(o.D,{size:"xl"},"Main speakers")),0===f.length?r.createElement(i.E,null,"No one is speaking at this event yet. Check back later for updates."):r.createElement(s.B8,{display:"grid",gap:{base:4,md:8},gridTemplateColumns:{base:"repeat(2, 1fr)",md:"repeat(3, 1fr)",xl:"repeat(4, 1fr)"}},r.createElement(E.r,{direction:"up",triggerOnce:!0,duration:500,delay:100},f.map((e=>r.createElement(s.ck,{key:e.id,h:"100%"},r.createElement(l.az,{as:"article",bg:"base.50",h:"100%",borderRadius:"sm",overflow:"hidden"},r.createElement(h.A,{to:`/${g}/speakers/${e.slug}`,display:"flex",flexFlow:"column nowrap",height:"100%",transition:"opacity 0.24s ease-in-out",color:"inherit",_hover:{textDecoration:"none",opacity:.64}},r.createElement(m.s,{as:"header",flexFlow:"column nowrap",p:{base:4,md:8}},r.createElement(o.D,{as:"h3",size:{base:"md",sm:"xl"}},e.title),r.createElement(i.E,{fontSize:{base:"sm",md:"md"}},e.role," at ",e.company)),e.avatar?r.createElement(l.az,{as:n.G,image:(0,n.c)(e.avatar),alt:`Picture of ${e.title}`,objectFit:"contain",borderRadius:"sm",overflow:"hidden",order:-1}):r.createElement(n.S,{src:"../components/speakers/user-pic-placeholder.png",alt:`Placeholder satellite icon for ${e.title}`,layout:"fullWidth",placeholder:"blurred",style:{width:"100%",order:-1},__imageData:a(6726)}))))))))),!!A.length&&r.createElement(r.Fragment,null,r.createElement(d.c,{gridColumn:"content-start / content-end",size:"md",borderColor:"base.200a"}),r.createElement(m.s,{gridColumn:"content-start / content-end",gap:{base:4,md:8},direction:"column"},r.createElement(o.D,{size:"3xl"},"Other speakers include"),r.createElement(s.B8,{display:"grid",gap:{base:4,md:8},gridTemplateColumns:{base:"repeat(2, 1fr)",md:"repeat(3, 1fr)",xl:"repeat(4, 1fr)"}},r.createElement(E.r,{cascade:!0,direction:"up",triggerOnce:!0,duration:500,damping:.2},A.map((e=>r.createElement(s.ck,{key:e.id},r.createElement(l.az,{as:"article"},r.createElement(m.s,{as:"header",flexFlow:"column nowrap",gap:{base:1,md:2}},r.createElement(o.D,{as:"h3",size:"xl"},e.title),r.createElement(i.E,{fontSize:{base:"sm",md:"md"}},e.role," at ",e.company))))))))))))}const A=e=>r.createElement(g.A,{title:"Speakers",description:"All the wonderful people presenting at SatSummit.",edition:e.data.edition})},6726:function(e){e.exports=JSON.parse('{"layout":"fullWidth","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABYlAAAWJQFJUiTwAAABw0lEQVR42u1USS+DURS1NkURREX4Bf4KUkOjqI2YFsS0JBGioohhIdSGhLQJC0LE3hhTBO2niI3OC3Si6rj3fWliKEkTiQUvOXkv951z3rvv3u+Ly664wE8i7t8wKnI0MmI2VJIot8r6DkqKK0okpBKY82lf84UhCzPVEhIKzQLxhBSVBQqVhK5ZF7rnXGLNMd5LKJJn1ig/GvIpGeUSChqu0DbtQMukA50zTmj1t0gk4cl1EKc3QWFQQ7FOg8xpJy5rWBu5qTDMqbxAcrFFGOyYA9g+92N11wsevQtuHFgDOLoKomfeJWJre15sm/2CWz14K7Ts8c6Qb1I/ZseAyYPhJQ8ax23wBsJ4DgNPzy8IEXj94A+jacKOEeLoTG7UjdqENqph3ZgNOqMbQ4seNIzbcU9iNnoMveApJJve+cJoJMNh4vQbPaj9yjCS8taZH5uE5Z0HkV4/HXB4GcAxpdxH6fNYoT3mbdHTVOujpPy2KK1TDjTTg3cYnOJ9PhaFDToMMocLWFAfpShv24YNkgg8p5RYkF4mYX3fi40DH9JKJepJeS+pWJ5ZE1NjczxPa0W+1hpbY3+HLLWM3/+W/8b/8BUWleuTbBISjQAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/static/146b8b75121683ca458597ede617ca58/b5658/user-pic-placeholder.png","srcSet":"/static/146b8b75121683ca458597ede617ca58/f054e/user-pic-placeholder.png 750w,\\n/static/146b8b75121683ca458597ede617ca58/b5658/user-pic-placeholder.png 1024w","sizes":"100vw"},"sources":[{"srcSet":"/static/146b8b75121683ca458597ede617ca58/4f03f/user-pic-placeholder.webp 750w,\\n/static/146b8b75121683ca458597ede617ca58/67ded/user-pic-placeholder.webp 1024w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":1}')}}]);
//# sourceMappingURL=component---src-templates-speakers-hub-tsx-583055e4495739d8b92c.js.map