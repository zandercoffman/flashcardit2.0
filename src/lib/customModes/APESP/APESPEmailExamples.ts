export interface EmailFormat {
    from: string;
    title: string;
    miniDescription: string;
    emailBody: string;
    introduction: string;
    tema: string;
}

/**
 * You are generating a practice task for the AP Spanish Language and Composition Email Reply section.

Use the following TypeScript interface EXACTLY for your output:

interface EmailFormat {
from: string;
title: string;
miniDescription: string;
emailBody: string;
introduction: string;
tema: string;
}

Follow ALL rules carefully:

---

## FORMAT + STYLE REFERENCE

Use the following example as a STRICT style, tone, and length reference. Your generated emailBody and introduction should be VERY similar in structure, length, and formatting (but NOT copied):

Tema curricular: Las familias y las comunidades
Introducción
Este mensaje electrónico es de Raúl Galindo, director de la Oficina de Voluntariado del Centro Comunitario
Municipal. Has recibido este mensaje porque quieres colaborar con esta organización en su programa de actividades
extraescolares para estudiantes de la escuela primaria.

De Raúl Galindo
Asunto Oportunidades de voluntariado

Estimado/a estudiante:
Le agradezco su interés en cooperar con nuestro centro ofreciendo hacer trabajo voluntario.
Con el objetivo de ayudar a los estudiantes de la escuela primaria, nuestra organización
ofrece clases de apoyo después del horario escolar. Además, organizamos competiciones
deportivas y juegos para quienes acuden al centro. Para poder planificar mejor la
colaboración de los voluntarios, nos gustaría recibir la siguiente información:

• ¿En qué actividad o actividades le gustaría participar y por qué?
• ¿Por qué le parece importante hacer este tipo de trabajo voluntario?

Gracias por su interés en colaborar con nuestro centro. En cuanto tengamos su respuesta,
podremos organizar el horario de actividades para el resto del año escolar. Si tuviera alguna
pregunta, le contestaré con mucho gusto.

Atentamente,
Raúl Galindo, Director
Oficina de Voluntariado
Centro Comunitario Municipal

---

## GENERATION RULES

1. RANDOMIZATION

* Generate a random full name for the sender
* Assign a gender
* Decide whether the tone uses **tú** or **usted** naturally

2. SITUATION

* Create a realistic role (director, entrenador, organizador, profesor, coordinador, etc.)
* Create a specific situation (volunteering, internship, exchange, club, job, event, etc.)

3. READER CONTEXT

* The student must have a clear reason for receiving the email (applied, signed up, showed interest, etc.)

4. PURPOSE

* The email must have a clear goal (requesting info, offering opportunity, confirming participation, etc.)
* Keep it aligned with AP themes

5. EMAIL BODY (VERY IMPORTANT)

* Must be written in Spanish
* Must be **similar in length and structure to the example**
* Include:

  * Greeting
  * Context paragraph(s)
  * A bullet-point list with **2–4 randomized questions**
  * Closing paragraph
  * Signature
* Keep it natural and realistic

6. INTRODUCTION (VERY IMPORTANT)

* Must closely match the structure of the example:

  * Start with: “Tema curricular: …”
  * Then “Introducción”
  * Then a short paragraph explaining who the sender is and why the student received the email
* Same tone and format, but new content

7. miniDescription

* MUST be in Spanish
* 1–2 sentences summarizing the scenario

8. title

* A short subject line in Spanish

9. tema

* One AP theme in Spanish (e.g., “Las familias y las comunidades”)

---

## OUTPUT RULE

Output ONLY a valid EmailFormat object.
Do NOT include explanations.
Do NOT include extra text.

 */

