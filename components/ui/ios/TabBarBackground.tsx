// This is a shim for web and Android where the tab bar is generally opaque.
export default undefined;

export function useBottomTabOverflow() {
  return 0;
}


// ✅ iOS에서는 탭 바가 투명할 수 있지만,
// ❌ 웹/Android에서는 대체로 탭 바가 불투명하므로,
// 해당 플랫폼에서 탭 바의 높이나 오버플로우를 처리할 필요가 없다는 전제하에 작성된 stub(shim) 파일입니다.