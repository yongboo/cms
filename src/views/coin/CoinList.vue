<template>
  <div class="app-container">
    <!-- 过滤条件等 -->
    <div class="filter-container">
      <el-input @keyup.enter.native="handleFilter" style="width: 120px;" class="filter-item" placeholder="id" v-model="listQuery.id">
      </el-input>
      <el-input @keyup.enter.native="handleFilter" style="width: 180px;" class="filter-item" placeholder="货币名称" v-model="listQuery.name">
      </el-input>
      <el-button class="filter-item" type="primary"  icon="el-icon-search" @click="handleFilter">搜索</el-button>
      <el-button class="filter-item" style="float:right;" @click="handleCreate" type="primary" icon="el-icon-edit">添加货币</el-button>
    </div>
    <!-- 列表数据 -->
    <el-table :data="list" v-loading.body="listLoading" element-loading-text="Loading" border fit highlight-current-row>
      <el-table-column align="center" label='#' width="40">
        <template slot-scope="scope">
          {{scope.$index}}
        </template>
      </el-table-column>
      <el-table-column align="center" label='ID' width="100">
        <template slot-scope="scope">
          {{scope.row.id}}
        </template>
      </el-table-column>
      <el-table-column align="center" label='名称' width="100">
        <template slot-scope="scope">
          <router-link :to="'/coin/edit/' + scope.row.id">{{scope.row.name}}</router-link>
        </template>
      </el-table-column>
      <el-table-column align="center" label='中文名称' width="100">
        <template slot-scope="scope">
          <router-link :to="'/coin/edit/' + scope.row.id">{{scope.row.name_cn}}</router-link>
        </template>
      </el-table-column>
      <el-table-column align="center" label="简介">
        <template slot-scope="scope">
          {{scope.row.brief}}
        </template>
      </el-table-column>
      <el-table-column label="发布时间" width="110" align="center">
        <template slot-scope="scope">
          {{scope.row.release_date}}
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" width="110">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handleUpdate(scope.row.id)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="pagination-container">
      <el-pagination background @current-change="handleCurrentChange"
         layout="total, prev, pager, next" :total="100">
      </el-pagination>
    </div>
  </div>
</template>

<script>
// import { getList } from '@/api/table'

export default {
  data() {
    return {
      listQuery: {
        page: 1,
        limit: 50,
        id: undefined,
        name: undefined
      },
      list: [
        {
          'id': '99000019',
          'brief': '比特币（BitCoin）的概念最初由中本聪在2009年提出，根据中本聪的思路设计发布的开源软件以及建构其上的P2P网络。比特币是一种P2P形式的数字货币',
          'name': 'Bitcoin',
          'name_cn': '比特币',
          'release_date': '2018-11-01',
          'pageviews': 4244
        },
        {
          'id': '7605136649',
          'brief': 'Ethereum（以太坊）是一个平台和一种编程语言，使开发人员能够建立和发布下一代分布式应用。 Ethereum可以用来编程，分散，担保和交易任何事物',
          'name': 'Ethereum',
          'name_cn': '以太坊',
          'release_date': '2018-11-01',
          'pageviews': 1856
        },
        {
          'id': '048184',
          'brief': '莱特币Litecoin（简写：LTC，货币符号：Ł）是一种基于“点对点”(peer-to-peer)技术的网络货币，也是MIT/X11许可下的一个开源软件项目。',
          'name': 'Litecoin',
          'name_cn': '莱特币',
          'release_date': '2018-11-01',
          'pageviews': 4014
        }
      ],
      listLoading: false
    }
  },
  filters: {

  },
  created() {
    // this.getList()
  },
  methods: {
    handleFilter() {
      this.listQuery.page = 1
      // this.getList()
    },
    handleCreate() { // 新建
      this.$router.push({ path: 'add' })
    },
    handleUpdate(id) { // 编辑
      this.$router.push({ path: '/coin/edit/' + id })
    },
    handleCurrentChange(val) {
      this.listQuery.page = val
      // this.getList()
    }
    // getList(){ // 获取列表数据

    // }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.filter-container{
  margin-bottom: 12px;
}
.pagination-container{
  margin-top: 24px;
}
</style>