export const AllEmails: EmailFormat[] = [
    {
        from: "Lucía Herrera",
        title: "Programa de mentoría juvenil",
        miniDescription: "Una coordinadora de un programa juvenil te escribe para conocer más sobre tu interés en participar como mentor. Quiere organizar mejor las actividades y saber tus motivaciones.",
        emailBody: "Estimada/o estudiante:\nLe agradezco su interés en formar parte de nuestro programa de mentoría juvenil en el Centro Educativo Horizonte. Este programa tiene como objetivo apoyar a estudiantes de secundaria mediante orientación académica y actividades de desarrollo personal. Nuestros mentores ayudan con tareas escolares, organizan talleres y sirven como modelos positivos para los jóvenes.\n\nPara poder planificar mejor su participación en el programa, nos gustaría recibir la siguiente información:\n\n• ¿Qué tipo de actividades le gustaría realizar con los estudiantes y por qué?\n• ¿Qué experiencias previas tiene trabajando con jóvenes o en entornos educativos?\n• ¿Cuáles son sus metas personales al participar en este programa?\n\nAgradecemos mucho su interés en colaborar con nosotros. Una vez que recibamos su respuesta, podremos asignarle un grupo y establecer un horario adecuado para las actividades. Si tiene alguna pregunta, no dude en comunicarse conmigo.\n\nAtentamente,\nLucía Herrera, Coordinadora\nPrograma de Mentoría Juvenil\nCentro Educativo Horizonte",
        introduction: "Este mensaje electrónico es de Lucía Herrera, coordinadora del Programa de Mentoría Juvenil del Centro Educativo Horizonte. Has recibido este mensaje porque mostraste interés en participar como mentor para apoyar a estudiantes de secundaria en sus actividades académicas y personales.",
        tema: "Las familias y las comunidades"
    },
    {
from: "Isabel Moreno",
title: "Participación en programa de intercambio juvenil",
miniDescription: "Invitación para participar en un programa de intercambio y desarrollo cultural.",
emailBody: "Estimado/a estudiante:\nLe agradezco su interés en formar parte de nuestro programa de intercambio juvenil. Esta iniciativa busca fomentar el aprendizaje cultural y la convivencia entre jóvenes de diferentes comunidades. Durante su participación, se organizarán talleres, actividades recreativas y sesiones de integración para todos los participantes. Para poder coordinar mejor su participación, necesitamos la siguiente información:\n\n• ¿Cuál es tu motivación para unirte a este programa y qué esperas aprender?\n• ¿Qué habilidades o experiencias previas tienes que podrían ser útiles en las actividades?\n• ¿Tienes alguna preferencia en el tipo de actividades en las que te gustaría participar?\n\nAgradecemos tu pronta respuesta para poder organizar el calendario de actividades. Si tienes alguna pregunta, no dudes en contactarnos.\n\nAtentamente,\nIsabel Moreno, Coordinadora\nPrograma de Intercambio Juvenil",
introduction: "Este mensaje electrónico es de Isabel Moreno, coordinadora del Programa de Intercambio Juvenil. Has recibido este mensaje porque mostraste interés en participar en nuestras actividades culturales y de convivencia.",
tema: "Las familias y las comunidades"
},
{
from: "Carlos Rivera",
title: "Oportunidad de voluntariado ambiental",
miniDescription: "Convocatoria para colaborar en proyectos de conservación y cuidado del medio ambiente.",
emailBody: "Estimado/a estudiante:\nGracias por mostrar interés en colaborar con nuestro proyecto ambiental. Nuestra organización se dedica a la conservación de espacios verdes y al desarrollo de programas educativos sobre sostenibilidad. Los voluntarios participarán en actividades de limpieza, plantación de árboles y talleres educativos. Para coordinar tu participación, necesitamos la siguiente información:\n\n• ¿Qué te motiva a participar en actividades de conservación ambiental?\n• ¿Tienes experiencia previa en trabajo voluntario o proyectos ecológicos?\n• ¿Qué días y horarios te serían más convenientes para colaborar?\n\nEsperamos tu respuesta para poder organizar los turnos de trabajo. Si tienes preguntas, estoy a tu disposición.\n\nAtentamente,\nCarlos Rivera, Director\nFundación Verde",
introduction: "Este mensaje electrónico es de Carlos Rivera, director de la Fundación Verde. Has recibido este mensaje porque te inscribiste para colaborar en nuestro proyecto de voluntariado ambiental.",
tema: "El medio ambiente y la sostenibilidad"
},
{
from: "María Fernanda López",
title: "Confirmación para el club de debate",
miniDescription: "Solicitud de información para organizar la participación en el club de debate escolar.",
emailBody: "Estimado/a estudiante:\nTe agradecemos tu interés en formar parte de nuestro club de debate. El objetivo del club es fomentar la capacidad crítica, la expresión oral y el trabajo en equipo entre los estudiantes. Cada semana se realizan sesiones de práctica y competencias amistosas con otras escuelas. Para poder planificar tu incorporación, necesitamos que respondas lo siguiente:\n\n• ¿Qué temas te interesa debatir y por qué?\n• ¿Tienes experiencia previa en debates o presentaciones públicas?\n• ¿Prefieres participar en sesiones presenciales o virtuales?\n\nAgradecemos tu pronta respuesta para organizar el calendario de reuniones. Si tienes dudas, no dudes en escribirme.\n\nAtentamente,\nMaría Fernanda López, Coordinadora\nClub de Debate Escolar",
introduction: "Este mensaje electrónico es de María Fernanda López, coordinadora del Club de Debate Escolar. Has recibido este mensaje porque te inscribiste para participar en nuestras actividades de debate.",
tema: "La educación y el desarrollo académico"
},
{
from: "José Antonio Vargas",
title: "Invitación a taller de liderazgo juvenil",
miniDescription: "Información sobre la inscripción y participación en un taller de liderazgo.",
emailBody: "Estimado/a estudiante:\nGracias por mostrar interés en nuestro taller de liderazgo juvenil. Este programa está diseñado para desarrollar habilidades de comunicación, trabajo en equipo y resolución de problemas entre los jóvenes participantes. Durante el taller se realizarán dinámicas grupales y sesiones de capacitación. Para organizar tu participación, necesitamos que respondas lo siguiente:\n\n• ¿Por qué te interesa participar en este taller y qué esperas lograr?\n• ¿Tienes experiencia previa en roles de liderazgo o proyectos comunitarios?\n• ¿Qué días te resultan más convenientes para asistir a las sesiones?\n\nEsperamos tu respuesta para confirmar tu lugar en el taller. Si necesitas más información, estoy disponible para ayudarte.\n\nAtentamente,\nJosé Antonio Vargas, Director\nCentro Juvenil de Liderazgo",
introduction: "Este mensaje electrónico es de José Antonio Vargas, director del Centro Juvenil de Liderazgo. Has recibido este mensaje porque solicitaste información sobre nuestro taller de liderazgo.",
tema: "Las oportunidades de desarrollo personal"
},
{
from: "Lucía Herrera",
title: "Participación en programa deportivo escolar",
miniDescription: "Solicitud de información para unirse a actividades deportivas organizadas por la escuela.",
emailBody: "Estimado/a estudiante:\nTe agradecemos tu interés en participar en nuestro programa deportivo escolar. El objetivo es promover hábitos saludables, trabajo en equipo y diversión a través de diferentes deportes y juegos. Los participantes tendrán la oportunidad de entrenar y competir en torneos internos. Para organizar tu inscripción, necesitamos que respondas lo siguiente:\n\n• ¿Qué deporte o actividad te gustaría practicar y por qué?\n• ¿Tienes experiencia previa en deportes o actividades físicas?\n• ¿Qué días y horarios serían más convenientes para ti?\n\nGracias por tu pronta respuesta para coordinar las actividades de la temporada. Si tienes dudas, estoy a tu disposición.\n\nAtentamente,\nLucía Herrera, Coordinadora\nPrograma Deportivo Escolar",
introduction: "Este mensaje electrónico es de Lucía Herrera, coordinadora del Programa Deportivo Escolar. Has recibido este mensaje porque mostraste interés en participar en nuestras actividades deportivas.",
tema: "La salud y el bienestar"
},
{
from: "Sofía Ramírez",
title: "Oportunidad de voluntariado en biblioteca comunitaria",
miniDescription: "Invitación para colaborar en la organización de actividades culturales y educativas en la biblioteca.",
emailBody: "Estimado/a estudiante:\nGracias por tu interés en colaborar con nuestra biblioteca comunitaria. Nuestro objetivo es fomentar la lectura y el aprendizaje entre niños y jóvenes de la comunidad. Los voluntarios participan en actividades como talleres de lectura, organización de eventos culturales y apoyo en la zona infantil. Para coordinar tu participación, necesitamos que respondas lo siguiente:\n\n• ¿Por qué te interesa trabajar como voluntario en la biblioteca?\n• ¿Tienes experiencia previa en actividades educativas o culturales?\n• ¿Qué días y horarios te serían más convenientes para colaborar?\n\nEsperamos tu respuesta para poder organizar el calendario de voluntariado. Si tienes dudas, con gusto te atenderé.\n\nAtentamente,\nSofía Ramírez, Directora\nBiblioteca Comunitaria",
introduction: "Este mensaje electrónico es de Sofía Ramírez, directora de la Biblioteca Comunitaria. Has recibido este mensaje porque solicitaste información sobre cómo participar en nuestras actividades educativas.",
tema: "Las familias y las comunidades"
},
{
from: "Miguel Torres",
title: "Confirmación de participación en taller de arte",
miniDescription: "Solicitud de información para organizar la asistencia al taller de arte juvenil.",
emailBody: "Estimado/a estudiante:\nLe agradecemos su interés en nuestro taller de arte juvenil. El taller busca desarrollar la creatividad y expresión artística de los participantes a través de diferentes técnicas y actividades prácticas. Para coordinar su participación, necesitamos que responda lo siguiente:\n\n• ¿Qué tipo de arte o técnica te interesa explorar y por qué?\n• ¿Tienes experiencia previa en actividades artísticas o creativas?\n• ¿Qué días y horarios te serían más convenientes para asistir al taller?\n\nAgradecemos su pronta respuesta para poder organizar el calendario de sesiones. Si tuviera alguna pregunta, no dude en contactarme.\n\nAtentamente,\nMiguel Torres, Coordinador\nTaller de Arte Juvenil",
introduction: "Este mensaje electrónico es de Miguel Torres, coordinador del Taller de Arte Juvenil. Has recibido este mensaje porque solicitaste participar en nuestras actividades artísticas.",
tema: "La educación y el desarrollo académico"
},
{
from: "Valentina Guzmán",
title: "Invitación a programa de liderazgo escolar",
miniDescription: "Convocatoria para un programa que fomenta habilidades de liderazgo y trabajo en equipo.",
emailBody: "Estimado/a estudiante:\nGracias por tu interés en participar en nuestro programa de liderazgo escolar. Este programa está diseñado para desarrollar habilidades de comunicación, resolución de conflictos y trabajo en equipo. Los participantes realizarán dinámicas grupales, debates y proyectos colaborativos. Para organizar tu participación, necesitamos que respondas lo siguiente:\n\n• ¿Por qué deseas participar en este programa y qué esperas aprender?\n• ¿Tienes experiencia previa en roles de liderazgo o proyectos escolares?\n• ¿Qué días te resultan más convenientes para asistir a las sesiones?\n\nEsperamos tu pronta respuesta para confirmar tu inscripción. Si necesitas más información, estoy a tu disposición.\n\nAtentamente,\nValentina Guzmán, Coordinadora\nPrograma de Liderazgo Escolar",
introduction: "Este mensaje electrónico es de Valentina Guzmán, coordinadora del Programa de Liderazgo Escolar. Has recibido este mensaje porque solicitaste información sobre cómo participar en nuestras actividades de liderazgo.",
tema: "Las oportunidades de desarrollo personal"
},
{
from: "Alejandro Paredes",
title: "Participación en programa deportivo extracurricular",
miniDescription: "Información para inscribirse y coordinar la participación en actividades deportivas escolares.",
emailBody: "Estimado/a estudiante:\nLe agradecemos su interés en participar en nuestro programa deportivo extracurricular. Nuestro objetivo es promover la actividad física, el trabajo en equipo y hábitos saludables entre los estudiantes. Los participantes podrán entrenar y competir en diferentes disciplinas. Para organizar su inscripción, necesitamos que responda lo siguiente:\n\n• ¿Qué deporte o actividad física te interesa practicar y por qué?\n• ¿Tienes experiencia previa en deportes o competencias?\n• ¿Qué días y horarios serían más convenientes para ti?\n\nGracias por su pronta respuesta para coordinar las actividades. Si tiene alguna pregunta, estoy disponible para ayudarle.\n\nAtentamente,\nAlejandro Paredes, Director\nPrograma Deportivo Escolar",
introduction: "Este mensaje electrónico es de Alejandro Paredes, director del Programa Deportivo Escolar. Has recibido este mensaje porque mostraste interés en participar en nuestras actividades deportivas.",
tema: "La salud y el bienestar"
},
{
from: "Camila Soto",
title: "Oportunidad de voluntariado en centro comunitario",
miniDescription: "Invitación para colaborar en actividades educativas y recreativas para niños y adolescentes.",
emailBody: "Estimado/a estudiante:\nGracias por interesarte en colaborar con nuestro centro comunitario. Nuestro objetivo es ofrecer actividades educativas y recreativas para niños y adolescentes de la comunidad. Los voluntarios participan en talleres, juegos, apoyo escolar y eventos culturales. Para coordinar tu colaboración, necesitamos que respondas lo siguiente:\n\n• ¿Por qué te interesa ser voluntario en nuestro centro?\n• ¿Tienes experiencia previa en actividades educativas o recreativas?\n• ¿Qué días y horarios te serían más convenientes para participar?\n\nEsperamos tu respuesta para organizar las actividades del semestre. Si tienes alguna pregunta, con gusto te atenderé.\n\nAtentamente,\nCamila Soto, Coordinadora\nCentro Comunitario Juvenil",
introduction: "Este mensaje electrónico es de Camila Soto, coordinadora del Centro Comunitario Juvenil. Has recibido este mensaje porque solicitaste información sobre cómo colaborar en nuestras actividades.",
tema: "Las familias y las comunidades"
},
{
from: "Diego Fernández",
title: "Inscripción al taller de ciencia y tecnología",
miniDescription: "Invitación para participar en un taller que fomenta habilidades científicas y tecnológicas.",
emailBody: "Estimado/a estudiante:\nLe agradecemos su interés en nuestro taller de ciencia y tecnología. Este programa busca desarrollar habilidades científicas, experimentación y pensamiento crítico entre los jóvenes participantes. Durante el taller, se realizarán experimentos, proyectos y actividades interactivas. Para coordinar su participación, necesitamos que responda lo siguiente:\n\n• ¿Qué área de la ciencia o tecnología le interesa más y por qué?\n• ¿Tiene experiencia previa en proyectos científicos o tecnológicos?\n• ¿Qué días y horarios serían más convenientes para asistir al taller?\n\nEsperamos su pronta respuesta para poder organizar el calendario de actividades. Si tiene alguna duda, no dude en contactarnos.\n\nAtentamente,\nDiego Fernández, Coordinador\nTaller de Ciencia y Tecnología Juvenil",
introduction: "Este mensaje electrónico es de Diego Fernández, coordinador del Taller de Ciencia y Tecnología Juvenil. Has recibido este mensaje porque solicitaste participar en nuestras actividades educativas.",
tema: "La ciencia y la tecnología"
},
{
from: "Paula Jiménez",
title: "Oportunidad de voluntariado en centro de adultos mayores",
miniDescription: "Solicitud para colaborar en actividades recreativas y educativas con adultos mayores.",
emailBody: "Estimado/a estudiante:\nGracias por mostrar interés en colaborar con nuestro centro de adultos mayores. Nuestro objetivo es ofrecer actividades recreativas, educativas y sociales para mejorar la calidad de vida de nuestros participantes. Los voluntarios participan en talleres, juegos, actividades culturales y acompañamiento. Para coordinar tu colaboración, necesitamos que respondas lo siguiente:\n\n• ¿Por qué te interesa trabajar con adultos mayores?\n• ¿Tienes experiencia previa en voluntariado o actividades similares?\n• ¿Qué días y horarios te serían más convenientes para participar?\n\nAgradecemos tu pronta respuesta para organizar las actividades del mes. Si tienes preguntas, estoy disponible para ayudarte.\n\nAtentamente,\nPaula Jiménez, Directora\nCentro de Adultos Mayores",
introduction: "Este mensaje electrónico es de Paula Jiménez, directora del Centro de Adultos Mayores. Has recibido este mensaje porque solicitaste información sobre cómo colaborar en nuestras actividades.",
tema: "Las familias y las comunidades"
},
{
from: "Andrés Molina",
title: "Confirmación de participación en programa de liderazgo escolar",
miniDescription: "Información para coordinar la participación en un programa que desarrolla habilidades de liderazgo.",
emailBody: "Estimado/a estudiante:\nLe agradecemos su interés en participar en nuestro programa de liderazgo escolar. Este programa busca fortalecer habilidades de comunicación, resolución de problemas y trabajo en equipo entre los estudiantes. Durante el programa, se realizarán talleres, dinámicas grupales y proyectos colaborativos. Para organizar su participación, necesitamos que responda lo siguiente:\n\n• ¿Qué le motiva a participar en este programa y qué espera aprender?\n• ¿Tiene experiencia previa en roles de liderazgo o proyectos escolares?\n• ¿Qué días y horarios le serían más convenientes para asistir a las sesiones?\n\nEsperamos su pronta respuesta para confirmar su inscripción. Si tiene dudas, estoy a su disposición.\n\nAtentamente,\nAndrés Molina, Coordinador\nPrograma de Liderazgo Escolar",
introduction: "Este mensaje electrónico es de Andrés Molina, coordinador del Programa de Liderazgo Escolar. Has recibido este mensaje porque solicitaste información sobre nuestras actividades de liderazgo.",
tema: "Las oportunidades de desarrollo personal"
},
{
from: "Daniela Vega",
title: "Participación en programa de música y artes",
miniDescription: "Convocatoria para unirse a actividades musicales y artísticas organizadas por la escuela.",
emailBody: "Estimado/a estudiante:\nGracias por tu interés en nuestro programa de música y artes. El objetivo es fomentar la creatividad, la expresión artística y la apreciación musical entre los estudiantes. Los participantes tendrán la oportunidad de asistir a clases, talleres y presentaciones. Para coordinar tu participación, necesitamos que respondas lo siguiente:\n\n• ¿Qué instrumento o actividad artística te interesa practicar y por qué?\n• ¿Tienes experiencia previa en música o artes?\n• ¿Qué días y horarios te serían más convenientes para asistir a las sesiones?\n\nAgradecemos tu pronta respuesta para organizar el calendario de actividades. Si tienes preguntas, con gusto te atenderé.\n\nAtentamente,\nDaniela Vega, Coordinadora\nPrograma de Música y Artes",
introduction: "Este mensaje electrónico es de Daniela Vega, coordinadora del Programa de Música y Artes. Has recibido este mensaje porque solicitaste participar en nuestras actividades artísticas.",
tema: "La educación y el desarrollo académico"
},
{
from: "Fernando Castillo",
title: "Oportunidad de voluntariado en club deportivo",
miniDescription: "Invitación para colaborar en la organización de actividades deportivas escolares.",
emailBody: "Estimado/a estudiante:\nLe agradecemos su interés en colaborar con nuestro club deportivo. El objetivo es promover hábitos saludables, trabajo en equipo y desarrollo de habilidades deportivas. Los voluntarios participan en la organización de entrenamientos, torneos y eventos deportivos. Para coordinar su participación, necesitamos que responda lo siguiente:\n\n• ¿Qué deporte o actividad te interesa apoyar y por qué?\n• ¿Tienes experiencia previa en deportes o en la organización de actividades?\n• ¿Qué días y horarios le serían más convenientes para colaborar?\n\nEsperamos su pronta respuesta para coordinar las actividades de la temporada. Si tiene alguna duda, estoy disponible para atenderle.\n\nAtentamente,\nFernando Castillo, Director\nClub Deportivo Escolar",
introduction: "Este mensaje electrónico es de Fernando Castillo, director del Club Deportivo Escolar. Has recibido este mensaje porque solicitaste información sobre cómo participar en nuestras actividades deportivas.",
tema: "La salud y el bienestar"
},
{
from: "Natalia Quintero",
title: "Inscripción a programa de ciencia para jóvenes",
miniDescription: "Invitación a participar en actividades de experimentación y aprendizaje científico.",
emailBody: "Estimado/a estudiante:\nGracias por mostrar interés en nuestro programa de ciencia para jóvenes. El objetivo es fomentar la curiosidad, el pensamiento crítico y las habilidades científicas a través de experimentos y proyectos interactivos. Para coordinar tu participación, necesitamos que respondas lo siguiente:\n\n• ¿Qué área de la ciencia te interesa más y por qué?\n• ¿Tienes experiencia previa en proyectos o experimentos científicos?\n• ¿Qué días y horarios te serían más convenientes para participar?\n\nEsperamos tu respuesta para organizar el calendario del programa. Si tienes dudas, con gusto te atenderé.\n\nAtentamente,\nNatalia Quintero, Coordinadora\nPrograma de Ciencia Juvenil",
introduction: "Este mensaje electrónico es de Natalia Quintero, coordinadora del Programa de Ciencia Juvenil. Has recibido este mensaje porque solicitaste información sobre cómo participar en nuestras actividades científicas.",
tema: "La ciencia y la tecnología"
},
{
from: "Héctor Salazar",
title: "Oportunidad de voluntariado en centro cultural",
miniDescription: "Invitación para colaborar en actividades educativas y artísticas en un centro cultural.",
emailBody: "Estimado/a estudiante:\nGracias por tu interés en colaborar con nuestro centro cultural. Nuestro objetivo es ofrecer talleres, exposiciones y actividades educativas que fomenten la creatividad y el aprendizaje en la comunidad. Para coordinar tu participación, necesitamos que respondas lo siguiente:\n\n• ¿Qué tipo de actividad te interesa apoyar y por qué?\n• ¿Tienes experiencia previa en voluntariado o en actividades culturales?\n• ¿Qué días y horarios te serían más convenientes para participar?\n\nEsperamos tu respuesta para organizar el calendario de voluntariado. Si tienes preguntas, estoy disponible para ayudarte.\n\nAtentamente,\nHéctor Salazar, Director\nCentro Cultural Comunitario",
introduction: "Este mensaje electrónico es de Héctor Salazar, director del Centro Cultural Comunitario. Has recibido este mensaje porque solicitaste información sobre cómo colaborar en nuestras actividades culturales.",
tema: "Las familias y las comunidades"
},
{
from: "Alejandra Méndez",
title: "Confirmación para taller de liderazgo juvenil",
miniDescription: "Solicitud de información para coordinar la participación en un taller de liderazgo.",
emailBody: "Estimado/a estudiante:\nLe agradecemos su interés en participar en nuestro taller de liderazgo juvenil. Este programa busca fortalecer habilidades de comunicación, resolución de problemas y trabajo en equipo entre los participantes. Para organizar su participación, necesitamos que responda lo siguiente:\n\n• ¿Qué le motiva a participar en este taller y qué espera aprender?\n• ¿Tiene experiencia previa en liderazgo o proyectos comunitarios?\n• ¿Qué días y horarios le serían más convenientes para asistir a las sesiones?\n\nEsperamos su pronta respuesta para confirmar su inscripción. Si tiene alguna pregunta, estoy disponible para ayudarle.\n\nAtentamente,\nAlejandra Méndez, Coordinadora\nTaller de Liderazgo Juvenil",
introduction: "Este mensaje electrónico es de Alejandra Méndez, coordinadora del Taller de Liderazgo Juvenil. Has recibido este mensaje porque solicitaste información sobre cómo participar en nuestras actividades de liderazgo.",
tema: "Las oportunidades de desarrollo personal"
},
{
from: "Raúl Delgado",
title: "Participación en programa de deportes escolares",
miniDescription: "Información para inscribirse y participar en actividades deportivas organizadas por la escuela.",
emailBody: "Estimado/a estudiante:\nLe agradecemos su interés en participar en nuestro programa de deportes escolares. Nuestro objetivo es promover la actividad física, el trabajo en equipo y hábitos saludables entre los estudiantes. Los participantes podrán entrenar y competir en diferentes disciplinas. Para coordinar su participación, necesitamos que responda lo siguiente:\n\n• ¿Qué deporte o actividad te interesa practicar y por qué?\n• ¿Tienes experiencia previa en deportes o competencias?\n• ¿Qué días y horarios serían más convenientes para ti?\n\nGracias por su pronta respuesta para organizar las actividades de la temporada. Si tiene alguna pregunta, estoy disponible para atenderle.\n\nAtentamente,\nRaúl Delgado, Director\nPrograma Deportivo Escolar",
introduction: "Este mensaje electrónico es de Raúl Delgado, director del Programa Deportivo Escolar. Has recibido este mensaje porque solicitaste información sobre cómo participar en nuestras actividades deportivas.",
tema: "La salud y el bienestar"
},
{
from: "Carolina Ríos",
title: "Invitación a programa artístico juvenil",
miniDescription: "Convocatoria para participar en actividades musicales y artísticas de la escuela.",
emailBody: "Estimado/a estudiante:\nGracias por mostrar interés en nuestro programa artístico juvenil. El objetivo es fomentar la creatividad, la expresión y la apreciación artística entre los estudiantes. Los participantes tendrán la oportunidad de asistir a talleres, clases y presentaciones artísticas. Para coordinar tu participación, necesitamos que respondas lo siguiente:\n\n• ¿Qué tipo de arte o instrumento te interesa practicar y por qué?\n• ¿Tienes experiencia previa en música o artes?\n• ¿Qué días y horarios te serían más convenientes para asistir a las sesiones?\n\nAgradecemos tu pronta respuesta para organizar el calendario del programa. Si tienes dudas, con gusto te atenderé.\n\nAtentamente,\nCarolina Ríos, Coordinadora\nPrograma Artístico Juvenil",
introduction: "Este mensaje electrónico es de Carolina Ríos, coordinadora del Programa Artístico Juvenil. Has recibido este mensaje porque solicitaste participar en nuestras actividades artísticas.",
tema: "La educación y el desarrollo académico"
},
{
from: "Renata Ponce",
title: "Oportunidad de voluntariado en centro de jóvenes",
miniDescription: "Invitación para colaborar en actividades educativas y recreativas con adolescentes.",
emailBody: "Estimado/a estudiante:\nGracias por tu interés en colaborar con nuestro centro de jóvenes. Nuestro objetivo es ofrecer talleres educativos, actividades recreativas y programas de mentoría para fomentar el desarrollo personal y social de los participantes. Para coordinar tu participación, necesitamos que respondas lo siguiente:\n\n• ¿Por qué te interesa trabajar con adolescentes en este centro?\n• ¿Tienes experiencia previa en actividades educativas o recreativas?\n• ¿Qué días y horarios te serían más convenientes para participar?\n\nEsperamos tu respuesta para organizar las actividades del semestre. Si tienes alguna pregunta, con gusto te atenderé.\n\nAtentamente,\nRenata Ponce, Coordinadora\nCentro de Jóvenes Comunitario",
introduction: "Este mensaje electrónico es de Renata Ponce, coordinadora del Centro de Jóvenes Comunitario. Has recibido este mensaje porque solicitaste información sobre cómo participar en nuestras actividades.",
tema: "Las familias y las comunidades"
},
{
from: "Santiago Rojas",
title: "Inscripción al taller de programación y tecnología",
miniDescription: "Invitación para participar en un taller que desarrolla habilidades digitales y tecnológicas.",
emailBody: "Estimado/a estudiante:\nLe agradecemos su interés en nuestro taller de programación y tecnología. El objetivo es fomentar habilidades digitales, pensamiento lógico y creatividad a través de proyectos prácticos. Para coordinar su participación, necesitamos que responda lo siguiente:\n\n• ¿Qué área de la tecnología o programación le interesa más y por qué?\n• ¿Tiene experiencia previa en proyectos tecnológicos o de programación?\n• ¿Qué días y horarios le serían más convenientes para asistir al taller?\n\nEsperamos su pronta respuesta para organizar el calendario de actividades. Si tiene alguna duda, no dude en contactarnos.\n\nAtentamente,\nSantiago Rojas, Coordinador\nTaller de Programación Juvenil",
introduction: "Este mensaje electrónico es de Santiago Rojas, coordinador del Taller de Programación Juvenil. Has recibido este mensaje porque solicitaste información sobre cómo participar en nuestras actividades tecnológicas.",
tema: "La ciencia y la tecnología"
},
{
from: "Isabela Castillo",
title: "Confirmación para programa de liderazgo estudiantil",
miniDescription: "Solicitud de información para coordinar la participación en un programa de liderazgo.",
emailBody: "Estimado/a estudiante:\nLe agradecemos su interés en participar en nuestro programa de liderazgo estudiantil. Este programa busca fortalecer habilidades de comunicación, trabajo en equipo y resolución de conflictos entre los participantes. Para organizar su participación, necesitamos que responda lo siguiente:\n\n• ¿Qué le motiva a participar en este programa y qué espera aprender?\n• ¿Tiene experiencia previa en liderazgo o proyectos escolares?\n• ¿Qué días y horarios le serían más convenientes para asistir a las sesiones?\n\nEsperamos su pronta respuesta para confirmar su inscripción. Si tiene alguna pregunta, estoy disponible para ayudarle.\n\nAtentamente,\nIsabela Castillo, Coordinadora\nPrograma de Liderazgo Estudiantil",
introduction: "Este mensaje electrónico es de Isabela Castillo, coordinadora del Programa de Liderazgo Estudiantil. Has recibido este mensaje porque solicitaste información sobre nuestras actividades de liderazgo.",
tema: "Las oportunidades de desarrollo personal"
},
{
from: "Javier Molina",
title: "Participación en programa de deportes extracurriculares",
miniDescription: "Información para inscribirse y participar en actividades deportivas organizadas por la escuela.",
emailBody: "Estimado/a estudiante:\nGracias por mostrar interés en nuestro programa de deportes extracurriculares. Nuestro objetivo es fomentar la actividad física, hábitos saludables y trabajo en equipo entre los estudiantes. Los participantes podrán entrenar y competir en diversas disciplinas. Para coordinar su inscripción, necesitamos que responda lo siguiente:\n\n• ¿Qué deporte o actividad física le interesa practicar y por qué?\n• ¿Tiene experiencia previa en deportes o competencias?\n• ¿Qué días y horarios le serían más convenientes para participar?\n\nEsperamos su respuesta para organizar las actividades de la temporada. Si tiene alguna duda, estoy disponible para atenderle.\n\nAtentamente,\nJavier Molina, Director\nPrograma Deportivo Escolar",
introduction: "Este mensaje electrónico es de Javier Molina, director del Programa Deportivo Escolar. Has recibido este mensaje porque solicitaste información sobre cómo participar en nuestras actividades deportivas.",
tema: "La salud y el bienestar"
},
{
from: "Mariana Ortega",
title: "Invitación a taller de artes y creatividad juvenil",
miniDescription: "Convocatoria para participar en actividades artísticas y culturales organizadas por la escuela.",
emailBody: "Estimado/a estudiante:\nLe agradecemos su interés en nuestro taller de artes y creatividad juvenil. El objetivo es fomentar la expresión artística, la creatividad y la apreciación cultural entre los estudiantes. Los participantes tendrán la oportunidad de asistir a talleres, clases y presentaciones artísticas. Para coordinar su participación, necesitamos que responda lo siguiente:\n\n• ¿Qué tipo de arte o actividad creativa le interesa practicar y por qué?\n• ¿Tiene experiencia previa en artes o actividades culturales?\n• ¿Qué días y horarios le serían más convenientes para asistir al taller?\n\nEsperamos su pronta respuesta para organizar el calendario del programa. Si tiene alguna pregunta, estoy disponible para ayudarle.\n\nAtentamente,\nMariana Ortega, Coordinadora\nTaller de Artes Juvenil",
introduction: "Este mensaje electrónico es de Mariana Ortega, coordinadora del Taller de Artes Juvenil. Has recibido este mensaje porque solicitaste información sobre cómo participar en nuestras actividades artísticas.",
tema: "La educación y el desarrollo académico"
},
{
from: "Laura Jiménez",
title: "Oportunidad de voluntariado en centro ambiental",
miniDescription: "Invitación para participar en actividades de conservación y educación ambiental.",
emailBody: "Estimado/a estudiante:\nLe agradecemos su interés en colaborar con nuestro centro ambiental. Nuestro objetivo es promover la conservación de la naturaleza y la educación sobre sostenibilidad entre los jóvenes de la comunidad. Los voluntarios participarán en proyectos de limpieza, plantación de árboles y talleres educativos. Para coordinar su participación, necesitamos que responda lo siguiente:\n\n• ¿Por qué le interesa participar en actividades ambientales?\n• ¿Tiene experiencia previa en proyectos de conservación o voluntariado?\n• ¿Qué días y horarios le serían más convenientes para colaborar?\n\nEsperamos su pronta respuesta para organizar las actividades del semestre. Si tiene alguna duda, estoy disponible para atenderle.\n\nAtentamente,\nLaura Jiménez, Coordinadora\nCentro Ambiental Juvenil",
introduction: "Este mensaje electrónico es de Laura Jiménez, coordinadora del Centro Ambiental Juvenil. Has recibido este mensaje porque solicitaste información sobre cómo participar en nuestras actividades de voluntariado ambiental.",
tema: "El medio ambiente y la sostenibilidad"
},
{
from: "Andrés Torres",
title: "Inscripción al taller de escritura creativa",
miniDescription: "Invitación para participar en un taller que fomenta la creatividad y habilidades literarias.",
emailBody: "Estimado/a estudiante:\nGracias por mostrar interés en nuestro taller de escritura creativa. El objetivo del taller es desarrollar la creatividad, la expresión escrita y la apreciación literaria entre los participantes. Para coordinar su participación, necesitamos que responda lo siguiente:\n\n• ¿Qué tipo de escritura le interesa explorar y por qué?\n• ¿Tiene experiencia previa en escritura o actividades literarias?\n• ¿Qué días y horarios le serían más convenientes para asistir al taller?\n\nEsperamos su respuesta para organizar el calendario de actividades. Si tiene dudas, con gusto le atenderé.\n\nAtentamente,\nAndrés Torres, Coordinador\nTaller de Escritura Creativa",
introduction: "Este mensaje electrónico es de Andrés Torres, coordinador del Taller de Escritura Creativa. Has recibido este mensaje porque solicitaste información sobre cómo participar en nuestras actividades literarias.",
tema: "La educación y el desarrollo académico"
},
{
from: "Carla Mendoza",
title: "Confirmación para programa de liderazgo juvenil",
miniDescription: "Solicitud de información para coordinar la participación en un programa de liderazgo.",
emailBody: "Estimado/a estudiante:\nLe agradecemos su interés en participar en nuestro programa de liderazgo juvenil. Este programa busca fortalecer habilidades de comunicación, trabajo en equipo y resolución de conflictos entre los jóvenes participantes. Para organizar su participación, necesitamos que responda lo siguiente:\n\n• ¿Qué le motiva a participar en este programa y qué espera aprender?\n• ¿Tiene experiencia previa en liderazgo o proyectos escolares?\n• ¿Qué días y horarios le serían más convenientes para asistir a las sesiones?\n\nEsperamos su pronta respuesta para confirmar su inscripción. Si tiene alguna pregunta, estoy disponible para ayudarle.\n\nAtentamente,\nCarla Mendoza, Coordinadora\nPrograma de Liderazgo Juvenil",
introduction: "Este mensaje electrónico es de Carla Mendoza, coordinadora del Programa de Liderazgo Juvenil. Has recibido este mensaje porque solicitaste información sobre cómo participar en nuestras actividades de liderazgo.",
tema: "Las oportunidades de desarrollo personal"
},
{
from: "Ricardo Herrera",
title: "Participación en programa deportivo escolar",
miniDescription: "Información para inscribirse y participar en actividades deportivas de la escuela.",
emailBody: "Estimado/a estudiante:\nGracias por su interés en nuestro programa deportivo escolar. El objetivo es promover la actividad física, hábitos saludables y trabajo en equipo entre los estudiantes. Los participantes podrán entrenar y competir en diferentes deportes. Para coordinar su participación, necesitamos que responda lo siguiente:\n\n• ¿Qué deporte le interesa practicar y por qué?\n• ¿Tiene experiencia previa en deportes o competencias?\n• ¿Qué días y horarios le serían más convenientes para participar?\n\nEsperamos su respuesta para organizar las actividades de la temporada. Si tiene alguna duda, estoy disponible para atenderle.\n\nAtentamente,\nRicardo Herrera, Director\nPrograma Deportivo Escolar",
introduction: "Este mensaje electrónico es de Ricardo Herrera, director del Programa Deportivo Escolar. Has recibido este mensaje porque solicitaste información sobre cómo participar en nuestras actividades deportivas.",
tema: "La salud y el bienestar"
},
{
from: "Valeria Castillo",
title: "Invitación a taller de artes visuales",
miniDescription: "Convocatoria para participar en actividades artísticas y creativas de la escuela.",
emailBody: "Estimado/a estudiante:\nLe agradecemos su interés en nuestro taller de artes visuales. El objetivo es fomentar la creatividad, la expresión artística y la apreciación cultural entre los estudiantes. Los participantes tendrán la oportunidad de asistir a talleres, clases y presentaciones artísticas. Para coordinar su participación, necesitamos que responda lo siguiente:\n\n• ¿Qué tipo de arte o técnica le interesa practicar y por qué?\n• ¿Tiene experiencia previa en artes visuales o actividades culturales?\n• ¿Qué días y horarios le serían más convenientes para asistir al taller?\n\nEsperamos su pronta respuesta para organizar el calendario del programa. Si tiene alguna pregunta, estoy disponible para ayudarle.\n\nAtentamente,\nValeria Castillo, Coordinadora\nTaller de Artes Visuales",
introduction: "Este mensaje electrónico es de Valeria Castillo, coordinadora del Taller de Artes Visuales. Has recibido este mensaje porque solicitaste información sobre cómo participar en nuestras actividades artísticas.",
tema: "La educación y el desarrollo académico"
},
{
from: "Gabriela Fuentes",
title: "Oportunidad de voluntariado en centro juvenil",
miniDescription: "Invitación para colaborar en actividades educativas y recreativas para jóvenes de la comunidad.",
emailBody: "Estimado/a estudiante:\nGracias por tu interés en colaborar con nuestro centro juvenil. Nuestro objetivo es ofrecer talleres educativos, actividades recreativas y programas de mentoría para fomentar el desarrollo personal y social de los participantes. Para coordinar tu participación, necesitamos que respondas lo siguiente:\n\n• ¿Por qué te interesa trabajar con jóvenes en nuestro centro?\n• ¿Tienes experiencia previa en voluntariado o actividades educativas?\n• ¿Qué días y horarios te serían más convenientes para participar?\n\nEsperamos tu pronta respuesta para organizar las actividades del semestre. Si tienes alguna pregunta, con gusto te atenderé.\n\nAtentamente,\nGabriela Fuentes, Coordinadora\nCentro Juvenil Comunitario",
introduction: "Este mensaje electrónico es de Gabriela Fuentes, coordinadora del Centro Juvenil Comunitario. Has recibido este mensaje porque solicitaste información sobre cómo participar en nuestras actividades.",
tema: "Las familias y las comunidades"
},
{
from: "Jorge Martínez",
title: "Inscripción al taller de robótica",
miniDescription: "Invitación para participar en un taller que fomenta habilidades tecnológicas y de programación.",
emailBody: "Estimado/a estudiante:\nLe agradecemos su interés en nuestro taller de robótica. El objetivo es desarrollar habilidades en programación, diseño y construcción de robots mediante proyectos prácticos y colaborativos. Para coordinar su participación, necesitamos que responda lo siguiente:\n\n• ¿Qué área de la robótica le interesa más y por qué?\n• ¿Tiene experiencia previa en proyectos de tecnología o robótica?\n• ¿Qué días y horarios le serían más convenientes para asistir al taller?\n\nEsperamos su pronta respuesta para organizar el calendario de actividades. Si tiene dudas, con gusto le atenderé.\n\nAtentamente,\nJorge Martínez, Coordinador\nTaller de Robótica Juvenil",
introduction: "Este mensaje electrónico es de Jorge Martínez, coordinador del Taller de Robótica Juvenil. Has recibido este mensaje porque solicitaste información sobre cómo participar en nuestras actividades tecnológicas.",
tema: "La ciencia y la tecnología"
},
{
from: "Ana Beltrán",
title: "Confirmación para programa de liderazgo escolar",
miniDescription: "Solicitud de información para coordinar la participación en un programa de liderazgo estudiantil.",
emailBody: "Estimado/a estudiante:\nLe agradecemos su interés en participar en nuestro programa de liderazgo escolar. Este programa busca fortalecer habilidades de comunicación, trabajo en equipo y resolución de conflictos entre los jóvenes participantes. Para organizar su participación, necesitamos que responda lo siguiente:\n\n• ¿Qué le motiva a participar en este programa y qué espera aprender?\n• ¿Tiene experiencia previa en liderazgo o proyectos escolares?\n• ¿Qué días y horarios le serían más convenientes para asistir a las sesiones?\n\nEsperamos su pronta respuesta para confirmar su inscripción. Si tiene alguna pregunta, estoy disponible para ayudarle.\n\nAtentamente,\nAna Beltrán, Coordinadora\nPrograma de Liderazgo Escolar",
introduction: "Este mensaje electrónico es de Ana Beltrán, coordinadora del Programa de Liderazgo Escolar. Has recibido este mensaje porque solicitaste información sobre nuestras actividades de liderazgo.",
tema: "Las oportunidades de desarrollo personal"
},
{
from: "Tomás Ramírez",
title: "Participación en programa deportivo escolar",
miniDescription: "Información para inscribirse y participar en actividades deportivas de la escuela.",
emailBody: "Estimado/a estudiante:\nGracias por su interés en nuestro programa deportivo escolar. El objetivo es promover la actividad física, hábitos saludables y trabajo en equipo entre los estudiantes. Los participantes podrán entrenar y competir en diversas disciplinas. Para coordinar su participación, necesitamos que responda lo siguiente:\n\n• ¿Qué deporte le interesa practicar y por qué?\n• ¿Tiene experiencia previa en deportes o competencias?\n• ¿Qué días y horarios le serían más convenientes para participar?\n\nEsperamos su respuesta para organizar las actividades de la temporada. Si tiene alguna duda, estoy disponible para atenderle.\n\nAtentamente,\nTomás Ramírez, Director\nPrograma Deportivo Escolar",
introduction: "Este mensaje electrónico es de Tomás Ramírez, director del Programa Deportivo Escolar. Has recibido este mensaje porque solicitaste información sobre cómo participar en nuestras actividades deportivas.",
tema: "La salud y el bienestar"
},
{
from: "Camila Paredes",
title: "Invitación a taller de artes escénicas",
miniDescription: "Convocatoria para participar en actividades teatrales y de expresión artística de la escuela.",
emailBody: "Estimado/a estudiante:\nLe agradecemos su interés en nuestro taller de artes escénicas. El objetivo es fomentar la creatividad, la expresión y la apreciación artística entre los estudiantes. Los participantes tendrán la oportunidad de asistir a talleres, ensayos y presentaciones teatrales. Para coordinar su participación, necesitamos que responda lo siguiente:\n\n• ¿Qué tipo de actividad escénica le interesa practicar y por qué?\n• ¿Tiene experiencia previa en teatro o actividades artísticas?\n• ¿Qué días y horarios le serían más convenientes para asistir al taller?\n\nEsperamos su pronta respuesta para organizar el calendario del programa. Si tiene alguna pregunta, estoy disponible para ayudarle.\n\nAtentamente,\nCamila Paredes, Coordinadora\nTaller de Artes Escénicas",
introduction: "Este mensaje electrónico es de Camila Paredes, coordinadora del Taller de Artes Escénicas. Has recibido este mensaje porque solicitaste información sobre cómo participar en nuestras actividades artísticas.",
tema: "La educación y el desarrollo académico"
},
{
from: "Lucía Valenzuela",
title: "Oportunidad de voluntariado en centro de lectura",
miniDescription: "Invitación para colaborar en actividades de fomento a la lectura para niños y jóvenes.",
emailBody: "Estimado/a estudiante:\nGracias por tu interés en colaborar con nuestro centro de lectura. Nuestro objetivo es promover la lectura y el aprendizaje entre niños y jóvenes de la comunidad. Los voluntarios participan en talleres de lectura, apoyo escolar y organización de actividades literarias. Para coordinar tu participación, necesitamos que respondas lo siguiente:\n\n• ¿Por qué te interesa fomentar la lectura entre los jóvenes?\n• ¿Tienes experiencia previa en actividades educativas o literarias?\n• ¿Qué días y horarios te serían más convenientes para participar?\n\nEsperamos tu respuesta para organizar las actividades del semestre. Si tienes alguna pregunta, con gusto te atenderé.\n\nAtentamente,\nLucía Valenzuela, Coordinadora\nCentro de Lectura Comunitario",
introduction: "Este mensaje electrónico es de Lucía Valenzuela, coordinadora del Centro de Lectura Comunitario. Has recibido este mensaje porque solicitaste información sobre cómo participar en nuestras actividades educativas.",
tema: "Las familias y las comunidades"
},
{
from: "Eduardo Cárdenas",
title: "Inscripción al taller de ciencias naturales",
miniDescription: "Invitación para participar en un taller de experimentación científica y aprendizaje práctico.",
emailBody: "Estimado/a estudiante:\nLe agradecemos su interés en nuestro taller de ciencias naturales. El objetivo es desarrollar habilidades científicas y pensamiento crítico a través de experimentos y proyectos prácticos. Para coordinar su participación, necesitamos que responda lo siguiente:\n\n• ¿Qué área de la ciencia le interesa explorar y por qué?\n• ¿Tiene experiencia previa en proyectos o experimentos científicos?\n• ¿Qué días y horarios le serían más convenientes para asistir al taller?\n\nEsperamos su pronta respuesta para organizar el calendario de actividades. Si tiene dudas, con gusto le atenderé.\n\nAtentamente,\nEduardo Cárdenas, Coordinador\nTaller de Ciencias Naturales",
introduction: "Este mensaje electrónico es de Eduardo Cárdenas, coordinador del Taller de Ciencias Naturales. Has recibido este mensaje porque solicitaste información sobre cómo participar en nuestras actividades científicas.",
tema: "La ciencia y la tecnología"
},
{
from: "Fernanda Ríos",
title: "Confirmación de participación en programa de liderazgo juvenil",
miniDescription: "Solicitud de información para coordinar la participación en un programa de liderazgo estudiantil.",
emailBody: "Estimado/a estudiante:\nLe agradecemos su interés en participar en nuestro programa de liderazgo juvenil. Este programa busca fortalecer habilidades de comunicación, trabajo en equipo y resolución de conflictos entre los jóvenes participantes. Para organizar su participación, necesitamos que responda lo siguiente:\n\n• ¿Qué le motiva a participar en este programa y qué espera aprender?\n• ¿Tiene experiencia previa en liderazgo o proyectos escolares?\n• ¿Qué días y horarios le serían más convenientes para asistir a las sesiones?\n\nEsperamos su pronta respuesta para confirmar su inscripción. Si tiene alguna pregunta, estoy disponible para ayudarle.\n\nAtentamente,\nFernanda Ríos, Coordinadora\nPrograma de Liderazgo Juvenil",
introduction: "Este mensaje electrónico es de Fernanda Ríos, coordinadora del Programa de Liderazgo Juvenil. Has recibido este mensaje porque solicitaste información sobre nuestras actividades de liderazgo.",
tema: "Las oportunidades de desarrollo personal"
},
{
from: "Diego Navarro",
title: "Participación en programa deportivo extracurricular",
miniDescription: "Información para inscribirse y participar en actividades deportivas organizadas por la escuela.",
emailBody: "Estimado/a estudiante:\nGracias por su interés en nuestro programa deportivo extracurricular. El objetivo es fomentar la actividad física, hábitos saludables y trabajo en equipo entre los estudiantes. Los participantes podrán entrenar y competir en diversas disciplinas. Para coordinar su inscripción, necesitamos que responda lo siguiente:\n\n• ¿Qué deporte le interesa practicar y por qué?\n• ¿Tiene experiencia previa en deportes o competencias?\n• ¿Qué días y horarios le serían más convenientes para participar?\n\nEsperamos su respuesta para organizar las actividades de la temporada. Si tiene alguna duda, estoy disponible para atenderle.\n\nAtentamente,\nDiego Navarro, Director\nPrograma Deportivo Escolar",
introduction: "Este mensaje electrónico es de Diego Navarro, director del Programa Deportivo Escolar. Has recibido este mensaje porque solicitaste información sobre cómo participar en nuestras actividades deportivas.",
tema: "La salud y el bienestar"
},
{
from: "Sofía Herrera",
title: "Invitación a taller de artes plásticas",
miniDescription: "Convocatoria para participar en actividades artísticas y creativas organizadas por la escuela.",
emailBody: "Estimado/a estudiante:\nLe agradecemos su interés en nuestro taller de artes plásticas. El objetivo es fomentar la creatividad, la expresión artística y la apreciación cultural entre los estudiantes. Los participantes tendrán la oportunidad de asistir a talleres, clases y exposiciones artísticas. Para coordinar su participación, necesitamos que responda lo siguiente:\n\n• ¿Qué tipo de técnica o actividad artística le interesa practicar y por qué?\n• ¿Tiene experiencia previa en artes plásticas o actividades culturales?\n• ¿Qué días y horarios le serían más convenientes para asistir al taller?\n\nEsperamos su pronta respuesta para organizar el calendario del programa. Si tiene alguna pregunta, estoy disponible para ayudarle.\n\nAtentamente,\nSofía Herrera, Coordinadora\nTaller de Artes Plásticas",
introduction: "Este mensaje electrónico es de Sofía Herrera, coordinadora del Taller de Artes Plásticas. Has recibido este mensaje porque solicitaste información sobre cómo participar en nuestras actividades artísticas.",
tema: "La educación y el desarrollo académico"
},
{
  from: "Carlos Mendoza",
  title: "Club de debate escolar",
  miniDescription: "Un coordinador solicita información para integrar a nuevos miembros en el club de debate.",
  emailBody: "Estimado/a estudiante:\nLe agradezco su interés en unirse a nuestro club de debate escolar.\nCon el objetivo de desarrollar habilidades de comunicación y pensamiento crítico, nuestro club\norganiza debates semanales sobre temas actuales. Además, participamos en competiciones\nregionales donde los estudiantes pueden demostrar sus capacidades. Para poder organizar mejor\nlas actividades del club, nos gustaría recibir la siguiente información:\n\n• ¿Por qué le interesa formar parte del club de debate?\n• ¿Qué temas le gustaría debatir y por qué?\n• ¿Tiene experiencia previa en hablar en público?\n\nGracias por su interés en participar en nuestro club. En cuanto tengamos su respuesta,\npodremos asignarle un grupo y comenzar con las actividades. Si tuviera alguna\npregunta, estaré encantado de ayudarle.\n\nAtentamente,\nCarlos Mendoza, Coordinador\nClub de Debate Escolar",
  introduction: "Tema curricular: La vida contemporánea\nIntroducción\nEste mensaje electrónico es de Carlos Mendoza, coordinador del club de debate escolar. Has recibido este mensaje porque te inscribiste para participar en este club académico.",
  tema: "La vida contemporánea"
},
{
  from: "María Torres",
  title: "Campamento de verano educativo",
  miniDescription: "Una organizadora solicita detalles para planificar la participación de estudiantes en un campamento.",
  emailBody: "Estimado/a estudiante:\nTe agradezco tu interés en participar en nuestro campamento de verano educativo.\nCon el propósito de ofrecer una experiencia divertida y formativa, organizamos talleres\nacadémicos, actividades deportivas y excursiones al aire libre. Además, contamos con\nmonitores especializados que guían a los estudiantes durante toda la estancia. Para poder\nplanificar mejor el programa, nos gustaría conocer la siguiente información:\n\n• ¿Qué actividades te interesan más y por qué?\n• ¿Tienes alguna experiencia previa en campamentos?\n• ¿Hay alguna necesidad especial que debamos considerar?\n\nGracias por tu interés en formar parte de este campamento. En cuanto recibamos tu respuesta,\npodremos asignarte a un grupo y enviarte más detalles. Si tienes alguna\npregunta, no dudes en contactarme.\n\nAtentamente,\nMaría Torres, Organizadora\nCampamento de Verano Educativo",
  introduction: "Tema curricular: Las familias y las comunidades\nIntroducción\nEste mensaje electrónico es de María Torres, organizadora de un campamento de verano educativo. Has recibido este mensaje porque solicitaste participar en este programa.",
  tema: "Las familias y las comunidades"
},
{
  from: "Javier Ruiz",
  title: "Prácticas profesionales en empresa",
  miniDescription: "Un gerente solicita información para seleccionar estudiantes interesados en prácticas laborales.",
  emailBody: "Estimado/a estudiante:\nLe agradezco su interés en realizar prácticas profesionales en nuestra empresa.\nCon el objetivo de brindar experiencia laboral a estudiantes, ofrecemos oportunidades\npara trabajar en diferentes departamentos. Además, los participantes recibirán\norientación de profesionales con experiencia en el campo. Para poder evaluar mejor su\nsolicitud, nos gustaría recibir la siguiente información:\n\n• ¿En qué área le gustaría realizar las prácticas y por qué?\n• ¿Qué habilidades cree que puede aportar a la empresa?\n• ¿Cuál es su disponibilidad durante la semana?\n\nGracias por su interés en colaborar con nosotros. En cuanto recibamos su respuesta,\npodremos continuar con el proceso de selección. Si tuviera alguna\npregunta, con gusto le responderé.\n\nAtentamente,\nJavier Ruiz, Gerente\nDepartamento de Recursos Humanos",
  introduction: "Tema curricular: La vida contemporánea\nIntroducción\nEste mensaje electrónico es de Javier Ruiz, gerente del departamento de recursos humanos. Has recibido este mensaje porque solicitaste realizar prácticas en esta empresa.",
  tema: "La vida contemporánea"
},
{
  from: "Ana López",
  title: "Festival cultural estudiantil",
  miniDescription: "Una directora solicita ideas y participación para un evento cultural en la escuela.",
  emailBody: "Estimado/a estudiante:\nLe agradezco su interés en participar en nuestro festival cultural estudiantil.\nCon el objetivo de celebrar la diversidad cultural, organizamos presentaciones\nartísticas, exposiciones y actividades gastronómicas. Además, los estudiantes\ntendrán la oportunidad de compartir tradiciones de diferentes países. Para poder\norganizar mejor el evento, nos gustaría recibir la siguiente información:\n\n• ¿Qué tipo de actividad le gustaría presentar?\n• ¿Por qué considera importante participar en este evento?\n• ¿Trabajará de manera individual o en grupo?\n\nGracias por su interés en colaborar con este festival. En cuanto tengamos su respuesta,\npodremos coordinar su participación. Si tuviera alguna\npregunta, estaré disponible para ayudarle.\n\nAtentamente,\nAna López, Directora\nFestival Cultural Estudiantil",
  introduction: "Tema curricular: La belleza y la estética\nIntroducción\nEste mensaje electrónico es de Ana López, directora del festival cultural estudiantil. Has recibido este mensaje porque mostraste interés en participar en este evento.",
  tema: "La belleza y la estética"
},
{
  from: "Diego Navarro",
  title: "Programa de tutoría académica",
  miniDescription: "Un coordinador solicita información para asignar tutores y estudiantes en un programa académico.",
  emailBody: "Estimado/a estudiante:\nLe agradezco su interés en formar parte de nuestro programa de tutoría académica.\nCon el objetivo de apoyar a estudiantes que necesitan ayuda adicional, nuestro\nprograma conecta a tutores con alumnos en diferentes materias. Además, ofrecemos\nrecursos educativos para facilitar el aprendizaje. Para poder organizar mejor el\nprograma, nos gustaría recibir la siguiente información:\n\n• ¿En qué materia le gustaría ser tutor o recibir ayuda?\n• ¿Cuál es su disponibilidad semanal?\n• ¿Qué experiencia tiene en enseñanza o estudio?\n\nGracias por su interés en participar en este programa. En cuanto recibamos su respuesta,\npodremos asignarle un horario adecuado. Si tuviera alguna\npregunta, no dude en contactarme.\n\nAtentamente,\nDiego Navarro, Coordinador\nPrograma de Tutoría Académica",
  introduction: "Tema curricular: La educación y las carreras profesionales\nIntroducción\nEste mensaje electrónico es de Diego Navarro, coordinador del programa de tutoría académica. Has recibido este mensaje porque te registraste para participar en este programa.",
  tema: "La educación y las carreras profesionales"
}
]