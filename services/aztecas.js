import { leyenda1, leyenda2, leyenda3 } from "./Leyendas"
//https://documenter.getpostman.com/view/24752969/2s8YzMXQYZ //api


const aztecas = {
    cultura: {
        apartado: "Cultura",
        pueblo: {
            apartado: "Pueblo",
            procedencia: "Los mexicas fueron una tribu de nómadas que formaron uno de los imperios más grandes e importantes de la América precolombina en solo 200 años. Tenían la mejor tecnología que se podía obtener dadas las condiciones en que vivían como acueductos, palacios, pirámides y templos que se alzaron como tributo a sus dioses y como testimonio de poder para la humanidad. Hacia el siglo XIII los mexicas se asentaron en Chapultepec, desde donde fueron expulsados por una coalición de enemigos. Luego de ser expulsados constituyeron su asentamiento definitivo en Tenochtitlan hacia 1325. Tenochtitlan se transformó en la principal ciudad de la zona, formando alianza con otras dos ciudades de habla nahuatl: Texcoco (acolhuas) y Tlacopan (tepanecas). Esta alianza, conocida como Triple Alianza (Ēxcān Tlahtōlōyān) logró desarrollar un gran poderío militar. Con Moctezuma II (1502-1520), los mexicas se habían transformado en uno de los principales imperios que dominaba un vasto territorio y millones de súbditos." +
                "La Triple Alianza (mexicas, acolhuas y tepanecas), comúnmente llamada Imperio mexica, fue la formación política mexica derivada del proceso de expansión territorial del dominio económico de la ciudad-estado México-Tenochtitlan, que floreció en el siglo XIV en Mesoamérica. Fue encabezado por los mexicas —mal conocidos como aztecas—, un pueblo que, de acuerdo con algunos documentos históricos como la Tira de la Peregrinación, era originario de un sitio —tal vez mítico— conocido como Aztlán, al que se suele ubicar fuera de los confines de Mesoamérica. Sin embargo, parece plausible que los mexicas fueran un pueblo de tradición cultural netamente mesoamericana y no los descendientes de grupos chichimecas dedicados a la cacería y la recolección.",
            estructura: "La élite gobernante de la Triple Alianza se apropiaba de la producción de las otras naciones mesoamericanas mediante la imposición de un tributo, que era fijado de acuerdo con la especialización económica y geográfica de los dominados y recolectado por un calpixque, o recaudador. Los dominadores no impusieron su religión ni su lengua a los dominados. Aunque es cierto que los estados sometidos no tenían independencia política total, seguían gobernados por grupos locales. Solo en algunos casos, los mexicas establecieron un control militar en ciertos puntos estratégicos de sus dominios.",
            gobernantes: {
                descripcion: "El nombre Huey tlatoani es una expresión náhuatl usada para denominar a los gobernantes (tlahtoāni significa literalmente «el que habla») de México-Tenochtitlan, Texcoco y Tlacopan, que ejercían su poder sobre el valle de México.",
                lista: [
                    {
                        nombre: "Tozcuecuextli",
                        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Boturini_Codex_%28folio_15%29.JPG/1178px-Boturini_Codex_%28folio_15%29.JPG",
                        reinado: "1233-1272"
                    },
                    {
                        nombre: "Huehue Huitzilíhuitl",
                        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Captura_de_H.Huitzilihuitl.JPG/450px-Captura_de_H.Huitzilihuitl.JPG",
                        reinado: "1272-1299"

                    },
                    {
                        nombre: "Ilancueitl",
                        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Ilancueitl.JPG/370px-Ilancueitl.JPG",
                        reinado: "1299-1347"
                    },
                    {
                        nombre: "Ténoch",
                        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Tenoch.jpg/285px-Tenoch.jpg",
                        reinado: "1347-1366"
                    },
                    {
                        nombre: "Acamapichtli",
                        img: "-",
                        reinado: "1366-1391"
                    },
                    {
                        nombre: "Huitzilíhuitl",
                        img: "-",
                        reinado: "1391-1415"
                    },
                    {
                        nombre: "Chimalpopoca",
                        img: "-",
                        reinado: "1415-1427"
                    },
                    {
                        nombre: "Itzcóatl",
                        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Ixcoatl.jpg/319px-Ixcoatl.jpg",
                        reinado: "1427-1440"
                    },
                    {
                        nombre: "Moctezuma Ilhuicamina",
                        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Huehuemoteuczoma_mendoza.jpg/297px-Huehuemoteuczoma_mendoza.jpg",
                        reinado: "1440-1469"
                    },
                    {
                        nombre: "Axayácatl",
                        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Axayacatl.jpg/385px-Axayacatl.jpg",
                        reinado: "1469-1481"
                    },
                    {
                        nombre: "Tízoc",
                        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Tizoc.jpg/351px-Tizoc.jpg",
                        reinado: "1481-1486"
                    },
                    {
                        nombre: "Ahuitzotl",
                        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Ahuitzotl.jpg/373px-Ahuitzotl.jpg",
                        reinado: "1486-1502"
                    },
                    {
                        nombre: "Moctezuma Xocoyotzin",
                        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Moctezuma_Xocoyotzin.png/276px-Moctezuma_Xocoyotzin.png",
                        reinado: "1502-1520"
                    },
                    {
                        nombre: "Cuitláhuac",
                        img: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Cuauhtl%C3%A1huac.jpg",
                        reinado: "1520"
                    },
                    {
                        nombre: "Cuauhtémoc",
                        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Relieve_de_Cuauht%C3%A9moc_%28Jes%C3%BAs_F._Contreras%29_09.jpg/298px-Relieve_de_Cuauht%C3%A9moc_%28Jes%C3%BAs_F._Contreras%29_09.jpg",
                        reinado: "1520-1525"
                    },
                ]
            },
            img: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Aztec_Triple_Alliance_Glyphs_Flag.png"
        },
        caracteristicas: {
            apartado: "características",
            datos: [
                "Habitaron el valle de México durante 200 años: desde 1325 d. C., hasta la conquista de los españoles en 1521 d. C.",
                "A partir de la alianza de las ciudades Tenochtitlán, Texcoco y Tlacopan, crearon un imperio centralizado y teocrático, gobernado por un tlatoani.",
                "Tenían una sociedad estratificada, dividida en tres grupos: pipiltin (nobles), macehualtin (gente común) y los esclavos.",
                "Desarrollaron una economía basada en la imposición de tributos, la tecnología agrícola y el comercio.",
                "Tuvieron una religión politeísta que influenciaba todos los aspectos de la vida social y política.",
                "Profundizaron los conocimientos en astronomía y crearon un sistema de escritura propio."
            ]
        },
        lengua: "náhuatl",
        comida: {
            apartado: "Comida",
            datos: [
                "El tamalli (tamal) era confeccionado al mezclar frijoles y verduras envueltos en hojas para poder cocerlos.",
                "El plato más común hecho con maíz era llamado comalli, que son tortillas hechas con masa de maíz molido.",
                "Fijoles",
                "Chiles",
                "Nopales",
                "Aguacates",
                "chocolate",
                "Las gachas de maíz",
                "El pulque"
            ],
            img: "https://etnias.mx/wp-content/uploads/2019/11/comida-aztecas.jpg"
        },
        vestimenta: {
            apartado: "Vestimenta",
            tipos: {
                hombres: "La vestimenta de los hombres aztecas era mucho más compleja, ya que dependía en gran medida del estatus social de este. El ropaje básico que llevaban todos era el maxtlatl, siendo un taparrabos de tela que se pasaba por la cintura de una forma semejante al que usan en la actualidad los luchadores de sumo. Tras ello llevaban una ropa de forma rectangular llamada tilmatli que era usada cual capa y que, dependiendo de la clase social a la que se perteneciera, se colocaba de una u otra forma. Pero no era solo la forma de colocar el tilmatli lo que marcaba la clase social del hombre, sino que el propio material de fabricación de la prenda también servía para ver el nivel económico y social de la persona que lo llevaba.",
                mujeres: "Se piensa que las mujeres aztecas vestían principalmente dos tipos de ropajes, siendo la parte de abajo una falda larga que recibía el nombre cueitl y en la parte de arriba una camisa amplia que recibía el nombre huepili. Debemos tener en cuenta que esto podía variar dependiendo de la zona, existiendo zonas de la cultura azteca donde las mujeres tan solo llevaban la parte de abajo. Para las épocas invernales la ropa de las mujeres no variaba demasiado, ya que tan solo llevaban una chaqueta de tela gruesa para llevar encima de las ropas que ya llevaban.",
                militares: "La vestimenta de los militares es la que todos tenemos en la cabeza al pensar en la ropa de los aztecas, siendo aquella con mayor número de elementos decorativos. La vestimenta principal era la de los hombres, pero además de ello llevaban unos monos adornados, sombreros son formas de animales, un chaleco de algodón y más decoración que marcaba el rango que cada uno tenía en el ejército.",
                sacerdotes: "La ropa de los sacerdotes cambiaba mucho dependiendo de la deidad principal a la que adorara, ya que debían vestir de la misma forma que vestían los dioses. Su ropa generalmente era muy rica en detalles, siendo de la misma gran calidad que la de las clases nobles. Un detalle curioso es que llevaban marcas de sangre y vísceras resultantes de los sacrificios, como forma de honrar a los dioses.",
                niños: "La ropa de los niños era semejante a la de los adultos, vistiendo las niñas exactamente igual que las mujeres, y los niños pudiendo ir desnudos o tan solo con el maxtlatl y no portando nada en la parte superior del cuerpo. No tenemos conocimiento de que en momento los niños pasaban a ser considerados adultos y su vestimenta cambiaba."
            },
            img: "https://cdn0.unprofesor.com/es/posts/1/2/2/vestimenta_de_los_aztecas_4221_600.webp"
        }
    },
    edificaciones: {
        apartado: "Edificaciones",
        templos: [
            {
                nombre: "Teotihuacán",
                descripcion: "Es uno de los mayores complejos arqueológicos de México, ubicado a unos 50 km. de la capital. El origen de la ciudad que según los aztecas fue fundada por los Dioses es todavía desconocido. Se calcula que surgió antes del 500 a.C. pero fueron los aztecas quienes alcanzaron su máximo esplendor y fundaron Tenochtitlán, la fabulosa ciudad sobre la cual los españoles levantaron México. Actualmente se puede visitar solo una pequeña parte de esta localidad. Entre los monumentos aztecas más importantes destacan la Pirámide del Sol y de la Luna, que enmarca la Calzada de los Muertos, el eje principal de las ruinas, además del Templo de Quetzalcóatl. Las escaleras de acceso a las pirámides requieren un cierto esfuerzo, pero regalan a cambio unas vistas excepcionales sobre Teotihuacán.",
                arquitectura: "En la arquitectura de Teotihuacán se emplearon las particularidades arquitectónicas propias de la pirámide que ya se conocían en Cuicuilco con la aplicación de una serie de plataformas que van achicándose conforme toman un nuevo nivel ascendente (solo que en Cuicuilco se trata de un cono, mientras que aquí son pirámides). Así pues se comenzó a edificar siguiendo el tipo de Cuicuilco, es decir una serie de plataformas por la penetración decrecientes con sus lados en talud. Más tarde se difundió el sistema constructivo de tablero sobre talud.",
                img: "https://static.rutasdeescape.com/wp-content/uploads/2018/07/iStock-Teotihuac%C3%A1n.jpg"
            },
            {
                nombre: "Tlatelolco",
                descripcion: "Fue el centro comercial más importante del México prehispánico. Entre los principales monumentos aztecas está el Templo Mayor, idéntico en medidas, orientación y arquitectura al Templo Mayor de Tenayuca y Tenochtitlan. Presenta 4 cuerpos piramidales escalonados y superpuestos. En la parte superior se erguían los altares para adorar a cada deidad.",
                arquitectura: "De acuerdo con los relatos de Hernán Cortés y Bernal Díaz del Castillo, el mercado estaba cercado por portales, organizado por calles a las que correspondía la comercialización de un producto en específico e incluso vigilado por un cuerpo especial que se encargaba de verificar cómo se hacían los intercambios.\nOfrecían de forma diferenciada alimentos, animales vivos, utensilios, plantas medicinales, comida preparada y hasta esclavos.\nPor su parte, en la zona central se hallaba el área exclusiva para la venta de artículos de los nobles, como plumas de aves exóticas, metales, piedras preciosas y diversos ornamentos.\nEsta ciudad se volvió el epicentro comercial de Mesoamérica bajo una estructura definida y reglas propias, incluso para la convivencia.",
                img: "https://static.rutasdeescape.com/wp-content/uploads/2018/07/iStock-Tlatelolco.jpg"
            },
            {
                nombre: "Cuicuilco",
                descripcion: "Es uno de los sitios arqueológicos más antiguos de México. Ubicado a pocos minutos de la Ciudad de México, en un parque ecológico, el sitio alberga una pirámide circular, parcialmente enterrada debido a una erupción volcánica. Como en el caso de Teotihuacán, sus orígenes se remontan al año 800 a. C. La erupción del cercano volcán Xitle arrasó la ciudad en el 200 a. C., pero fue reconstruida a partir del siglo XIII. Entre los principales monumentos aztecas están las ruinas de la Pirámide de Cuicuilco, ubicadas en el centro de la colina. Esta impresionante pirámide, que tiene 5 niveles y mide 18 metros de altura, fue utilizada para realizar ceremonias religiosas.",
                arquitectura: "En Cuicuilco se desarrolló una arquitectura compleja, diversa y planificada, se han encontrado las representaciones más tempranas de Huehueteotl, el dios viejo encargado del fuego y probablemente se dieron los primeros pasos en la creación de un calendario basado en la observación de los movimientos del sol.\nFue el primer centro cívico religioso de grandes dimensiones del Altiplano Mexicano, su población incluía prácticamente todos los estratos sociales y rasgos culturales que caracterizarían a las Ciudades-Estado de Mesoamérica.",
                img: "https://static.rutasdeescape.com/wp-content/uploads/2018/07/iStock-Cuicuilco.jpg"
            },
            {
                nombre: "Pirámides de Xochicalco",
                descripcion: "Ubicadas en el municipio de Miacatlan en Morelos, a 38 km. de Cuernavaca, han sido declaradas Patrimonio de la Humanidad por la Unesco en 1999. El nombre de Xochicalco proviene de la lengua náhuatl y significa ‘Lugar de la casa de las Flores’. En la a Plaza Central todavía se conserva la Gran Pirámide, con 20 altares redondos, y la Pirámide de la Serpiente Emplumada, con relieves en sus 4 lados. Hoy se puede visitar la residencia de los soberanos de esta antigua ciudad, conocida como la Acrópolis. También vale la pena conocer el Templo de las Estelas, donde los arqueólogos descubrieron unas lápidas relacionadas con Quetzalcóat.",
                arquitectura: "Este edificio está formado por una terraza de tres cuerpos sobre la que se localizó una pequeña escalera en el lado oeste; se cree que, por simetría, debió haber una en el lado este, aunque no se localizó. Sobre la terraza descansa el basamento de cuatro cuerpos que al mismo tiempo sostiene el templo: un gran cuarto con muros anchos de adobe y dos pilares en la fachada. Tanto la terraza como el basamento están decorados con el estilo arquitectónico que caracteriza a Xochicalco: un muro en talud sobre el que se ubica el paramento con una decoración de entrantes y salientes, rematado a su vez con otro paramento. La proporción entre los tres cuerpos que conforman el perfil arquitectónico varía entre los edificios, aunque por lo general el talud suele ser de mayores dimensiones y ambos paramentos tienen la misma altura. La escalinata central de la Gran Pirámide estaba flanqueada por alfardas que posiblemente estaban decoradas con cornisas que se encontraban a la altura del segundo paramento, lo que ayudaba al ajuste de inclinación de la escalera y la alfarda. Esta última estaba rematada con un dado cuyos bordes sobresalían y formaban una cavidad decorada con una serie de clavos de piedra dispuestos en forma simétrica, de los que se tienen numerosos ejemplos.",
                img: "https://static.rutasdeescape.com/wp-content/uploads/2018/07/iStock-Templo-da-serpente-emplumada-em-Xochicalco.jpg"
            },
        ]
    },
    localizacion: {
        apartado: "Localización",
        //poner cordenadas
        link: "https://goo.gl/maps/veWCUUQ69m4pMgrM7"
    },
    leyendas: {
        apartado: "Leyendas",
        data: [
            {
                nombre: "Leyenda del volcán Popocatépetl, una preciosa historia de amor",
                leyenda: leyenda1,
                img: "https://tucuentofavorito.com/wp-content/uploads/2020/06/guerrero.jpg.webp"
            },
            {
                nombre: "La leyenda del ajolote",
                leyenda: leyenda2,
                img: "https://tucuentofavorito.com/wp-content/uploads/2021/02/ajolote.jpg.webp"
            },
            {
                nombre: "El conejo de la luna: una lección de humildad",
                leyenda: leyenda3,
                img: "https://tucuentofavorito.com/wp-content/uploads/2020/06/leyenda-el-conejo-de-la-luna.jpg.webp"
            }
        ]
    }
}

export { aztecas }