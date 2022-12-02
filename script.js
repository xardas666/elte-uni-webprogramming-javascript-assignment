/*
 * Oldalak Adatai
 */
let oldal_adatok_leiras = [
    {tipus: "IMAGE", adat: "maze.png"},
    {tipus: "TITLE", adat: "A játék leírása"},
    {
        tipus: "PARAGRAPH",
        adat: "A katakomba szobáit egy 7x7-es négyzetrács cellái jelképezik. Minden szoba esetén adott, hogy mely falain van ajtó. Ha két szomszédos szoba érintkező falán egy-egy ajtó van, akkor át lehet menni egyik szobából a másikba. A négyzetrács páros sorait és oszlopait el lehet tolni, a többi szoba végig rögzített a játék során. Az eltolásokkal az ajtókon keresztül utak nyílnak a szobák között, így lehet eljutni a kincsekhez. Mindegyik kérő arra törekszik, hogy a katakomba szobáinak ötletes eltolásával eljusson a kincsekhez. Aki elsőként találja meg mindahányat és kiindulópontjára sikeresen visszaérkezik az a nyertes."
    },
    {
        tipus: "PARAGRAPH",
        adat: "A játék elején a szobákat véletlen sorrendben és véletlen irányban kirakjuk a játéktábla szabad mezőire. A szobák közül az egyik mindenképpen fölösleges marad. A játék folyamán majd mindig az éppen kimaradó szobát használjuk a többi szoba elcsúsztatására. A játékban legfeljebb 24 kincset kell megtalálni. Ezeket véletlen sorrendben felrakjuk a táblára úgy, hogy egy mezőn csak egy kincs lehet, és a sarokba nem rakhatunk, majd az ezeket jelző kártyákat összekeverjük, és egyenlő számban szétosztjuk a játékosok között, felfedve mindig a legfelső kártyát. A játékosokat jelző figurákat a tábla külön sarkaiba helyezzük."
    },
    {
        tipus: "PARAGRAPH",
        adat: "A játék során minden játékosnak a kincsei közül azt kell megszereznie, amit az aktuálisan legfelső, mindenki által látható kincskártya mutat. Arra a mezőre kell eljutni. Ahhoz, hogy a célt elérje, a játékosnak először a katakombát kell átalakítania a kimaradt szoba becsúsztatásával, éslépnie mindig csak ez után szabad a figurájával."
    },
    {
        tipus: "PARAGRAPH",
        adat: "A katakomba átalakítása a következőképpen történik: A játékos a kimaradt szobát (tetszőlegesen elforgatva) valamelyik oldalról becsúsztathatja a játéktábla területére egy szabadon mozgó sor vagy oszlop szélén, aminek következtében az átellenes oldalon kiesik egy másik szoba. A tábla szélén nyilak jelzik azokat a helyeket, ahol a szobát be lehet csúsztatni. A szoba bárhol betolható, kivétel ott, ahol az imént kilökődött. Nem szabad tehát az előző játékos lépését rögtön „visszacsinálni\". Ha a szobák eltolása során a szobával együtt egy figura is kitolódnék – akár másé, akár a miénk -, akkor ezt a figurát az ellenkező oldalról imént becsúsztatott szobába kell helyezni."
    },
    {
        tipus: "PARAGRAPH",
        adat: "A szobák eltolását követi a játékos lépése a figurával. A katakomba minden olyan pontjáig el lehet jutni, amelyet a kiindulóponttal folyamatos járatvonal köt össze. Az ilyen járatokban tehát olyan messzire mehetünk el, amilyen messzire csak akarunk, vagyis nem számít, hogy hány szobán lépkedünk végig. Nem kötelező lépni. Figuránkat akár ott is hagyhatjuk, ahol éppen van. Egy mezőn több figura is állhat: a figurák nem ütik ki egymást. Ha valaki nem tud rögtön céljáig eljutni, akkor figurájával addig a pontig célszerű elmennie, ahol feltehetőleg jó helyzetben várhatja következő lépést. Ha valaki elérte a felfedett kincskártya által megjelölt célt, akkor felfedi a következőt, és most ehhez a célhoz igyekszik eljutni, stb."
    },
    {
        tipus: "PARAGRAPH",
        adat: "A játék akkor ér véget, ha egy játékos az összes kincskártyájához tartozó kincset megszerezte, és visszavezette a figuráját arra mezőre, ahonnan elindult. Az a győztes, aki valamennyi kincsét megtalálta és figuráját elsőként juttatta vissza a kiindulópontra."
    },
    {tipus: "BUTTON", adat: "Vissza a főoldalra", action: "kezdooldal()"}
]
let oldal_adatok_kezdokepernyo = [
    {tipus: "IMAGE", adat: "start.jpg"},
    {
        tipus: "PARAGRAPH",
        adat: "Nekeresdországban Nevenincs királynak egyik szeme sír, a másik nevet. Nevet, mert tündérszép lányának kérője akadt, és sír, mert a kiváló kérőből nem egy, hanem több is van. Hát most hogyan döntse el, melyiknek adja lánya kezét és fele királyságát? Gondolja kikéri udvari tanácsosa, Furfang véleményét. Az udvari tanácsos nevéhez illő ötlettel áll elő: állítsák próba elé a kérőket, s aki a legrátermettebbnek bizonyul, az nyerje el a szépséges királylány kezét. Van a várnak egy elvarázsolt katakombája, ahol a szobák helye folyamatosan változtatható. Ebben rejtenek el kincseket, s az a kérő nyeri el a királylány kezét, aki a leghamarabb szedi össze a rábízott kincseket."
    },
    {tipus: "TITLE", adat: "Új játék"},
    {
        tipus: "MINMAX",
        id: "jatekosok_szama_komponens",
        adat: "Játékosok száma:",
        action: "kincs_min_max_ujraszamol()",
        min: 2,
        max: 4
    },
    {tipus: "MINMAX", id: "kincsek_szama_komponens", adat: "Kincsek száma:", min: 2, max: 12},
    {tipus: "BUTTON", adat: "Kezdhetjük!", action: "jatek()"},
    {tipus: "BUTTON", adat: "Mentések", action: "mentesek()"},
    {tipus: "BUTTON", adat: "Segítség?!", action: "leiras()"}
]
let oldal_adatok_jatek = [
    {tipus: "TITLE", adat: "Aktuális játszma"},
    {tipus: "DIV", id: "jatek_fo", action: "jatek_indul()"},
    {tipus: "DIV", id: "jatek_kontroll"}
]
let oldal_adatok_mentesek = [
    {tipus: "TITLE", adat: "Mentett játékok"},
    {tipus: "DIV", id: "mentesek_fo", action: "mentett_jatekok()"},
    {tipus: "BUTTON", adat: "Vissza a főoldalra", action: "kezdooldal()"}
]

