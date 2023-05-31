import i18next from 'i18next'
import { initReactI18next } from "react-i18next"

i18next
    .use(initReactI18next)
    .init({
        fallbackLng:'en',
        resources: {
            en: {
                translation: {
                    about_0:'Humedal deepens its focus on the Latin American continent, thus enhancing locality unit concept. Seeking thus to visualize manifestations of relevant and emerging artists who are carrying out their activities in the region. For this reason, we will mainly have the participation of exponents from different countries in our region.',
                    about_1:'Based in the city of Rosario, Argentina, Humedal: International Festival of Free Improvisation and Sound Arts is a gathering dedicated to promoting artistic experiences linked to sound as raw material.',
                    about_2:'As part of the diverse program lineup, including concerts, installations, exhibitions, workshops, seminars, and panel discussions, we actively encourage the collaboration and exchange between local artists, artists from various cities within the country, and artists from around the world.',
                    concerts:'concerts',
                    workshops:'workshops',
                    lectures:'lectures',
                    sonicart:'sound art'
                }
            },
            spa: {
                translation: {
                    about_0:'El Festival hace foco en el continente latinoamericano, potenciando así el concepto de unidad de lugar. Buscamos visualizar manifestaciones de artistas relevantes y emergentes que se encuentren desempeñando sus actividades en la región. Por ello contamos principalmente con la participación de exponentes de distintos países de la región.',
                    about_1:'Con sede en la ciudad de Rosario, Argentina; Humedal: Festival Internacional de Improvisación Libre y Artes Sonoras es un un encuentro dedicado a difundir las experiencias artísticas vinculadas al sonido como materia prima.',
                    about_2:'Dentro de la programación de las diferentes actividades – conciertos, instalaciones, muestras, talleres, seminarios y mesas de debate – fomentamos el cruce entre artistas locales, artistas provenientes de diferentes ciudades del país y del exterior.',
                    concerts:'conciertos',
                    workshops:'talleres',
                    lectures:'conferencias',
                    sonicart:'arte sonoro'
                }
            },
        }
    })