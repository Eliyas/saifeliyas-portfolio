import { ELEMENT_TYPE } from "@/common/models";
import _, { size } from "lodash"
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { IconType } from "react-icons/lib";
import { uuid } from "uuidv4";

type ElementType = {
    value: string,
    class: string,
    type: string,
    color?: string,
    size?: string,
    iconType?: string,
    children?: ElementType[]
}

export class ComponentFromJSXBuilder {

    private iconTypeIconsMap: { [key: string]: IconType } = {
        "AiOutlineStar": AiOutlineStar,
        "AiFillStar": AiFillStar,
        "BsStarHalf": BsStarHalf,
    }

    private elementTypeBuildMethodsMap = {
        [ELEMENT_TYPE.BR_TAG]: this.buildBrTag.bind(this),
        [ELEMENT_TYPE.B_TAG]: this.buildBTag.bind(this),
        [ELEMENT_TYPE.DIV_TAG]: this.buildDivTag.bind(this),
        [ELEMENT_TYPE.ICON_TAG]: this.buildIconTag.bind(this),
        [ELEMENT_TYPE.SPAN_TAG]: this.buildSpanTag.bind(this)
    };

    public build(jsxBody: any[]) {
        let elements: any = [];
        return <>
            {this.constructElements(jsxBody, elements)}
        </>
    }

    private constructElements(jsxElements: any[], elements: any[]): any {
        _.each(jsxElements, (element: ElementType) => {
            if (this.elementTypeBuildMethodsMap[element.type]) {
                elements.push(this.elementTypeBuildMethodsMap[element.type](element));
            }
        });
        return elements;
    }

    private buildBrTag(element: ElementType) {
        return <br key={uuid()}/>
    }

    private buildBTag(element: ElementType) {
        return <b key={uuid()}>{element.value}</b>
    }

    private buildDivTag(element: ElementType) {
        let elements: any = [];
        return <div key={uuid()} className={element.class}>
            {element.value ? element.value : ""}
            {element.children ? this.constructElements(element.children, elements) : ""}
        </div>
    }

    private buildSpanTag(element: ElementType) {
        let elements: any = [];
        return <span key={uuid()} className={element.class}>
            {element.value ? element.value : ""}
            {element.children ? this.constructElements(element.children, elements) : ""}
        </span>
    }

    private buildIconTag(element: ElementType) {
        const Icon: IconType | null = element.iconType ? this.iconTypeIconsMap[element.iconType] : null;
        return <>
            {Icon ? <Icon key={uuid()} size={element.size} className={element.class} color={element.color} /> : ""}
        </>
    }

}