/**
 * Segédváltozók
 */
let seged_tomb_utvonal_kereseshez = []

/*
 * Felületi funkciók
 */

function oldal_leiras_lista_betoltese(lista) {
    const kontener = document.createElement("div");
    kontener.classList.add("center");
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].tipus === "PARAGRAPH") {
            let p = document.createElement("p");
            p.textContent = lista[i].adat;
            p.classList.add("center");
            kontener.appendChild(p)
        } else if (lista[i].tipus === "TITLE") {
            let h1 = document.createElement("h1");
            h1.textContent = lista[i].adat;
            h1.classList.add("center");
            kontener.appendChild(h1)
        } else if (lista[i].tipus === "MINMAX") {
            let input = document.createElement("input");
            input.type = "number";
            input.min = lista[i].min;
            input.max = lista[i].max;
            input.value = 2;
            input.classList.add("center");
            input.id = lista[i].id;
            if (lista[i].action) {
                input.onchange = new Function(lista[i].action);
            }
            let label = document.createElement("label");
            label.textContent = lista[i].adat;
            label.classList.add("center");
            label.for = lista[i].id;
            kontener.appendChild(label);
            kontener.appendChild(input);
            let br = document.createElement("br");
            kontener.appendChild(br);
        } else if (lista[i].tipus === "BUTTON") {
            let button = document.createElement("button");
            button.textContent = lista[i].adat;
            button.onclick = new Function(lista[i].action);
            button.classList.add("center");
            kontener.appendChild(button);
            let br = document.createElement("br");
            kontener.appendChild(br);
        } else if (lista[i].tipus === "TABLE") {
            let table = document.createElement("table");
            table.id = lista[i].id;
            table.onload = new Function(lista[i].action);
            kontener.appendChild(table);
        } else if (lista[i].tipus === "DIV") {
            let div = document.createElement("div");
            div.id = lista[i].id;
            div.onload = new Function(lista[i].action);
            kontener.appendChild(div);
        } else {
            let img = document.createElement("img");
            img.src = lista[i].adat;
            img.classList.add("center");
            kontener.appendChild(img)
            let br = document.createElement("br");
            kontener.appendChild(br);
        }
    }
    document.body.childNodes.forEach(gyerek => document.body.removeChild(gyerek));
    document.body.innerHTML = "";
    document.body.appendChild(kontener);
}

function kincs_min_max_ujraszamol() {
    let jatekosok_szama_komponens = document.querySelector('#jatekosok_szama_komponens');
    let kincsek_szama_komponens = document.querySelector('#kincsek_szama_komponens');
    kincsek_szama_komponens.max = 24 / jatekosok_szama_komponens.value;
    if (kincsek_szama_komponens.value > kincsek_szama_komponens.max) {
        kincsek_szama_komponens.value = kincsek_szama_komponens.max;
    }
}

function leiras() {
    oldal_leiras_lista_betoltese(oldal_adatok_leiras);
}

function mentesek() {
    oldal_leiras_lista_betoltese(oldal_adatok_mentesek);
    mentett_jatekok();
}

function jatek() {
    let jatekosok_szama_komponens = document.querySelector('#jatekosok_szama_komponens');
    let kincsek_szama_komponens = document.querySelector('#kincsek_szama_komponens');

    oldal_leiras_lista_betoltese(oldal_adatok_jatek);

    jatek_indul(jatekosok_szama_komponens.value, kincsek_szama_komponens.value)
}

function kezdooldal() {
    oldal_leiras_lista_betoltese(oldal_adatok_kezdokepernyo);
}

function mentett_jatekok() {
    let mentesek_fo = document.querySelector('#mentesek_fo');
    if (localStorage.length === 0) {
        let p = document.createElement("p");
        p.textContent = "Nincsenek mentéseid még.";
        mentesek_fo.appendChild(p);
    } else {
        let local_storage_egyeb = ["length", "clear", "getItem", "key", "setItem", "removeItem"];
        for (let localStorageKey in localStorage) {
            if (!local_storage_egyeb.includes(localStorageKey)) {
                let button = document.createElement("button");
                button.textContent = localStorageKey;
                button.addEventListener("click", function () {
                    let betoltott_jatek = JSON.parse(localStorage.getItem(localStorageKey));
                    oldal_leiras_lista_betoltese(oldal_adatok_jatek);
                    jatek_indul(betoltott_jatek.jatekosok_szama, betoltott_jatek.kincsek_szama, betoltott_jatek)
                });
                mentesek_fo.appendChild(button);
            }
        }
    }
}

/*
 * játék logika
*/
let jatek_adatok = {};

