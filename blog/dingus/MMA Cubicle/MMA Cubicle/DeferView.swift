//
//  DeferView.swift
//  MMA Cubicle
//
//  Created by Michael Audi on 4/11/23.
//

import SwiftUI

struct DeferView<Content: View>: View {
    let content: () -> Content

    init(@ViewBuilder _ content: @escaping () -> Content) {
        self.content = content
    }
    var body: some View {
        content()          // << everything is created here
    }
}
