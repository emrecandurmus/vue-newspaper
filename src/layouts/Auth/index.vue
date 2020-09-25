<template>
    <el-container direction="vertical" class="layout layout__auth">
        <el-row type="flex" justify="end" align="middle">
            <el-col :span="9">
				<el-container direction="vertical">
					<el-row type="flex" justify="center">
						<el-col :span="12">
							<ui-header />
						</el-col>
					</el-row>

					<el-row type="flex" justify="center">
						<el-col :span="24">
							<slot />
						</el-col>
					</el-row>

					<el-row type="flex" justify="center">
						<el-col :span="24">
							<ui-footer />
						</el-col>
					</el-row>
				</el-container>
            </el-col>

			<el-col :span="15" class="layout__auth_imageblock">
				<h1>adasdad</h1>
			</el-col>
        </el-row>
    </el-container>
</template>

<script>
import { Col, Container, Row } from "element-ui";
import { Header, Footer } from "../../components";

export default {
    name: "Auth",
    components: {
        "el-container": Container,
        "el-row": Row,
        "el-col": Col,
        "ui-header": Header,
        "ui-footer": Footer
    }
};
</script>
