//
//  ViewController.swift
//  scooter baby
//
//  Created by Anh Tuan Nguyen on 5/14/19.
//  Copyright © 2019 Tuan Nguyen Anh. All rights reserved.
//

import UIKit
import React
import ReactNativeNavigation

class ViewController: UIViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }

    @IBAction func switchToReactNative(sender: UIButton) {
        NSLog("ReactNative")
        let jsSourceCode = URL(string: "http://localhost:8081/index.bundle?platform=ios")
//        let mockData:NSDictionary = [
//            "scores": [
//                ["name": "Tuan", "value": "15"],
//                ["name": "Phuong", "value": "16"]
//            ]
//        ]
//        let rootView = RCTRootView(
//            bundleURL: jsSourceCode,
//            moduleName: "scooterbaby",
//            initialProperties: mockData as [NSObject : AnyObject],
//            launchOptions: nil
//        )
//        let vc = UIViewController()
//        vc.view = rootView
//        self.present(vc, animated: true, completion: nil)
        ReactNativeNavigation.bootstrap(jsSourceCode, launchOptions: nil)
    }
    
    @IBAction func showRNInsideNative(_ sender: Any) {
    }
}