function jatekosok_elhelyezese(jatekosok_szama, kincsek_szama) {
    let jatekosok = [];

    jatekosok.aktuals_jatekos = 0;

    for (let i = 0; i < jatekosok_szama; i++) {
        let jatekos = {};
        let kezdo_koordinatak = {};
        let kincskartyak = [];

        if (i === 0) {
            kezdo_koordinatak = add_koordinatak(0, 0);
        } else if (i === 1) {
            kezdo_koordinatak = add_koordinatak(0, 6);
        } else if (i === 2) {
            kezdo_koordinatak = add_koordinatak(6, 0);
        } else if (i === 3) {
            kezdo_koordinatak = add_koordinatak(6, 6);
        }

        for (let k = 0; k < kincsek_szama; k++) {
            kincskartyak.push(add_koordinatak(Math.floor(Math.random() * 4) + 1, Math.floor(Math.random() * 4) + 1));
        }

        jatekos = add_jatekos(0, kezdo_koordinatak, kezdo_koordinatak, kincskartyak);
        jatekosok.push(jatekos)
    }
    return jatekosok;
}

function sarok_vagy_elagazas(i, j) {
    if (i % 6 === 0 && j % 6 === 0) {
        return "SAROK";
    } else if (i % 2 === 0 && j % 2 === 0) {
        return "ELAGAZAS";
    } else {
        return false;
    }
}

function labirintus_osszeallitasa() {
    let labirintus_seged_valtozo = [];
    let labirintus = [];

    for (let i = 0; i < 13; i++) {
        labirintus_seged_valtozo.push("EGYENES")
    }
    for (let i = 0; i < 15; i++) {
        labirintus_seged_valtozo.push("SAROK")
    }
    for (let i = 0; i < 6; i++) {
        labirintus_seged_valtozo.push("ELAGAZAS")
    }

    labirintus_seged_valtozo.sort(() => Math.random() - 0.5);

    for (let i = 0; i < 7; i++) {
        let sor = [];
        for (let j = 0; j < 7; j++) {
            if (sarok_vagy_elagazas(i, j)) {
                if ("SAROK" === sarok_vagy_elagazas(i, j)) {
                    if (i === 0 && j === 0) {
                        sor.push(add_elem(true, add_ajtok_by_tipus("SAROK", "jobbra", 2)))
                    } else if (i === 0 && j === 6) {
                        sor.push(add_elem(true, add_ajtok_by_tipus("SAROK", "jobbra", 3)))
                    } else if (i === 6 && j === 0) {
                        sor.push(add_elem(true, add_ajtok_by_tipus("SAROK", "jobbra", 1)))
                    } else {
                        sor.push(add_elem(true, add_ajtok_by_tipus("SAROK", "jobbra", 0)))
                    }
                } else if ("ELAGAZAS" === sarok_vagy_elagazas(i, j)) {
                    if (i === 0) {
                        sor.push(add_elem(true, add_ajtok_by_tipus("ELAGAZAS", "jobbra", 2)))
                    } else if (i === 6) {
                        sor.push(add_elem(true, add_ajtok_by_tipus("ELAGAZAS", "jobbra", 0)))
                    } else if (j === 0) {
                        sor.push(add_elem(true, add_ajtok_by_tipus("ELAGAZAS", "jobbra", 1)))
                    } else if (j === 6) {
                        sor.push(add_elem(true, add_ajtok_by_tipus("ELAGAZAS", "balra", 1)))
                    } else if (j === 2 && i === 2) {
                        sor.push(add_elem(true, add_ajtok_by_tipus("ELAGAZAS", "jobbra", 1)))
                    } else if (j === 4 && i === 2) {
                        sor.push(add_elem(true, add_ajtok_by_tipus("ELAGAZAS", "jobbra", 2)))
                    } else if (j === 2 && i === 4) {
                        sor.push(add_elem(true, add_ajtok_by_tipus("ELAGAZAS", "jobbra", 0)))
                    } else if (j === 4 && i === 4) {
                        sor.push(add_elem(true, add_ajtok_by_tipus("ELAGAZAS", "balra", 1)))
                    }
                }
            } else {
                sor.push(add_elem(false, add_ajtok_by_tipus(labirintus_seged_valtozo.pop())))
            }
        }
        labirintus.push(sor)
    }

    labirintus.leeso_elem = add_elem(false, add_ajtok_by_tipus(labirintus_seged_valtozo.pop()));

    return labirintus;
}

function van_jatekos_vagy_kincs_az_elemen(i, j) {
    for (let k = 0; k < jatek_adatok.jatekosok.length; k++) {
        if (jatek_adatok.jatekosok[k].aktualis_koordinatak.x === i && jatek_adatok.jatekosok[k].aktualis_koordinatak.y === j) {
            return true;
        } else if (k === jatek_adatok.jatekosok.aktuals_jatekos) {
            for (let l = 0; l < jatek_adatok.jatekosok[k].kincskartyak.length; l++) {
                if (jatek_adatok.jatekosok[k].kincskartyak[l].x === i && jatek_adatok.jatekosok[k].kincskartyak[l].y === j) {
                    return true;
                }
            }
        }
    }
    return false;
}

function van_ut(elem1, x1, y1, elem2, x2, y2) {
    return elem1.ajtok[0] && elem2.ajtok[2] && (y1 === y2 && (x1 === x2 + 1 || x2 + 1===7))
        || elem1.ajtok[2] && elem2.ajtok[0] && (y1 === y2 && (x1 === x2 - 1 || x2 - 1===-1))
        || elem1.ajtok[1] && elem2.ajtok[3] && (x1 === x2 && (y1 === y2 - 1 || y2 - 1===-1))
        || elem1.ajtok[3] && elem2.ajtok[1] && (x1 === x2 && (y1 === y2 + 1 || y2 + 1===7))
}

