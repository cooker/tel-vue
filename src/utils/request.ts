import axios from "axios";
import { roomStore } from './stores';

axios.defaults.baseURL = "http://127.0.0.1:8080";

export async function getRoomId() {
    try {
        const resp = await axios.get("/roomId");
        console.log("房间号：" + resp.data);
        roomStore().setRoomId(resp.data);
    } catch (error) {
        console.error(error);
    }
}

export async function pushMobile(mobileNo: string) {
    try {
        const resp = await axios.post("/push/" + roomStore().roomId + "?mobileNo=" + mobileNo);
        console.log("快速拨号：" + resp.data);
    } catch (error) {
        console.error(error);
    }
}