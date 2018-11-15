<template>
<div class="container">
    <h2>Nhập thông tin</h2>

    <form>
        <div class="form-group">
            <label for="user">Họ và tên:</label>
            <input type="text" class="form-control" id="user" v-model="user.name">
    </div>

            <div class="form-group">
                <label for="phone">Số điện thoại:</label>
                <input type="text" class="form-control" id="phone" v-model="user.phone">
    </div>

                <div class="form-group">
                    <label for="address">Địa Chỉ:</label>
                    <input type="text" class="form-control" id="address" v-model="user.address">
    </div>

                    <div class="form-group">
                        <label for="note">Ghi Chú:</label>
                        <input type="text" class="form-control" id="note" v-model="user.note">
    </div>
    </form>
    <button class="btn btn-sucess" @click="sendUser(user)">Gửi</button>
</div>
</template>

<script>
import axios from "axios";


export default {

    data() {
        return {
            user: {}
        }
    },
    methods: {
        sendUser(user) {
            axios.post(`http://localhost:5000/api/users/`, this.user);
        }
    }
};
</script>