function alatta_felette_mellette(jatekos_koordinata, x, y) {
    jatekos_koordinata.checked = true;
    return egyezo_koordinatak(jatekos_koordinata, add_koordinatak(x + 1, y))
        || egyezo_koordinatak(jatekos_koordinata, add_koordinatak(x - 1, y))
        || egyezo_koordinatak(jatekos_koordinata, add_koordinatak(x, y - 1))
        || egyezo_koordinatak(jatekos_koordinata, add_koordinatak(x, y + 1));
}

function is_elerheto_ut(x, y) {
    for (let i = 0; i < seged_tomb_utvonal_kereseshez.length; i++) {
        if (seged_tomb_utvonal_kereseshez[i].x === x && seged_tomb_utvonal_kereseshez[i].y === y) {
            return true;
        }
    }
    return false;
}

function elerheto_ut_szamitas() {
    seged_tomb_utvonal_kereseshez = []
    let aktualis_koordinatak = jatek_adatok.jatekosok[jatek_adatok.jatekosok.aktuals_jatekos].aktualis_koordinatak
    seged_tomb_utvonal_kereseshez.push(aktualis_koordinatak)

    while (van_meg_csekkolatlan_mezo()) {
        console.log(seged_tomb_utvonal_kereseshez.length)
        for (let i = 0; i < seged_tomb_utvonal_kereseshez.length; i++) {

            if (!seged_tomb_utvonal_kereseshez[i].checked) {
                let temp = [];
                //alatta
                let x1 = seged_tomb_utvonal_kereseshez[i].x+1 >6 ? 0 :seged_tomb_utvonal_kereseshez[i].x+1;
                let y1 = seged_tomb_utvonal_kereseshez[i].y;
                temp.push(add_koordinatak(x1,y1));
                
                //felette
                let x2 = seged_tomb_utvonal_kereseshez[i].x-1 <0 ? 6 :seged_tomb_utvonal_kereseshez[i].x-1;
                let y2 = seged_tomb_utvonal_kereseshez[i].y;
                temp.push(add_koordinatak(x2,y2));
                
                //jobbra
                let y3 = seged_tomb_utvonal_kereseshez[i].y+1 >6 ? 0 :seged_tomb_utvonal_kereseshez[i].y+1;
                let x3 = seged_tomb_utvonal_kereseshez[i].x;
                temp.push(add_koordinatak(x3,y3));
                
                //balra
                let y4 = seged_tomb_utvonal_kereseshez[i].y-1 <0 ? 6 :seged_tomb_utvonal_kereseshez[i].y-1;
                let x4 = seged_tomb_utvonal_kereseshez[i].x;
                temp.push(add_koordinatak(x4,y4));

                console.log(temp)

                for (let j = 0; j < temp.length; j++) {
                    if (van_ut(
                        jatek_adatok.labirintus[seged_tomb_utvonal_kereseshez[i].x][seged_tomb_utvonal_kereseshez[i].y],
                        seged_tomb_utvonal_kereseshez[i].x,
                        seged_tomb_utvonal_kereseshez[i].y,
                        jatek_adatok.labirintus[temp[j].x][temp[j].y],
                        temp[j].x,
                        temp[j].y)
                    ) {
                        if (!is_elerheto_ut(temp[j].x, temp[j].y)) {
                            seged_tomb_utvonal_kereseshez.push(add_koordinatak(temp[j].x, temp[j].y))
                        }
                    }
                }
                seged_tomb_utvonal_kereseshez[i].checked=true;
            }
        }
    }
}

function van_meg_csekkolatlan_mezo() {
    for (let i = 0; i < seged_tomb_utvonal_kereseshez.length; i++) {
        if (!seged_tomb_utvonal_kereseshez[i].checked) {
            return true;
        }
    }
    return false;
}

function labirintus_grafikus_elem_hozzaad(elem, i, j) {
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    let hatter_kep = document.createElement("img");
    let hatter_kep_fix = document.createElement("img");
    let ut_kep = document.createElement("img");
    let elerheto_ut_kep = document.createElement("img");

    canvas.width = 60;
    canvas.height = 60;

    hatter_kep.src = "stone-wall-moving-texture.png";
    hatter_kep_fix.src = "fix-wall-texture.jpg";
    ut_kep.src = "path-not-reachable-texture.jpg";
    elerheto_ut_kep.src = " path-texture.jpg";

    if (elem.fix) {
        hatter_kep_fix.onload = function () {
            ctx.drawImage(hatter_kep_fix, 0, 0);
        }
    } else {
        hatter_kep.onload = function () {
            ctx.drawImage(hatter_kep, 0, 0);
        }
    }

    if (is_elerheto_ut(i, j)) {
        elerheto_ut_kep.onload = function () {
            ctx.drawImage(elerheto_ut_kep, 20, 20)
            elem.ajtok[0] ? ctx.drawImage(elerheto_ut_kep, 20, 0) : "semmi";
            elem.ajtok[1] ? ctx.drawImage(elerheto_ut_kep, 40, 20) : "semmi";
            elem.ajtok[2] ? ctx.drawImage(elerheto_ut_kep, 20, 40) : "semmi";
            elem.ajtok[3] ? ctx.drawImage(elerheto_ut_kep, 0, 20) : "semmi";
        }
    } else {
        ut_kep.onload = function () {
            ctx.drawImage(ut_kep, 20, 20)
            elem.ajtok[0] ? ctx.drawImage(ut_kep, 20, 0) : "semmi";
            elem.ajtok[1] ? ctx.drawImage(ut_kep, 40, 20) : "semmi";
            elem.ajtok[2] ? ctx.drawImage(ut_kep, 20, 40) : "semmi";
            elem.ajtok[3] ? ctx.drawImage(ut_kep, 0, 20) : "semmi";
        }
    }

    if (van_jatekos_vagy_kincs_az_elemen(i, j)) {
        for (let k = 0; k < jatek_adatok.jatekosok.length; k++) {
            if (jatek_adatok.jatekosok[k].aktualis_koordinatak.x === i && jatek_adatok.jatekosok[k].aktualis_koordinatak.y === j) {
                let jatekos = document.createElement("img");
                jatekos.src = k + ".png";
                jatekos.onload = function () {
                    ctx.drawImage(jatekos, 10, 10);
                }
            } else if (k === jatek_adatok.jatekosok.aktuals_jatekos) {
                for (let l = 0; l < jatek_adatok.jatekosok[k].kincskartyak.length; l++) {
                    if (jatek_adatok.jatekosok[k].kincskartyak[l].x === i && jatek_adatok.jatekosok[k].kincskartyak[l].y === j) {
                        let kincs = document.createElement("img");
                        kincs.src = "treasure-chest.png";
                        kincs.onload = function () {
                            ctx.drawImage(kincs, 20, 20);
                        }
                    }
                }
            }
        }
    }
    return canvas;
}

