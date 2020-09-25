<template>
	<div>
		<el-input
			:size="size"
			:prefix-icon="prefixIcon"
			:placeholder="placeholder"
			:class="[className]"
			:type="type"
			v-model="model"
			@:input="parseValue($event)"
		/>
		<div>
			{{model}}
		</div>
	</div>
</template>

<script>
import { Input } from "element-ui";

export default {
	name: 'Input',
	props: {
		size: {
			type: String,
			default: 'large'
		},
		prefixIcon: {
			type: String
		},
		placeholder: {
			type: String
		},
		className: {
			type: String
		},
		model: {
			type: String
		},
		type: {
			type: String,
			required: true
		}
	},
	components: {
		"el-input": Input
	},
	methods: {
        parseValue (value) {
			console.log(value)
            this.$emit('el-input', value)
        }
    }
}
</script>
