import { Button } from "./button";

export default function SearchBar () {
    return <form className="flex gap-3"><input type="text" className="w-full border border-black rounded-md px-3" placeholder="Search Job..."/> <Button type="button">Search</Button></form>
}