<template>
  <div class="source">
    <div
      class="dragFileArea"
      @drop="drop($event)"
      @dragover="dragover($event)"
      @dragleave="dragleave($event)"
    >
      <div class="dragAreaDotLine">
        <span>Drag file here</span>
      </div>
    </div>
    <div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="日期" width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="檔案" width="180">
          <template slot-scope="scope">
            <i class="el-icon-picture"></i>
            <span style="margin-left: 10px">{{ scope.row.filename }}</span>
          </template>
        </el-table-column>
        <el-table-column label="姓名" width="180">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>姓名: {{ scope.row.name }}</p>
              <p>檔案: {{ scope.row.filename }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Source",
  props: {
    msg: String
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "Gary",
          filename: "image1.png"
        },
        {
          date: "2016-05-04",
          name: "Gary",
          filename: "image2.png"
        },
        {
          date: "2016-05-01",
          name: "Gary",
          filename: "image3.png"
        },
        {
          date: "2016-05-03",
          name: "Gary",
          filename: "image4.png"
        }
      ]
    };
  },
  methods: {
    drop: function(event) {
      //   var dom = event.currentTarget;
      event.preventDefault();
      event.currentTarget.classList.remove("is-dragover");
      /* 把擷取到的檔案用POST送到後端去 */
      var objXhr = new XMLHttpRequest();
      var url = "/upload-multi"; //上傳圖檔的後端程式位置
      objXhr.upload.addEventListener(
        "progress",
        function(evt) {
          if (evt.lengthComputable) {
            var percent = (evt.loaded / evt.total) * 100;
            document.getElementById("progressBar").value = percent;
            // console.log("add upload event-listener" + evt.loaded + "/" + evt.total);
          } else {
            // console.log("not support");
          }
        },
        false
      );

      objXhr.open("POST", url);
      var objForm = new FormData();
      var files = event.dataTransfer.files;
      //   objForm.append("path", "AAA");
      for (
        var i = 0;
        i < files.length;
        i++ // 把檔案加入表單中
      ) {
        // if (!files[i].type.match('image')) {
        //     var name = files[i].name;
        //     alert(name + '無法上傳！請拖曳圖片檔案！');
        //     continue;
        // }
        objForm.append("filegroup", files[i]);
      }
      objXhr.onload = function() // e //上傳完成時
      {
        /*接收後端傳回的Response，本範例的後端程式會傳回每個圖檔是否都上傳成功，以及上傳成功的圖片數量*/
        // var arrData = JSON.parse(objXhr.responseText);
      };
      //   for (var pair of objForm.entries()) {
      //     console.log(pair[0] + ", " + pair[1]);
      //   }
      objXhr.send(objForm);
    },
    dragover: function(event) {
      event.preventDefault();
      event.currentTarget.classList.add("is-dragover");
    },
    dragleave: function(event) {
      event.preventDefault(); //防止瀏覽器執行預設動作
      event.currentTarget.classList.remove("is-dragover");
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.source {
  width: 100%;

  .dragFileArea {
    position: relative;
    width: 400px;
    height: 200px;
    margin: 0 auto;
    background: #d4d4d4;
    .dragAreaDotLine {
      position: absolute;
      top: 20px;
      left: 20px;
      width: calc(100% - 40px);
      height: calc(100% - 40px);
      border: 2px dashed #505050;
      line-height: 160px;
    }
  }
}
</style>

<style>
.source .dragFileArea.is-dragover {
  background: #aaaaaa;
}
</style>