var ue=Object.defineProperty;var pe=(n,e,t)=>e in n?ue(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var I=(n,e,t)=>(pe(n,typeof e!="symbol"?e+"":e,t),t);import{w as E,v as he,d as H,S as fe,i as ge,s as me,e as _,a as A,b as v,c as V,f as p,g as re,l as $,h as J,r as be,t as L,j as x,k as Q,m as ye,n as ne,u as we,o as ee,p as ae,q as ve,x as B,y as ke,z as se,A as _e,B as Ie,C as Re}from"./vendor.0ea9bf5b.js";const je=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}};je();function Ce(n={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:a,onRegistered:r,onRegisterError:o}=n;let i;const u=async(s=!0)=>{};return"serviceWorker"in navigator&&(i=new he("/sw.js",{scope:"/"}),i.addEventListener("activated",s=>{s.isUpdate?window.location.reload():a==null||a()}),i.register({immediate:e}).then(s=>{r==null||r(s)}).catch(s=>{o==null||o(s)})),u}function qe(n={}){const{immediate:e=!0,onNeedRefresh:t,onOfflineReady:a,onRegistered:r,onRegisterError:o}=n,i=E(!1),u=E(!1),s=Ce({immediate:e,onOfflineReady(){u.set(!0),a==null||a()},onNeedRefresh(){i.set(!0),t==null||t()},onRegistered:r,onRegisterError:o});return{needRefresh:i,offlineReady:u,updateServiceWorker:s}}function oe(){}class j{static randomInteger(e,t){return Math.floor(Math.random()*(t-e+1)+e)}static subscribeAll(e,t){let a=!1,r=new Array(e.length),o=0,i=oe;const u=()=>{if(o)return;i();const f=t(r);i=typeof f=="function"?f:oe},s=e.map((f,g)=>f.subscribe(c=>{r[g]=c,o&=~(1<<g),a&&u()},()=>{o|=1<<g}));return a=!0,u(),function(){for(let g of s)g();i()}}static makeReadable(e){return{subscribe:e.subscribe}}static findDifferences(e,t){let a=[...e],r=[...t];if(a.length>r.length)for(;a.length!==r.length;)r.push(null);else if(r.length>a.length)for(;r.length!==a.length;)a.push(null);let o=[],i=[],u=[];for(let s=0;s<a.length;s++)a[s]===null?o.push(s):r[s]===null?i.push(s):a[s]!==r[s]&&u.push(s);return{added:o,removed:i,changed:u}}}const Z=class{static generateText(e=300){let t=[];do{const a=j.randomInteger(10,20),r=j.randomInteger(0,5)==0,o=!r&&j.randomInteger(0,100)==0,i=j.randomInteger(a*.25,a*.75);let u=[];for(let g=0;g<a;g++){let c=Z.getRandomWord();j.randomInteger(0,200)==0?c=c.toUpperCase():(g==0||j.randomInteger(0,50)==0)&&(c=c[0].toUpperCase()+c.substr(1)),r&&g==i&&(c+=","),u.push(c),o&&g==i&&u.push("-")}let s=u.join(" ");const f=j.randomInteger(0,10);f<=5?s+=".":f<=7?s+="?":s+="!",t.push(s)}while(t.join(" ").length<e);return t.join(" ")}static getRandomWord(){return Z.DICTIONARY[j.randomInteger(0,Z.DICTIONARY.length-1)]}};let X=Z;I(X,"DICTIONARY",["ability","able","aboard","about","above","accept","accident","according","account","accurate","acres","across","act","action","active","activity","actual","actually","add","addition","additional","adjective","adult","adventure","advice","affect","afraid","after","afternoon","again","against","age","ago","agree","ahead","aid","air","airplane","alike","alive","all","allow","almost","alone","along","aloud","alphabet","already","also","although","am","among","amount","ancient","angle","angry","animal","announced","another","answer","ants","any","anybody","anyone","anything","anyway","anywhere","apart","apartment","appearance","apple","applied","appropriate","are","area","arm","army","around","arrange","arrangement","arrive","arrow","art","article","as","aside","ask","asleep","at","ate","atmosphere","atom","atomic","attached","attack","attempt","attention","audience","author","automobile","available","average","avoid","aware","away","baby","back","bad","badly","bag","balance","ball","balloon","band","bank","bar","bare","bark","barn","base","baseball","basic","basis","basket","bat","battle","be","bean","bear","beat","beautiful","beauty","became","because","become","becoming","bee","been","before","began","beginning","begun","behavior","behind","being","believed","bell","belong","below","belt","bend","beneath","bent","beside","best","bet","better","between","beyond","bicycle","bigger","biggest","bill","birds","birth","birthday","bit","bite","black","blank","blanket","blew","blind","block","blood","blow","blue","board","boat","body","bone","book","border","born","both","bottle","bottom","bound","bow","bowl","box","boy","brain","branch","brass","brave","bread","break","breakfast","breath","breathe","breathing","breeze","brick","bridge","brief","bright","bring","broad","broke","broken","brother","brought","brown","brush","buffalo","build","building","built","buried","burn","burst","bus","bush","business","busy","but","butter","buy","by","cabin","cage","cake","call","calm","came","camera","camp","can","canal","cannot","cap","capital","captain","captured","car","carbon","card","care","careful","carefully","carried","carry","case","cast","castle","cat","catch","cattle","caught","cause","cave","cell","cent","center","central","century","certain","certainly","chain","chair","chamber","chance","change","changing","chapter","character","characteristic","charge","chart","check","cheese","chemical","chest","chicken","chief","child","children","choice","choose","chose","chosen","church","circle","circus","citizen","city","class","classroom","claws","clay","clean","clear","clearly","climate","climb","clock","close","closely","closer","cloth","clothes","clothing","cloud","club","coach","coal","coast","coat","coffee","cold","collect","college","colony","color","column","combination","combine","come","comfortable","coming","command","common","community","company","compare","compass","complete","completely","complex","composed","composition","compound","concerned","condition","congress","connected","consider","consist","consonant","constantly","construction","contain","continent","continued","contrast","control","conversation","cook","cookies","cool","copper","copy","corn","corner","correct","correctly","cost","cotton","could","count","country","couple","courage","course","court","cover","cow","cowboy","crack","cream","create","creature","crew","crop","cross","crowd","cry","cup","curious","current","curve","customs","cut","cutting","daily","damage","dance","danger","dangerous","dark","darkness","date","daughter","dawn","day","dead","deal","dear","death","decide","declared","deep","deeply","deer","definition","degree","depend","depth","describe","desert","design","desk","detail","determine","develop","development","diagram","diameter","did","die","differ","difference","different","difficult","difficulty","dig","dinner","direct","direction","directly","dirt","dirty","disappear","discover","discovery","discuss","discussion","disease","dish","distance","distant","divide","division","do","doctor","does","dog","doing","doll","dollar","done","donkey","door","dot","double","doubt","down","dozen","draw","drawn","dream","dress","drew","dried","drink","drive","driven","driver","driving","drop","dropped","drove","dry","duck","due","dug","dull","during","dust","duty","each","eager","ear","earlier","early","earn","earth","easier","easily","east","easy","eat","eaten","edge","education","effect","effort","egg","eight","either","electric","electricity","element","elephant","eleven","else","empty","end","enemy","energy","engine","engineer","enjoy","enough","enter","entire","entirely","environment","equal","equally","equator","equipment","escape","especially","essential","establish","even","evening","event","eventually","ever","every","everybody","everyone","everything","everywhere","evidence","exact","exactly","examine","example","excellent","except","exchange","excited","excitement","exciting","exclaimed","exercise","exist","expect","experience","experiment","explain","explanation","explore","express","expression","extra","eye","face","facing","fact","factor","factory","failed","fair","fairly","fall","fallen","familiar","family","famous","far","farm","farmer","farther","fast","fastened","faster","fat","father","favorite","fear","feathers","feature","fed","feed","feel","feet","fell","fellow","felt","fence","few","fewer","field","fierce","fifteen","fifth","fifty","fight","fighting","figure","fill","film","final","finally","find","fine","finest","finger","finish","fire","fireplace","firm","first","fish","five","fix","flag","flame","flat","flew","flies","flight","floating","floor","flow","flower","fly","fog","folks","follow","food","foot","football","for","force","foreign","forest","forget","forgot","forgotten","form","former","fort","forth","forty","forward","fought","found","four","fourth","fox","frame","free","freedom","frequently","fresh","friend","friendly","frighten","frog","from","front","frozen","fruit","fuel","full","fully","fun","function","funny","fur","furniture","further","future","gain","game","garage","garden","gas","gasoline","gate","gather","gave","general","generally","gentle","gently","get","getting","giant","gift","girl","give","given","giving","glad","glass","globe","go","goes","gold","golden","gone","good","goose","got","government","grabbed","grade","gradually","grain","grandfather","grandmother","graph","grass","gravity","gray","great","greater","greatest","greatly","green","grew","ground","group","grow","grown","growth","guard","guess","guide","gulf","gun","habit","had","hair","half","halfway","hall","hand","handle","handsome","hang","happen","happened","happily","happy","harbor","hard","harder","hardly","has","hat","have","having","hay","he","headed","heading","health","heard","hearing","heart","heat","heavy","height","held","hello","help","helpful","her","herd","here","herself","hidden","hide","high","higher","highest","highway","hill","him","himself","his","history","hit","hold","hole","hollow","home","honor","hope","horn","horse","hospital","hot","hour","house","how","however","huge","human","hundred","hung","hungry","hunt","hunter","hurried","hurry","hurt","husband","ice","idea","identity","if","ill","image","imagine","immediately","importance","important","impossible","improve","in","inch","include","including","income","increase","indeed","independent","indicate","individual","industrial","industry","influence","information","inside","instance","instant","instead","instrument","interest","interior","into","introduced","invented","involved","iron","is","island","it","its","itself","jack","jar","jet","job","join","joined","journey","joy","judge","jump","jungle","just","keep","kept","key","kids","kill","kind","kitchen","knew","knife","know","knowledge","known","label","labor","lack","lady","laid","lake","lamp","land","language","large","larger","largest","last","late","later","laugh","law","lay","layers","lead","leader","leaf","learn","least","leather","leave","leaving","led","left","leg","length","lesson","let","letter","level","library","lie","life","lift","light","like","likely","limited","line","lion","lips","liquid","list","listen","little","live","living","load","local","locate","location","log","lonely","long","longer","look","loose","lose","loss","lost","lot","loud","love","lovely","low","lower","luck","lucky","lunch","lungs","lying","machine","machinery","mad","made","magic","magnet","mail","main","mainly","major","make","making","man","managed","manner","manufacturing","many","map","mark","market","married","mass","massage","master","material","mathematics","matter","may","maybe","me","meal","mean","means","meant","measure","meat","medicine","meet","melted","member","memory","men","mental","merely","met","metal","method","mice","middle","might","mighty","mile","military","milk","mill","mind","mine","minerals","minute","mirror","missing","mission","mistake","mix","mixture","model","modern","molecular","moment","money","monkey","month","mood","moon","more","morning","most","mostly","mother","motion","motor","mountain","mouse","mouth","move","movement","movie","moving","mud","muscle","music","musical","must","my","myself","mysterious","nails","name","nation","national","native","natural","naturally","nature","near","nearby","nearer","nearest","nearly","necessary","neck","needed","needle","needs","negative","neighbor","neighborhood","nervous","nest","never","new","news","newspaper","next","nice","night","nine","no","nobody","nodded","noise","none","noon","nor","north","nose","not","note","noted","nothing","notice","noun","now","number","numeral","nuts","object","observe","obtain","occasionally","occur","ocean","of","off","offer","office","officer","official","oil","old","older","oldest","on","once","one","only","onto","open","operation","opinion","opportunity","opposite","or","orange","orbit","order","ordinary","organization","organized","origin","original","other","ought","our","ourselves","out","outer","outline","outside","over","own","owner","oxygen","pack","package","page","paid","pain","paint","pair","palace","pale","pan","paper","paragraph","parallel","parent","park","part","particles","particular","particularly","partly","parts","party","pass","passage","past","path","pattern","pay","peace","pen","pencil","people","per","percent","perfect","perfectly","perhaps","period","person","personal","pet","phrase","physical","piano","pick","picture","pictured","pie","piece","pig","pile","pilot","pine","pink","pipe","pitch","place","plain","plan","plane","planet","planned","planning","plant","plastic","plate","plates","play","pleasant","please","pleasure","plenty","plural","plus","pocket","poem","poet","poetry","point","pole","police","policeman","political","pond","pony","pool","poor","popular","population","porch","port","position","positive","possible","possibly","post","pot","potatoes","pound","pour","powder","power","powerful","practical","practice","prepare","present","president","press","pressure","pretty","prevent","previous","price","pride","primitive","principal","principle","printed","private","prize","probably","problem","process","produce","product","production","program","progress","promised","proper","properly","property","protection","proud","prove","provide","public","pull","pupil","pure","purple","purpose","push","put","putting","quarter","queen","question","quick","quickly","quiet","quietly","quite","rabbit","race","radio","railroad","rain","raise","ran","ranch","range","rapidly","rate","rather","raw","rays","reach","read","reader","ready","real","realize","rear","reason","recall","receive","recent","recently","recognize","record","red","refer","refused","region","regular","related","relationship","religious","remain","remarkable","remember","remove","repeat","replace","replied","report","represent","require","research","respect","rest","result","return","review","rhyme","rhythm","rice","rich","ride","riding","right","ring","rise","rising","river","road","roar","rock","rocket","rocky","rod","roll","roof","room","root","rope","rose","rough","round","route","row","rubbed","rubber","rule","ruler","run","running","rush","sad","saddle","safe","safety","said","sail","sale","salmon","salt","same","sand","sang","sat","satellites","satisfied","save","saved","saw","say","scale","scared","scene","school","science","scientific","scientist","score","screen","sea","search","season","seat","second","secret","section","see","seed","seeing","seems","seen","seldom","select","selection","sell","send","sense","sent","sentence","separate","series","serious","serve","service","sets","setting","settle","settlers","seven","several","shade","shadow","shake","shaking","shall","shallow","shape","share","sharp","she","sheep","sheet","shelf","shells","shelter","shine","shinning","ship","shirt","shoe","shoot","shop","shore","short","shorter","shot","should","shoulder","shout","show","shown","shut","sick","sides","sight","sign","signal","silence","silent","silk","silly","silver","similar","simple","simplest","simply","since","sing","single","sink","sister","sit","sitting","situation","six","size","skill","skin","sky","slabs","slave","sleep","slept","slide","slight","slightly","slip","slipped","slope","slow","slowly","small","smaller","smallest","smell","smile","smoke","smooth","snake","snow","so","soap","social","society","soft","softly","soil","solar","sold","soldier","solid","solution","solve","some","somebody","somehow","someone","something","sometime","somewhere","son","song","soon","sort","sound","source","south","southern","space","speak","special","species","specific","speech","speed","spell","spend","spent","spider","spin","spirit","spite","split","spoken","sport","spread","spring","square","stage","stairs","stand","standard","star","stared","start","state","statement","station","stay","steady","steam","steel","steep","stems","step","stepped","stick","stiff","still","stock","stomach","stone","stood","stop","stopped","store","storm","story","stove","straight","strange","stranger","straw","stream","street","strength","stretch","strike","string","strip","strong","stronger","struck","structure","struggle","stuck","student","studied","studying","subject","substance","success","successful","such","sudden","suddenly","sugar","suggest","suit","sum","summer","sun","sunlight","supper","supply","support","suppose","sure","surface","surprise","surrounded","swam","sweet","swept","swim","swimming","swing","swung","syllable","symbol","system","table","tail","take","taken","tales","talk","tall","tank","tape","task","taste","taught","tax","tea","teach","teacher","team","tears","teeth","telephone","television","tell","temperature","ten","tent","term","terrible","test","than","thank","that","thee","them","themselves","then","theory","there","therefore","these","they","thick","thin","thing","think","third","thirty","this","those","thou","though","thought","thousand","thread","three","threw","throat","through","throughout","throw","thrown","thumb","thus","thy","tide","tie","tight","tightly","till","time","tin","tiny","tip","tired","title","to","tobacco","today","together","told","tomorrow","tone","tongue","tonight","too","took","tool","top","topic","torn","total","touch","toward","tower","town","toy","trace","track","trade","traffic","trail","train","transportation","trap","travel","treated","tree","triangle","tribe","trick","tried","trip","troops","tropical","trouble","truck","trunk","truth","try","tube","tune","turn","twelve","twenty","twice","two","type","typical","uncle","under","underline","understanding","unhappy","union","unit","universe","unknown","unless","until","unusual","up","upon","upper","upward","us","use","useful","using","usual","usually","valley","valuable","value","vapor","variety","various","vast","vegetable","verb","vertical","very","vessels","victory","view","village","visit","visitor","voice","volume","vote","vowel","voyage","wagon","wait","walk","wall","want","war","warm","warn","was","wash","waste","watch","water","wave","way","we","weak","wealth","wear","weather","week","weigh","weight","welcome","well","went","were","west","western","wet","whale","what","whatever","wheat","wheel","when","whenever","where","wherever","whether","which","while","whispered","whistle","white","who","whole","whom","whose","why","wide","widely","wife","wild","will","willing","win","wind","window","wing","winter","wire","wise","wish","with","within","without","wolf","women","won","wonder","wonderful","wood","wooden","wool","word","wore","work","worker","world","worried","worry","worse","worth","would","wrapped","write","writer","writing","written","wrong","wrote","yard","year","yellow","yes","yesterday","yet","you","young","younger","your","yourself","youth","zero","zebra","zipper","zoo","zulu"]);var O;(function(n){n[n.None=0]="None",n[n.Correct=1]="Correct",n[n.Incorrect=2]="Incorrect"})(O||(O={}));var Y;(function(n){n[n.Idle=0]="Idle",n[n.Started=1]="Started",n[n.Finished=2]="Finished"})(Y||(Y={}));class Pe{constructor(e=300){I(this,"text");I(this,"inputText");I(this,"characterStates");I(this,"gameState");I(this,"cursorPosition");I(this,"mistakePositions");I(this,"correctedMistakePositions");I(this,"totalTypedCharacters");I(this,"startTime");I(this,"endTime");I(this,"wpm");I(this,"cps");I(this,"mistakes");I(this,"accuracy");I(this,"reset");let t=!1;const a=E(typeof e=="string"?e:X.generateText(e)),r=E(""),o=H([a,r],([d,y],k)=>{if(t)return;let w=new Array(d.length);for(let m=0;m<d.length;m++)m>=y.length?w[m]=0:y[m]===d[m]?w[m]=1:w[m]=2;k(w)},[]),i=H([a,r],([d,y],k)=>{t||(y.length>=d.length?k(2):y.length>0?k(1):k(0))},0),u=H(r,(d,y)=>{t||y(d.length)},0),s=E([]),f=E([]),g=E(0),c=E(null),l=E(null),b=H([s,f,g,c,l],([d,y,k,w,m])=>{if(w==null)return 0;m==null&&(m=Date.now());const N=k/5,P=(m-w)/1e3/60,D=N/P,S=(d.length-y.length)/P,M=D-S;return+Math.max(M,0).toFixed(1)},0),C=H([s,f,g,c,l],([d,y,k,w,m])=>{if(w==null)return 0;m==null&&(m=Date.now());const R=(m-w)/1e3,W=k/R,D=(d.length-y.length)/R,U=W-D;return+Math.max(U,0).toFixed(1)},0),q=H(s,d=>d.length,0),F=H([s,g],([d,y])=>{if(y===0)return 0;const k=y-d.length;return Math.round(k/y*100)},0);let z="";r.subscribe(d=>{if(!t){if(d.length>=z.length&&d!==z){const{added:y,changed:k}=j.findDifferences(z,d);g.update(w=>w+y.length+k.length)}z=d}}),i.subscribe(d=>{d===1?c.set(Date.now()):d===2&&(t=!0,l.set(Date.now()))}),j.subscribeAll([o,s,f],([d,y,k])=>{for(let w=0;w<d.length;w++){const m=d[w];m===2&&!y.includes(w)?s.set([...y,w]):m===1&&y.includes(w)&&!k.includes(w)&&f.set([...k,w])}}),this.inputText=r,this.text=j.makeReadable(a),this.mistakePositions=j.makeReadable(s),this.correctedMistakePositions=j.makeReadable(f),this.totalTypedCharacters=j.makeReadable(g),this.startTime=j.makeReadable(c),this.endTime=j.makeReadable(l),this.characterStates=o,this.gameState=i,this.cursorPosition=u,this.wpm=b,this.cps=C,this.mistakes=q,this.accuracy=F,this.reset=d=>{d!=null?a.set(typeof d=="string"?d:X.generateText(d)):a.set(typeof e=="string"?e:X.generateText(e)),z="",t=!1,r.set(""),s.set([]),f.set([]),g.set(0),c.set(null),l.set(null)}}}function ie(n,e,t){const a=n.slice();return a[31]=e[t],a[33]=t,a}function le(n){let e,t,a,r,o,i;return{c(){e=_("div"),t=_("label"),t.textContent="Type here",a=A(),r=_("input"),v(t,"for","input-field"),v(r,"id","input-field"),v(r,"type","text"),v(r,"autocomplete","off"),v(r,"autocapitalize","off"),v(r,"autocorrect","off"),v(r,"spellcheck","false"),v(e,"id","hidden-form")},m(u,s){V(u,e,s),p(e,t),p(e,a),p(e,r),n[24](r),re(r,n[3]),o||(i=[$(r,"input",n[25]),$(r,"keyup",n[23]),$(r,"selectionchange",n[23])],o=!0)},p(u,s){s[0]&8&&r.value!==u[3]&&re(r,u[3])},d(u){u&&J(e),n[24](null),o=!1,be(i)}}}function ce(n,e){let t,a=e[31]+"",r;return{key:n,first:null,c(){t=_("span"),r=L(a),x(t,"cursor",e[5]===e[33]&&e[1]),x(t,"correct",e[6][e[33]]===O.Correct),x(t,"incorrect",e[6][e[33]]===O.Incorrect),x(t,"corrected",e[7].includes(e[33])),this.first=t},m(o,i){V(o,t,i),p(t,r)},p(o,i){e=o,i[0]&16&&a!==(a=e[31]+"")&&Q(r,a),i[0]&50&&x(t,"cursor",e[5]===e[33]&&e[1]),i[0]&80&&x(t,"correct",e[6][e[33]]===O.Correct),i[0]&80&&x(t,"incorrect",e[6][e[33]]===O.Incorrect),i[0]&144&&x(t,"corrected",e[7].includes(e[33]))},d(o){o&&J(t)}}}function de(n){let e,t,a,r,o,i,u,s,f,g,c,l,b,C,q,F,z,d,y,k,w,m,N,R,W,P,D,U,S,M,K,G;return{c(){e=_("div"),t=_("div"),a=_("div"),r=_("span"),o=L(n[8]),i=A(),u=_("span"),u.textContent="chars/sec",s=A(),f=_("div"),g=_("span"),c=L(n[9]),l=A(),b=_("span"),b.textContent="words/min",C=A(),q=_("div"),F=_("span"),z=L(n[10]),d=L("%"),y=A(),k=_("span"),k.textContent="accuracy",w=A(),m=_("div"),N=_("span"),R=L(n[11]),W=A(),P=_("span"),P.textContent="mistakes",D=A(),U=_("a"),U.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 24 24" height="30" width="30"><path d="M7 9H0V2h1v5.2C2.853 2.963 7.083 0 12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12C5.714 24 .55 19.156.041 13h1.004C1.551 18.603 6.266 23 12 23c6.071 0 11-4.929 11-11S18.071 1 12 1C7.34 1 3.353 3.904 1.751 8H7v1z"></path></svg>',v(r,"class","result-value"),v(u,"class","result-description"),v(a,"class","result-item"),v(g,"class","result-value"),v(b,"class","result-description"),v(f,"class","result-item"),v(F,"class","result-value"),v(k,"class","result-description"),v(q,"class","result-item"),v(N,"class","result-value"),v(P,"class","result-description"),v(m,"class","result-item"),v(t,"id","result"),v(U,"id","restart"),v(e,"id","game-over")},m(T,h){V(T,e,h),p(e,t),p(t,a),p(a,r),p(r,o),p(a,i),p(a,u),p(t,s),p(t,f),p(f,g),p(g,c),p(f,l),p(f,b),p(t,C),p(t,q),p(q,F),p(F,z),p(F,d),p(q,y),p(q,k),p(t,w),p(t,m),p(m,N),p(N,R),p(m,W),p(m,P),p(e,D),p(e,U),M=!0,K||(G=$(U,"click",n[26]),K=!0)},p(T,h){(!M||h[0]&256)&&Q(o,T[8]),(!M||h[0]&512)&&Q(c,T[9]),(!M||h[0]&1024)&&Q(z,T[10]),(!M||h[0]&2048)&&Q(R,T[11])},i(T){M||(ye(()=>{S||(S=ne(e,se,{},!0)),S.run(1)}),M=!0)},o(T){S||(S=ne(e,se,{},!1)),S.run(0),M=!1},d(T){T&&J(e),T&&S&&S.end(),K=!1,G()}}}function Se(n){let e,t,a,r=[],o=new Map,i,u,s=n[2]!==Y.Finished&&le(n),f=n[4];const g=l=>l[31]+l[33];for(let l=0;l<f.length;l+=1){let b=ie(n,f,l),C=g(b);o.set(C,r[l]=ce(C,b))}let c=n[2]===Y.Finished&&de(n);return{c(){s&&s.c(),e=A(),t=_("div"),a=_("div");for(let l=0;l<r.length;l+=1)r[l].c();i=A(),c&&c.c(),v(a,"id","text"),v(t,"id","game")},m(l,b){s&&s.m(l,b),V(l,e,b),V(l,t,b),p(t,a);for(let C=0;C<r.length;C+=1)r[C].m(a,null);p(t,i),c&&c.m(t,null),u=!0},p(l,b){l[2]!==Y.Finished?s?s.p(l,b):(s=le(l),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null),b[0]&242&&(f=l[4],r=we(r,b,g,1,l,f,o,a,_e,ce,null,ie)),l[2]===Y.Finished?c?(c.p(l,b),b[0]&4&&ee(c,1)):(c=de(l),c.c(),ee(c,1),c.m(t,null)):c&&(Ie(),ae(c,1,1,()=>{c=null}),ve())},i(l){u||(ee(c),u=!0)},o(l){ae(c),u=!1},d(l){s&&s.d(l),l&&J(e),l&&J(t);for(let b=0;b<r.length;b+=1)r[b].d();c&&c.d()}}}const te=500;function ze(n,e,t){let a,r,o,i,u,s,f,g,c,l;const b=new Pe,{text:C,inputText:q,characterStates:F,gameState:z,cursorPosition:d,correctedMistakePositions:y,wpm:k,cps:w,accuracy:m,mistakes:N}=b;B(n,C,h=>t(4,o=h)),B(n,q,h=>t(3,r=h)),B(n,F,h=>t(6,u=h)),B(n,z,h=>t(2,a=h)),B(n,d,h=>t(5,i=h)),B(n,y,h=>t(7,s=h)),B(n,k,h=>t(9,g=h)),B(n,w,h=>t(8,f=h)),B(n,m,h=>t(10,c=h)),B(n,N,h=>t(11,l=h));let R,W,P;function D(){t(1,P=!P),W=window.setTimeout(D,te)}function U(){t(1,P=!0),window.clearTimeout(W),W=window.setTimeout(D,te)}function S(){!R||a==Y.Finished||R.focus()}function M(){R.setSelectionRange(R.value.length,R.value.length)}q.subscribe(h=>{h&&U()}),ke(()=>{W=window.setTimeout(D,te),S(),window.addEventListener("click",S)});function K(h){Re[h?"unshift":"push"](()=>{R=h,t(0,R)})}function G(){r=this.value,q.set(r)}return[R,P,a,r,o,i,u,s,f,g,c,l,b,C,q,F,z,d,y,k,w,m,N,M,K,G,()=>b.reset()]}class Me extends fe{constructor(e){super();ge(this,e,ze,Se,me,{},null,[-1,-1])}}new Me({target:document.getElementById("app")});qe();
