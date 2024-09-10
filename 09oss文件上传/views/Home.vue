<template>
  <div class="content">
    <el-upload
      class="upload-demo"
      multiple
      :limit="1"
      :before-upload="beforeUpload"
      :http-request="httpUpload"
    >
      <el-button type="primary">上传</el-button>
      <template #tip>
        <div class="el-upload__tip">
          jpg/png files with a size less than 500KB.
        </div>
      </template></el-upload
    >
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
// import type { UploadProps, UploadUserFile } from "element-plus";
import OSS from "ali-oss";
const objData = reactive({});
const client = new OSS({

});

// 创建并填写Blob数据。
//const data = new Blob(['Hello OSS']);
// 创建并填写OSS Buffer内容。
//const data = new OSS.Buffer(['Hello OSS']);
const httpUpload = async (file) => {
  console.log(file);
  const data = file.file;

  const url = await client.multipartUpload(data.name, data, {
    progress: (p) => {
      console.log("进度", p);
    },
  });
  console.log("url", url);
};

const beforeUpload = async (data) => {
  // try {
  //   // 填写Object完整路径。Object完整路径中不能包含Bucket名称。
  //   // 您可以通过自定义文件名（例如exampleobject.txt）或文件完整路径（例如exampledir/exampleobject.txt）的形式实现将数据上传到当前Bucket或Bucket中的指定目录。
  //   // data对象可以自定义为file对象、Blob数据或者OSS Buffer。
  //   const options = {
  //     meta: { temp: "demo" },
  //     mime: "json",
  //     headers: { "Content-Type": "text/plain" },
  //   };
  //   const result = await client.put("examplefile.txt", data, options);
  //   console.log(result);
  // } catch (e) {
  //   console.log(e);
  // }
};
</script>
<style scoped lang="less">
.content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .upload-demo {
    .el-upload__tip {
      color: #99a9bf;
    }
  }
}
</style>
