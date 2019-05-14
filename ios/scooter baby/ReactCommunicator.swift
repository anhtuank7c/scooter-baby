//
//  ReactCommunicator.swift
//  scooter baby
//
//  Created by Anh Tuan Nguyen on 5/15/19.
//  Copyright © 2019 Tuan Nguyen Anh. All rights reserved.
//

import UIKit

@objc(ReactCommunicator)
class ReactCommunicator: NSObject {
    @objc var bridge: RCTBridge?
    @objc var methodQueue: DispatchQueue?

    @objc static func requiresMainQueueSetup() -> Bool {
        return false
    }
    
    @objc func triggerRequest() -> Void {
        print("trigger Request")
    }

    @objc func batchDidComplete() {
        // do something if needed at the end of the batch
    }

    @objc func partialBatchDidFlush() {
        // do something if needed at the end of the partial flush of the batch
    }

    @objc func navigateToNative(_ node: NSNumber) {
        NSLog("navigateToNative")
//        self.bridge.eventDispatcher.sendAppEventWithName("EventReminder", body: ret)
//        let vc = self.bridge?.uiManager.view(forReactTag: node) as! UIViewController
        DispatchQueue.main.async {
            NSLog("navigateToNative 2")
//            ReactNativeNavigation.getBridge().
//            if let vc = self.bridge?.uiManager.view(forReactTag: node) as! UIViewController {
//
//            }
//            vc.dismiss(animated: true, completion: nil)
//            let rootView = UIViewController()
//            rootView.
        }
    }
}
