---
slug: "/blog/my-first-post"
date: "2020-10-31"
title: "My First Post"
---

# Simulating Multiple Inheritance in C`#`

Taking Object Oriented Design was tough, but not this tough.

Before we get into this, lets talk about multiple inheritance in general.

```cpp
public class A {
    void foo();
}

public class B {
    void bar();
}

class C : public A, public B {

}

int main() {
    C obj = new C();

    C.foo();
    C.bar();

}

Yep



```

```csharp
// Single Inheritance with Delegate (Polymorphic Subobjects)
public interface IDataObject {
	int[] Filter();
	int[] Scramble();
}

public class DataBeacon : Beacon, IDataObject {

    private DataFilter obj; // This can hold any object in the datafilter heirarchy

	public DataBeacon(DataFilter dataObj) {
		obj = dataObj; // Gains the functionality of passed in dataObj;
	}

	public int[] Filter() {
		obj.Filter();
	}

	public int[] Scramble(int [] seq) {
		obj.Scramble(int [] seq);
	}

	public void FilterSignal() {
		base.changeSignal(Filter())
	}

	public void ScrambleSignal(int [] sequence) {
		base.changeSignal(Scramble(sequence));
	}

}
```
