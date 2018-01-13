<template>
  <div class="app-container">
    <!-- 过滤条件等 -->
    <div class="filter-container">
      <el-input @keyup.enter.native="handleFilter" style="width: 120px;" class="filter-item" placeholder="id" v-model="listQuery.id">
      </el-input>
      <el-input @keyup.enter.native="handleFilter" style="width: 180px;" class="filter-item" placeholder="货币名称" v-model="listQuery.name">
      </el-input>
      <!-- <el-select clearable style="width: 90px" class="filter-item" v-model="listQuery.country" placeholder="国家">
        <el-option v-for="item in countryOptions" :key="item" :label="item" :value="item">
        </el-option>
      </el-select> -->
      <el-button class="filter-item" type="primary"  icon="el-icon-search" @click="handleFilter">搜索</el-button>
      <el-button class="filter-item" style="float:right;" @click="handleCreate" type="primary" icon="el-icon-edit">添加交易所</el-button>
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
      <el-table-column align="center" label='中文名称' width="100">
        <template slot-scope="scope">
          {{scope.row.name_cn}}
        </template>
      </el-table-column>
      <el-table-column align="center" label='外文名称' width="100">
        <template slot-scope="scope">
          <router-link :to="'/exchange/edit/' + scope.row.id">{{scope.row.name}}</router-link>
        </template>
      </el-table-column>
      <el-table-column align="center" label="简介">
        <template slot-scope="scope">
          {{scope.row.brief}}
        </template>
      </el-table-column>
      <el-table-column label="国家" width="100" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.country}}</span>
        </template>
      </el-table-column>
      <el-table-column label="Pageviews" width="110" align="center">
        <template slot-scope="scope">
          {{scope.row.pageviews}}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="类型" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{scope.row.status}}</el-tag>
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
          'id': '990000198806102053',
          'brief': '火币全球专业站，是火币集团旗下服务于全球专业交易用户的创新数字资产交易平台，致力于发现优质的创新数字资产投资机会，目前提供四十多种数字资产品类的交易及投资服务，总部位于新加坡，由火币全球专业站团队负责运营',
          'status': 'draft',
          'name': 'HuobiPro',
          'name_cn': '火币Pro',
          'country': '中国',
          'display_time': '1980-04-29 09:05:33',
          'pageviews': 4244
        },
        {
          'id': '420000197605136649',
          'brief': '币安交易平台是由前OKCoin联合创始人赵长鹏（CZ）领导的一群数字资产爱好者创建而成的一个专注区块链资产的交易平台，总部位于日本东京。',
          'status': 'published',
          'name': 'Binance',
          'name_cn': '币安网',
          'country': '日本',
          'display_time': '2009-10-08 13:19:35',
          'pageviews': 1856
        },
        {
          'id': '210000200001048184',
          'brief': 'Bitfinex是全世界最大、最高级的比特币交易平台之一，支持以太坊、比特币、莱特币、以太经典等虚拟币的交易，每天的成交量达30多亿人民币。',
          'status': 'published',
          'name': 'Bitfinex',
          'name_cn': 'Bitfinex',
          'country': '中国香港',
          'display_time': '1987-07-01 15:16:23',
          'pageviews': 4014
        }
      ],
      listLoading: false
    }
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
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
      this.$router.push({ path: '/exchange/edit/' + id })
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

<style rel="stylesheet/scss" lang="scss">
.filter-container{
  margin-bottom: 12px;
}
.pagination-container{
  margin-top: 24px;
}
</style>
