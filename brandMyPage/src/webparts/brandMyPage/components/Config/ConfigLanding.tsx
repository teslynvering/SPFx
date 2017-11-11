import * as React from 'react';
import styles from './IConfigLanding.module.scss';
import { IConfigLandingProps } from './IConfigLandingProps';
import { IConfigLandingState } from './IConfigLandingState';
import { escape } from '@microsoft/sp-lodash-subset';

import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button';

import { autobind } from 'office-ui-fabric-react/lib/Utilities';
// import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';

import HideUnhide from './../HideUnhide/HideUnhide';
import {IHideUnhideProps} from './../HideUnhide/IHideUnhideProps'
import {IHideUnhideState} from './../HideUnhide/IHideUnhideState'

import 'jQuery';
declare var $;

export default class ConfigLanding extends React.Component<IConfigLandingProps, {}> {
  constructor(props) {
    super(props);
    this.state = { 
    };
  }

  public componentDidMount() 
    {
      // apply hide styles?
      //  alert("mount success")
      // $(".ms-CommandBarItem-link").hide();      

    }
  public componentWillUnmount() 
    {
      // apply show styles?
      // alert("UN ---- mount success")
    }
  public render(): React.ReactElement<IConfigLandingProps> {    
    // require('./App.js');
    // function EditModeText(props)

      if( this.props.editMode ==2)
      {
        console.log("Config - React component - Edit is loaded");        
        return(
          <span>
             <div><div className={styles.configLanding}>
                <div className={styles.container}>
                <div className={`ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}`}>
                    <div className="ms-Grid-col ms-lg10 ms-xl8 ms-xlPush2 ms-lgPush1">
                    <p className="ms-font-l ms-fontColor-white"><strong>Brand My Page:</strong><br/> Use Webpart property pane brand this page.</p>
                    <DefaultButton description='configure webpart properties' onClick={this.props.configureWebPart}>Start configuring</DefaultButton>
                    </div>
                </div>
                </div>
            </div></div> 
            {/* Include in edit mode as well */}
        <HideUnhide hideQuickLaunchProperty = {this.props.hideQuickLaunchProperty} 
         hideSiteLogoProperty = {this.props.hideSiteLogoProperty}
         hideSiteTitleProperty = {this.props.hideSiteTitleProperty}
         hideSiteDescriptionProperty = {this.props.hideSiteDescriptionProperty}
         hideSiteMembersProperty = {this.props.hideSiteMembersProperty}
         hideTopNavProperty = {this.props.hideTopNavProperty}
         hideTitleRowProperty = {this.props.hideTitleRowProperty}
         hideCommandBarItemsProperty = {this.props.hideCommandBarItemsProperty}
         hidePageTitleProperty = {this.props.hidePageTitleProperty}
         hideSearchBoxProperty = {this.props.hideSearchBoxProperty}
         hideShareButtonProperty = {this.props.hideShareButtonProperty} />

          </span>
        )
      }
      else
      {
        console.log("Config - React component - Read only is loaded");
        // return (null); if you want to return null
        return(<span>
        <HideUnhide hideQuickLaunchProperty = {this.props.hideQuickLaunchProperty} 
         hideSiteLogoProperty = {this.props.hideQuickLaunchProperty}
         hideSiteTitleProperty = {this.props.hideQuickLaunchProperty}
         hideSiteDescriptionProperty = {this.props.hideQuickLaunchProperty}
         hideSiteMembersProperty = {this.props.hideQuickLaunchProperty}
         hideTopNavProperty = {this.props.hideQuickLaunchProperty}
         hideTitleRowProperty = {this.props.hideQuickLaunchProperty}
         hideCommandBarItemsProperty = {this.props.hideQuickLaunchProperty}
         hidePageTitleProperty = {this.props.hideQuickLaunchProperty}
         hideSearchBoxProperty = {this.props.hideQuickLaunchProperty}
         hideShareButtonProperty = {this.props.hideQuickLaunchProperty} />
        </span>
    )
      }
      

  }//end of render
  
}
