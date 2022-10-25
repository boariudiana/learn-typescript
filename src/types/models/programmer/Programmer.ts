import Language from "../../enums/Language";
import {typescript_info, java_info, javascript_info} from "../../utils/LanguageInfo"

export default class Programmer<T> {

    private languageName: Language.JAVA | Language.JAVASCRIPT | Language.TYPESCRIPT ;
    private languageInfo : T;

    constructor(lang: Language.JAVA | Language.JAVASCRIPT | Language.TYPESCRIPT) {
        this.languageName = lang;
        if(this.languageName === "typescript") {
            this.languageInfo = {...typescript_info} as T
        } else if (this.languageName === "javascript") {
            this.languageInfo = {...javascript_info} as T
        } else {
            this.languageInfo = {...java_info} as T
        }
        
    }

    printLanguageInfo () {
        console.log(this.languageInfo)
    }

    
 }