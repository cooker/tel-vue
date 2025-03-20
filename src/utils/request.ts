import axios from "axios";
import { roomStore } from './stores';
const toast = useToast()
axios.defaults.baseURL = "http://192.168.0.86:8080";

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
        if (mobileNo.length != 11 && 'S1' != mobileNo && 'S2' != mobileNo) {
            toast.add({
                title: 'Error',
                description: mobileNo + ' 手机号格式错误',
                color:'error'
              })
            return;
        }
        const resp = await axios.post("/push/" + roomStore().roomId + "?mobileNo=" + mobileNo);
        console.log("快速拨号：" + resp.data);
        toast.add({
            title: 'Success',
            description: mobileNo + ' 已加入 '+roomStore().roomId+' 拨号队列',
            color: 'success'
          })
    } catch (error) {
        console.error(error);
    }
}