function sor_oszlop_hianyzo_mezo_beszuras(irany, index) {
    if (irany === "fel") {
        index = index - 1;
        let uj_leeso = copy(jatek_adatok.labirintus[0][index]);

        for (let i = 0; i < 6; i++) {
            jatek_adatok.labirintus[i][index] = copy(jatek_adatok.labirintus[i + 1][index]);
        }

        jatek_adatok.labirintus[6][index] = copy(jatek_adatok.labirintus.leeso_elem);
        jatek_adatok.labirintus.leeso_elem = copy(uj_leeso)

        for (let k = 0; k < jatek_adatok.jatekosok.length; k++) {
            if (jatek_adatok.jatekosok[k].aktualis_koordinatak.y === index) {
                jatek_adatok.jatekosok[k].aktualis_koordinatak.x--;
                if (jatek_adatok.jatekosok[k].aktualis_koordinatak.x < 0) {
                    jatek_adatok.jatekosok[k].aktualis_koordinatak.x = 6;
                }
            }
            for (let c = 0; c < jatek_adatok.jatekosok[k].kincskartyak.length; c++) {
                if (jatek_adatok.jatekosok[k].kincskartyak[c].y === index) {
                    jatek_adatok.jatekosok[k].kincskartyak[c].x--;
                    if (jatek_adatok.jatekosok[k].kincskartyak[c].x < 0) {
                        jatek_adatok.jatekosok[k].kincskartyak[c].x = 6;
                    }
                }
            }
        }

    } else if (irany === "le") {
        index = index - 1;
        let uj_utolso = copy(jatek_adatok.labirintus[6][index]);

        for (let i = 6; i > 0; i--) {
            jatek_adatok.labirintus[i][index] = copy(jatek_adatok.labirintus[i - 1][index]);
        }

        jatek_adatok.labirintus[0][index] = copy(jatek_adatok.labirintus.leeso_elem);
        jatek_adatok.labirintus.leeso_elem = copy(uj_utolso);

        for (let k = 0; k < jatek_adatok.jatekosok.length; k++) {
            if (jatek_adatok.jatekosok[k].aktualis_koordinatak.y === index) {
                jatek_adatok.jatekosok[k].aktualis_koordinatak.x++;
                if (jatek_adatok.jatekosok[k].aktualis_koordinatak.x > 6) {
                    jatek_adatok.jatekosok[k].aktualis_koordinatak.x = 0;
                }
            }
            for (let c = 0; c < jatek_adatok.jatekosok[k].kincskartyak.length; c++) {
                if (jatek_adatok.jatekosok[k].kincskartyak[c].y === index) {
                    jatek_adatok.jatekosok[k].kincskartyak[c].x++;
                    if (jatek_adatok.jatekosok[k].kincskartyak[c].x > 6) {
                        jatek_adatok.jatekosok[k].kincskartyak[c].x = 0;
                    }
                }
            }
        }

    } else if (irany === "balra") {
        jatek_adatok.labirintus[index].push(copy(jatek_adatok.labirintus.leeso_elem))
        jatek_adatok.labirintus.leeso_elem = copy(jatek_adatok.labirintus[index].shift())

        for (let k = 0; k < jatek_adatok.jatekosok.length; k++) {
            if (jatek_adatok.jatekosok[k].aktualis_koordinatak.x === index) {
                jatek_adatok.jatekosok[k].aktualis_koordinatak.y--;
                if (jatek_adatok.jatekosok[k].aktualis_koordinatak.y < 0) {
                    jatek_adatok.jatekosok[k].aktualis_koordinatak.y = 6;
                }
            }
            for (let c = 0; c < jatek_adatok.jatekosok[k].kincskartyak.length; c++) {
                if (jatek_adatok.jatekosok[k].kincskartyak[c].x === index) {
                    jatek_adatok.jatekosok[k].kincskartyak[c].y--;
                    if (jatek_adatok.jatekosok[k].kincskartyak[c].y < 0) {
                        jatek_adatok.jatekosok[k].kincskartyak[c].y = 6;
                    }
                }
            }
        }
    } else {
        jatek_adatok.labirintus[index].unshift(copy(jatek_adatok.labirintus.leeso_elem))
        jatek_adatok.labirintus.leeso_elem = copy(jatek_adatok.labirintus[index].pop())

        for (let k = 0; k < jatek_adatok.jatekosok.length; k++) {
            if (jatek_adatok.jatekosok[k].aktualis_koordinatak.x === index) {
                jatek_adatok.jatekosok[k].aktualis_koordinatak.y++;
                if (jatek_adatok.jatekosok[k].aktualis_koordinatak.y > 6) {
                    jatek_adatok.jatekosok[k].aktualis_koordinatak.y = 0;
                }
            }
            for (let c = 0; c < jatek_adatok.jatekosok[k].kincskartyak.length; c++) {
                if (jatek_adatok.jatekosok[k].kincskartyak[c].x === index) {
                    jatek_adatok.jatekosok[k].kincskartyak[c].y++;
                    if (jatek_adatok.jatekosok[k].kincskartyak[c].y > 6) {
                        jatek_adatok.jatekosok[k].kincskartyak[c].y = 0;
                    }
                }
            }
        }
    }

    jatekter_kirajzolasa(true);
    kontroll_kirajzolasa(true);
}

