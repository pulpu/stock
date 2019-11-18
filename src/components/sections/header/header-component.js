import React, {Component} from 'react';
import './_header-component.scss';

class Header extends Component {
  render() {
    return(
      <header>
          <div className="row short-term">
              <div className="col-2 short-term__item">
                  <div className="col-12 short-term__name"></div>
                  <div className="row">
                    <div className="col-6 short-term__intraday-change positive">
                        <div className="col-12 short-term__intraday-change--point">8.32</div>
                        <div className="col-12 short-term__intraday-change--procent">2.00%</div>
                    </div>
                    <div className="col-6 short-term__chart-figure">xxxxxxxxxx</div>
                  </div>
              </div>
          </div>
      </header>
    )
  }
}

export default Header;

