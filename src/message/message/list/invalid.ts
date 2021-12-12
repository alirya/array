import Message from "@dikac/t-message/message";
import ListInfer from "./infer";
import MapUnion from "../../../unions";
import Validatable from "@dikac/t-validatable/validatable";
import FilterInvalid from "../../../validatable/list/invalid";
import Map from "./map";

export default function Invalid<
    Messages extends (Message & Validatable)[]
>(
    list : Messages,
) : MapUnion<ListInfer<Messages>> {

    return Map(FilterInvalid(list));
}