function kontroll_grafikus_elem_hozzaad(kontroller_e, irany, index) {
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");

    canvas.width = 60;
    canvas.height = 60;

    ctx.fillStyle = "rgb(46,53,68)";
    ctx.fillRect(0, 0, 60, 60);

    if (kontroller_e) {
        let kontroller = document.createElement("img");
        kontroller.src = irany + ".png";

        if (irany === "fel") {
            kontroller.onload = function () {
                ctx.drawImage(kontroller, 20, 0);
            }
        } else if (irany === "le") {
            kontroller.onload = function () {
                ctx.drawImage(kontroller, 20, 20);
            }
        } else if (irany === "jobbra") {
            kontroller.onload = function () {
                ctx.drawImage(kontroller, 0, 20);
            }
        } else {
            kontroller.onload = function () {
                ctx.drawImage(kontroller, 20, 20);
            }
        }
        if (index) {
            canvas.onclick = function () {
                sor_oszlop_hianyzo_mezo_beszuras(irany, index);
            };
        }
    }
    return canvas;
}

function jatekter_kirajzolasa(frissit) {

    elerheto_ut_szamitas();

    let jatek_fo = document.querySelector('#jatek_fo');

    if (frissit) {
        jatek_fo.innerHTML = "";
    }

    for (let i = 0; i < 9; i++) {
        if (i % 2 === 0) {
            if (i === 0) {
                jatek_fo.appendChild(kontroll_grafikus_elem_hozzaad(false));
            } else if (i === 8) {
                jatek_fo.appendChild(kontroll_grafikus_elem_hozzaad(false));
            } else {
                jatek_fo.appendChild(kontroll_grafikus_elem_hozzaad(true, "le", i));
            }
        } else {
            jatek_fo.appendChild(kontroll_grafikus_elem_hozzaad(false));
        }
    }

    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            if (j === 0) {
                if (i === 1 || i === 3 || i === 5) {
                    jatek_fo.appendChild(kontroll_grafikus_elem_hozzaad(true, "jobbra", i));
                } else {
                    jatek_fo.appendChild(kontroll_grafikus_elem_hozzaad(false));
                }
            }

            jatek_fo.appendChild(labirintus_grafikus_elem_hozzaad(jatek_adatok.labirintus[i][j], i, j))

            if (j === 6) {
                if (i === 1 || i === 3 || i === 5) {
                    jatek_fo.appendChild(kontroll_grafikus_elem_hozzaad(true, "balra", i));
                } else {
                    jatek_fo.appendChild(kontroll_grafikus_elem_hozzaad(false));
                }
            }
        }
    }

    for (let i = 0; i < 9; i++) {
        if (i % 2 === 0) {
            if (i === 0) {
                jatek_fo.appendChild(kontroll_grafikus_elem_hozzaad(false));
            } else if (i === 8) {
                jatek_fo.appendChild(kontroll_grafikus_elem_hozzaad(false));
            } else {
                jatek_fo.appendChild(kontroll_grafikus_elem_hozzaad(true, "fel", i));
            }
        } else {
            jatek_fo.appendChild(kontroll_grafikus_elem_hozzaad(false));
        }
    }
}

function aktualis_jatekos() {
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    let aktualis_player = jatek_adatok.jatekosok.aktuals_jatekos + 1

    canvas.width = 9 * 60;
    canvas.height = 60;

    ctx.font = '20px serif';
    ctx.fillStyle = "rgb(115,103,50)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.fillText("Aktuális játékos: " + aktualis_player, 20, 30);

    return canvas;
}

function eredmenyek() {
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");

    canvas.width = 3 * 60;
    canvas.height = 3 * 60;

    ctx.font = '20px serif';
    ctx.fillStyle = "rgb(115,103,50)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.fillText("Eredmények: ", 30, 30);
    ctx.font = '12px serif';
    for (let i = 0; i < jatek_adatok.jatekosok.length; i++) {
        let jatekos = i + 1
        let reszeredmeny = "Játékos " + jatekos + " => " + jatek_adatok.jatekosok[i].pontok + "/" + jatek_adatok.kincsek_szama
        jatekos++;
        ctx.fillText(reszeredmeny, 30, jatekos * 30);
    }

    return canvas;
}

function hianyzo_mezo() {
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    let hatter_kep = document.createElement("img");
    let ut_kep = document.createElement("img");
    let elem = jatek_adatok.labirintus.leeso_elem;

    canvas.width = 60;
    canvas.height = 3 * 60;

    hatter_kep.src = "stone-wall-moving-texture.png";
    ut_kep.src = "path-texture.jpg";

    hatter_kep.onload = function () {
        ctx.drawImage(hatter_kep, 0, 0);
    }

    ut_kep.onload = function () {
        ctx.drawImage(ut_kep, 20, 20)
        elem.ajtok[0] ? ctx.drawImage(ut_kep, 20, 0) : "semmi";
        elem.ajtok[1] ? ctx.drawImage(ut_kep, 40, 20) : "semmi";
        elem.ajtok[2] ? ctx.drawImage(ut_kep, 20, 40) : "semmi";
        elem.ajtok[3] ? ctx.drawImage(ut_kep, 0, 20) : "semmi";
    }

    ctx.fillStyle = "rgb(115,103,50)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    return canvas;
}

