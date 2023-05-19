import i18next from 'i18next'
import { initReactI18next } from "react-i18next"

i18next
    .use(initReactI18next)
    .init({
        fallbackLng:'en',
        resources: {
            en: {
                translation: {
                    about:'Humedal deepens its focus on the Latin American continent, thus enhancing locality unit concept. Seeking thus to visualize manifestations of relevant and emerging artists who are carrying out their activities in the region. For this reason, we will mainly have the participation of exponents from different countries in our region.',
                }
            },
            spa: {
                translation: {
                    about:'El Festival profundiza su foco en el continente latinoamericano, potenciando así el concepto de unidad de lugar. Buscando así visualizar manifestaciones de artistas relevantes y emergentes que se encuentren desempeñando sus actividades en la región. Por ello contamos principalmente con la participación de exponentes de distintos países de la región.',
                }
            },
        }
    })