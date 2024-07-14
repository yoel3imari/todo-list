import { notification } from "ant-design-vue";

const [api, contextHolder] = notification.useNotification();
const notif = api;
export {notif, contextHolder}