function teendok() {
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    canvas.width = 3 * 60;
    canvas.height = 3 * 60;
    ctx.font = '18px Mjolnir line-through';
    ctx.fillStyle = "rgb(44,46,91)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.fillText("TODO-k:", 30, 30);
    if (!jatek_adatok.mezo_beillesztes) {
        ctx.fillText("=> Hiányzó elem", 30, 2 * 30);
    }
    let lepesek_hatra = 3 - jatek_adatok.lepesek_szama
    ctx.fillText("=> Lépések (" + lepesek_hatra + ")", 30, 3 * 30);

    return canvas;
}

function hianyzo_mezo_forgatas(irany) {
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    let img = document.createElement("img");

    canvas.width = 60;
    canvas.height = 3 * 60;

    ctx.fillStyle = "rgb(115,103,50)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    img.src = irany + ".png";
    img.onload = function () {
        ctx.drawImage(img, 10, 20);
    }

    canvas.addEventListener("click", function () {
        forgatas(irany, jatek_adatok.labirintus.leeso_elem.ajtok, 1);
        kontroll_kirajzolasa(true);
    });

    return canvas;
}

function mentes_gomb() {
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");

    canvas.width = 6 * 60;
    canvas.height = 60;

    ctx.font = '20px serif';
    ctx.fillStyle = "rgb(115,103,50)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.fillText("Mentés", 20, 30);

    canvas.addEventListener("click", function () {
        save();
    });
    return canvas;
}

function kilepes_gomb() {
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");

    canvas.width = 3 * 60;
    canvas.height = 60;

    ctx.font = '20px serif';
    ctx.fillStyle = "rgb(115,103,50)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.fillText("Kilépés", 20, 30);

    canvas.addEventListener("click", function () {
        kezdooldal();
    });

    return canvas;
}

function kontroll_kirajzolasa(frissit) {
    let jatek_kontroll = document.querySelector('#jatek_kontroll');
    if (frissit) {
        jatek_kontroll.innerHTML = "";
    }

    jatek_kontroll.appendChild(aktualis_jatekos());
    jatek_kontroll.appendChild(eredmenyek());
    jatek_kontroll.appendChild(hianyzo_mezo_forgatas("balra"));
    jatek_kontroll.appendChild(hianyzo_mezo());
    jatek_kontroll.appendChild(hianyzo_mezo_forgatas("jobbra"));
    jatek_kontroll.appendChild(teendok());
    jatek_kontroll.appendChild(mentes_gomb());
    jatek_kontroll.appendChild(kilepes_gomb());

}

function jatek_indul(jatekosok_szama, kincsek_szama, mentesbol_jatek) {
    if (mentesbol_jatek) {
        jatek_adatok = create_jatek(jatekosok_szama, kincsek_szama, mentesbol_jatek.jatekosok, mentesbol_jatek.labirintus);
        jatek_adatok.jatekosok.aktuals_jatekos = 0;
    } else {
        let jatekosok = jatekosok_elhelyezese(jatekosok_szama, kincsek_szama);
        let labirintus = labirintus_osszeallitasa();
        jatek_adatok = create_jatek(jatekosok_szama, kincsek_szama, jatekosok, labirintus);
    }

    jatekter_kirajzolasa();
    kontroll_kirajzolasa();
}

function save() {
    const tabla_kulcs = "labirintus-" + Date.now()
    localStorage.setItem(tabla_kulcs, JSON.stringify(jatek_adatok));
    alert("Játék elmentve!")
}

/*
 * Egyeb fuggvenyek
 */
function copy(obj) {
    return Object.assign({}, obj)
}

function random(max) {
    return Math.floor(Math.random() * 4) + 1
}

function randomMinMAx(min, max) {
    return Math.floor(Math.random() * max) + min
}

function add_ajtok(felul_, jobbra_, alul_, balra_) {
    let ajto = [];
    ajto.push(felul_, jobbra_, alul_, balra_);
    return ajto;
}

function add_ajtok_by_tipus(fajta, irany, egyseg) {
    let ajto = [];

    if (!irany) {
        egyseg = Math.floor(Math.random() * 3);
        irany = Math.floor(Math.random() * 3) % 3 ? "jobbra" : "balra";
    }

    if (fajta === "SAROK") {
        ajto = add_ajtok(true, false, false, true);
    } else if (fajta === "ELAGAZAS") {
        ajto = add_ajtok(true, true, false, true);
    } else {
        ajto = add_ajtok(false, true, false, true);
    }

    forgatas(irany, ajto, egyseg);

    return ajto;
}

function add_koordinatak(x_, y_) {
    return {x: x_, y: y_};
}

function add_elem(fix_, ajtok_) {
    return {fix: fix_, ajtok: ajtok_};
}


function add_jatekos(pontok_, kezdo_koordinatak_, aktualis_koordinatak_, kincskartyak_) {
    return {
        pontok: pontok_,
        kezdo_koordinatak: kezdo_koordinatak_,
        aktualis_koordinatak: aktualis_koordinatak_,
        kincskartyak: kincskartyak_
    }
}

function create_jatek(jatekosok_szama_, kincsek_szama_, jatekosok_, labirintus_) {
    return {
        jatekosok_szama: jatekosok_szama_,
        kincsek_szama: kincsek_szama_,
        mezo_beillesztes: false,
        lepesek_szama: 0,
        aktualis_jatekos: 0,
        jatekosok: jatekosok_,
        labirintus: labirintus_
    }
}

function forgatas(irany, ajto, egyseg) {
    for (let i = 0; i < egyseg; i++) {
        if (irany === "jobbra") {
            ajto.unshift(ajto.pop());
        } else {
            ajto.push(ajto.shift());
        }
    }
}

