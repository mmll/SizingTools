const echarts = require('echarts');
const formatUtil = echarts.format;
function getLevelOption(){
  return [
    {
      itemStyle: {
        normal: {
          borderColor: '#777',
          borderWidth: 2,
          gapWidth: 1
        }
      },
      upperLabel: {
        normal: {
          show: false
        }
      }
    },
    {
      itemStyle: {
        normal: {
          borderColor: '#555',
          borderWidth: 5,
          gapWidth: 1
        },
        emphasis: {
          borderColor: '#ddd'
        }
      }
    },
    {
      colorSaturation: [0.35, 0.5],
      itemStyle: {
        normal: {
          borderWidth: 5,
          gapWidth: 1,
          borderColorSaturation: 0.6
        }
      }
    }
  ];
}
function unitFilter(value) {
  if (value === 0) {
    return '0 B';
  }
  let k = 1024;
  let sizes = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let i = Math.floor(Math.log(value) / Math.log(k));

  return (value / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
}

export const ChartConfig = {
  getLevelOption: getLevelOption,
  capacityOption: {

    title: {
      text: 'Capacity Usage',
      left: 'center'
    },

    tooltip: {
      formatter: function (info) {
        let value = info.value;
        let treePathInfo = info.treePathInfo;
        let treePath = [];

        for (let i = 1; i < treePathInfo.length; i++) {
          treePath.push(treePathInfo[i].name);
        }

        return [
          '<div class="tooltip-title">' + formatUtil.encodeHTML(treePath.join('/')) + '</div>',
          'Capacity Usage: ' + unitFilter(value),
        ].join('');
      }
    },

    series: [
      {
        name:'Capacity Usage',
        type:'treemap',
        visibleMin: 300,
        label: {
          show: true,
          formatter: '{b}'
        },
        upperLabel: {
          normal: {
            show: true,
            height: 30
          }
        },
        itemStyle: {
          normal: {
            borderColor: '#fff'
          }
        },
        levels: getLevelOption(),
        data: null,
      }
    ]
  }
}
