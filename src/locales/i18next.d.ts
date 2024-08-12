import {Locale} from './en'

declare module "i18next" {
    interface CustomTypeOptions {
        resources: Locale
    }
}