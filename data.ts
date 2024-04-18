import { Driver } from "./driver.js";

export const drivers = [
    new Driver("Ayrton Senna", // nombre
    "Ayrton Senna fue un piloto de automovilismo brasilero. Compitió en Fórmula 1 para los equipos Toleman, Lotus, McLaren y Williams, entre 1984 y 1994, fue campeón mundial en 1988, 1990 y 1991, subcampeón en 1989 y 1993, tercero en 1987 y cuarto en 1985, 1986 y 1992, acumulando en total 41 victorias (6 de ellas en el Gran Premio de Mónaco, récord para el evento), 80 podios y 65 pole positions en tan solo 162 clasificaciones, con una efectividad de más del 40 %, figura entre los más exitosos y dominantes pilotos de la era moderna, y, para muchos expertos, es el más rápido de la historia.\nAyrton fue aclamado por sus extraordinarios desempeños con pista mojada, como el Gran Premio de Mónaco de 1984, Gran Premio de Portugal de 1985 y Gran Premio de Europa de 1993, teniendo los demás pilotos coches superiores. Era reconocido principalmente por su conducción veloz, técnica superlativa y a veces agresiva en carreras.\nAyrton Senna falleció debido a un fuerte choque sufrido en la curva de Tamburello durante la carrera en el Autódromo Enzo e Dino Ferrari durante el Gran Premio de San Marino de 1994. Una varilla de la suspensión del vehículo atravesó la visera de su casco provocándole una fatal herida en la cabeza.", // descripcion
    "https://media.gettyimages.com/id/99173833/es/foto/ayrton-senna-driver-the-honda-marlboro-mclaren-mp4-5b-during-pre-season-testing-in-february-1990.jpg?s=612x612&w=0&k=20&c=xTwzQQ_XRHaydUMiqrVTMkWcPYM8hdmNoafqAWu8mh0=", // imagenPrincipal
    "Alain Prost", // pilotoRivalidad
    "Mantuvo una intensa rivalidad con el piloto francés Alain Prost durante gran parte de su carrera, incluidos dos años como compañeros de equipo en McLaren. Para muchos, la rivalidad Senna-Prost fue la más intensa en toda la historia de la categoría. Años después de la muerte de Senna, el propio Prost reconoció que sin el brasileño nada hubiera sido igual, se retroalimentaban entre los dos gracias a su rivalidad.", // descripcionRivalidad
    "https://media.gettyimages.com/id/953177/es/foto/mclaren-honda-driver-alain-prost-of-france-celebrates-his-victory-with-team-mate-ayrton-senna-of.jpg?s=612x612&w=0&k=20&c=z5oVC94nTj0TWukk7GMSNHXq-QBPkHG3hXCO8CmJOyg=", // fotoRivalidad
    [
        "1985 GP de Portugal", "1985 GP de Belgica", "1986 GP de España", "1986 GP de Detroit",
        "1987 GP de Mónaco", "1987 GP de Detroit", "1988 GP de San Marino", "1988 GP de Canada",
        "1988 GP de Detroit", "1988 GP de Gran Bretaña", "1988 GP de Alemania", "1988 GP de Hungaria",
        "1988 GP de Belgica", "1988 GP de Japón", "1988 GP de San Marino", "1989 GP de Monaco",
        "1989 GP de México", "1989 GP de Alemania", "1989 GP de Belgica", "1989 GP de España",
        "1990 GP de Estados Unidos"
    ], [
        "1990 GP de Monaco", "1990 GP de Canada", "1990 GP de Alemania", "1990 GP de Belgica",
        "1990 GP de Italia", "1991 GP de Estados Unidos", "1991 GP de Brasil", "1991 GP de San Marino",
        "1991 GP de Monaco", "1991 GP de Hungaria", "1991 GP de Belgica", "1991 GP de Australia",
        "1992 GP de Monaco", "1992 GP de Hungaria", "1992 GP de Italia", "1993 GP de Brasil",
        "1993 GP de Europa", "1993 GP de Monaco", "1993 GP de Japon", "1993 GP de Australia"
    ], "https://media.gettyimages.com/id/768248271/es/foto/ayrton-senna-of-brazil-and-driver-of-the-marlboro-mclarenmclaren-mp4-8ford-hbe7-v8-stands-on.jpg?s=612x612&w=0&k=20&c=FYILpVmp41Q_oAJm-e_8MRgmweRmcjsa0u8T8piun8M=", // fotoGranPrix
    "Instituto Ayrton Senna", // legadoTitulo1
    "El Instituto Ayrton Senna es una organización sin fines de lucro que investiga y produce conocimiento para mejorar la calidad de la educación, a gran escala. Fundado en 1994, como el sueño de Senna, el Instituto trabaja para desarrollar el potencial de las nuevas generaciones y beneficia a los estudiantes para que tengan éxito en la escuela para poder responder a las necesidades profesionales, económicas , demandas culturales y políticas del siglo XXI. El Instituto prepara cada año a más de 60.000 docentes y directivos, y casi 2 millones de niños y jóvenes se benefician directamente del trabajo de estos docentes, que son capacitados por la organización, en más de 1.300 municipios de diversas regiones de Brasil.", // legadoDescripcion1
    "Seguridad en Fórmula 1", // legadoTitulo2
    "La muerte de Senna (y de Roland Ratzenberger que sucedió ese mismo fin de semana), revolucionó la seguridad de la Formula 1. Se tomaron varias medidas para reducir la velocidad de los autos, como reducir la cantidad de carga aerodinámica y agregar chicanes en curvas que de otro modo serían rápidas. Surgió una visión a más largo plazo de la evolución continua de la seguridad que se divide en tres áreas principales: cambio en los equipos del conductor y del carro, cambio en las pistas, y cambios en las instalaciones de cada carrera.", // legadoDescripcion2
    "https://media.gettyimages.com/id/501383115/es/foto/ayrton-senna-of-brazil-driver-of-the-honda-marlboro-mclaren-mclaren-mp4-6-honda-ra121e-v10.jpg?s=612x612&w=0&k=20&c=aHtH3hpAzEdODfKB5K8sMl0PlJBoKwyS4nwsFu42w64=" // fotoLegado
    ),
    new Driver("Michael Schumacher", // nombre
    "Michael Schumacher fue un piloto de automovilismo alemán. Compitió en Fórmula 1 para los equipos Jordan, Benetton, Ferrari y Mercedes, entre 1991 y 2012, siendo campeón mundial en siete ocasiones (1994, 1995, 2000, 2001, 2002, 2003 y 2004), acumulando en total 91 victorias, 68 pole positions y 155 podios en 308 carreras, es considerado uno de los pilotos más exitosos en la historia de la Fórmula 1.", // descripcion
    "https://media.gettyimages.com/id/51539929/es/foto/alemania-michael-schumacher-de-la-escuder%C3%ADa-benetton-ayuda-a-poner-la-picture-id51539929?s=612x612&w=0&k=20&c=xCvYPHJMiN32v2-u9HkZyOogcM1hxQgRnVuv6doYjUo=", // imagenPrincipal
    "Damon Hill", // pilotoRivalidad
    "Mantuvo una intensa rivalidad con el piloto británico Damon Hill durante parte de su carrera, especialmente durante la temporada de 1994 cuando ambos estaban compitiendo por el campeonato mundial. Su relación se tensó tras varios incidentes en pista.", // descripcionRivalidad
    "https://media.gettyimages.com/id/51658714/es/foto/williams-renault-driver-damon-hill-of-great-britain-and-benetton-ford-picture-id51658714?s=612x612&w=0&k=20&c=fhOK6gGxwQlZszFqWdGCn7H3EUG_mWXi_OcWPHRVRGg=", // fotoRivalidad
    [
        "1992 GP de Bélgica", "1992 GP de Italia", "1993 GP de Portugal", "1994 GP de Brasil",
        "1994 GP de Pacifico", "1994 GP de Mónaco", "1994 GP de Canadá", "1994 GP de Francia",
        "1994 GP de Gran Bretaña", "1994 GP de Alemania", "1994 GP de Hungría", "1994 GP de Bélgica",
        "1994 GP de Italia", "1994 GP de Europa", "1994 GP de Japón", "1995 GP de Brasil",
        "1995 GP de España", "1995 GP de Canadá", "1995 GP de Francia", "1995 GP de Alemania",
        "2000 GP de Australia", "2000 GP de Brasil", "2000 GP de San Marino", "2000 GP de Europa",
        "2000 GP de Francia", "2000 GP de Alemania", "2000 GP de Hungría", "2000 GP de Italia",
        "2000 GP de Estados Unidos"
    ], [
        "1996 GP de España", "1996 GP de Bélgica", "1996 GP de Italia", "1996 GP de Japón",
        "1997 GP de Mónaco", "1997 GP de Canadá", "1997 GP de Francia", "1997 GP de Hungría",
        "1997 GP de Bélgica", "1997 GP de Italia", "1997 GP de Japón", "1998 GP de Argentina",
        "2000 GP de Malasia", "2000 GP de Japón", "2001 GP de Australia", "2001 GP de Malasia",
        "2001 GP de España", "2001 GP de Mónaco", "2001 GP de Europa", "2001 GP de Francia",
        "2001 GP de Hungría", "2001 GP de Bélgica", "2001 GP de Italia", "2001 GP de Estados Unidos",
        "2001 GP de Japón", "2002 GP de Australia", "2002 GP de Malasia", "2002 GP de Brasil",
        "2002 GP de San Marino", "2002 GP de España", "2002 GP de Austria", "2002 GP de Mónaco",
        "2002 GP de Canadá", "2002 GP de Europa", "2002 GP de Francia", "2002 GP de Gran Bretaña",
        "2002 GP de Alemania", "2002 GP de Hungría", "2002 GP de Bélgica", "2002 GP de Italia",
        "2002 GP de Estados Unidos", "2002 GP de Japón", "2003 GP de Australia", "2003 GP de Malasia",
        "2003 GP de Brasil", "2003 GP de San Marino", "2003 GP de España", "2003 GP de Austria",
        "2003 GP de Mónaco", "2003 GP de Europa", "2003 GP de Francia", "2003 GP de Gran Bretaña",
        "2003 GP de Alemania", "2003 GP de Hungría", "2003 GP de Italia", "2003 GP de Estados Unidos",
        "2003 GP de Japón", "2004 GP de Australia", "2004 GP de Malasia", "2004 GP de Bahréin",
        "2004 GP de San Marino", "2004 GP de España", "2004 GP de Europa", "2004 GP de Canadá",
        "2004 GP de Estados Unidos", "2004 GP de Francia", "2004 GP de Gran Bretaña", "2004 GP de Alemania",
        "2004 GP de Hungría", "2004 GP de Bélgica", "2004 GP de Italia", "2004 GP de China",
        "2004 GP de Japón"
    ], "https://media.gettyimages.com/id/52143887/es/foto/benetton-renault-driver-michael-schumacher-of-germany-in-action-during-picture-id52143887?s=612x612&w=0&k=20&c=GNyhrbAxW0o3_zBoHbJioLk1rI4Jq8wIRf2LHZ0LfXE=", // fotoGranPrix
    "Fundación Keep Fighting", // legadoTitulo1
    "La Fundación Keep Fighting fue establecida por la familia de Michael Schumacher para continuar con su legado y apoyar causas que eran importantes para él. La fundación se enfoca en proyectos relacionados con la seguridad vial, la protección de la infancia y otros temas sociales.", // legadoDescripcion1
    "Desarrollo de Tecnología Médica", // legadoTitulo2
    "Después de sufrir un grave accidente de esquí en 2013 que lo dejó con lesiones cerebrales severas, la familia de Michael Schumacher ha estado activamente involucrada en el desarrollo y la promoción de la tecnología médica para mejorar el tratamiento y la rehabilitación de lesiones similares.", // legadoDescripcion2
    "https://media.gettyimages.com/id/76429967/es/foto/una-ilustraci%C3%B3n-en-3d-del-cerebro-humanoy-un-formulario-de-reclamaci%C3%B3n-picture-id76429967?s=612x612&w=0&k=20&c=4lKpn8IwDMT9N_95JKxfNdIRy8ma9R6KRBHgqto4fqg=" // fotoLegado
    )
]

export const data = drivers.map(driver => new Driver(driver.nombre, driver.descripcion, driver.imagenPrincipal, driver.pilotoRivalidad, driver.descripcionRivalidad, driver.fotoRivalidad, driver.granPrixGanados1, driver.granPrixGanados2, driver.fotoGranPrix, driver.legadoTitulo1, driver.legadoDescripcion1, driver.legadoTitulo2, driver.legadoDescripcion2, driver.fotoLegado))

