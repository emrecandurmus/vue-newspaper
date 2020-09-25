<template>
    <el-container>
		<el-row>
			<el-col :span="24">
				Footer
			</el-col>
		</el-row>
    </el-container>
</template>

<script>
import { Row, Col, Container } from "element-ui";

export default {
    name: "Footer",
    components: {
        "el-container": Container,
        "el-row": Row,
        "el-col": Col
    }
};
</script>
