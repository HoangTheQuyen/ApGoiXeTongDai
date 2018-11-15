<template>
<div>
    <table class="table table-sm table-bordered">
        <tr>
            <th>ID</th>
            <th>Họ tên</th>
            <th>Số điện thoại</th>
            <th>Địa chỉ</th>
            <th>Ghi chú</th>
        </tr>
        <tbody>
            <tr v-for="request in listRequest" v-bind:key="request.id">
                <td>{{request.id}}</td>
                <td>{{request.name}}</td>
                <td>{{request.phone}}</td>
                <td>{{request.address}}</td>
                <td>{{request.note}}</td>
                <td>
                </td>
            </tr>
        </tbody>

    </table>
</div>
</template>

<script>
import axios from "axios";

import pusher from "pusher-js";

var socket = new Pusher("068d00130871386d6b37", {
    cluster: "ap1"
});
var my_channel = socket.subscribe("asp_channel");

const baseUrl = `http://localhost:5000/api/users/`;

export default {
    name: "location-identifier",

    data() {
        return {
            listRequest: []
        };
    },

    mounted() {
  
        axios.get(baseUrl).then(
              my_channel.bind("asp_event", (data) => {
            this.listRequest.push(data);
        })
        ).
        then(resp => {
            this.listRequest = resp.data;
        });
    },

};
</script>
