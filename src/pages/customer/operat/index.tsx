import React from 'react'

import './style.scss'

import OperatList from './children/operatList'

const CustomerOperat: React.FC<{}> = function CustomerOperat() {
  return (
    <div className="CustomerOperat">
      <div className="CustomerOperat-head">
        <p>重点运营人群</p>
      </div>

      <div className="importent">
        <div className="interest">
          <div className="importent-title">兴趣人群</div>
          <div className="importent-count">
            <div className="count-item">
              <div className="count-title">人群总数</div>
              <em>0</em>
            </div>
            <div className="count-item">
              <div className="count-title">昨日访问</div>
              <em>0</em>
            </div>
            <div className="count-item">
              <div className="count-title">昨日成交</div>
              <em>0</em>
            </div>
          </div>
          <div className="share">
            <span>人群分析</span>
            <span>短信群发</span>
          </div>
        </div>
      
        <div className="new">
          <div className="importent-title">新成交客户人群</div>
          <div className="importent-count">
            <div className="count-item">
              <div className="count-title">人群总数</div>
              <em>0</em>
            </div>
            <div className="count-item">
              <div className="count-title">昨日访问</div>
              <em>0</em>
            </div>
            <div className="count-item">
              <div className="count-title">昨日成交</div>
              <em>0</em>
            </div>
          </div>
          <div className="share">
            <span>人群分析</span>
            <span>短信群发</span>
          </div>
        </div>
      </div>


      <div className="CustomerOperat-head">
        <p>我的人群库</p>
      </div>

      <OperatList />

    </div>
  )
}

export default CustomerOperat;