<template>
    <el-container direction="vertical">
        <el-row type="flex" justify="center" align="center">
            <el-col :span="12">
                <el-form ref="form" :model="form">
                    <el-form-item
                        :rules="[
							{ required: true, message: 'Email address is required!', type: 'email'},
						]"
                        prop="email"
                    >
                        <ui-input
                            size="large"
                            prefixIcon="el-icon-user-solid"
                            placeholder="E-mail address"
                            class="ui-form_input"
                            type="text"
                            :model="form.email"
                        />
                    </el-form-item>

                    <el-form-item
                        :rules="[
							{ required: true, message: 'Password is required!'},
						]"
                        prop="email"
                    >
                        <ui-input
                            size="large"
                            prefix-icon="el-icon-lock"
                            placeholder="Password"
                            class="ui-form_input"
                            type="password"
                            :model="form.password"
                        />
                    </el-form-item>

                    <el-form-item>
                        <el-button
                            :loading="false"
                            size="large"
                            type="primary"
                            class="w-100"
                            @click="submitForm('form')"
                        >Log in</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </el-container>
</template>

<script>
import { Button, Col, Container, Form, FormItem, Row } from "element-ui";
import { Input } from "../components";

export default {
    name: "Login",
    data() {
        return {
            form: {
                email: "",
                password: "",
            },
        };
    },
    components: {
        "el-form": Form,
        "el-form-item": FormItem,
        "ui-input": Input,
        "el-container": Container,
        "el-row": Row,
        "el-col": Col,
        "el-button": Button,
    },
    methods: {
        submitForm(form) {
            console.log(this.$refs[form]);

            // this.$refs[form].validate((valid) => {
            //     console.log(valid);

            //     if (valid) {
            //         alert("submit!");
            //     } else {
            //         console.log("error submit!!");
            //         return false;
            //     }
            // });
        },
    },
};
</script>
