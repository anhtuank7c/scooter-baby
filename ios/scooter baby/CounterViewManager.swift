//
//  CounterViewManager.swift
//  scooter baby
//
//  Created by Anh Tuan Nguyen on 5/15/19.
//  Copyright © 2019 Tuan Nguyen Anh. All rights reserved.
//

@objc(CounterViewManager)
class CounterViewManager : RCTViewManager {
    
    override static func requiresMainQueueSetup() -> Bool {
        return true
    }
    
    override func view() -> UIView! {
        let label = UILabel()
        label.text = "Swift Counter"
        label.textAlignment = .center
        label.textColor = .red
        return label
    }
}
