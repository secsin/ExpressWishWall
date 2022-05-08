# Wishing Wall

> A simple project about wishing wall!

## Attention

- 使用Express框架，采用art-template模板引擎对前端页面进行渲染
- 使用MySQL数据库，表名为wish，共五个字段id(int)，name(varchar)，content(varchar)，created_at(datetime)， updated_at(datetime)
- config.js中是数据库相关配置
- MySQL数据库中按照创建的时间倒序查询出最近10条许愿记录显示到页面上
- 提交时如果信息不全将不能入库成功

---

## Build Setup

``` bash
# install dependencies
npm install

# serve at localhost:3001
npm start
```


