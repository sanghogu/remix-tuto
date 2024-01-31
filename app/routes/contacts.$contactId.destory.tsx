
import {deleteContact} from "../data";
import {ActionFunctionArgs, redirect} from "@remix-run/node";
import invariant from "tiny-invariant";

export const action = async({params}:ActionFunctionArgs)=> {
    invariant(params.contactId, "missing")
    await deleteContact(params.contactId);

    return redirect("/")
}