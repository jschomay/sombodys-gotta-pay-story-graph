const container = document.getElementById("mynetwork");
const network = new vis.Network(container);

fetch("graph.dot")
  .then((res) => res.text())
  .then((dot) => {
    console.log(dot);
    let data = vis.parseDOTNetwork(dot);
    data = decorate(data);
    network.setData(data);
  })
  .catch((e) => console.error(e));

function decorate(data) {
  let decoratedNodes = data.nodes.map((n) => {
    if (n.custom) n.color = "red";
    return n;
  });
  data.nodes = decoratedNodes;
  return data;
}
