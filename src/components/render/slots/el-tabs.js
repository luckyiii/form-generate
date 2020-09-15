export default {
  options(h, conf, key, tabChild) {
    const list = []
    conf.__slot__.options.forEach((item, index) => {
      list.push(<el-tab-pane label={item.title} name={item.name}>{tabChild[index]}</el-tab-pane>)
    })
    return list
  }
}