function jatekos_mozgatas(irany) {
    let x = jatek_adatok.jatekosok[jatek_adatok.jatekosok.aktuals_jatekos].aktualis_koordinatak.x;
    let y = jatek_adatok.jatekosok[jatek_adatok.jatekosok.aktuals_jatekos].aktualis_koordinatak.y;
    let lehet = false;
    let x_uj = 0;
    let y_uj = 0;

    if (irany === "Up") {
        x_uj = jatek_adatok.jatekosok[jatek_adatok.jatekosok.aktuals_jatekos].aktualis_koordinatak.x - 1;
        y_uj = jatek_adatok.jatekosok[jatek_adatok.jatekosok.aktuals_jatekos].aktualis_koordinatak.y;
    } else if (irany === "Left") {
        y_uj = jatek_adatok.jatekosok[jatek_adatok.jatekosok.aktuals_jatekos].aktualis_koordinatak.y - 1;
        x_uj = jatek_adatok.jatekosok[jatek_adatok.jatekosok.aktuals_jatekos].aktualis_koordinatak.x;
    } else if (irany === "Right") {
        y_uj = jatek_adatok.jatekosok[jatek_adatok.jatekosok.aktuals_jatekos].aktualis_koordinatak.y + 1;
        x_uj = jatek_adatok.jatekosok[jatek_adatok.jatekosok.aktuals_jatekos].aktualis_koordinatak.x;
    } else {
        x_uj = jatek_adatok.jatekosok[jatek_adatok.jatekosok.aktuals_jatekos].aktualis_koordinatak.x + 1;
        y_uj = jatek_adatok.jatekosok[jatek_adatok.jatekosok.aktuals_jatekos].aktualis_koordinatak.y;
    }

    if (x_uj < 0) {
        x_uj = 6
    }
    if (y_uj < 0) {
        y_uj = 6
    }
    if (x_uj > 6) {
        x_uj = 0
    }
    if (y_uj > 6) {
        y_uj = 0
    }

    let aktualis_elem = jatek_adatok.labirintus[x][y];
    let tervezett_elem = jatek_adatok.labirintus[x_uj][y_uj];

    if (irany === "Up") {
        if (aktualis_elem.ajtok[0] && tervezett_elem.ajtok[2]) {
            lehet = true;
        }
    } else if (irany === "Left") {
        if (aktualis_elem.ajtok[3] && tervezett_elem.ajtok[1]) {
            lehet = true;
        }
    } else if (irany === "Right") {
        if (aktualis_elem.ajtok[1] && tervezett_elem.ajtok[3]) {
            lehet = true;
        }
    } else {
        if (aktualis_elem.ajtok[2] && tervezett_elem.ajtok[0]) {
            lehet = true;
        }
    }

    let ok = undefined;

    if (lehet) {
        for (let k = 0; k < jatek_adatok.jatekosok.length; k++) {
            if (jatek_adatok.jatekosok[k].aktualis_koordinatak.x === x_uj && jatek_adatok.jatekosok[k].aktualis_koordinatak.y === y_uj) {
                lehet = false;
                ok = "Másik játékos van az adott mezőn. Lépés nem lehetséges!"
            } else if (k === jatek_adatok.jatekosok.aktuals_jatekos) {
                for (let l = 0; l < jatek_adatok.jatekosok[k].kincskartyak.length; l++) {
                    if (jatek_adatok.jatekosok[k].kincskartyak[l].x === x_uj && jatek_adatok.jatekosok[k].kincskartyak[l].y === y_uj) {
                        jatek_adatok.jatekosok[k].kincskartyak.splice(l, 1);
                        jatek_adatok.jatekosok[k].pontok++;
                    }
                }
            }
        }
    }

    if (lehet) {
        jatek_adatok.jatekosok[jatek_adatok.jatekosok.aktuals_jatekos].aktualis_koordinatak = add_koordinatak(x_uj, y_uj);
        jatekter_kirajzolasa(true);
        kontroll_kirajzolasa(true);
    } else {
        if (ok) {
            alert(ok)
        } else {
            alert("Lépés nem lehetséges!")
        }
    }
}

function egyezo_koordinatak(koordinatak_1, koordinatak_2) {
    if (koordinatak_1.x === koordinatak_2.x) {
        if (koordinatak_1.y === koordinatak_2.y) {
            return true;
        }
    }
    return false;
}

function jatek_vege_ellenorzes() {
    let aktualis = jatek_adatok.jatekosok.aktuals_jatekos;
    if (jatek_adatok.jatekosok[aktualis].kincskartyak.length === 0) {
        if (jatek_adatok.jatekosok[aktualis].kincskartyak.length === 0) {
            if (egyezo_koordinatak(jatek_adatok.jatekosok[aktualis].kezdo_koordinatak, jatek_adatok.jatekosok[aktualis].aktualis_koordinatak))
                kezdooldal();
            alert("Játék vége! Az " + aktualis + " játékos nyert!")
        }
    }
}

/*
 * Oldal inicializálásához
 */

document.addEventListener('keydown', (event) => {
    const keyName = event.key;

    if (keyName === 'Control') {
        return;
    }

    if (keyName.includes("Arrow")) {
        let irany = keyName.substring(5);
        jatek_adatok.lepesek_szama++;
        if (jatek_adatok.lepesek_szama === 4) {
            alert("Következő játékos lép!")
            jatek_adatok.lepesek_szama = 0;
            jatek_adatok.mezo_beillesztes = false;
            jatek_adatok.jatekosok.aktuals_jatekos++;
            if (jatek_adatok.jatekosok.aktuals_jatekos >= jatek_adatok.jatekosok.length) {
                jatek_adatok.jatekosok.aktuals_jatekos = 0;
            }

            jatekter_kirajzolasa(true);
            kontroll_kirajzolasa(true);
        } else {
            jatekos_mozgatas(irany)
        }
        jatek_vege_ellenorzes()
    }

}, false);

document.body.onload = kezdooldal();