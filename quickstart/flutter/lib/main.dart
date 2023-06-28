import 'package:flutter/material.dart';

Future<void> main() async {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
        title: 'TIKI Quickstart', home: Scaffold(body: HomePage()));
  }
}

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Center(
        child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
          Image.asset("assets/images/doc-logo.png"),
          const Padding(
              padding: EdgeInsets.symmetric(vertical: 10.0),
              child: Text("Let's do this shit"))
        ]));
  }
}
